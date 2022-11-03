import React from 'react';
import styles from './Champion.module.css';
import {nameConverter} from "../../helpers/nameConverter";

interface ChampionProps {
    item: string;
    index: number;
    teamId?: number;
    direTeam?: string;
    radiantTeam?: string;
}

const Champion: React.FC<ChampionProps> = ({ item, index, teamId, direTeam, radiantTeam }) => {

    return (
        <li className={styles.wrapper}>
            <img
                src={`https://api.opendota.com/apps/dota2/images/dota_react/heroes/icons/${nameConverter(item)}.png?api_key=de6dcb55-631f-474f-9c19-f98d5d016e96`}
                alt="hero icon"
                className={styles.image}
            />
            <p className={styles.text}>{index+1}.</p>
            <p className={styles.text}>{item}</p>
            {teamId !== undefined && <p className={styles.teamName}>{teamId ===  0 ? direTeam : radiantTeam}</p>}
        </li>
    );
};

export default Champion;