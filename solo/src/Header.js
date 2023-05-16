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
    <div className="Logo"><Link to="/">로고 코드스테이츠</Link></div>
    <div className="DropDown">
        <img src="./logo.svg" onClick={buggerOnOff}></img>
        <ul className={isOpen ? "show-bugger":"hide-bugger"}>
            <li>누구님 안녕하세요</li>
            <li><Link to="/product">상품리스트 페이지</Link></li>
            <li><Link to="/bookmark">북마크 페이지</Link></li>
        </ul>
    </div>
  </header>
  
  );
};

export default Header;