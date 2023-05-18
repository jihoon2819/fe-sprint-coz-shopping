import React from 'react';
import {useState} from 'react';
import {Link } from "react-router-dom";


const Header = () => {
    const [isOpen,setIsOpen] = useState(false);

    const buggerOnOff = ()=>{
      setIsOpen(!isOpen);
    };
    
  return( 
    
  <header className="Header">
    <div className="Logo"><Link to="/" style={{ textDecoration: "none" }}><img src="favicon.ico" alt="logo" style={{ marginRight : "30px" }}></img><span>Coz-Shoping</span></Link></div>
    <div className="DropDown">
        <img src="img/hambuger.png" onClick={buggerOnOff}></img>
        <ul className={isOpen ? "show-bugger":"hide-bugger"}>
            <li>누구님 안녕하세요</li>
            <li><Link to="/product"  style={{ textDecoration: "none" }}>상품리스트 페이지</Link></li>
            <li><Link to="/bookmark"  style={{ textDecoration: "none" }}>북마크 페이지</Link></li>
        </ul>
    </div>
  </header>
  
  );
};

export default Header;