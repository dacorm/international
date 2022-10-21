import React from 'react';
import styles from './TournamentMatch.module.css';
import team1 from "../../assets/images/teams/01.png";
import team2 from "../../assets/images/teams/02.png";

type TournamentMatchProps = {
    team1Logo?: string;
    team2Logo?: string;
    team1Name: string;
    team2Name: string;
    team1Score?: number;
    team2Score?: number;
}

const TournamentMatch: React.FC<TournamentMatchProps> = ({ team1Logo, team1Name, team1Score, team2Logo, team2Name, team2Score }) => {
    return (
            <div className={styles.match}>
                <div className={styles.round}>
                    <p className={styles.teamText}>VS</p>
                </div>
                <div className={styles.team}>
                    <div className={styles.teamInfo}>
                        <img src={team1Logo || team1} alt="Команда1" className={styles.teamImg}/>
                        <div className={styles.teamName}>
                            <p className={styles.teamText}>{team1Name}</p>
                        </div>
                    </div>
                    <p className={styles.teamText}>{team1Score}</p>
                </div>
                <div className={styles.team}>
                    <div className={styles.teamInfo}>
                        <img src={team2Logo || team2} alt="Команда2" className={styles.teamImg}/>
                        <div className={styles.teamName}>
                            <p className={styles.teamText}>{team2Name}</p>
                        </div>
                    </div>
                    <p className={styles.teamText}>{team2Score}</p>
                </div>
            </div>
    );
};

export default TournamentMatch;