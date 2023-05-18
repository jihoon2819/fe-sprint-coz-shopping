import React, { useState } from "react";
import AxiosData from "./AxiosData.js";
const Home = () => {
  return (
    <React.Fragment>
      <div>
      <h2>상품 리스트</h2>
        <div className="main_product_list"> <AxiosData url="http://cozshopping.codestates-seb.link/api/v1/products?count=4" /></div>
        <div>
        <h2>북마크 리스트</h2>
        <div className="main_product_list"> <AxiosData url="http://cozshopping.codestates-seb.link/api/v1/products?count=4" /></div>
       
        </div>
      </div>

    </React.Fragment>
  );
};

export default Home;