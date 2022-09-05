import React from 'react';
import Header from "../components/Header/Header";
import Screen from "../components/Screen/Screen";
import TextSlide from "../components/TextSlide/TextSlide";
import MainContent from "../components/MainContent/MainContent";
import Footer from "../components/Footer/Footer";
import MatchSlide from "../components/MatchSlide/MatchSlide";

const Home = () => {
    return (
        <div>
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