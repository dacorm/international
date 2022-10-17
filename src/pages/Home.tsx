import React, {useEffect, useState} from 'react';
import Header from "../components/Header/Header";
import Screen from "../components/Screen/Screen";
import TextSlide from "../components/TextSlide/TextSlide";
import MainContent from "../components/MainContent/MainContent";
import Footer from "../components/Footer/Footer";
import MatchSlide from "../components/MatchSlide/MatchSlide";
import {Helmet, HelmetData} from 'react-helmet-async';
import FreebetPopup from "../components/FreebetPopup/FreebetPopup";

const helmetData = new HelmetData({});


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => {
        setIsOpen(false);
    }

    useEffect(() => {
        setTimeout(() => {
            setIsOpen(true)
        }, 30000)
    }, [])

    return (
        <div>
            <Helmet helmetData={helmetData}>
                <meta
                    name="description"
                    content="Информация о турнире The International 2022 по Dota 2. Расписание матчей, состав команд, статистика"
                />
                <title>Турнир по Dota2 International 2022 - Интернешнл 2022 по Дота 2</title>
            </Helmet>
            {isOpen && <FreebetPopup
                lazy={true}
                isOpen={isOpen}
                onClose={onClose}
            />}
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