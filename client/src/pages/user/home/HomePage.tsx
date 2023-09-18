import React from "react";
import Navbar from "../../../components/common/user/navbar/Navbar";
import Footer from "../../../components/common/user/footer/Footer";

const HomePage: React.FC<{}> = () => {
  return (
    <>
      <Navbar />
      <h1>HomePage</h1>
      <Footer />
    </>
  );
};

export default HomePage;
