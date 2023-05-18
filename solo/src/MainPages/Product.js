import React, { useState, useEffect } from "react";
import AxiosData from "./AxiosData";
import axios from "axios";

const Product = () => {


  return (
    <React.Fragment>
      <main>
        {/* <div className="categpry">
          <ul>
            <li>
              <img scr="" alt=""></img>
              <span></span>
            </li>
            <li>
              <img scr="" alt=""></img>
              <span></span>

            </li>
            <li>
              <img scr="" alt=""></img>
              <span></span>
            </li>
            <li>
              <img scr="" alt="" ></img>
              <span></span>
            </li>
            <li onclick>
              <img scr="" alt=""></img>
              <span></span>
            </li>
          </ul>
        </div> */}
        <div
          className="main_product_list"
        >
          <AxiosData url="http://cozshopping.codestates-seb.link/api/v1/products" />

        </div>
      </main>
    </React.Fragment>
  );
};

export default Product;