import React, {useEffect, useState} from 'react';
import styles from "../../pages/Tournament.module.css";
import psg from "../../assets/images/intTeams/psg.webp";
import thunder from "../../assets/images/intTeams/thunder.jpg";
import og from "../../assets/images/intTeams/og.jpg";
import beastcoast from "../../assets/images/intTeams/beastcoast.jpg";
import boom from "../../assets/images/intTeams/boom.jpg";
import gladiators from "../../assets/images/intTeams/gladiators.jpg";
import eg from "../../assets/images/intTeams/evilgeniuses.jpg";
import entity from "../../assets/images/intTeams/entity.webp";
import spirit from "../../assets/images/intTeams/spirit.jpg";
import fnatic from "../../assets/images/intTeams/fnatic.jpg";
import hokori from "../../assets/images/intTeams/hokori.jpg";
import rng from "../../assets/images/intTeams/rng.webp";
import soniqs from "../../assets/images/intTeams/soniqs.jpg";
import talon from "../../assets/images/intTeams/talon.webp";
import tsm from "../../assets/images/intTeams/tsm.jpg";
import betboom from "../../assets/images/intTeams/betboom.webp";

type ResultsProps = {
    isOpen: boolean
    lazy: boolean
}

const Results: React.FC<ResultsProps> = ({ isOpen, lazy }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setMounted(true);
        }
    }, [isOpen])

    if (lazy && !mounted) {
        return null
    }

    return (
        <>
            <div className={styles.tableRow}>
                <div className={styles.column}>
                    <p className={styles.text}>5-6</p>
                </div>
                <div className={styles.column}>
                    <p className={styles.text}>
                        <img src={psg} alt="PSG" className={styles.teamImage}/> PSG.LGD,
                    </p>
                    <p className={styles.text}>
                        <img src={thunder} alt="Thunder" className={styles.teamImage}/> Thunder
                        Awaken
                    </p>
                </div>
                <div className={styles.column}>
                    <p className={styles.text}>$ 593 659</p>
                </div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.column}>
                    <p className={styles.text}>7-8</p>
                </div>
                <div className={styles.column}>
                    <p className={styles.text}>
                        <img src={og} alt="OG" className={styles.teamImage}/> OG
                    </p>
                    <p className={styles.text}>
                        <img src={beastcoast} alt="beastcoast"
                             className={styles.teamImage}/> beastcoast
                    </p>
                </div>
                <div className={styles.column}>
                    <p className={styles.text}>$ 424 085</p>
                </div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.column}>
                    <p className={styles.text}>9-12</p>
                </div>
                <div className={styles.column}>
                    <p className={styles.text}>
                        <img src={boom} alt="Boom" className={styles.teamImage}/> Boom Esports,
                    </p>
                    <p className={styles.text}>
                        <img src={gladiators} alt="Gladiators" className={styles.teamImage}/> Gaimin
                        Gladiators,
                    </p>
                    <p className={styles.text}>
                        <img src={eg} alt="Evil Geniuses" className={styles.teamImage}/> Evil
                        Geniuses,
                    </p>
                    <p className={styles.text}>
                        <img src={entity} alt="Entity" className={styles.teamImage}/> Entity Gaming
                    </p>
                </div>
                <div className={styles.column}>
                    <p className={styles.text}>$ 339 248</p>
                </div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.column}>
                    <p className={styles.text}>13-16</p>
                </div>
                <div className={styles.column}>
                    <p className={styles.text}>
                        <img src={spirit} alt="Team Spirit" className={styles.teamImage}/> Team
                        Spirit,
                    </p>
                    <p className={styles.text}>
                        <img src={fnatic} alt="Fnatic" className={styles.teamImage}/> Fnatic,
                    </p>
                    <p className={styles.text}>
                        <img src={hokori} alt="Hokori" className={styles.teamImage}/> Hokori,
                    </p>
                    <p className={styles.text}>
                        <img src={rng} alt="RNG" className={styles.teamImage}/> Royal Never Give Up
                    </p>
                </div>
                <div className={styles.column}>
                    <p className={styles.text}>$ 254 411</p>
                </div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.column}>
                    <p className={styles.text}>17-18</p>
                </div>
                <div className={styles.column}>
                    <p className={styles.text}>
                        <img src={soniqs} alt="Soniqs" className={styles.teamImage}/> Soniqs,
                    </p>
                    <p className={styles.text}>
                        <img src={talon} alt="Talon" className={styles.teamImage}/> Talon Esports
                    </p>
                </div>
                <div className={styles.column}>
                    <p className={styles.text}>$ 42 318</p>
                </div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.column}>
                    <p className={styles.text}>19-20</p>
                </div>
                <div className={styles.column}>
                    <p className={styles.text}>
                        <img src={tsm} alt="TSM" className={styles.teamImage}/> TSM,
                    </p>
                    <p className={styles.text}>
                        <img src={betboom} alt="BetBoom" className={styles.teamImage}/> BetBoom Team
                    </p>
                </div>
                <div className={styles.column}>
                    <p className={styles.text}>$ 42 318</p>
                </div>
            </div>
        </>
    );
};

export default Results;