import React from "react";
import Sliders from "../components/Sliders/Sliders.jsx";
import Categories from "../components/Categories/Categories.jsx";
import Products from "../components/Products/Products.jsx";
import Campaigns from "../components/Campaings/Campaigns.jsx";
import Blogs from "../components/Blogs/Blogs.jsx";
import Brands from "../components/Brands/Brands.jsx";
import CampaignSingle from "../components/CampaignSingle/CampaignSingle.jsx";

const HomePage = () => {
  
  return (
    <React.Fragment>
      <Sliders />
      <Categories />
      <Products />
      <Campaigns />
      <Products />
      <Blogs />
      <Brands />
      <CampaignSingle />
    </React.Fragment>
  );
};

export default HomePage;