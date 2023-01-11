import React from "react";
import Hero from "../components/Hero/hero";
import Navbar from "../components/Navbar/navbar";
import WhyUs from "../components/WhyUs/whyUs";
import Services from "../components/Services/services";
import Latest from "../components/Latest/latest";
import Subcribe from "../components/Subscribe/subcribe";
import Footer from "../components/Footer/footer";
import AboutUs from "../components/AboutUs/aboutUs";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <AboutUs /> */}
      <WhyUs />
      <Services />
      <Latest />
      <Subcribe />
      <Footer />
    </div>
  );
};

export default LandingPage;
