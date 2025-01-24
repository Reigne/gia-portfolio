import React from "react";
import Hero from "../../components/Hero/Hero";
import Workflow from "../../components/Workflow/Workflow";
import Projects from "../../components/Projects/Projects";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <Workflow />
      <Projects />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
