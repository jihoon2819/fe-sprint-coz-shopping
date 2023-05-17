import './App.css';
import { BrowserRouter} from "react-router-dom";
// import Home from './MainPages/Home';
// import Product from './MainPages/Product';
// import Bookmark from './MainPages/Bookmark';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
function App() {
  return (
    <BrowserRouter>
    <div className="App">    
      <Header/>
      {/* <main>        
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product"element={<Product/>}></Route>
        <Route path="/bookmark" element={<Bookmark/>}></Route>
        </Routes>
      </main> */}
      <Main />
      <Footer/>      
    </div>
    </BrowserRouter>

  );
}

export default App;
