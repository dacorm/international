import React from 'react';
import styles from "./SingleMatch.module.css";
import logo1 from "../../assets/images/01.png";
import logo2 from "../../assets/images/02.png";

type SingleMatchProps = {
    leagueName: string
    playTime: string
    direName: string
    direScore: number
    radiantName: string
    radiantScore: number
}

const SingleMatch: React.FC<SingleMatchProps> = ({ leagueName, playTime, direName, direScore, radiantName, radiantScore }) => {
    return (
        <div className={styles.singleMatch}>
            <h2 className={styles.listHeading}>{leagueName}</h2>
            <div className={styles.separator}/>
            <div className={styles.matchWrapper}>
                <p className={styles.time}>{playTime}</p>
                <div className={styles.teams}>
                    <div className={styles.team}>
                        <img src={logo1} alt="Team1Logo" className={styles.logo}/>
                        <p className={styles.teamName}>{direName}</p>
                        <p className={styles.score}>{direScore}</p>
                    </div>
                    <div className={styles.team}>
                        <img src={logo2} alt="Team2Logo" className={styles.logo}/>
                        <p className={styles.teamName}>{radiantName}</p>
                        <p className={styles.score}>{radiantScore}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleMatch;