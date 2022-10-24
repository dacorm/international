import React from 'react';
import styles from './Match.module.css';
import logo1 from '../../assets/images/01.png';
import logo2 from '../../assets/images/02.png';
import {Link} from "react-router-dom";
import psg from '../../assets/images/intTeams/psg.webp';
import og from '../../assets/images/intTeams/og.jpg';
import spirit from '../../assets/images/intTeams/spirit.jpg';
import beastcoast from '../../assets/images/intTeams/beastcoast.jpg';
import aster from '../../assets/images/intTeams/aster.jpg';
import thunder from '../../assets/images/intTeams/thunder.jpg';
import boom from '../../assets/images/intTeams/boom.jpg';
import tsm from '../../assets/images/intTeams/tsm.jpg';
import tundra from '../../assets/images/intTeams/tundra.jpg';
import gladiators from '../../assets/images/intTeams/gladiators.jpg';
import eg from '../../assets/images/intTeams/evilgeniuses.jpg';
import fnatic from '../../assets/images/intTeams/fnatic.jpg';
import soniqs from '../../assets/images/intTeams/soniqs.jpg';
import hokori from '../../assets/images/intTeams/hokori.jpg';
import entity from '../../assets/images/intTeams/entity.webp';
import betboom from '../../assets/images/intTeams/betboom.webp';
import rng from '../../assets/images/intTeams/rng.webp';
import talon from '../../assets/images/intTeams/talon.webp';
import secret from '../../assets/images/intTeams/secret.webp';
import liquid from '../../assets/images/intTeams/liquid.webp';


export const imagesData = [{
    name: 'PSG.LGD',
    image: psg
},{
    name: 'OG',
    image: og
},{
    name: 'Team Spirit',
    image: spirit
},{
    name: 'beastcoast',
    image: beastcoast
},{
    name: 'Team Aster',
    image: aster
},{
    name: 'Thunder Awaken',
    image: thunder
},{
    name: 'BOOM Esports',
    image: boom
},{
    name: 'TSM FTX',
    image: tsm
},{
    name: 'Tundra Esports',
    image: tundra
},{
    name: 'Gladiators',
    image: gladiators
},{
    name: 'Evil Geniuses',
    image: eg
},{
    name: 'Fnatic',
    image: fnatic
},{
    name: 'Soniqs',
    image: soniqs
},{
    name: 'Hokori',
    image: hokori
},{
    name: 'Entity',
    image: entity
},{
    name: 'BetBoom Team',
    image: betboom
},{
    name: 'Royal Never Give Up',
    image: rng
},{
    name: 'Talon Esports',
    image: talon
},{
    name: 'Team Secret',
    image: secret
},{
    name: 'Team Liquid',
    image: liquid
},]

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

    const direTeamImageConverter = () => {
        let image = logo1;
        imagesData.forEach((item) => {
            if (item.name === direName) {
                image = item.image;
            }
        })
        return image
    }

    const radiantTeamImageConverter = () => {
        let image = logo2;
        imagesData.forEach((item) => {
            if (item.name === radiantName) {
                image = item.image;
            }
        })
        return image
    }

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
                    <img src={direTeamImageConverter()} alt="Team1Logo" className={styles.logo}/>
                    <p className={styles.teamName}>{direName}</p>
                    <p className={styles.score}>{direScore}</p>
                </div>
                <div className={styles.team}>
                    <img src={radiantTeamImageConverter()} alt="Team2Logo" className={styles.logo}/>
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