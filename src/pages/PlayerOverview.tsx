import React from 'react';
import styles from './PlayerOverview.modules.css';
import Layout from "../components/Layout/Layout";
import {withErrorBoundary} from "react-error-boundary";
import Header from "../components/Header/Header";
import WhiteHeading from "../components/WhiteHeading/WhiteHeading";
import TextSlide from "../components/TextSlide/TextSlide";
import Footer from "../components/Footer/Footer";

const PlayerOverview: React.FC = () => {
    return (
        <Layout seoDescription={`3`} seoTitle={`2`} title={`1`}>
            <div className={styles.content}>
                123
            </div>
        </Layout>
    );
};

export default withErrorBoundary(PlayerOverview, {
    fallback: (<>
        <Header/>
        <WhiteHeading/>
        <div className={styles.articleHeading}>
            <h1 className={styles.title}>
                Что-то пошло не так
            </h1>
        </div>
        <TextSlide/>
        <Footer />
    </>)
})