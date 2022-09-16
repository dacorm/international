import React from 'react';
import styles from './NotFound.module.css';
import Header from "../components/Header/Header";
import WhiteHeading from "../components/WhiteHeading/WhiteHeading";
import TextSlide from "../components/TextSlide/TextSlide";
import Footer from "../components/Footer/Footer";
import drop from "../assets/images/expand_more_FILL0_wght400_GRAD0_opsz48.svg";
import {Link} from "react-router-dom";
import {Helmet, HelmetData} from 'react-helmet-async';

const helmetData = new HelmetData({});

const NotFound = () => {
    return (
        <div>
            <Helmet helmetData={helmetData}>
                <meta
                    name="description"
                    content="not found page"
                />
                <title>Not Found</title>
            </Helmet>
            <Header />
            <WhiteHeading />
            <div className={styles.screen}>
                <h1 className={styles.title}>404 ошибка</h1>
            </div>
            <TextSlide />
            <div className={styles.notFoundContainer}>
                <h1 className={styles.oopsTitle}>Упс, кажется такой страницы не существует</h1>
                <button className={styles.button}>
                    <Link to='/' className={styles.buttonText}>Вернуться на главную</Link>
                    <div className={styles.dropWrapper}>
                        <img src={drop} alt={drop} className={styles.drop} />
                    </div>
                </button>
            </div>
            <Footer />
        </div>
    );
};

export default NotFound;