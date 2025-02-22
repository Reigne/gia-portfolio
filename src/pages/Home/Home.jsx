import React from "react";
import Hero from "../../components/Hero/Hero";
import Workflow from "../../components/Workflow/Workflow";
import Projects from "../../components/Projects/Projects";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ClientLogos from "../../components/ClientLogos/ClientLogos";
import Metadata from "../../components/Layout/Metadata";

const Home = () => {
  return (
    <>
      <Metadata title="Home" />
      <Navbar />
      <Hero />
      <Workflow />
      <ClientLogos />
      <Projects />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
