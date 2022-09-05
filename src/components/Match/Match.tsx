import React from 'react';
import styles from './Match.module.css';
import logo1 from '../../assets/images/01.png';
import logo2 from '../../assets/images/02.png';

type MatchProps = {
    radiantName: string
    direName: string
    radiantScore: number
    direScore: number
    league: string
}

const Match: React.FC<MatchProps> = ({ radiantName, direName, radiantScore, direScore, league }) => {
    return (
        <div className={styles.match}>
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
            <p className={styles.league}>{league}</p>
        </div>
    );
};

export default Match;