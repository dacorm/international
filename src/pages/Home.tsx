import React from 'react';
import Header from "../components/Header/Header";
import Screen from "../components/Screen/Screen";
import TextSlide from "../components/TextSlide/TextSlide";
import MainContent from "../components/MainContent/MainContent";
import Footer from "../components/Footer/Footer";
import MatchSlide from "../components/MatchSlide/MatchSlide";
import {Helmet, HelmetData} from 'react-helmet-async';

const helmetData = new HelmetData({});


const Home = () => {
    return (
        <div>
            <Helmet helmetData={helmetData}>
                <meta
                    name="description"
                    content="Home page"
                />
                <title>International Main</title>
            </Helmet>
            <Header />
            <Screen />
            <TextSlide />
            <MatchSlide />
            <MainContent />
            <Footer />
        </div>
    );
};

export default Home;