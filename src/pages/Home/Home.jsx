import React from "react";
import Hero from "../../components/Hero/Hero";
import Workflow from "../../components/Workflow/Workflow";
import Projects from "../../components/Projects/Projects";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Workflow />
      <Projects />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
