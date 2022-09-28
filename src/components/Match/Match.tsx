import React from 'react';
import styles from './Match.module.css';
import logo1 from '../../assets/images/01.png';
import logo2 from '../../assets/images/02.png';
import {Link} from "react-router-dom";

type MatchProps = {
    radiantName: string
    direName: string
    radiantScore: number
    direScore: number
    league: string
    date: string
    id: number
}

const Match: React.FC<MatchProps> = ({ radiantName, direName, radiantScore, direScore, league, date, id }) => {

    const leagueFormatter = (league: string) => {
        const leagueArr = league.split(' ');
        let formattedArr
        if (leagueArr.length > 3) {
            formattedArr = leagueArr.slice(0, 2)
            return formattedArr.join(' ')
        }
        return leagueArr.join(' ')
    }

    return (
        <Link to={`/match/${id}`} className={styles.match}>
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
            <div className={styles.league}>
                <p className={styles.dateText}>{date}</p>
                <p className={styles.leagueText}>{leagueFormatter(league)}</p>
            </div>
        </Link>
    );
};

export default Match;