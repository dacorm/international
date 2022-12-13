import React, {memo, useEffect, useState} from 'react';
import styles from './MatchTableItem.module.css';
import {Heroes} from "../../@types/serverType";
import {nameConverter} from "../../helpers/nameConverter";
import Loader from "../Loader/Loader";
import axios from "axios";
import {log} from "util";

type PlainObj = {
    [key: string]: number;
}

interface MatchTableItemProps {
    playerName: string;
    playerLvl: number;
    playerKills: number;
    playerDeaths: number;
    playerKDA: number;
    goldPerMin: number;
    heroId: number;
    heroes: Heroes[];
    purchase: PlainObj
}

interface Item {
    hint: string[];
    id: number;
    img: string;
    dname: string;
    qual: string;
    cost: number;
    notes: string;
    attrib: any[];
    mc: boolean;
    cd: number;
    lore: string;
    components: null;
    created: boolean;
    charges: boolean;
}


const MatchTableItem: React.FC<MatchTableItemProps> = memo((
    {
        playerDeaths,
        playerKills,
        playerLvl,
        playerName, goldPerMin, playerKDA, heroId, heroes, purchase
    }) => {
    const [hero, setHero] = useState<Heroes>();
    const [buy, setBuy] = useState<string[]>();
    const [items, setItems] = useState<Item>();
    const [foundedItems, setFoundedItems] = useState<Item[]>([]);

    const filterHeroes = (heroes: Heroes[], heroId: number) => {
        heroes.filter((item) => {
            if (item.id === heroId) {
                return setHero(item);
            }
        })
    }

    const fetchItems = async () => {
        const { data } = await axios.get('https://api.opendota.com/api/constants/items?api_key=de6dcb55-631f-474f-9c19-f98d5d016e96');
        setItems(data);
    }

    const findItem = (items: Item, item: string[]) => {
        const keys = Object.keys(items);
        let intersect: string[] = [];
        item.forEach((i) => {
            if (keys.includes(i)) {
                intersect.push(i);
            }
        })
        let newArray: Item[] = [];
        intersect.forEach((inter) => {
            newArray.push((items[inter as keyof Item] as unknown as Item));
        })
        return newArray;
    }

    useEffect(() => {
        filterHeroes(heroes, heroId);
        const items = Object.keys(purchase);
        setBuy(items.slice(items.length - 7, items.length - 1));
        fetchItems();
    }, [])

    useEffect(() => {
       if (items && buy) {
           setFoundedItems(findItem(items, buy))
       }
    }, [items])

    if (!hero) {
        return <Loader/>
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
            {
                foundedItems && foundedItems.map((item) => (
                    <li className={styles.tableItemSixth} key={item.id}>
                        <img src={`https://api.opendota.com${item.img}?api_key=de6dcb55-631f-474f-9c19-f98d5d016e96`}
                             className={styles.itemImage}
                             alt="Item Icon"/>
                        <p className={styles.itemName}>{item.dname}</p>
                    </li>
                ))
            }
        </ul>
    );
});

export default MatchTableItem;