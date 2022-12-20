import React from 'react';
import styles from './Preloader.module.css';

const Preloader = () => (
    <div className={styles.preloaderContainer}>
        <p className={styles.text}>Loading...</p>
    </div>
);

export default Preloader;
