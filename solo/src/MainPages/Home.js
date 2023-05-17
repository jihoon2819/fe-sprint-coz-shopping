import React, { useState } from "react";
import AxiosData from "./AxiosData.js";
const Home = () => {
  return (
    <React.Fragment>
      <div>
        <AxiosData />
        <div>
          <h2>북마크 리스트</h2>
          <ul className="bookmark_product_list">

          </ul>
        </div>
      </div>

    </React.Fragment>
  );
};

export default Home;