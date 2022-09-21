import React from 'react';
import styles from './TournamentMatch.module.css';
import team1 from "../../assets/images/teams/01.png";
import team2 from "../../assets/images/teams/02.png";

const TournamentMatch = () => {
    return (
            <div className={styles.match}>
                <div className={styles.round}>
                    <p className={styles.teamText}>VS</p>
                </div>
                <div className={styles.team}>
                    <div className={styles.teamInfo}>
                        <img src={team1} alt="Команда1" className={styles.teamImg}/>
                        <div className={styles.teamName}>
                            <p className={styles.teamText}>The Lone Wolves</p>
                            <p className={styles.country}>United States</p>
                        </div>
                    </div>
                    <p className={styles.teamText}>3</p>
                </div>
                <div className={styles.team}>
                    <div className={styles.teamInfo}>
                        <img src={team2} alt="Команда2" className={styles.teamImg}/>
                        <div className={styles.teamName}>
                            <p className={styles.teamText}>Toxic Bulls</p>
                            <p className={styles.country}>Brazil</p>
                        </div>
                    </div>
                    <p className={styles.teamText}>0</p>
                </div>
            </div>
    );
};

export default TournamentMatch;