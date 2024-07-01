import React from "react";
import Layout from "../Layout";
import HeroSection from "../HeroSection";
import Category from "../Category";
import HomePageProductCard from "../HomePageProductCard";
import Track from "../Track";
import Testimonial from "../Testimonial";


const Home = () => {

  return (
    
      <Layout>
        
        <HeroSection />

        <Category />
        <HomePageProductCard />
        <Track></Track>
        <Testimonial></Testimonial>
        
      </Layout>
   
  );
};

export default Home;
