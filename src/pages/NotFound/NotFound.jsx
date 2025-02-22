import React from "react";
import NotFoundMessage from "../../components/NotFoundMessage/NotFoundMessage";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Metadata from "../../components/Layout/Metadata";

const NotFound = () => {
  return (
    <>
      <Metadata title="404 Not Found" />
      
      <Navbar />
      <NotFoundMessage />
      <Footer />
    </>
  );
};

export default NotFound;
