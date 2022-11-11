import React, {useEffect, useState} from 'react';
import styles from './MatchTableItem.module.css';
import {Heroes} from "../../@types/serverType";
import {nameConverter} from "../../helpers/nameConverter";
import Loader from "../Loader/Loader";

interface MatchTableItemProps {
    playerName: string;
    playerLvl: number;
    playerKills: number;
    playerDeaths: number;
    playerKDA: number;
    goldPerMin: number;
    heroId: number;
    heroes: Heroes[];
}

const MatchTableItem: React.FC<MatchTableItemProps> = (
    { playerDeaths, playerKills, playerLvl, playerName, goldPerMin, playerKDA, heroId, heroes }) => {
    const [hero, setHero] = useState<Heroes>();

    const filterHeroes = (heroes: Heroes[], heroId: number) => {
        heroes.filter((item) => {
            if (item.id === heroId) {
                return setHero(item);
            }
        })
    }

    useEffect(() => {
       filterHeroes(heroes, heroId) ;
    }, [])

    useEffect(() => {
        console.log(heroId);
        console.log(hero);
    }, [hero])

    if (!hero) {
        return <Loader />
    }

    return (
        <ul className={styles.table}>
            <li className={styles.tableItemFirst}>
                <img
                    src={`https://api.opendota.com/apps/dota2/images/dota_react/heroes/icons/${nameConverter(hero.localized_name)}.png?api_key=de6dcb55-631f-474f-9c19-f98d5d016e96`}
                    alt="Dota Hero"
                    className={styles.hero}
                />
                {playerName}
            </li>
            <li className={styles.tableItemSecond}>{playerLvl}</li>
            <li className={styles.tableItemThird}>{playerKills} / {playerDeaths} / 3</li>
            <li className={styles.tableItemFourth}>{playerKDA}</li>
            <li className={styles.tableItemFifth}>{goldPerMin}</li>
            <li className={styles.tableItemSixth}>item 1 item 2 item 3</li>
        </ul>
    );
};

export default MatchTableItem;