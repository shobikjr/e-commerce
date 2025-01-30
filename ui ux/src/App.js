import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/shop";
import Product from "./pages/product";
import ShopCategory from "./pages/shopcategory";
import Cart from "./pages/cart";
import LoginSignup from "./pages/loginsignup";
import Navbar from "./components/Navbar/Navbar";
import Ads from "./components/Ads/Ads";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Ads />
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="men" />} />
          <Route path="/womens" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kid" />} />
          <Route path="/product" element={<Product />}>
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
