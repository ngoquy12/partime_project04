import { Routes, Route } from "react-router-dom";
import "./assets/styles/main.css";
import HomePage from "./pages/user/home/HomePage";
import ListProduct from "./pages/user/list_product/ListProduct";
import About from "./pages/user/about/About";
import Contact from "./pages/user/contact/Contact";
import Login from "./pages/user/login/Login";
import Card from "./pages/user/cart/Cart";
import Register from "./pages/user/register/Register";
import PrivateRouter from "./pages/private/PrivateRouter";
import Manager_User from "./pages/private/manager-user";
import Manager_Product from "./pages/private/manager-product";
import Home_Amin from "./pages/private/home/index";
import Manager_Category from "./pages/private/manager-category";
import Manager_Revenue from "./pages/private/manager-revenue";
import Description from "./pages/user/description";
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
        <Route path="/description" element={<Description />} />
        {/* Private router */}
        <Route path="/admin" element={<PrivateRouter />}>
          <Route index path="home" element={<Home_Amin />} />
          <Route path="manager-user" element={<Manager_User />} />
          <Route path="manager-product" element={<Manager_Product />} />
          <Route path="manager-category" element={<Manager_Product />} />
          <Route path="manager-order" element={<Manager_Category />} />
          <Route path="manager-revenue" element={<Manager_Revenue />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
