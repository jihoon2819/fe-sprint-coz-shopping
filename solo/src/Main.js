import { Routes, Route } from "react-router-dom";
import Home from './MainPages/Home';
import Product from './MainPages/Product';
import Bookmark from './MainPages/Bookmark';
function Main() {
    return (
        <div className="Main">
            <main>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/product" element={<Product />}></Route>
                    <Route path="/bookmark" element={<Bookmark />}></Route>
                </Routes>
            </main>
        </div>
    );
}

export default Main;
