import React from 'react';
import styles from './MatchTable.module.css';
import {Heroes, PlayerFull} from "../../@types/serverType";
import MatchTableItem from "../MatchTableItem/MatchTableItem";

interface MatchTableProps {
    data: PlayerFull[];
    heroes: Heroes[];
}

const MatchTable: React.FC<MatchTableProps> = ({ data, heroes }) => {

    return (
        <div className={styles.table}>
            <ul className={styles.heading}>
                <li className={styles.headingItemFirst}>Игрок</li>
                <li className={styles.headingItemSecond}>Уровень</li>
                <li className={styles.headingItemThird}>Убийства / Смерти</li>
                <li className={styles.headingItemFourth}>KDA</li>
                <li className={styles.headingItemFifth}>Золото в минуту</li>
                <li className={styles.headingItemSixth}>Предметы</li>
            </ul>
            <MatchTableItem playerDeaths={data[0].deaths}
                            goldPerMin={data[0].gold_per_min}
                            playerKills={data[0].kills}
                            playerKDA={data[0].kda}
                            playerLvl={data[0].level}
                            playerName={data[0].personaname}
                            heroId={data[0].hero_id}
                            heroes={heroes}
                            purchase={data[0].purchase}
            />
        </div>
    );
};

export default MatchTable;