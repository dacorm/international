import React, {memo, useEffect, useState} from 'react';
import styles from './Champion.module.css';
import {nameConverter} from "../../helpers/nameConverter";
import axios from "axios";
import {Heroes} from "../../@types/serverType";

interface ChampionProps {
    index: number;
    teamId?: number;
    direTeam?: string;
    radiantTeam?: string;
    id: number;
    heroes: Heroes[]
}

const Champion: React.FC<ChampionProps> = memo(({
                                               index,
                                               teamId, direTeam, radiantTeam, id, heroes
                                           }) => {

    const intersect = (heroId: number, heroes: Heroes[]) => {
        const heroInfoName: Heroes[] = heroes.filter((hero) => hero.id === heroId);
        return heroInfoName;
    }


    return (
        <li className={styles.wrapper}>
            <img
                src={`https://api.opendota.com/apps/dota2/images/dota_react/heroes/icons/${nameConverter(intersect(id, heroes)[0].localized_name)}.png?api_key=de6dcb55-631f-474f-9c19-f98d5d016e96`}
                alt="hero icon"
                className={styles.image}
            />
            <p className={styles.text}>{index + 1}.</p>
            <p className={styles.text}>{intersect(id, heroes)[0].localized_name}</p>
            {teamId !== undefined &&
            <p className={teamId === 0 ? styles.teamNameDire : styles.teamNameRad}>{teamId === 0 ? direTeam : radiantTeam}</p>}
        </li>
    );
});

export default Champion;