 
import PropTypes from "prop-types";
import "./CategoryItem.css";
import { Link } from "react-router-dom";
 

const CategoryItem = ({ category }) => {
  return (
    <li className="category-item">
      <Link to={category.name}>
        <img src={category.img} alt="" className="category-image" />
        <span className="category-title">{category.name}</span>
      </Link>
    </li>
  );
};

export default CategoryItem;

CategoryItem.propTypes = {
  category: PropTypes.object,
};
