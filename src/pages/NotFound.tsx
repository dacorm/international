import React from 'react';
import { Link } from 'react-router-dom';
import { withErrorBoundary } from 'react-error-boundary';
import styles from './NotFound.module.css';
import Header from '../components/Header/Header';
import WhiteHeading from '../components/WhiteHeading/WhiteHeading';
import TextSlide from '../components/TextSlide/TextSlide';
import Footer from '../components/Footer/Footer';
import drop from '../assets/images/expand_more_FILL0_wght400_GRAD0_opsz48.svg';
import Layout from '../components/Layout/Layout';

const NotFound = () => (
    <Layout seoDescription="Страница не найдена" seoTitle="Страница не найдена" title="404 ошибка">
        <div className={styles.notFoundContainer}>
            <h1 className={styles.oopsTitle}>Упс, кажется такой страницы не существует</h1>
            <button type="button" className={styles.button}>
                <Link to="/" className={styles.buttonText}>Вернуться на главную</Link>
                <div className={styles.dropWrapper}>
                    <img src={drop} alt={drop} className={styles.drop} />
                </div>
            </button>
        </div>
    </Layout>
);

export default withErrorBoundary(NotFound, {
    fallback: (
        <>
            <Header />
            <WhiteHeading />
            <div className={styles.articleHeading}>
                <h1 className={styles.title}>
                    Что-то пошло не так
                </h1>
            </div>
            <TextSlide />
            <Footer />
        </>),
});
