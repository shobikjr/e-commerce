import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/shop";
import Product from "./pages/product";
import ShopCategory from "./pages/shopcategory";
import Cart from "./pages/cart";
import LoginSignup from "./pages/loginsignup";
import Navbar from "./components/Navbar/Navbar";
import Ads from "./components/Ads/Ads";
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kids_banner from './components/Assets/banner_kids.png'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Ads />
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kids_banner}category="kid" />} />
          <Route path="mens/product" element={<Product />}>
            <Route path=":productid" element={<Product />} />
          </Route>
          <Route path="womens/product" element={<Product />}>
            <Route path=":productid" element={<Product />} />
          </Route>
          <Route path="kids/product" element={<Product />}>
            <Route path=":productid" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        
        
      </BrowserRouter>
    </div>
  );
}

export default App;
