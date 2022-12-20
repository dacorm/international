import React, { memo, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './SingleMatch.module.css';
import cup from '../../assets/images/cup-svgrepo-com.svg';
import logo2 from '../../assets/images/02.png';
import { MatchInfoType } from '../../@types/serverType';

type SingleMatchProps = {
    leagueName: string;
    playTime: string;
    direName: string;
    direScore: number;
    radiantName: string;
    radiantScore: number;
    matchId: number;
}

const SingleMatch: React.FC<SingleMatchProps> = memo(({
    leagueName,
    playTime, direName, direScore, radiantName, radiantScore, matchId,
}: SingleMatchProps) => {
    const [data, setData] = useState<MatchInfoType | null>();
    const [isLoading, setIsLoading] = useState(false);
    const [logo, setLogo] = useState(logo2);
    const [logoRad, setLogoRad] = useState(logo2);
    const isWinner = Boolean(radiantScore > direScore);

    const fetchData = async (matchId: number) => {
        try {
            setIsLoading(true);
            const { data } = await axios.get(`https://api.opendota.com/api/matches/${matchId}?api_key=de6dcb55-631f-474f-9c19-f98d5d016e96`);
            setData(data);
            setIsLoading(false);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        const logoUrlConverterDire = (url: string | null | undefined) => {
            if (url) return setLogo(url);
        };

        const logoUrlConverterRad = (url: string | null | undefined) => {
            if (url) return setLogoRad(url);
        };

        if (data?.radiant_team) {
            logoUrlConverterRad(data.radiant_team.logo_url);
        }

        if (data?.dire_team) {
            logoUrlConverterDire(data.dire_team.logo_url);
        }
    }, [data]);

    useEffect(() => {
        fetchData(matchId);
    }, []);

    return (
        <Link to={`/match/${matchId}`} className={styles.singleMatch}>
            <h2 className={styles.listHeading}>{leagueName}</h2>
            <div className={styles.separator} />
            <div className={styles.matchWrapper}>
                <p className={styles.time}>
                    Матч окончен:
                    {playTime}
                </p>
                <div className={styles.teams}>
                    <div className={styles.team}>
                        <img src={logo} alt="Team1Logo" className={styles.logo} />
                        <p className={styles.teamName}>{direName}</p>
                        <p className={styles.score}>{direScore}</p>
                        {!isWinner && (<img src={cup} alt="winner icon" className={styles.winner} />)}
                    </div>
                    <div className={styles.team}>
                        <img src={logoRad} alt="Team2Logo" className={styles.logo} />
                        <p className={styles.teamName}>{radiantName}</p>
                        <p className={styles.score}>{radiantScore}</p>
                        {isWinner && (<img src={cup} alt="winner icon" className={styles.winner} />)}

                    </div>
                </div>
            </div>
        </Link>
    );
});

export default React.memo(SingleMatch);
