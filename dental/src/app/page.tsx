import About from '@/Components/About/About';
import OurBlogs from '@/Components/Blogs/OurBlogs';
import ContactUs from '@/Components/ContactUs/ContactUs';
import FAQ from '@/Components/FAQ/FAQ';
import Fotter from '@/Components/Fotter/Fotter';
import Header from '@/Components/Header/Header';
import Navbar from '@/Components/Navbar/Navbar';
import OurDoctors from '@/Components/OurDoctors/OurDoctors';
import Pricing from '@/Components/Pricing/Pricing';
import Services from '@/Components/Services/Services';
import TestimonialBox from '@/Components/Testimonials/TestimonialBox/TestimonialBox';
import Testimonials from '@/Components/Testimonials/Testimonials';
import Watch from '@/Components/Watch/Watch';
import Maps from '@/Components/maps/Maps';
import React from 'react';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <About />
      <Testimonials />
      <Pricing />
      <FAQ />
      <OurDoctors />
      <OurBlogs />
      <Watch />
      <ContactUs />
      <Maps />
      <Fotter />
    </>
  );
};

export default Home;