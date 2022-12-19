import React, {useCallback, useEffect, useState} from 'react';
import Header from "../components/Header/Header";
import Screen from "../components/Screen/Screen";
import TextSlide from "../components/TextSlide/TextSlide";
import MainContent from "../components/MainContent/MainContent";
import Footer from "../components/Footer/Footer";
import MatchSlide from "../components/MatchSlide/MatchSlide";
import {Helmet, HelmetData} from 'react-helmet-async';
import ArticlePopup from "../components/ArticlePopup/ArticlePopup";

const helmetData = new HelmetData({});


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onClose = useCallback(() => {
        setIsOpen(false);
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setIsOpen(true)
        }, 30000)
    }, [])

    return (
        <>
                <Helmet helmetData={helmetData}>
                    <meta
                        name="description"
                        content="Все новости, статистика матчей, подробности обновлений и турниров на сайте DOTA2.SU"
                    />
                    <title>Dota 2 — многопользовательская командная компьютерная игра в жанре MOBA </title>
                </Helmet>
                {isOpen && <ArticlePopup
                    lazy={true}
                    isOpen={isOpen}
                    onClose={onClose}
                />}
                <Header/>
                <Screen/>
                <TextSlide/>
                <MatchSlide/>
                <MainContent/>
                <Footer/>
        </>
    );
};

export default Home;
