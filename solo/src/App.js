import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './MainPages/Home';
import Product from './MainPages/Product';
import Bookmark from './MainPages/Bookmark';
import Header from './Header';
import Footer from './Footer';
function App() {
  return (
    <BrowserRouter>
    <div className="App">    
      <Header/>
      <main>        
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product"element={<Product/>}></Route>
        <Route path="/bookmark" element={<Bookmark/>}></Route>
        </Routes>
      </main>
      <Footer/>      
    </div>
    </BrowserRouter>

  );
}

export default App;
