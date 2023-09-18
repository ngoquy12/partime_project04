import { Routes, Route } from "react-router-dom";
import "./assets/styles/main.css";
import HomePage from "./pages/user/home/HomePage";
import ListProduct from "./pages/user/list_product/ListProduct";
import About from "./pages/user/about/About";
import Contact from "./pages/user/contact/Contact";
import Login from "./pages/user/login/Login";
import Card from "./pages/user/cart/Cart";
import Register from "./pages/user/register/Register";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list-product" element={<ListProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Card />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
