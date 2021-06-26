import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Navbar/Header';
import Posts from '../Posts/Posts';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Posts></Posts>
            <Footer></Footer>
        </div>
    );
};

export default Home;