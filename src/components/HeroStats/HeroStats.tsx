import React, {memo, useEffect, useMemo, useState} from 'react';
import styles from './HeroStats.module.css';
import axios from "axios";
import {HeroStats as HeroStatsType} from "../../@types/serverType";
import Loader from "../Loader/Loader";

interface HeroStatsProps {
    id: number;
}

export const HeroStats: React.FC<HeroStatsProps> = memo(({ id }) => {
    const [heroStats, setHeroStats] = useState<HeroStatsType[]>();

    const fetchStats = async () => {
        const { data } = await axios.get('https://api.opendota.com/api/heroStats?api_key=de6dcb55-631f-474f-9c19-f98d5d016e96')
        setHeroStats(data);
    }

    useEffect(() => {
        fetchStats();
    }, [])

    const filteredHeroStat = useMemo(() => {
        let hero;
       if (heroStats) {
          hero = heroStats.filter((item) => item.id === id)
       }
       if (hero) {
           return hero[0];
       }
    }, [id, heroStats])

    if (!filteredHeroStat) {
        return <Loader />
    }

    return (
        <div className={styles.tableContainer}>
            <ul className={styles.table}>
                <li className={styles.tableItem}>
                    <p className={styles.tableText}>Base Attack:</p>
                    <p className={styles.tableText}>{filteredHeroStat && filteredHeroStat.base_attack_min} - {filteredHeroStat && filteredHeroStat.base_attack_max}</p>
                </li>
                <li className={styles.tableItem}>
                    <p className={styles.tableText}>Attack Range:</p>
                    <p className={styles.tableText}>{filteredHeroStat && filteredHeroStat.attack_range}</p>
                </li>
                <li className={styles.tableItem}>
                    <p className={styles.tableText}>Attack Speed:</p>
                    <p className={styles.tableText}>{filteredHeroStat && filteredHeroStat.attack_rate}</p>
                </li>
                <li className={styles.tableItem}>
                    <p className={styles.tableText}>Projectile Speed:</p>
                    <p className={styles.tableText}>{filteredHeroStat && filteredHeroStat.projectile_speed}</p>
                </li>
            </ul>
            <ul className={styles.table}>
                <li className={styles.tableItem}>
                    <p className={styles.tableText}>Health:</p>
                    <p className={styles.tableText}>{filteredHeroStat && filteredHeroStat.base_health}</p>
                </li>
                <li className={styles.tableItem}>
                    <p className={styles.tableText}>Health Regen:</p>
                    <p className={styles.tableText}>{filteredHeroStat && filteredHeroStat.base_health_regen}</p>
                </li>
                <li className={styles.tableItem}>
                    <p className={styles.tableText}>Mana:</p>
                    <p className={styles.tableText}>{filteredHeroStat && filteredHeroStat.base_mana}</p>
                </li>
                <li className={styles.tableItem}>
                    <p className={styles.tableText}>Mana Regen:</p>
                    <p className={styles.tableText}>{filteredHeroStat && filteredHeroStat.base_mana_regen}</p>
                </li>
            </ul>
            <ul className={styles.table}>
                <li className={styles.tableItem}>
                    <p className={styles.tableText}>Base Armor:</p>
                    <p className={styles.tableText}>{filteredHeroStat && filteredHeroStat.base_armor}</p>
                </li>
                <li className={styles.tableItem}>
                    <p className={styles.tableText}>Magic Resistance:</p>
                    <p className={styles.tableText}>{filteredHeroStat && filteredHeroStat.base_mr}</p>
                </li>
                <li className={styles.tableItem}>
                    <p className={styles.tableText}>Move Speed:</p>
                    <p className={styles.tableText}>{filteredHeroStat && filteredHeroStat.move_speed}</p>
                </li>
                <li className={styles.tableItem}>
                    <p className={styles.tableText}>Turn Speed:</p>
                    <p className={styles.tableText}>{filteredHeroStat && filteredHeroStat.turn_rate}</p>
                </li>
            </ul>
            <ul className={styles.table}>
                <li className={styles.tableItem}>
                    <p className={styles.tableText}>Number of Legs:</p>
                    <p className={styles.tableText}>{filteredHeroStat && filteredHeroStat.legs}</p>
                </li>
                <li className={styles.tableItem}>
                    <p className={styles.tableText}>Cm Enabled:</p>
                    <p className={styles.tableText}>{filteredHeroStat && filteredHeroStat.cm_enabled ? 'Yes' : 'No'}</p>
                </li>
            </ul>
        </div>
    );
});