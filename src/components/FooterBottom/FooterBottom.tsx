import React from 'react';
import styles from './FooterBottom.module.css';

const FooterBottom = () => (
    <div className={styles.wrapper}>
        <div className={styles.textWrap}>
            <a href="https://international11.com/" className={styles.articleAuthor}>
                <span className={styles.span}>Dota</span>
                {' '}
                2
            </a>
            <div className={styles.articleSep} />
            <p className={styles.articleDate}>
                All Rights Reserved
                {new Date().getFullYear()}
            </p>
        </div>
        <div className={styles.textWrap}>
            <p className={styles.articleAuthor}>Terms and Conditions</p>
            <div className={styles.articleSep} />
            <p className={styles.articleDate}>Privacy Policy</p>
        </div>
    </div>
);

export default FooterBottom;
