import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import CoustomersSay from '../CoustomersSay/CoustomersSay';
import Offer from '../Offer/Offer';
import ProductsCategories from '../ProductsCategories/ProductsCategories';

const Home = () => {
  return (
    <div>
     <Banner></Banner>
     <AdvertisedItems/>
     <ProductsCategories/>
     <Offer></Offer>
     <CoustomersSay/>
    </div>
  );
};

export default Home;