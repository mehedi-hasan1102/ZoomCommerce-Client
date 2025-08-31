import React from 'react';
import Banner from '../components/Banner';
import HomeCategories from '../components/HomeCategories';
import FeaturedProducts from '../components/FeaturedProducts';

import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import SpecialOffers from '../components/Offers';

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeCategories />
      <FeaturedProducts />
     <SpecialOffers />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
