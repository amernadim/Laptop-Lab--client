import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import ProductsCategories from '../ProductsCategories/ProductsCategories';

const Home = () => {
  return (
    <div>
     <Banner></Banner>
     <AdvertisedItems/>
     <ProductsCategories/>
    </div>
  );
};

export default Home;