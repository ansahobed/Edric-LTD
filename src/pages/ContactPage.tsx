import React from 'react';
import Hero from '../components/sections/Hero';
import ContactSection from '../components/sections/ContactSection';

const ContactPage: React.FC = () => {
  return (
    <>
      <Hero 
        title="Contact Edric Limited"
        subtitle="Connect with our team of luxury property experts to begin your journey to finding the perfect estate."
        imageUrl="https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg"
      />
      
      <ContactSection />
      
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal-800 mb-4">
              Visit Our Office
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Our elegant office space is designed to provide a comfortable environment for discussing your luxury property needs.
            </p>
          </div>
          
          <div className="bg-white p-8 shadow-lg rounded">
            {/* This would be a real map in a production environment */}
            <div className="aspect-w-16 aspect-h-9 bg-slate-200 flex items-center justify-center">
              
          
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;