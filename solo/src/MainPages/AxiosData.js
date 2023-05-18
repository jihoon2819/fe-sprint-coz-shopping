import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AxiosData({url}) {
  const [inputData, setInputData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const fetchedData = response.data.map(data => ({
          id: data.id,
          type: data.type,
          title: data.title,
          sub_title: data.sub_title,
          brand_name: data.brand_name,
          price: data.price,
          discountPercentage: data.discountPercentage,
          image_url: data.image_url,
          brand_image_url: data.brand_image_url,
          follower: data.follower
        }));
        setInputData(fetchedData);
        console.log(fetchedData);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <ul className='product-list'>
      {inputData.map((product) => {
        switch (product.type) {        
          case 'Product':
            return (
              <li key={product.id} className='list_box'>
                <img className="product_img" src={product.image_url} alt={product.title} />
                <div

                  className=
                  "star"
                />
                <div className='product-box'>
                  <p className='title'>{product.title}</p>
                  <p className='discount-percentage'>{product.discountPercentage} %</p>
                </div>
                <div className='price'>{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</div>
              </li>
            );
          case 'Category':
            return (
              <li key={product.id} className='list_box'>
                <img className="product_img" src={product.image_url} alt={product.title} />
                <div
                  className=
                  "star"
                />
                <div className='content-box'>
                  <p className='title'># {product.title}</p>
                </div>
              </li>
            );
          case 'Exhibition':
            return (
              <li key={product.id} className='list_box'>
                <img className="product_img" src={product.image_url} alt={product.title} />
                <div
                  className=
                  "star"
                />
                <div className='content-box'>
                  <p className='title'>{product.title}</p>
                  <div className='sub_title'>{product.sub_title}</div>
                </div>
              </li>
            );
          case 'Brand':
            return (
              <li key={product.id} className='list_box'>
                <img className="product_img" src={product.brand_image_url} alt={product.title} />
                <div
                  className="star" />
                <div className='brand-box'>
                  <p className='title'>{product.brand_name}</p>
                  <div className='follower'>
                    <p className='follower_title'>관심 고객 수</p>
                    <p className='follower_num'>{product.follower.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                  </div>
                </div>
              </li>
            );
          default:
            return null;
        }
      })}
    </ul>
  );
}

export default AxiosData;