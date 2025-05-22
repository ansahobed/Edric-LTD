import React from 'react';
import Hero from '../components/sections/Hero';
import FeaturedProperties from '../components/sections/FeaturedProperties';
import PropertyTypes from '../components/sections/PropertyTypes';
import AboutSection from '../components/sections/AboutSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero 
        title="Extraordinary Properties for Extraordinary Lives"
        subtitle="Discover unparalleled luxury living with our curated collection of exclusive waterfront and inland estates."
        imageUrl="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg"
        buttonText="Explore Our Properties"
      />
      
      <FeaturedProperties />
      
      <PropertyTypes />
      
      <AboutSection />
      
      <TestimonialsSection />
      
      <ContactSection />
    </>
  );
};

export default HomePage;