import React from 'react';
import styles from './TextSlide.module.css';
import live from '../../assets/images/live-news-icon.png';

const TextSlide = () => {
    return (
        <div className={styles.string}>
            <div className={styles.left}/>
            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, sunt?Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Omnis, sunt?Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Omnis, sunt?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, sunt?
            </p>
            <div className={styles.right}/>
        </div>
    );
};

export default TextSlide;