import React from 'react';
import {Helmet, HelmetData} from "react-helmet-async";
import Header from "../components/Header/Header";
import WhiteHeading from "../components/WhiteHeading/WhiteHeading";
import styles from "./Players.module.css";
import TextSlide from "../components/TextSlide/TextSlide";
import MatchSlide from "../components/MatchSlide/MatchSlide";
import Footer from "../components/Footer/Footer";
import Loader from "../components/Loader/Loader";

const helmetData = new HelmetData({});


const Players = () => {
    return (
        <div>
            <Helmet helmetData={helmetData}>
                <meta
                    name="description"
                    content="match calendar"
                />
                <title>Matches Calendar</title>
            </Helmet>
            <Header/>
            <WhiteHeading/>
            <div className={styles.screen}>
                <h1 className={styles.title}>Рейтинг игроков по MMR</h1>
            </div>
            <TextSlide/>
            <MatchSlide/>
            <Loader />
            <Footer />
        </div>
    );
};

export default Players;