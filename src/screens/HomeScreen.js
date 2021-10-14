import React from 'react';
import AboutUs from '../components/About/AboutUs';
import Foods from '../components/Foods Showcase/Foods';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Header/Banner';

const HomeScreen = () => {

    return (
        <>
            <Banner />
            <Foods />
            <AboutUs />
            <Footer />
        </>
    )
}

export default HomeScreen
