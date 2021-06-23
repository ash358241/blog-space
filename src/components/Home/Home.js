import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Navbar/Header';
import Posts from '../Posts/Posts';
// import Header from '../../components/Navbar/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Posts></Posts>
        </div>
    );
};

export default Home;