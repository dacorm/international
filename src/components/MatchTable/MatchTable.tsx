import React, {memo} from 'react';
import styles from './MatchTable.module.css';
import {Heroes, PlayerFull} from "../../@types/serverType";
import MatchTableItem from "../MatchTableItem/MatchTableItem";

interface MatchTableProps {
    data: PlayerFull[];
    heroes: Heroes[];
}

const MatchTable: React.FC<MatchTableProps> = memo(({ data, heroes }) => {

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
            {
                data && data.map((item) => (<MatchTableItem playerDeaths={item.deaths}
                                                            goldPerMin={item.gold_per_min}
                                                            playerKills={item.kills}
                                                            playerKDA={item.kda}
                                                            playerLvl={item.level}
                                                            playerName={item.personaname}
                                                            heroId={item.hero_id}
                                                            heroes={heroes}
                                                            purchase={item.purchase}
                                                            key={item.hero_id}
                />))
            }

        </div>
    );
});

export default MatchTable;