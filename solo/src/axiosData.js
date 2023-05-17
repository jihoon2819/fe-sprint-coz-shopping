// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function AxiosData() {
//      const [inputData, setInputData] = useState([{
//         id: '',
//         type: '',
//         title: '',
//         sub_title: '',
//         brand_name: '',
//         price: '',
//         discountPercentage: '',
//         image_url: '',
//         brand_image_url: '',
//         follower: ''
//     }])
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const res = await axios.get('http://cozshopping.codestates-seb.link/api/v1/products');
//                 const _inputData = res.data.map((data) => ({
//                     id: data.id,
//                     type: data.type,
//                     title: data.title,
//                     sub_title: data.sub_title,
//                     brand_name: data.brand_name,
//                     price: data.price,
//                     discountPercentage: data.discountPercentage,
//                     image_url: data.image_url,
//                     brand_image_url: data.brand_image_url,
//                     follower: data.follower
//                 }));
//                 setInputData((prevData) => [...prevData, ..._inputData]);
//                 console.log(inputData);
//             } catch (e) {
//                 console.error(e.message);
//             }
//         };
//         fetchData();
//     }, []);
//     return (
//         <div>

//             <div>
//                 <h2>상품 리스트</h2>
//                 <div>
//                     <ul className="main_product_list">
//                         {inputData.map((data) => {
//                             return (
//                                 <li className="list_box" key={data.id} >
//                                     <div>
//                                         <img src={data.image_url}></img>
//                                         <div></div>
//                                     </div>
//                                     <div>
//                                         <div>{data.title}</div>
//                                         <div>{data.discountPercentage}</div>
//                                     </div>
//                                     <div>
//                                         <div></div>
//                                         <div>{data.price}</div>
//                                     </div>
//                                 </li>
//                             )
//                         })}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default AxiosData;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AxiosData() {
  const [inputData, setInputData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://cozshopping.codestates-seb.link/api/v1/products');
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
    <div>
      <h2>상품 리스트</h2>
      <ul className="main_product_list">
        {inputData.map(data => (
          <li className="list_box" key={data.id}>
            <div>
              <img src={data.image_url} alt={data.title} />
              <div></div>
            </div>
            <div>
              <div>{data.title}</div>
              <div>{data.discountPercentage}</div>
            </div>
            <div>
              <div></div>
              <div>{data.price}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AxiosData;