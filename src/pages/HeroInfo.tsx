import React from 'react';
import Layout from "../components/Layout/Layout";
import {withErrorBoundary} from "react-error-boundary";
import Header from "../components/Header/Header";
import WhiteHeading from "../components/WhiteHeading/WhiteHeading";
import styles from "./Heroes.module.css";
import TextSlide from "../components/TextSlide/TextSlide";
import Footer from "../components/Footer/Footer";

const HeroInfo = () => {
    return (
        <Layout seoDescription='Герои Dota2' seoTitle='Герои Dota2' title='Герои Dota2'>
            hero
        </Layout>
    );
};

export default withErrorBoundary(HeroInfo, {
    fallback: (<>
        <Header/>
        <WhiteHeading/>
        <div className={styles.screen}>
            <h1 className={styles.title}>Что-то пошло не так</h1>
        </div>
        <TextSlide/>
        <Footer />
    </>)
})
;;