import React, {useEffect} from 'react';
import styles from './Profile.module.css';
import Header from "../components/Header/Header";
import WhiteHeading from "../components/WhiteHeading/WhiteHeading";
import TextSlide from "../components/TextSlide/TextSlide";
import {useAppSelector} from "../assets/hooks";
import {selectIsAuth, selectName} from "../redux/slices/auth";
import {useNavigate} from "react-router-dom";
import Footer from "../components/Footer/Footer";
import {withErrorBoundary} from "react-error-boundary";

const Profile = () => {
    const isAuth = useAppSelector(selectIsAuth);
    const userData = useAppSelector(selectName);
    const navigate = useNavigate();


    useEffect(() => {
        if (!isAuth) {
            navigate('/login')
        }
    }, [isAuth])


    return (
        <div>
            <Header/>
            <WhiteHeading/>
            <div className={styles.screen}>
                <h1 className={styles.title}>Your Profile</h1>
            </div>
            <TextSlide/>
            <div className={styles.profileInfo}>
                <div className={styles.avatar}/>
                <div className={styles.fullName}>
                    <p className={styles.text}>Name:</p>
                    <p className={styles.text}>{userData?.fullName}</p>
                </div>
                <div className={styles.email}>
                    <p className={styles.text}>Email:</p>
                    <p className={styles.text}>{userData?.email}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default withErrorBoundary(Profile, {
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
;