import React from 'react';
import Header from '../Header/Header';
import WhiteHeading from '../WhiteHeading/WhiteHeading';
import styles from '../../pages/Matches.module.css';
import TextSlide from '../TextSlide/TextSlide';
import Footer from '../Footer/Footer';

const ErrorBoundary = () => (
    <>
        <Header />
        <WhiteHeading />
        <div className={styles.screen}>
            <h1 className={styles.title}>Scores With Calendar</h1>
        </div>
        <TextSlide />
        <Footer />
    </>
);

export default ErrorBoundary;
