import React from 'react';
import styles from './LiveTableItem.module.css';
import dota from '../../assets/images/logo.jpg';

const LiveTableItem = () => {
    return (
        <li className={styles.item}>
            <div className={styles.firstWrap}>
                <img src={dota} alt="dota icon" className={styles.dotaIcon}/>
                <p className={styles.time}>03:00</p>
            </div>
            <div className={styles.wrapSecond}>
                <div>
                    <p>The Cut</p>
                    <p>1.32</p>
                </div>
                <div>
                    <p>0:2</p>
                </div>
                <div>
                    <p>Alpha</p>
                    <p>3.30</p>
                </div>
            </div>
            <p className={styles.league}>BTS LEAGUE</p>
        </li>
    );
};

export default LiveTableItem;