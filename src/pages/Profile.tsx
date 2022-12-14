import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { withErrorBoundary } from 'react-error-boundary';
import styles from './Profile.module.css';
import Header from '../components/Header/Header';
import WhiteHeading from '../components/WhiteHeading/WhiteHeading';
import TextSlide from '../components/TextSlide/TextSlide';
import { useAppSelector } from '../assets/hooks';
import { selectIsAuth, selectName } from '../redux/slices/auth';
import Footer from '../components/Footer/Footer';
import Layout from '../components/Layout/Layout';

const Profile = () => {
    const isAuth = useAppSelector(selectIsAuth);
    const userData = useAppSelector(selectName);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            navigate('/login');
        }
    }, [isAuth]);

    return (
        <Layout seoDescription="Профиль" seoTitle="Профиль" title="Ваш профиль">
            <div className={styles.profileInfo}>
                <div className={styles.avatar} />
                <div className={styles.fullName}>
                    <p className={styles.text}>Name:</p>
                    <p className={styles.text}>{userData?.fullName}</p>
                </div>
                <div className={styles.email}>
                    <p className={styles.text}>Email:</p>
                    <p className={styles.text}>{userData?.email}</p>
                </div>
            </div>
        </Layout>
    );
};

export default withErrorBoundary(Profile, {
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
