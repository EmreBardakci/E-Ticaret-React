import { message } from "antd";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartProvider";

const CartCoupon = () => {
  const [couponCode, setCouponCode] = useState("");
  const { cartItems, setCartItems } = useContext(CartContext);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [couponApplied, setCouponApplied] = useState(false);

  const applyCoupon = async () => {
    if (couponCode.trim().length === 0) {
      return message.warning("Boş değer girilimez.");
    }

    try {
      if (couponApplied) {
        return message.warning("Bu kupon zaten kullanıldı.");
      }

      const res = await fetch(`${apiUrl}/api/coupons/code/${couponCode}`);

      if (!res.ok) {
        return message.warning("Girdiğiniz kupon kodu yanlış!");
      }

      const data = await res.json();
      const discountPercent = data.discountPercent;

      const updatedCartItems = cartItems.map((item) => {
        const updatedPrice = item.price * (1 - discountPercent / 100);
        return { ...item, price: updatedPrice };
      });

      setCartItems(updatedCartItems);

      setCouponApplied(true);

      message.success(`${couponCode} kupon kodu başarıyla uygulandı.`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="actions-wrapper">
      <div className="coupon">
        <input
          type="text"
          className="input-text"
          placeholder="Kupon kodu"
          onChange={(e) => setCouponCode(e.target.value)}
          value={couponCode}
        />
        <button className="btn" type="button" onClick={applyCoupon}>
          Kuponu Uygula
        </button>
      </div>
      <div className="update-cart">
        <button className="btn">Sepeti Güncelle</button>
      </div>
    </div>
  );
};

export default CartCoupon;