import React from 'react';
import styles from './Loader.module.css';

const Loader = () => (
    <div className={styles.loaderContainer}>
        <div className={styles.ldsSpinner}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    </div>
);

export default Loader;
