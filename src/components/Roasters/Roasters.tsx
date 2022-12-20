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
                    <img src={cn} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Ду
                        <span
                            className={styles.memberSpan}
                        >
                            Monet
                        </span>
                        {' '}
                        Пн
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={cn} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Цзэн
                        <span
                            className={styles.memberSpan}
                        >
                            Ori
                        </span>
                        {' '}
                        Цзяоян
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={cn} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Лин
                        <span
                            className={styles.memberSpan}
                        >
                            Xxs
                        </span>
                        {' '}
                        Дзин
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={cn} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Е
                        <span
                            className={styles.memberSpan}
                        >
                            BoBoKa
                        </span>
                        {' '}
                        Джибяо
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={cn} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Ю
                        <span
                            className={styles.memberSpan}
                        >
                            Fantasy
                        </span>
                        {' '}
                        Яюнь
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
                    <img src={pe} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Кристиан
                        <span
                            className={styles.memberSpan}
                        >
                            Pakazs
                        </span>
                        {' '}
                        Савина
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={pe} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Гонзало
                        <span
                            className={styles.memberSpan}
                        >
                            Darkmago
                        </span>
                        {' '}
                        Эррера
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={pe} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Рафаэль
                        <span
                            className={styles.memberSpan}
                        >
                            Sacred
                        </span>
                        {' '}
                        Йонатан
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={pe} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Фарих
                        <span
                            className={styles.memberSpan}
                        >
                            Matthew
                        </span>
                        {' '}
                        Пуэнес
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={pe} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Леонардо
                        <span
                            className={styles.memberSpan}
                        >
                            Panda
                        </span>
                        {' '}
                        Эрнандес
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
                    <img src={la} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Сулия
                        <span
                            className={styles.memberSpan}
                        >
                            JaCkky
                        </span>
                        {' '}
                        Кхоомфетсавонг
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ph} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Эрин
                        <span
                            className={styles.memberSpan}
                        >
                            Yopaj
                        </span>
                        {' '}
                        Джаспер Феррер
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={id} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Саефул
                        <span
                            className={styles.memberSpan}
                        >
                            Fbz
                        </span>
                        {' '}
                        Ильхам
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ph} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Тимоти
                        <span
                            className={styles.memberSpan}
                        >
                            Tims
                        </span>
                        {' '}
                        Рандрап
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ph} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Ролен Андри
                        <span
                            className={styles.memberSpan}
                        >
                            Skem
                        </span>
                        {' '}
                        Габриэль Онг
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
                    <img src={pe} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Энцо
                        <span
                            className={styles.memberSpan}
                        >
                            Timado
                        </span>
                        {' '}
                        Гианоли
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ca} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Джонатан
                        <span
                            className={styles.memberSpan}
                        >
                            bryle-
                        </span>
                        {' '}
                        Сантос де Гия
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={cz} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Йонас
                        <span
                            className={styles.memberSpan}
                        >
                            SabeRLighT
                        </span>
                        {' '}
                        Волек
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ca} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Дэвид
                        <span
                            className={styles.memberSpan}
                        >
                            MoonMeander
                        </span>
                        {' '}
                        Тан
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={kr} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Ду Ёнг
                        <span
                            className={styles.memberSpan}
                        >
                            DuBu
                        </span>
                        {' '}
                        Ким
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
                    <img src={sk} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Оливер
                        <span
                            className={styles.memberSpan}
                        >
                            Skiter
                        </span>
                        {' '}
                        Лепко
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={de} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Леон
                        <span
                            className={styles.memberSpan}
                        >
                            Nine
                        </span>
                        {' '}
                        Кирилин
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={il} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Нета
                        <span
                            className={styles.memberSpan}
                        >
                            33
                        </span>
                        {' '}
                        Шапира
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={mk} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Мартин
                        <span
                            className={styles.memberSpan}
                        >
                            Saksa
                        </span>
                        {' '}
                        Саздов
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={us} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Цзинцзюн
                        <span
                            className={styles.memberSpan}
                        >
                            Sneyking
                        </span>
                        {' '}
                        У
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
                    <img src={ru} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Антон
                        <span
                            className={styles.memberSpan}
                        >
                            dyrachyo
                        </span>
                        {' '}
                        Шкредов
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={cz} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Мирослав
                        <span
                            className={styles.memberSpan}
                        >
                            BOOM
                        </span>
                        {' '}
                        Бицан
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={dk} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Маркус
                        <span
                            className={styles.memberSpan}
                        >
                            Ace
                        </span>
                        {' '}
                        Хелгард
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={de} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Эрик
                        <span
                            className={styles.memberSpan}
                        >
                            tOfu
                        </span>
                        {' '}
                        Энгель
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={nl} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Мельхиор
                        <span
                            className={styles.memberSpan}
                        >
                            Seleri
                        </span>
                        {' '}
                        Хилленкамп
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
                    <img src={ca} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Артур
                        <span
                            className={styles.memberSpan}
                        >
                            Arteezy
                        </span>
                        {' '}
                        Бабаев
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ph} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Эйбэд Азэль
                        <span
                            className={styles.memberSpan}
                        >
                            Abed
                        </span>
                        {' '}
                        Юсоп
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ru} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Егор
                        <span
                            className={styles.memberSpan}
                        >
                            Nightfall
                        </span>
                        {' '}
                        Григоренко
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={dk} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Андреас Франк
                        <span
                            className={styles.memberSpan}
                        >
                            Cr1t-
                        </span>
                        {' '}
                        Нильсен
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={il} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Таль
                        <span
                            className={styles.memberSpan}
                        >
                            Fly
                        </span>
                        {' '}
                        Айзик
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
                    <img src={ph} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Марк
                        <span
                            className={styles.memberSpan}
                        >
                            Raven
                        </span>
                        {' '}
                        Фаусто
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ph} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Армель Пауль
                        <span
                            className={styles.memberSpan}
                        >
                            Armel
                        </span>
                        {' '}
                        Тэбиос
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={th} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Ануча
                        <span
                            className={styles.memberSpan}
                        >
                            Jabz
                        </span>
                        {' '}
                        Джиравонг
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ph} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Джардел Джико
                        <span
                            className={styles.memberSpan}
                        >
                            DJ
                        </span>
                        {' '}
                        Мампусти
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ph} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Жунюэль
                        <span
                            className={styles.memberSpan}
                        >
                            Jaunuel
                        </span>
                        {' '}
                        Арцилла
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
                    <img src={us} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Явар
                        <span
                            className={styles.memberSpan}
                        >
                            YawaR
                        </span>
                        {' '}
                        Хассан
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={us} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Квин
                        <span
                            className={styles.memberSpan}
                        >
                            Quinn
                        </span>
                        {' '}
                        Каллахан
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={br} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Родриго
                        <span
                            className={styles.memberSpan}
                        >
                            Lelis
                        </span>
                        {' '}
                        Лелис Сантос
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={us} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Ариф
                        <span
                            className={styles.memberSpan}
                        >
                            MSS
                        </span>
                        {' '}
                        Анвар
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={de} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Адриан
                        <span
                            className={styles.memberSpan}
                        >
                            Fata
                        </span>
                        {' '}
                        Тринкс
                    </p>
                </li>
                <div className={styles.qualifier}>
                    <p className={styles.qualifierText}>TI 2022. Отборочные</p>
                </div>
            </ul>
            <ul className={styles.teamsTable}>
                <div className={styles.tableHeadingTeams}>
                    <img src={hokori} alt="Hokori" className={styles.tableHeadingImage} />
                    <h2 className={styles.tableHeadingText}>Hokori</h2>
                </div>
                <li className={styles.teamMember}>
                    <img src={pe} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Эдвард
                        <span
                            className={styles.memberSpan}
                        >
                            Lumiere
                        </span>
                        {' '}
                        Гильен
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={br} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Жоао
                        <span
                            className={styles.memberSpan}
                        >
                            BOOM
                        </span>
                        {' '}
                        Джаннини
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={pe} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Пабло
                        <span
                            className={styles.memberSpan}
                        >
                            Vitaly
                        </span>
                        {' '}
                        Ангуло
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={br} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Тиаго
                        <span
                            className={styles.memberSpan}
                        >
                            Thiolicor
                        </span>
                        {' '}
                        Колдейро
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={pe} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Энтони
                        <span
                            className={styles.memberSpan}
                        >
                            Gardick
                        </span>
                        {' '}
                        Лопез
                    </p>
                </li>
                <div className={styles.qualifier}>
                    <p className={styles.qualifierText}>TI 2022. Отборочные</p>
                </div>
            </ul>
            <ul className={styles.teamsTable}>
                <div className={styles.tableHeadingTeams}>
                    <img src={entity} alt="Entity" className={styles.tableHeadingImage} />
                    <h2 className={styles.tableHeadingText}>Entity</h2>
                </div>
                <li className={styles.teamMember}>
                    <img src={ru} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Иван
                        <span
                            className={styles.memberSpan}
                        >
                            Pure
                        </span>
                        {' '}
                        Москаленко
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={de} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Даниэль
                        <span
                            className={styles.memberSpan}
                        >
                            Stormstormer
                        </span>
                        {' '}
                        Шоетзау
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={at} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Тобиас
                        <span
                            className={styles.memberSpan}
                        >
                            Tobi
                        </span>
                        {' '}
                        Бучнер
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ru} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Владислав
                        <span
                            className={styles.memberSpan}
                        >
                            Kataomi
                        </span>
                        {' '}
                        Семенов
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={by} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Дмитрий
                        <span
                            className={styles.memberSpan}
                        >
                            Fishman
                        </span>
                        {' '}
                        Полищук
                    </p>
                </li>
                <div className={styles.qualifier}>
                    <p className={styles.qualifierText}>TI 2022. Отборочные</p>
                </div>
            </ul>
            <ul className={styles.teamsTable}>
                <div className={styles.tableHeadingTeams}>
                    <img src={betboom} alt="BetBoom" className={styles.tableHeadingImage} />
                    <h2 className={styles.tableHeadingText}>BetBoom Team</h2>
                </div>
                <li className={styles.teamMember}>
                    <img src={ru} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Никита
                        <span
                            className={styles.memberSpan}
                        >
                            Daxak
                        </span>
                        {' '}
                        Кузьмин
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ru} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Денис
                        <span
                            className={styles.memberSpan}
                        >
                            IarI
                        </span>
                        {' '}
                        Сигитов
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ru} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Евгений
                        <span
                            className={styles.memberSpan}
                        >
                            Noticed
                        </span>
                        {' '}
                        Игнатенко
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ru} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Владимир
                        <span
                            className={styles.memberSpan}
                        >
                            RodjER
                        </span>
                        {' '}
                        Никогосян
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ru} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Акбар
                        <span
                            className={styles.memberSpan}
                        >
                            SoNNeikO
                        </span>
                        {' '}
                        Бутаев
                    </p>
                </li>
                <div className={styles.qualifier}>
                    <p className={styles.qualifierText}>TI 2022. Отборочные</p>
                </div>
            </ul>
            <ul className={styles.teamsTable}>
                <div className={styles.tableHeadingTeams}>
                    <img src={rng} alt="RNG" className={styles.tableHeadingImage} />
                    <h2 className={styles.tableHeadingText}>Royal Never Give Up</h2>
                </div>
                <li className={styles.teamMember}>
                    <img src={my} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Даниэль
                        <span
                            className={styles.memberSpan}
                        >
                            Ghost
                        </span>
                        {' '}
                        Чан
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={cn} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Лу
                        <span
                            className={styles.memberSpan}
                        >
                            Somnus M
                        </span>
                        {' '}
                        Я
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={cn} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Ян
                        <span
                            className={styles.memberSpan}
                        >
                            Chalice
                        </span>
                        {' '}
                        Шэньи
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={cn} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Ху
                        <span
                            className={styles.memberSpan}
                        >
                            Kaka
                        </span>
                        {' '}
                        Лянчжи
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={my} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Джиан Вей
                        <span
                            className={styles.memberSpan}
                        >
                            xNova
                        </span>
                        {' '}
                        Яп
                    </p>
                </li>
                <div className={styles.qualifier}>
                    <p className={styles.qualifierText}>TI 2022. Отборочные</p>
                </div>
            </ul>
            <ul className={styles.teamsTable}>
                <div className={styles.tableHeadingTeams}>
                    <img src={talon} alt="Talon" className={styles.tableHeadingImage} />
                    <h2 className={styles.tableHeadingText}>Talon Esports</h2>
                </div>
                <li className={styles.teamMember}>
                    <img src={th} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Ньенгнара
                        <span
                            className={styles.memberSpan}
                        >
                            23savage
                        </span>
                        {' '}
                        Тирамаханон
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={id} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Рафлай
                        <span
                            className={styles.memberSpan}
                        >
                            Mikoto
                        </span>
                        {' '}
                        Фатур
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={au} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Дэмиен
                        <span
                            className={styles.memberSpan}
                        >
                            kpii
                        </span>
                        {' '}
                        Чок
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={th} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Ворвавит
                        <span
                            className={styles.memberSpan}
                        >
                            Q
                        </span>
                        {' '}
                        Мекчай
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={id} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Брицио
                        <span
                            className={styles.memberSpan}
                        >
                            Hyde
                        </span>
                        {' '}
                        Ади Путра
                    </p>
                </li>
                <div className={styles.qualifier}>
                    <p className={styles.qualifierText}>TI 2022. Отборочные</p>
                </div>
            </ul>
            <ul className={styles.teamsTable}>
                <div className={styles.tableHeadingTeams}>
                    <img src={secret} alt="Secret" className={styles.tableHeadingImage} />
                    <h2 className={styles.tableHeadingText}>Team Secret</h2>
                </div>
                <li className={styles.teamMember}>
                    <img src={nl} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Ремко
                        <span
                            className={styles.memberSpan}
                        >
                            Crystallis
                        </span>
                        {' '}
                        Аретс
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={pl} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Михаил
                        <span
                            className={styles.memberSpan}
                        >
                            Nisha
                        </span>
                        {' '}
                        Янковски
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ua} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Роман
                        <span
                            className={styles.memberSpan}
                        >
                            Resolut1on
                        </span>
                        {' '}
                        Фоменок
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={kg} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Бакыт
                        <span
                            className={styles.memberSpan}
                        >
                            Zayac
                        </span>
                        {' '}
                        Эмилжанов
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={ee} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Клемент
                        <span
                            className={styles.memberSpan}
                        >
                            Pyppey
                        </span>
                        {' '}
                        Иванов
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
                    <img src={fi} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Лассе
                        <span
                            className={styles.memberSpan}
                        >
                            MATUMBAMAN
                        </span>
                        {' '}
                        Урпалайнен
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={se} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Майк
                        <span
                            className={styles.memberSpan}
                        >
                            miCKe
                        </span>
                        {' '}
                        Ву
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={se} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Людвиг
                        <span
                            className={styles.memberSpan}
                        >
                            zai
                        </span>
                        {' '}
                        Уолберг
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={se} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Самуэль
                        <span
                            className={styles.memberSpan}
                        >
                            Boxi
                        </span>
                        {' '}
                        Сван
                    </p>
                </li>
                <li className={styles.teamMember}>
                    <img src={se} alt="Флаг" className={styles.memberFlag} />
                    <p className={styles.memberText}>
                        Айдэн
                        <span
                            className={styles.memberSpan}
                        >
                            iNSaNiA
                        </span>
                        {' '}
                        Саркои
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
