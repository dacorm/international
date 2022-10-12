import React from 'react';
import styles from './FallbackLoader.module.css';
import {Helmet, HelmetData} from "react-helmet-async";
import Header from "../Header/Header";
import WhiteHeading from "../WhiteHeading/WhiteHeading";
import TextSlide from "../TextSlide/TextSlide";
import MatchSlide from "../MatchSlide/MatchSlide";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";

const helmetData = new HelmetData({});


const FallbackLoader = () => {
    return (
        <div>
            <Helmet helmetData={helmetData}>
                <meta
                    name="description"
                    content="Loading..."
                />
                <title>Загрузка...</title>
            </Helmet>
            <Header/>
            <WhiteHeading/>
            <div className={styles.screen}>
                <h1 className={styles.title}>Идет загрузка</h1>
            </div>
            <TextSlide/>
            <MatchSlide/>
            <Loader />
            <Footer />
        </div>
    );
};

export default FallbackLoader;