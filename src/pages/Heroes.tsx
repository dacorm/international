import React from 'react';
import { withErrorBoundary } from 'react-error-boundary';
import { Link } from 'react-router-dom';
import styles from './Heroes.module.css';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import WhiteHeading from '../components/WhiteHeading/WhiteHeading';
import TextSlide from '../components/TextSlide/TextSlide';
import Footer from '../components/Footer/Footer';
import Champion from '../components/Champion/Champion';
import { useGetHeroes } from '../hooks/useGetHeroes';
import Preloader from '../components/Preloader/Preloader';

const Heroes = () => {
    const heroes = useGetHeroes();

    return (
        <Layout seoDescription="Герои Dota2" seoTitle="Герои Dota2" title="Герои Dota2">
            <div className={styles.content}>
                <div className={styles.sectionHeading}>
                    <h2 className={styles.listHeading}>Список героев Dota2</h2>
                    <div className={styles.separator} />
                </div>
                <div className={styles.heroesContainer}>
                    {heroes ? heroes.map((item, index) => (
                        <Link to={`/heroes/${item.id}`} key={item.id} className={styles.champs}>
                            <Champion
                                index={index}
                                id={item.id}
                                heroes={heroes}
                            />
                        </Link>
                    )) : <Preloader />}
                </div>
            </div>
        </Layout>
    );
};

export default withErrorBoundary(Heroes, {
    fallback: (
        <>
            <Header />
            <WhiteHeading />
            <div className={styles.screen}>
                <h1 className={styles.title}>Что-то пошло не так</h1>
            </div>
            <TextSlide />
            <Footer />
        </>),
});
