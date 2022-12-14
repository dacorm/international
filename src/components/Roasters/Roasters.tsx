import React, { useEffect, useState } from 'react';
import styles from '../../pages/Tournament.module.css';
import aster from '../../assets/images/intTeams/aster.jpg';
import cn from '../../assets/images/flags/cn.png';
import thunder from '../../assets/images/intTeams/thunder.jpg';
import pe from '../../assets/images/flags/pe.png';
import boom from '../../assets/images/intTeams/boom.jpg';
import la from '../../assets/images/flags/la.png';
import ph from '../../assets/images/flags/ph.png';
import id from '../../assets/images/flags/id.png';
import tsm from '../../assets/images/intTeams/tsm.jpg';
import ca from '../../assets/images/flags/ca.png';
import cz from '../../assets/images/flags/cz.png';
import kr from '../../assets/images/flags/kr.png';
import tundra from '../../assets/images/intTeams/tundra.jpg';
import sk from '../../assets/images/flags/sk.png';
import de from '../../assets/images/flags/de.png';
import il from '../../assets/images/flags/il.png';
import mk from '../../assets/images/flags/mk.png';
import us from '../../assets/images/flags/us.png';
import gladiators from '../../assets/images/intTeams/gladiators.jpg';
import ru from '../../assets/images/flags/ru.png';
import dk from '../../assets/images/flags/dk.png';
import nl from '../../assets/images/flags/nl.png';
import eg from '../../assets/images/intTeams/evilgeniuses.jpg';
import fnatic from '../../assets/images/intTeams/fnatic.jpg';
import th from '../../assets/images/flags/th.png';
import soniqs from '../../assets/images/intTeams/soniqs.jpg';
import br from '../../assets/images/flags/br.png';
import hokori from '../../assets/images/intTeams/hokori.jpg';
import entity from '../../assets/images/intTeams/entity.webp';
import at from '../../assets/images/flags/at.png';
import by from '../../assets/images/flags/by.png';
import betboom from '../../assets/images/intTeams/betboom.webp';
import rng from '../../assets/images/intTeams/rng.webp';
import my from '../../assets/images/flags/my.png';
import talon from '../../assets/images/intTeams/talon.webp';
import au from '../../assets/images/flags/au.png';
import secret from '../../assets/images/intTeams/secret.webp';
import pl from '../../assets/images/flags/pl.png';
import ua from '../../assets/images/flags/ua.png';
import kg from '../../assets/images/flags/kg.png';
import ee from '../../assets/images/flags/ee.png';
import liquid from '../../assets/images/intTeams/liquid.webp';
import fi from '../../assets/images/flags/fi.png';
import se from '../../assets/images/flags/se.png';

type RoastersProps = {
    lazy: boolean
    isOpen: boolean
}

const Roasters: React.FC<RoastersProps> = ({ lazy, isOpen }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <>
            <ul className={styles.teamsTable}>
                <div className={styles.tableHeadingTeams}>
                    <img src={aster} alt="Aster" className={styles.tableHeadingImage} />
                    <h2 className={styles.tableHeadingText}>Team Aster</h2>
                </div>
                <li className={styles.teamMember}>
                    <img src={cn} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????
                        <span
                            className={styles.memberSpan}
                        >
                            Monet
                        </span>
                        {' '}
                        ????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={cn} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????
                        <span
                            className={styles.memberSpan}
                        >
                            Ori
                        </span>
                        {' '}
                        ????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={cn} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ??????
                        <span
                            className={styles.memberSpan}
                        >
                            Xxs
                        </span>
                        {' '}
                        ????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={cn} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ??
                        <span
                            className={styles.memberSpan}
                        >
                            BoBoKa
                        </span>
                        {' '}
                        ????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={cn} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ??
                        <span
                            className={styles.memberSpan}
                        >
                            Fantasy
                        </span>
                        {' '}
                        ????????
                    </p>
                </li>
                <div className={styles.qualifier}>
                    <p className={styles.qualifierText}>DPC #5</p>
                </div>
            </ul>
            <ul className={styles.teamsTable}>
                <div className={styles.tableHeadingTeams}>
                    <img src={thunder} alt="Thunder" className={styles.tableHeadingImage} />
                    <h2 className={styles.tableHeadingText}>Thunder Awaken</h2>
                </div>
                <li className={styles.teamMember}>
                    <img src={pe} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????????????
                        <span
                            className={styles.memberSpan}
                        >
                            Pakazs
                        </span>
                        {' '}
                        ????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={pe} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ??????????????
                        <span
                            className={styles.memberSpan}
                        >
                            Darkmago
                        </span>
                        {' '}
                        ????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={pe} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ??????????????
                        <span
                            className={styles.memberSpan}
                        >
                            Sacred
                        </span>
                        {' '}
                        ??????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={pe} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ??????????
                        <span
                            className={styles.memberSpan}
                        >
                            Matthew
                        </span>
                        {' '}
                        ????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={pe} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????????????
                        <span
                            className={styles.memberSpan}
                        >
                            Panda
                        </span>
                        {' '}
                        ????????????????
                    </p>
                </li>
                <div className={styles.qualifier}>
                    <p className={styles.qualifierText}>DPC #6</p>
                </div>
            </ul>
            <ul className={styles.teamsTable}>
                <div className={styles.tableHeadingTeams}>
                    <img src={boom} alt="Boom" className={styles.tableHeadingImage} />
                    <h2 className={styles.tableHeadingText}>BOOM Esports</h2>
                </div>
                <li className={styles.teamMember}>
                    <img src={la} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ??????????
                        <span
                            className={styles.memberSpan}
                        >
                            JaCkky
                        </span>
                        {' '}
                        ????????????????????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ph} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????
                        <span
                            className={styles.memberSpan}
                        >
                            Yopaj
                        </span>
                        {' '}
                        ?????????????? ????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={id} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????????
                        <span
                            className={styles.memberSpan}
                        >
                            Fbz
                        </span>
                        {' '}
                        ????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ph} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????????
                        <span
                            className={styles.memberSpan}
                        >
                            Tims
                        </span>
                        {' '}
                        ??????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ph} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ?????????? ??????????
                        <span
                            className={styles.memberSpan}
                        >
                            Skem
                        </span>
                        {' '}
                        ???????????????? ??????
                    </p>
                </li>
                <div className={styles.qualifier}>
                    <p className={styles.qualifierText}>DPC #7</p>
                </div>
            </ul>
            <ul className={styles.teamsTable}>
                <div className={styles.tableHeadingTeams}>
                    <img src={tsm} alt="TSM" className={styles.tableHeadingImage} />
                    <h2 className={styles.tableHeadingText}>TSM FTX</h2>
                </div>
                <li className={styles.teamMember}>
                    <img src={pe} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????
                        <span
                            className={styles.memberSpan}
                        >
                            Timado
                        </span>
                        {' '}
                        ??????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ca} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????????????
                        <span
                            className={styles.memberSpan}
                        >
                            bryle-
                        </span>
                        {' '}
                        ???????????? ???? ??????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={cz} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ??????????
                        <span
                            className={styles.memberSpan}
                        >
                            SabeRLighT
                        </span>
                        {' '}
                        ??????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ca} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ??????????
                        <span
                            className={styles.memberSpan}
                        >
                            MoonMeander
                        </span>
                        {' '}
                        ??????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={kr} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ???? ??????
                        <span
                            className={styles.memberSpan}
                        >
                            DuBu
                        </span>
                        {' '}
                        ??????
                    </p>
                </li>
                <div className={styles.qualifier}>
                    <p className={styles.qualifierText}>DPC #8</p>
                </div>
            </ul>
            <ul className={styles.teamsTable}>
                <div className={styles.tableHeadingTeams}>
                    <img src={tundra} alt="Tundra" className={styles.tableHeadingImage} />
                    <h2 className={styles.tableHeadingText}>Tundra Esports</h2>
                </div>
                <li className={styles.teamMember}>
                    <img src={sk} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????????
                        <span
                            className={styles.memberSpan}
                        >
                            Skiter
                        </span>
                        {' '}
                        ??????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={de} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????
                        <span
                            className={styles.memberSpan}
                        >
                            Nine
                        </span>
                        {' '}
                        ??????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={il} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????
                        <span
                            className={styles.memberSpan}
                        >
                            33
                        </span>
                        {' '}
                        ????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={mk} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????????
                        <span
                            className={styles.memberSpan}
                        >
                            Saksa
                        </span>
                        {' '}
                        ????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={us} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????????????
                        <span
                            className={styles.memberSpan}
                        >
                            Sneyking
                        </span>
                        {' '}
                        ??
                    </p>
                </li>
                <div className={styles.qualifier}>
                    <p className={styles.qualifierText}>DPC #9</p>
                </div>
            </ul>
            <ul className={styles.teamsTable}>
                <div className={styles.tableHeadingTeams}>
                    <img src={gladiators} alt="Gladiators" className={styles.tableHeadingImage} />
                    <h2 className={styles.tableHeadingText}>Gladiators</h2>
                </div>
                <li className={styles.teamMember}>
                    <img src={ru} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ??????????
                        <span
                            className={styles.memberSpan}
                        >
                            dyrachyo
                        </span>
                        {' '}
                        ??????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={cz} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????????????
                        <span
                            className={styles.memberSpan}
                        >
                            BOOM
                        </span>
                        {' '}
                        ??????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={dk} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????????
                        <span
                            className={styles.memberSpan}
                        >
                            Ace
                        </span>
                        {' '}
                        ??????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={de} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????
                        <span
                            className={styles.memberSpan}
                        >
                            tOfu
                        </span>
                        {' '}
                        ????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={nl} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????????????
                        <span
                            className={styles.memberSpan}
                        >
                            Seleri
                        </span>
                        {' '}
                        ????????????????????
                    </p>
                </li>
                <div className={styles.qualifier}>
                    <p className={styles.qualifierText}>DPC #10</p>
                </div>
            </ul>
            <ul className={styles.teamsTable}>
                <div className={styles.tableHeadingTeams}>
                    <img src={eg} alt="EvilGeniuses" className={styles.tableHeadingImage} />
                    <h2 className={styles.tableHeadingText}>Evil Geniuses</h2>
                </div>
                <li className={styles.teamMember}>
                    <img src={ca} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ??????????
                        <span
                            className={styles.memberSpan}
                        >
                            Arteezy
                        </span>
                        {' '}
                        ????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ph} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ?????????? ??????????
                        <span
                            className={styles.memberSpan}
                        >
                            Abed
                        </span>
                        {' '}
                        ????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ru} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????
                        <span
                            className={styles.memberSpan}
                        >
                            Nightfall
                        </span>
                        {' '}
                        ????????????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={dk} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ?????????????? ??????????
                        <span
                            className={styles.memberSpan}
                        >
                            Cr1t-
                        </span>
                        {' '}
                        ??????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={il} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????
                        <span
                            className={styles.memberSpan}
                        >
                            Fly
                        </span>
                        {' '}
                        ??????????
                    </p>
                </li>
                <div className={styles.qualifier}>
                    <p className={styles.qualifierText}>DPC #11</p>
                </div>
            </ul>
            <ul className={styles.teamsTable}>
                <div className={styles.tableHeadingTeams}>
                    <img src={fnatic} alt="Fnatic" className={styles.tableHeadingImage} />
                    <h2 className={styles.tableHeadingText}>Fnatic</h2>
                </div>
                <li className={styles.teamMember}>
                    <img src={ph} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????
                        <span
                            className={styles.memberSpan}
                        >
                            Raven
                        </span>
                        {' '}
                        ????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ph} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ???????????? ??????????
                        <span
                            className={styles.memberSpan}
                        >
                            Armel
                        </span>
                        {' '}
                        ????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={th} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ??????????
                        <span
                            className={styles.memberSpan}
                        >
                            Jabz
                        </span>
                        {' '}
                        ??????????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ph} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ?????????????? ??????????
                        <span
                            className={styles.memberSpan}
                        >
                            DJ
                        </span>
                        {' '}
                        ????????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ph} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ??????????????
                        <span
                            className={styles.memberSpan}
                        >
                            Jaunuel
                        </span>
                        {' '}
                        ??????????????
                    </p>
                </li>
                <div className={styles.qualifier}>
                    <p className={styles.qualifierText}>DPC #12</p>
                </div>
            </ul>
            <ul className={styles.teamsTable}>
                <div className={styles.tableHeadingTeams}>
                    <img src={soniqs} alt="Soniqs" className={styles.tableHeadingImage} />
                    <h2 className={styles.tableHeadingText}>Soniqs</h2>
                </div>
                <li className={styles.teamMember}>
                    <img src={us} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????
                        <span
                            className={styles.memberSpan}
                        >
                            YawaR
                        </span>
                        {' '}
                        ????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={us} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????
                        <span
                            className={styles.memberSpan}
                        >
                            Quinn
                        </span>
                        {' '}
                        ????????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={br} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ??????????????
                        <span
                            className={styles.memberSpan}
                        >
                            Lelis
                        </span>
                        {' '}
                        ?????????? ????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={us} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????
                        <span
                            className={styles.memberSpan}
                        >
                            MSS
                        </span>
                        {' '}
                        ??????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={de} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????????
                        <span
                            className={styles.memberSpan}
                        >
                            Fata
                        </span>
                        {' '}
                        ????????????
                    </p>
                </li>
                <div className={styles.qualifier}>
                    <p className={styles.qualifierText}>TI 2022. ????????????????????</p>
                </div>
            </ul>
            <ul className={styles.teamsTable}>
                <div className={styles.tableHeadingTeams}>
                    <img src={hokori} alt="Hokori" className={styles.tableHeadingImage} />
                    <h2 className={styles.tableHeadingText}>Hokori</h2>
                </div>
                <li className={styles.teamMember}>
                    <img src={pe} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????????
                        <span
                            className={styles.memberSpan}
                        >
                            Lumiere
                        </span>
                        {' '}
                        ????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={br} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????
                        <span
                            className={styles.memberSpan}
                        >
                            BOOM
                        </span>
                        {' '}
                        ????????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={pe} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ??????????
                        <span
                            className={styles.memberSpan}
                        >
                            Vitaly
                        </span>
                        {' '}
                        ????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={br} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ??????????
                        <span
                            className={styles.memberSpan}
                        >
                            Thiolicor
                        </span>
                        {' '}
                        ????????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={pe} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????????
                        <span
                            className={styles.memberSpan}
                        >
                            Gardick
                        </span>
                        {' '}
                        ??????????
                    </p>
                </li>
                <div className={styles.qualifier}>
                    <p className={styles.qualifierText}>TI 2022. ????????????????????</p>
                </div>
            </ul>
            <ul className={styles.teamsTable}>
                <div className={styles.tableHeadingTeams}>
                    <img src={entity} alt="Entity" className={styles.tableHeadingImage} />
                    <h2 className={styles.tableHeadingText}>Entity</h2>
                </div>
                <li className={styles.teamMember}>
                    <img src={ru} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????
                        <span
                            className={styles.memberSpan}
                        >
                            Pure
                        </span>
                        {' '}
                        ????????????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={de} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ??????????????
                        <span
                            className={styles.memberSpan}
                        >
                            Stormstormer
                        </span>
                        {' '}
                        ??????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={at} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????????
                        <span
                            className={styles.memberSpan}
                        >
                            Tobi
                        </span>
                        {' '}
                        ????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ru} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ??????????????????
                        <span
                            className={styles.memberSpan}
                        >
                            Kataomi
                        </span>
                        {' '}
                        ??????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={by} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ??????????????
                        <span
                            className={styles.memberSpan}
                        >
                            Fishman
                        </span>
                        {' '}
                        ??????????????
                    </p>
                </li>
                <div className={styles.qualifier}>
                    <p className={styles.qualifierText}>TI 2022. ????????????????????</p>
                </div>
            </ul>
            <ul className={styles.teamsTable}>
                <div className={styles.tableHeadingTeams}>
                    <img src={betboom} alt="BetBoom" className={styles.tableHeadingImage} />
                    <h2 className={styles.tableHeadingText}>BetBoom Team</h2>
                </div>
                <li className={styles.teamMember}>
                    <img src={ru} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????????
                        <span
                            className={styles.memberSpan}
                        >
                            Daxak
                        </span>
                        {' '}
                        ??????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ru} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ??????????
                        <span
                            className={styles.memberSpan}
                        >
                            IarI
                        </span>
                        {' '}
                        ??????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ru} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ??????????????
                        <span
                            className={styles.memberSpan}
                        >
                            Noticed
                        </span>
                        {' '}
                        ??????????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ru} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????????????
                        <span
                            className={styles.memberSpan}
                        >
                            RodjER
                        </span>
                        {' '}
                        ??????????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ru} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ??????????
                        <span
                            className={styles.memberSpan}
                        >
                            SoNNeikO
                        </span>
                        {' '}
                        ????????????
                    </p>
                </li>
                <div className={styles.qualifier}>
                    <p className={styles.qualifierText}>TI 2022. ????????????????????</p>
                </div>
            </ul>
            <ul className={styles.teamsTable}>
                <div className={styles.tableHeadingTeams}>
                    <img src={rng} alt="RNG" className={styles.tableHeadingImage} />
                    <h2 className={styles.tableHeadingText}>Royal Never Give Up</h2>
                </div>
                <li className={styles.teamMember}>
                    <img src={my} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ??????????????
                        <span
                            className={styles.memberSpan}
                        >
                            Ghost
                        </span>
                        {' '}
                        ??????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={cn} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????
                        <span
                            className={styles.memberSpan}
                        >
                            Somnus M
                        </span>
                        {' '}
                        ??
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={cn} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????
                        <span
                            className={styles.memberSpan}
                        >
                            Chalice
                        </span>
                        {' '}
                        ??????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={cn} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????
                        <span
                            className={styles.memberSpan}
                        >
                            Kaka
                        </span>
                        {' '}
                        ????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={my} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ?????????? ??????
                        <span
                            className={styles.memberSpan}
                        >
                            xNova
                        </span>
                        {' '}
                        ????
                    </p>
                </li>
                <div className={styles.qualifier}>
                    <p className={styles.qualifierText}>TI 2022. ????????????????????</p>
                </div>
            </ul>
            <ul className={styles.teamsTable}>
                <div className={styles.tableHeadingTeams}>
                    <img src={talon} alt="Talon" className={styles.tableHeadingImage} />
                    <h2 className={styles.tableHeadingText}>Talon Esports</h2>
                </div>
                <li className={styles.teamMember}>
                    <img src={th} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ??????????????????
                        <span
                            className={styles.memberSpan}
                        >
                            23savage
                        </span>
                        {' '}
                        ??????????????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={id} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????????
                        <span
                            className={styles.memberSpan}
                        >
                            Mikoto
                        </span>
                        {' '}
                        ??????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={au} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????????
                        <span
                            className={styles.memberSpan}
                        >
                            kpii
                        </span>
                        {' '}
                        ??????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={th} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????????????
                        <span
                            className={styles.memberSpan}
                        >
                            Q
                        </span>
                        {' '}
                        ????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={id} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????????
                        <span
                            className={styles.memberSpan}
                        >
                            Hyde
                        </span>
                        {' '}
                        ?????? ??????????
                    </p>
                </li>
                <div className={styles.qualifier}>
                    <p className={styles.qualifierText}>TI 2022. ????????????????????</p>
                </div>
            </ul>
            <ul className={styles.teamsTable}>
                <div className={styles.tableHeadingTeams}>
                    <img src={secret} alt="Secret" className={styles.tableHeadingImage} />
                    <h2 className={styles.tableHeadingText}>Team Secret</h2>
                </div>
                <li className={styles.teamMember}>
                    <img src={nl} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ??????????
                        <span
                            className={styles.memberSpan}
                        >
                            Crystallis
                        </span>
                        {' '}
                        ??????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={pl} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????????
                        <span
                            className={styles.memberSpan}
                        >
                            Nisha
                        </span>
                        {' '}
                        ????????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ua} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ??????????
                        <span
                            className={styles.memberSpan}
                        >
                            Resolut1on
                        </span>
                        {' '}
                        ??????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={kg} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ??????????
                        <span
                            className={styles.memberSpan}
                        >
                            Zayac
                        </span>
                        {' '}
                        ??????????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ee} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ??????????????
                        <span
                            className={styles.memberSpan}
                        >
                            Pyppey
                        </span>
                        {' '}
                        ????????????
                    </p>
                </li>
                <div className={styles.qualifier}>
                    <p className={styles.qualifierText}>TI 11: Last Chance</p>
                </div>
            </ul>
            <ul className={styles.teamsTable}>
                <div className={styles.tableHeadingTeams}>
                    <img src={liquid} alt="Liquid" className={styles.tableHeadingImage} />
                    <h2 className={styles.tableHeadingText}>Team Liquid</h2>
                </div>
                <li className={styles.teamMember}>
                    <img src={fi} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ??????????
                        <span
                            className={styles.memberSpan}
                        >
                            MATUMBAMAN
                        </span>
                        {' '}
                        ????????????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={se} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????
                        <span
                            className={styles.memberSpan}
                        >
                            miCKe
                        </span>
                        {' '}
                        ????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={se} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ????????????
                        <span
                            className={styles.memberSpan}
                        >
                            zai
                        </span>
                        {' '}
                        ??????????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={se} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ??????????????
                        <span
                            className={styles.memberSpan}
                        >
                            Boxi
                        </span>
                        {' '}
                        ????????
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={se} alt="????????" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        ??????????
                        <span
                            className={styles.memberSpan}
                        >
                            iNSaNiA
                        </span>
                        {' '}
                        ????????????
                    </p>
                </li>
                <div className={styles.qualifier}>
                    <p className={styles.qualifierText}>TI 11: Last Chance</p>
                </div>
            </ul>
        </>
    );
};

export default Roasters;
