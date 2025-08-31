import React from 'react';
import Banner from '../components/Banner';
import HomeCategories from '../components/HomeCategories';
import FeaturedProducts from '../components/FeaturedProducts';
import NewArrivals from '../components/NewArrivals';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeCategories />
      <FeaturedProducts />
      <NewArrivals />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
