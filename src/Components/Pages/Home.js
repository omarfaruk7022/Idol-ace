import React from 'react';
import Banner from './Banner';
import HomeClients from './HomeClients';
import Products from './Products';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <Products/>
            <HomeClients/>
        </div>
    );
};

export default Home;