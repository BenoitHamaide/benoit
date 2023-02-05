import React from 'react';
import Countries from '../components/Countries';
import Logo from '../components/Logo';
import Navigations from '../components/Navigations';

const Home = () => {
    return (
        <div>
            <Logo/>
            <Navigations />
            <Countries />
        </div>
    );
};

export default Home;