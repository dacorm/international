import React from 'react';
import styles from './MainContent.module.css';

const MainContent = () => {
    return (
        <div className={styles.content}>
            <div className={styles.main}>
                main
            </div>
            <div className={styles.sidebar}>
                sidebar
            </div>
        </div>
    );
};

export default MainContent;