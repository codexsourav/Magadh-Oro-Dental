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
import Testimonials from '@/Components/Testimonials/Testimonials';
import Watch from '@/Components/Watch/Watch';
import Maps from '@/Components/maps/Maps';
import React from 'react';
import getYoutubeVideos from '@/helper/getYoutubeVideos';
import { BlogPost, BlogPostModel } from '@/lib/models/blogposts';
import { connectDb } from '@/lib/db/connectDb';

const Home = async () => {
  await connectDb();
  const id: string = "UCENvANETSckCOAonuFMGYiw"
  const getvideos = await getYoutubeVideos(id);
  const recentPosts: BlogPost[] = await BlogPostModel
    .find({})
    .sort({ createdAt: -1 })
    .limit(3);

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
      {recentPosts.length == 0 ? null : <OurBlogs blogs={recentPosts} />}
      <Watch data={getvideos} ChannelId={id} />
      <ContactUs />
      <Maps />
      <Fotter />
    </>
  );
};

export default Home;