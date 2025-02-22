import React from "react";
import ContactMe from "../../components/ContactMe/ContactMe";
import Metadata from "../../components/Layout/Metadata";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  return (
    <>
      <Metadata title="Contact Me" />

      <Navbar />
      <ContactMe />
      <Footer />
    </>
  );
};

export default Contact;
