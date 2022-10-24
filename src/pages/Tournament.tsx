import React, {useEffect, useState} from 'react';
import Header from "../components/Header/Header";
import WhiteHeading from "../components/WhiteHeading/WhiteHeading";
import styles from "./Tournament.module.css";
import TextSlide from "../components/TextSlide/TextSlide";
import Footer from "../components/Footer/Footer";
import tourn from '../assets/images/711.jpg';
import TournamentMatch from "../components/TournamentMatch/TournamentMatch";
import {withErrorBoundary} from "react-error-boundary";
import Layout from "../components/Layout/Layout";
import {Event, TopEvents} from "../@types/serverType";
import axios from "axios";
import FallbackLoader from "../components/FallbackLoader/FallbackLoader";
import {unixTimeStampConverter, unixTimeStampConverterToTime} from "../helpers/unixConverters";
import {monthConverter} from "../helpers/monthConverter";
import psg from '../assets/images/intTeams/psg.webp';
import cn from '../assets/images/flags/cn.png';
import us from '../assets/images/flags/us.png';
import bg from '../assets/images/flags/bg.png';
import jr from '../assets/images/flags/jr.png';
import no from '../assets/images/flags/no.png';
import ru from '../assets/images/flags/ru.png';
import ua from '../assets/images/flags/ua.png';
import og from '../assets/images/intTeams/og.jpg';
import spirit from '../assets/images/intTeams/spirit.jpg';
import beastcoast from '../assets/images/intTeams/beastcoast.jpg';
import bo from '../assets/images/flags/bo.png';
import pe from '../assets/images/flags/pe.png';
import aster from '../assets/images/intTeams/aster.jpg';
import thunder from '../assets/images/intTeams/thunder.jpg';
import ph from '../assets/images/flags/ph.png';
import la from '../assets/images/flags/la.png';
import id from '../assets/images/flags/id.png';
import boom from '../assets/images/intTeams/boom.jpg';
import kr from '../assets/images/flags/kr.png';
import cz from '../assets/images/flags/cz.png';
import ca from '../assets/images/flags/ca.png';
import tsm from '../assets/images/intTeams/tsm.jpg';
import il from '../assets/images/flags/il.png';
import de from '../assets/images/flags/de.png';
import mk from '../assets/images/flags/mk.png';
import sk from '../assets/images/flags/sk.png';
import tundra from '../assets/images/intTeams/tundra.jpg';
import gladiators from '../assets/images/intTeams/gladiators.jpg';
import dk from '../assets/images/flags/dk.png';
import nl from '../assets/images/flags/nl.png';
import eg from '../assets/images/intTeams/evilgeniuses.jpg';
import th from '../assets/images/flags/th.png';
import fnatic from '../assets/images/intTeams/fnatic.jpg';
import soniqs from '../assets/images/intTeams/soniqs.jpg';
import hokori from '../assets/images/intTeams/hokori.jpg';
import br from '../assets/images/flags/br.png';
import at from '../assets/images/flags/at.png';
import by from '../assets/images/flags/by.png';
import betboom from '../assets/images/intTeams/betboom.webp';
import entity from '../assets/images/intTeams/entity.webp';
import my from '../assets/images/flags/my.png';
import au from '../assets/images/flags/au.png';
import rng from '../assets/images/intTeams/rng.webp';
import talon from '../assets/images/intTeams/talon.webp';
import secret from '../assets/images/intTeams/secret.webp';
import liquid from '../assets/images/intTeams/liquid.webp';
import fi from '../assets/images/flags/fi.png';
import kg from '../assets/images/flags/kg.png';
import pl from '../assets/images/flags/pl.png';
import se from '../assets/images/flags/se.png';
import ee from '../assets/images/flags/ee.png';
import drop from "../assets/images/expand_more_FILL0_wght400_GRAD0_opsz48.svg";

const Tournament = () => {
    const [items, setItems] = useState<TopEvents>();
    const [topEvents, setTopEvents] = useState<Event[]>();
    const [open, setOpen] = useState(false);

    const showTeams = () => {
        setOpen(true);
    }

    const fetchData = async () => {
        const { data } = await axios.get('https://line04w.bk6bba-resources.com/line/desktop/topEvents3?place=live&sysId=1&lang=ru&salt=2o9hzyrwfmwl9cnms46&scopeMarket=1600');
        setItems(data);
    }

    const filterEvents = () => {
        let filteredArr: Event[] = [];
        if (items) {
            for (let i = 0; i < items.events.length; i++) {
                if (items.events[i].competitionCaption.includes('Dota 2. The International.')) {
                    filteredArr.push(items.events[i]);
                }
            }
        }
        setTopEvents(filteredArr);
    }

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
       filterEvents();
    }, [items])

    if (!topEvents) {
        return <FallbackLoader />
    }

    return (
        <Layout
            seoDescription='Турнирная сетка матчей The International 2022 по Dota 2 – расписание, турнирная сетка, состав команд, результаты'
            seoTitle='Турнирная сетка матчей The International 2022 по ДОТА2'
            title='Турнирная сетка матчей The International 2022'>
            <div className={styles.content}>
                <div className={styles.tournamentInfo}>
                    <h2 className={styles.listHeading}>Турнир The International 2022 по Dota 2
                    </h2>
                    <div className={styles.separator}/>
                    <div className={styles.tournament}>
                        <img src={tourn} alt="Турнир" className={styles.tournamentImage}/>
                        <div className={styles.tournamentText}>
                            <p className={styles.text}>
                                Дата начала: <span className={styles.span}>15 Окт 2022</span>
                            </p>
                            <p className={styles.text}>
                                Дата завершения: <span className={styles.span}>30 Окт 2022</span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.textBlock}>
                        <p>Осенью этого года состоится важный киберспортивный турнир, даты начала и завершения основной
                            части соревнования 15 и 30 октября соответственно. Дисциплина &ndash; Дота, призовой фонд
                            1,6 млн. долларов США, место проведения &ndash; Сингапур. Второй раз в истории соревнование
                            пройдет на азиатском континенте (11 подобное событие). Организатором является американская
                            корпорация Valve &ndash; разработчик и издатель видеоигр.</p>

                        <h2>Формат, условия участия</h2>

                        <p>В турнире по Дота international 2022 примут участие два десятка команд, но пройти в финал
                            смогут только лучшие из них. Битва за звание чемпиона будет двухдневной, в качестве площадки
                            выбран Сингапурский крытый стадион. Главной встрече предшествуют две стадии (даты указаны в
                            скобках):</p>

                        <ol>
                            <li>Квалификация (8-12). Сыграют вторые и третьи места первенств регионов &ndash; дюжина
                                коллективов, между которыми будут распределены два входа.
                            </li>
                            <li>Групповой этап (15-18). Пройдут матчи с участием двенадцати клубов-победителей
                                завершившегося сезона Dota Pro Circuit, шести финалистов своих первенств по регионам и
                                двух команд, получивших допуск на предыдущем этапе.
                            </li>
                        </ol>

                        <p>По итогам групповой части четыре слабейшие команды покинут состязание, восемь лучших попадут
                            в верхнюю сетку плей-офф и сразятся за титул победителя турнира (29-30), остальные
                            встретятся в борьбе за почетные места.</p>

                        <p>Важное условие. Вышедшие в групповой этап 20 коллективов поделят на две равные подгруппы.
                            Прохождение дальше, как и выбывание, будет зависеть от места команды именно в своей
                            подгруппе.</p>

                        <h2>Немного из истории The International 2022</h2>

                        <p>Рассматриваемое событие считается крупнейшим среди ежегодных киберспортивных турниров.
                            Изначально в данном чемпионате принимало участие 16 лучших коллективов мира, но постепенно
                            формат изменился. Первый The International проходил в немецком Кельне (2011), далее в Сиэтле
                            (США), на протяжении шести лет. Другие принимавшие мероприятие города: Ванкувер, Шанхай и
                            Бухарест. Единственным годом пропуска стал 2020, когда турнир отменили из-за эпидемии
                            ковид.</p>

                        <p>Интересный факт. На чемпионат могла попасть российская команда Virtus.pro, но оказалась за
                            бортом соревнования из-за особой системы подсчета очков у Valve (без дробных значений).
                            Участвующий в турнире клуб Team Spirit ранее выступала под флагом России, но сейчас является
                            международным, с офисом в Белграде.</p>

                        <p>Региональные первенства проводятся по особой системе. Как разные регионы мира считаются:</p>

                        <ul>
                            <li>Обе Америки (северная и южная).</li>
                            <li>Восточная и западная части Европы.</li>
                            <li>Китай (из-за огромного населения и большого числа игроков соответственно).</li>
                            <li>Юго-Восточная Азия, кроме Поднебесной.</li>
                        </ul>

                        <p>При этом отсутствуют представители Ближнего Востока, Африки, Австралии и Океании.
                            Разработанный организатором формат может вызывать сомнения, но недостатки компенсируются
                            качественной раскруткой события и приличными призовыми. Распределится выигрыш неравными
                            долями между местами с первое по третье, роль кубка играет выполненный в античном стиле щит
                            из бронзы и серебра.</p>

                    </div>
                    <div className={styles.replay}>
                        <h2 className={styles.listHeading}>Посмотреть матчи</h2>
                        <div className={styles.separator}/>
                        <iframe
                            src="https://player.twitch.tv/?channel=pgl_dota2&parent=international11.com&parent=localhost&muted=true"
                            allowFullScreen
                            className={styles.iframe}
                        />
                    </div>
                    <div className={styles.schedule}>
                        <h2 className={styles.listHeading}>Лайв матчи
                        </h2>
                        <div className={styles.separator}/>
                        <ul className={styles.scheduleItems}>
                            {
                                topEvents.length > 0 ? topEvents.map((item) => (
                                    <li className={styles.scheduleItem} key={item.id}>
                                        <p className={styles.itemTime}>
                                            {unixTimeStampConverter(item.startTimeTimestamp)}
                                            {monthConverter(new Date().getMonth())} в {unixTimeStampConverterToTime(item.startTimeTimestamp)}
                                        </p>
                                        <div className={styles.scheduleWrapper}>
                                            <div className={styles.itemTeam}>
                                                {item.team1}
                                            </div>
                                            <p className={styles.itemScore}>
                                                vs
                                            </p>
                                            <div className={styles.itemTeam}>
                                                {item.team2}
                                            </div>
                                        </div>
                                        <p className={styles.itemStage}>
                                            {item.competitionCaption}
                                        </p>
                                    </li>
                                )) : 'Матчей не найдено'
                            }
                            <button className={styles.button}>
                                <a href={'https://betcity.ru/ru/line/bets?chmp%5B%5D=105176&chmp%5B%5D=175781&chmp%5B%5D=175830&popular=1'} target='_blank' className={styles.buttonText}>Сделать ставку</a>
                                <div className={styles.dropWrapper}>
                                    <img src={drop} alt={drop} className={styles.drop} />
                                </div>
                            </button>
                        </ul>
                    </div>
                    <h2 className={styles.listHeadingTeams}>Составы команд
                    </h2>
                    <div className={styles.separator}/>
                    <div className={styles.teams}>
                        <ul className={styles.teamsTable}>
                            <div className={styles.tableHeadingTeams}>
                                <img src={psg} alt="PSG" className={styles.tableHeadingImage}/>
                                <h2 className={styles.tableHeadingText}>PSG.LGD</h2>
                            </div>
                            <li className={styles.teamMember}>
                                <img src={cn} alt="Флаг" className={styles.memberFlag}/>
                                <p className={styles.memberText}>Ван <span className={styles.memberSpan}>Ame</span> Чуньюй</p>
                            </li>
                            <li className={styles.teamMember}>
                                <img src={us} alt="Флаг" className={styles.memberFlag}/>
                                <p className={styles.memberText}>Чен <span className={styles.memberSpan}>NothingToSay</span> Цзинь Сян</p>
                            </li>
                            <li className={styles.teamMember}>
                                <img src={cn} alt="Флаг" className={styles.memberFlag}/>
                                <p className={styles.memberText}>Чжан <span className={styles.memberSpan}>Faith_bian</span> Жуйда</p>
                            </li>
                            <li className={styles.teamMember}>
                                <img src={cn} alt="Флаг" className={styles.memberFlag}/>
                                <p className={styles.memberText}>Чжао <span className={styles.memberSpan}>XinQ</span> Цзысин</p>
                            </li>
                            <li className={styles.teamMember}>
                                <img src={cn} alt="Флаг" className={styles.memberFlag}/>
                                <p className={styles.memberText}>Чжан <span className={styles.memberSpan}>y`</span> Лыпин</p>
                            </li>
                            <div className={styles.qualifier}>
                                <p className={styles.qualifierText}>DPC #1</p>
                            </div>
                        </ul>
                        <ul className={styles.teamsTable}>
                            <div className={styles.tableHeadingTeams}>
                                <img src={og} alt="OG" className={styles.tableHeadingImage}/>
                                <h2 className={styles.tableHeadingText}>OG</h2>
                            </div>
                            <li className={styles.teamMember}>
                                <img src={ua} alt="Флаг" className={styles.memberFlag}/>
                                <p className={styles.memberText}>Артем <span className={styles.memberSpan}>Yuragi</span> Голубев</p>
                            </li>
                            <li className={styles.teamMember}>
                                <img src={bg} alt="Флаг" className={styles.memberFlag}/>
                                <p className={styles.memberText}>Божидар <span className={styles.memberSpan}>Bzm</span> Богданов</p>
                            </li>
                            <li className={styles.teamMember}>
                                <img src={jr} alt="Флаг" className={styles.memberFlag}/>
                                <p className={styles.memberText}>Аммар <span className={styles.memberSpan}>Atf</span> Ассаф</p>
                            </li>
                            <li className={styles.teamMember}>
                                <img src={no} alt="Флаг" className={styles.memberFlag}/>
                                <p className={styles.memberText}>Томми <span className={styles.memberSpan}>Taiga</span> Ле</p>
                            </li>
                            <li className={styles.teamMember}>
                                <img src={ru} alt="Флаг" className={styles.memberFlag}/>
                                <p className={styles.memberText}>Михаил <span className={styles.memberSpan}>Misha</span> Агатов</p>
                            </li>
                            <div className={styles.qualifier}>
                                <p className={styles.qualifierText}>DPC #2</p>
                            </div>
                        </ul>
                        <ul className={styles.teamsTable}>
                            <div className={styles.tableHeadingTeams}>
                                <img src={spirit} alt="Spirit" className={styles.tableHeadingImage}/>
                                <h2 className={styles.tableHeadingText}>Team Spirit</h2>
                            </div>
                            <li className={styles.teamMember}>
                                <img src={ua} alt="Флаг" className={styles.memberFlag}/>
                                <p className={styles.memberText}>Илья <span className={styles.memberSpan}>Yatoro</span> Мулярчук</p>
                            </li>
                            <li className={styles.teamMember}>
                                <img src={ru} alt="Флаг" className={styles.memberFlag}/>
                                <p className={styles.memberText}>Александр <span className={styles.memberSpan}>TORONTOTOKYO</span> Хертек</p>
                            </li>
                            <li className={styles.teamMember}>
                                <img src={ru} alt="Флаг" className={styles.memberFlag}/>
                                <p className={styles.memberText}>Магомед <span className={styles.memberSpan}>Collapse</span> Халилов</p>
                            </li>
                            <li className={styles.teamMember}>
                                <img src={ua} alt="Флаг" className={styles.memberFlag}/>
                                <p className={styles.memberText}>Мирослав <span className={styles.memberSpan}>Mira</span> Колпаков</p>
                            </li>
                            <li className={styles.teamMember}>
                                <img src={ru} alt="Флаг" className={styles.memberFlag}/>
                                <p className={styles.memberText}>Ярослав <span className={styles.memberSpan}>Miposhka</span> Найденов</p>
                            </li>
                            <div className={styles.qualifier}>
                                <p className={styles.qualifierText}>DPC #3</p>
                            </div>
                        </ul>
                        <ul className={styles.teamsTable}>
                            <div className={styles.tableHeadingTeams}>
                                <img src={beastcoast} alt="Beastcoast" className={styles.tableHeadingImage}/>
                                <h2 className={styles.tableHeadingText}>beastcoast</h2>
                            </div>
                            <li className={styles.teamMember}>
                                <img src={pe} alt="Флаг" className={styles.memberFlag}/>
                                <p className={styles.memberText}>Гектор <span className={styles.memberSpan}>K1</span> Родригез</p>
                            </li>
                            <li className={styles.teamMember}>
                                <img src={pe} alt="Флаг" className={styles.memberFlag}/>
                                <p className={styles.memberText}>Жан-Пьер <span className={styles.memberSpan}>Chris Luck</span> Гонзалес</p>
                            </li>
                            <li className={styles.teamMember}>
                                <img src={bo} alt="Флаг" className={styles.memberFlag}/>
                                <p className={styles.memberText}>Адриан Сеспедес <span className={styles.memberSpan}>Wisper</span> Доблес</p>
                            </li>
                            <li className={styles.teamMember}>
                                <img src={pe} alt="Флаг" className={styles.memberFlag}/>
                                <p className={styles.memberText}>Элвис <span className={styles.memberSpan}>Scofield</span> Пенья</p>
                            </li>
                            <li className={styles.teamMember}>
                                <img src={pe} alt="Флаг" className={styles.memberFlag}/>
                                <p className={styles.memberText}>Стивен <span className={styles.memberSpan}>StingeR</span> Варгас</p>
                            </li>
                            <div className={styles.qualifier}>
                                <p className={styles.qualifierText}>DPC #4</p>
                            </div>
                        </ul>
                        {!open && <button
                            className={styles.loadButton}
                            onClick={showTeams}
                        >
                            Показать полностью
                        </button>}
                        {open && <>
                            <ul className={styles.teamsTable}>
                                <div className={styles.tableHeadingTeams}>
                                    <img src={aster} alt="Aster" className={styles.tableHeadingImage}/>
                                    <h2 className={styles.tableHeadingText}>Team Aster</h2>
                                </div>
                                <li className={styles.teamMember}>
                                    <img src={cn} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Ду <span className={styles.memberSpan}>Monet</span> Пн</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={cn} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Цзэн <span className={styles.memberSpan}>Ori</span> Цзяоян</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={cn} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Лин <span className={styles.memberSpan}>Xxs</span> Дзин</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={cn} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Е <span className={styles.memberSpan}>BoBoKa</span> Джибяо</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={cn} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Ю <span className={styles.memberSpan}>Fantasy</span> Яюнь</p>
                                </li>
                                <div className={styles.qualifier}>
                                    <p className={styles.qualifierText}>DPC #5</p>
                                </div>
                            </ul>
                            <ul className={styles.teamsTable}>
                                <div className={styles.tableHeadingTeams}>
                                    <img src={thunder} alt="Thunder" className={styles.tableHeadingImage}/>
                                    <h2 className={styles.tableHeadingText}>Thunder Awaken</h2>
                                </div>
                                <li className={styles.teamMember}>
                                    <img src={pe} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Кристиан <span
                                        className={styles.memberSpan}>Pakazs</span> Савина</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={pe} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Гонзало <span
                                        className={styles.memberSpan}>Darkmago</span> Эррера</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={pe} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Рафаэль <span
                                        className={styles.memberSpan}>Sacred</span> Йонатан</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={pe} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Фарих <span
                                        className={styles.memberSpan}>Matthew</span> Пуэнес</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={pe} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Леонардо <span
                                        className={styles.memberSpan}>Panda</span> Эрнандес</p>
                                </li>
                                <div className={styles.qualifier}>
                                    <p className={styles.qualifierText}>DPC #6</p>
                                </div>
                            </ul>
                            <ul className={styles.teamsTable}>
                                <div className={styles.tableHeadingTeams}>
                                    <img src={boom} alt="Boom" className={styles.tableHeadingImage}/>
                                    <h2 className={styles.tableHeadingText}>BOOM Esports</h2>
                                </div>
                                <li className={styles.teamMember}>
                                    <img src={la} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Сулия <span
                                        className={styles.memberSpan}>JaCkky</span> Кхоомфетсавонг</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={ph} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Эрин <span
                                        className={styles.memberSpan}>Yopaj</span> Джаспер Феррер</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={id} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Саефул <span
                                        className={styles.memberSpan}>Fbz</span> Ильхам</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={ph} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Тимоти <span
                                        className={styles.memberSpan}>Tims</span> Рандрап</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={ph} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Ролен Андри <span
                                        className={styles.memberSpan}>Skem</span> Габриэль Онг</p>
                                </li>
                                <div className={styles.qualifier}>
                                    <p className={styles.qualifierText}>DPC #7</p>
                                </div>
                            </ul>
                            <ul className={styles.teamsTable}>
                                <div className={styles.tableHeadingTeams}>
                                    <img src={tsm} alt="TSM" className={styles.tableHeadingImage}/>
                                    <h2 className={styles.tableHeadingText}>TSM FTX</h2>
                                </div>
                                <li className={styles.teamMember}>
                                    <img src={pe} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Энцо <span
                                        className={styles.memberSpan}>Timado</span> Гианоли</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={ca} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Джонатан <span
                                        className={styles.memberSpan}>bryle-</span> Сантос де Гия</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={cz} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Йонас <span
                                        className={styles.memberSpan}>SabeRLighT</span> Волек</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={ca} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Дэвид <span
                                        className={styles.memberSpan}>MoonMeander</span> Тан</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={kr} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Ду Ёнг <span
                                        className={styles.memberSpan}>DuBu</span> Ким</p>
                                </li>
                                <div className={styles.qualifier}>
                                    <p className={styles.qualifierText}>DPC #8</p>
                                </div>
                            </ul>
                            <ul className={styles.teamsTable}>
                                <div className={styles.tableHeadingTeams}>
                                    <img src={tundra} alt="Tundra" className={styles.tableHeadingImage}/>
                                    <h2 className={styles.tableHeadingText}>Tundra Esports</h2>
                                </div>
                                <li className={styles.teamMember}>
                                    <img src={sk} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Оливер <span
                                        className={styles.memberSpan}>Skiter</span> Лепко</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={de} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Леон <span
                                        className={styles.memberSpan}>Nine</span> Кирилин</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={il} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Нета <span
                                        className={styles.memberSpan}>33</span> Шапира</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={mk} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Мартин <span
                                        className={styles.memberSpan}>Saksa</span> Саздов</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={us} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Цзинцзюн <span
                                        className={styles.memberSpan}>Sneyking</span> У</p>
                                </li>
                                <div className={styles.qualifier}>
                                    <p className={styles.qualifierText}>DPC #9</p>
                                </div>
                            </ul>
                            <ul className={styles.teamsTable}>
                                <div className={styles.tableHeadingTeams}>
                                    <img src={gladiators} alt="Gladiators" className={styles.tableHeadingImage}/>
                                    <h2 className={styles.tableHeadingText}>Gladiators</h2>
                                </div>
                                <li className={styles.teamMember}>
                                    <img src={ru} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Антон <span
                                        className={styles.memberSpan}>dyrachyo</span> Шкредов</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={cz} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Мирослав <span
                                        className={styles.memberSpan}>BOOM</span> Бицан</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={dk} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Маркус <span
                                        className={styles.memberSpan}>Ace</span> Хелгард</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={de} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Эрик <span
                                        className={styles.memberSpan}>tOfu</span> Энгель</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={nl} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Мельхиор <span
                                        className={styles.memberSpan}>Seleri</span> Хилленкамп</p>
                                </li>
                                <div className={styles.qualifier}>
                                    <p className={styles.qualifierText}>DPC #10</p>
                                </div>
                            </ul>
                            <ul className={styles.teamsTable}>
                                <div className={styles.tableHeadingTeams}>
                                    <img src={eg} alt="EvilGeniuses" className={styles.tableHeadingImage}/>
                                    <h2 className={styles.tableHeadingText}>Evil Geniuses</h2>
                                </div>
                                <li className={styles.teamMember}>
                                    <img src={ca} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Артур <span
                                        className={styles.memberSpan}>Arteezy</span> Бабаев</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={ph} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Эйбэд Азэль <span
                                        className={styles.memberSpan}>Abed</span> Юсоп</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={ru} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Егор <span
                                        className={styles.memberSpan}>Nightfall</span> Григоренко</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={dk} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Андреас Франк <span
                                        className={styles.memberSpan}>Cr1t-</span> Нильсен</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={il} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Таль <span
                                        className={styles.memberSpan}>Fly</span> Айзик</p>
                                </li>
                                <div className={styles.qualifier}>
                                    <p className={styles.qualifierText}>DPC #11</p>
                                </div>
                            </ul>
                            <ul className={styles.teamsTable}>
                                <div className={styles.tableHeadingTeams}>
                                    <img src={fnatic} alt="Fnatic" className={styles.tableHeadingImage}/>
                                    <h2 className={styles.tableHeadingText}>Fnatic</h2>
                                </div>
                                <li className={styles.teamMember}>
                                    <img src={ph} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Марк <span
                                        className={styles.memberSpan}>Raven</span> Фаусто</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={ph} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Армель Пауль <span
                                        className={styles.memberSpan}>Armel</span> Тэбиос</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={th} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Ануча <span
                                        className={styles.memberSpan}>Jabz</span> Джиравонг</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={ph} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Джардел Джико <span
                                        className={styles.memberSpan}>DJ</span> Мампусти</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={ph} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Жунюэль <span
                                        className={styles.memberSpan}>Jaunuel</span> Арцилла</p>
                                </li>
                                <div className={styles.qualifier}>
                                    <p className={styles.qualifierText}>DPC #12</p>
                                </div>
                            </ul>
                            <ul className={styles.teamsTable}>
                                <div className={styles.tableHeadingTeams}>
                                    <img src={soniqs} alt="Soniqs" className={styles.tableHeadingImage}/>
                                    <h2 className={styles.tableHeadingText}>Soniqs</h2>
                                </div>
                                <li className={styles.teamMember}>
                                    <img src={us} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Явар <span
                                        className={styles.memberSpan}>YawaR</span> Хассан</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={us} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Квин <span
                                        className={styles.memberSpan}>Quinn</span> Каллахан</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={br} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Родриго <span
                                        className={styles.memberSpan}>Lelis</span> Лелис Сантос</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={us} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Ариф <span
                                        className={styles.memberSpan}>MSS</span> Анвар</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={de} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Адриан <span
                                        className={styles.memberSpan}>Fata</span> Тринкс</p>
                                </li>
                                <div className={styles.qualifier}>
                                    <p className={styles.qualifierText}>TI 2022. Отборочные</p>
                                </div>
                            </ul>
                            <ul className={styles.teamsTable}>
                                <div className={styles.tableHeadingTeams}>
                                    <img src={hokori} alt="Hokori" className={styles.tableHeadingImage}/>
                                    <h2 className={styles.tableHeadingText}>Hokori</h2>
                                </div>
                                <li className={styles.teamMember}>
                                    <img src={pe} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Эдвард <span
                                        className={styles.memberSpan}>Lumiere</span> Гильен</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={br} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Жоао <span
                                        className={styles.memberSpan}>BOOM</span> Джаннини</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={pe} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Пабло <span
                                        className={styles.memberSpan}>Vitaly</span> Ангуло</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={br} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Тиаго <span
                                        className={styles.memberSpan}>Thiolicor</span> Колдейро</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={pe} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Энтони <span
                                        className={styles.memberSpan}>Gardick</span> Лопез</p>
                                </li>
                                <div className={styles.qualifier}>
                                    <p className={styles.qualifierText}>TI 2022. Отборочные</p>
                                </div>
                            </ul>
                            <ul className={styles.teamsTable}>
                                <div className={styles.tableHeadingTeams}>
                                    <img src={entity} alt="Entity" className={styles.tableHeadingImage}/>
                                    <h2 className={styles.tableHeadingText}>Entity</h2>
                                </div>
                                <li className={styles.teamMember}>
                                    <img src={ru} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Иван <span
                                        className={styles.memberSpan}>Pure</span> Москаленко</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={de} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Даниэль <span
                                        className={styles.memberSpan}>Stormstormer</span> Шоетзау</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={at} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Тобиас <span
                                        className={styles.memberSpan}>Tobi</span> Бучнер</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={ru} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Владислав <span
                                        className={styles.memberSpan}>Kataomi</span> Семенов</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={by} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Дмитрий <span
                                        className={styles.memberSpan}>Fishman</span> Полищук</p>
                                </li>
                                <div className={styles.qualifier}>
                                    <p className={styles.qualifierText}>TI 2022. Отборочные</p>
                                </div>
                            </ul>
                            <ul className={styles.teamsTable}>
                                <div className={styles.tableHeadingTeams}>
                                    <img src={betboom} alt="BetBoom" className={styles.tableHeadingImage}/>
                                    <h2 className={styles.tableHeadingText}>BetBoom Team</h2>
                                </div>
                                <li className={styles.teamMember}>
                                    <img src={ru} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Никита <span
                                        className={styles.memberSpan}>Daxak</span> Кузьмин</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={ru} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Денис <span
                                        className={styles.memberSpan}>IarI</span> Сигитов</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={ru} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Евгений <span
                                        className={styles.memberSpan}>Noticed</span> Игнатенко</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={ru} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Владимир <span
                                        className={styles.memberSpan}>RodjER</span> Никогосян</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={ru} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Акбар <span
                                        className={styles.memberSpan}>SoNNeikO</span> Бутаев</p>
                                </li>
                                <div className={styles.qualifier}>
                                    <p className={styles.qualifierText}>TI 2022. Отборочные</p>
                                </div>
                            </ul>
                            <ul className={styles.teamsTable}>
                                <div className={styles.tableHeadingTeams}>
                                    <img src={rng} alt="RNG" className={styles.tableHeadingImage}/>
                                    <h2 className={styles.tableHeadingText}>Royal Never Give Up</h2>
                                </div>
                                <li className={styles.teamMember}>
                                    <img src={my} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Даниэль <span
                                        className={styles.memberSpan}>Ghost</span> Чан</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={cn} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Лу <span
                                        className={styles.memberSpan}>Somnus M</span> Я</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={cn} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Ян <span
                                        className={styles.memberSpan}>Chalice</span> Шэньи</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={cn} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Ху <span
                                        className={styles.memberSpan}>Kaka</span> Лянчжи</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={my} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Джиан Вей <span
                                        className={styles.memberSpan}>xNova</span> Яп</p>
                                </li>
                                <div className={styles.qualifier}>
                                    <p className={styles.qualifierText}>TI 2022. Отборочные</p>
                                </div>
                            </ul>
                            <ul className={styles.teamsTable}>
                                <div className={styles.tableHeadingTeams}>
                                    <img src={talon} alt="Talon" className={styles.tableHeadingImage}/>
                                    <h2 className={styles.tableHeadingText}>Talon Esports</h2>
                                </div>
                                <li className={styles.teamMember}>
                                    <img src={th} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Ньенгнара <span
                                        className={styles.memberSpan}>23savage</span> Тирамаханон</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={id} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Рафлай <span
                                        className={styles.memberSpan}>Mikoto</span> Фатур</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={au} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Дэмиен <span
                                        className={styles.memberSpan}>kpii</span> Чок</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={th} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Ворвавит <span
                                        className={styles.memberSpan}>Q</span> Мекчай</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={id} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Брицио <span
                                        className={styles.memberSpan}>Hyde</span> Ади Путра</p>
                                </li>
                                <div className={styles.qualifier}>
                                    <p className={styles.qualifierText}>TI 2022. Отборочные</p>
                                </div>
                            </ul>
                            <ul className={styles.teamsTable}>
                                <div className={styles.tableHeadingTeams}>
                                    <img src={secret} alt="Secret" className={styles.tableHeadingImage}/>
                                    <h2 className={styles.tableHeadingText}>Team Secret</h2>
                                </div>
                                <li className={styles.teamMember}>
                                    <img src={nl} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Ремко <span
                                        className={styles.memberSpan}>Crystallis</span> Аретс</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={pl} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Михаил <span
                                        className={styles.memberSpan}>Nisha</span> Янковски</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={ua} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Роман <span
                                        className={styles.memberSpan}>Resolut1on</span> Фоменок</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={kg} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Бакыт <span
                                        className={styles.memberSpan}>Zayac</span> Эмилжанов</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={ee} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Клемент <span
                                        className={styles.memberSpan}>Pyppey</span> Иванов</p>
                                </li>
                                <div className={styles.qualifier}>
                                    <p className={styles.qualifierText}>TI 11: Last Chance</p>
                                </div>
                            </ul>
                            <ul className={styles.teamsTable}>
                                <div className={styles.tableHeadingTeams}>
                                    <img src={liquid} alt="Liquid" className={styles.tableHeadingImage}/>
                                    <h2 className={styles.tableHeadingText}>Team Liquid</h2>
                                </div>
                                <li className={styles.teamMember}>
                                    <img src={fi} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Лассе <span
                                        className={styles.memberSpan}>MATUMBAMAN</span> Урпалайнен</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={se} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Майк <span
                                        className={styles.memberSpan}>miCKe</span> Ву</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={se} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Людвиг <span
                                        className={styles.memberSpan}>zai</span> Уолберг</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={se} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Самуэль <span
                                        className={styles.memberSpan}>Boxi</span> Сван</p>
                                </li>
                                <li className={styles.teamMember}>
                                    <img src={se} alt="Флаг" className={styles.memberFlag}/>
                                    <p className={styles.memberText}>Айдэн <span
                                        className={styles.memberSpan}>iNSaNiA</span> Саркои</p>
                                </li>
                                <div className={styles.qualifier}>
                                    <p className={styles.qualifierText}>TI 11: Last Chance</p>
                                </div>
                            </ul>
                        </>}
                    </div>
                    <div className={styles.results}>
                        <h2 className={styles.listHeading}>Результаты
                        </h2>
                        <div className={styles.separator}/>
                        <div className={styles.tableHeading}>
                            <p className={styles.text}>Место</p>
                            <p className={styles.text}>Команда</p>
                            <p className={styles.text}>Призовые</p>
                        </div>
                        <div className={styles.table}>
                            <div className={styles.tableRow}>
                                <div className={styles.column}>
                                    <p className={styles.text}>1</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>TBD</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>---</p>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.column}>
                                    <p className={styles.text}>2</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>TBD</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>---</p>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.column}>
                                    <p className={styles.text}>3</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>TBD</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>---</p>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.column}>
                                    <p className={styles.text}>4</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>TBD</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>---</p>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.column}>
                                    <p className={styles.text}>5-6</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>TBD</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>---</p>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.column}>
                                    <p className={styles.text}>7-8</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>TBD</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>---</p>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.column}>
                                    <p className={styles.text}>9-12</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>TBD</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>---</p>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.column}>
                                    <p className={styles.text}>13-16</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>TBD</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>---</p>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.column}>
                                    <p className={styles.text}>17-18</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>TBD</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>---</p>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={styles.column}>
                                    <p className={styles.text}>19-20</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>TBD</p>
                                </div>
                                <div className={styles.column}>
                                    <p className={styles.text}>---</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.playoffs}>
                            <h2 className={styles.listHeading}>
                                Турнирная сетка
                            </h2>
                            <div className={styles.separator}/>
                            <div className={styles.wrapperFirst}>
                                <div className={styles.wrapperSecond}>
                                    <div className={styles.tournamentTable}>
                                        <div className={styles.columnAnother}>
                                            <div className={styles.emptiness} />
                                        </div>
                                        <div className={styles.columnAnother}>
                                            <p className={styles.columnText}>1/4 финала</p>
                                            <TournamentMatch team1Logo={eg} team1Name={'EG'} team1Score={0} team2Score={2} team2Logo={thunder} team2Name={'Thunder'} />
                                            <TournamentMatch team1Logo={secret} team1Name={'Secret'} team1Score={2} team2Score={0} team2Logo={psg} team2Name={'PSG.LGD'} />
                                            <TournamentMatch team1Logo={tundra} team1Name={'Tundra'} team1Score={2} team2Score={0} team2Logo={og} team2Name={'OG'} />
                                            <TournamentMatch team1Logo={liquid} team1Name={'Liquid'} team1Score={0} team2Score={2} team2Logo={aster} team2Name={'Aster'} />
                                        </div>
                                        <div className={styles.columnAnother}>
                                            <p className={styles.columnText}>Полуфинал</p>
                                            <TournamentMatch team1Logo={thunder} team1Name={'Thunder'} team2Logo={secret} team2Name={'Secret'} />
                                            <TournamentMatch team1Logo={tundra} team1Name={'Tundra'} team2Logo={aster} team2Name={'Aster'} />
                                        </div>
                                        <div className={styles.columnAnother}>
                                            <p className={styles.columnText}>Финал верхней сетки</p>
                                            <TournamentMatch team1Name={'TBD'} team2Name={'TBD'} />
                                        </div>
                                    </div>
                                    <div className={styles.tournamentTable}>
                                        <div className={styles.columnAnother}>
                                            <p className={styles.columnText}>Раунд 1</p>
                                            <TournamentMatch team1Name={'Hokori'} team1Logo={hokori} team2Logo={beastcoast} team1Score={0} team2Score={1} team2Name={'beascoast'} />
                                            <TournamentMatch team1Logo={spirit} team1Name={'Spirit'} team1Score={0} team2Score={1} team2Logo={boom} team2Name={'BOOM'} />
                                            <TournamentMatch team1Name={'Fnatic'} team1Logo={fnatic} team2Logo={gladiators} team1Score={0} team2Score={1} team2Name={'Gladiators'} />
                                            <TournamentMatch team1Name={'RNG'} team1Logo={rng} team2Logo={entity} team1Score={0} team2Score={1} team2Name={'Entity'} />
                                        </div>
                                        <div className={styles.columnAnother}>
                                            <p className={styles.columnText}>Раунд 2</p>
                                            <TournamentMatch team1Logo={eg} team1Name={'EG'} team1Score={0} team2Score={1} team2Logo={beastcoast} team2Name={'beastcoast'} />
                                            <TournamentMatch team1Logo={psg} team1Name={'PSG.LGD'} team2Logo={boom} team2Name={'BOOM'} />
                                            <TournamentMatch team1Logo={og} team1Name={'OG'} team2Logo={gladiators} team2Name={'Gladiators'} />
                                            <TournamentMatch team1Logo={liquid} team1Name={'Liquid'} team2Logo={entity} team2Name={'Entity'} />
                                        </div>
                                        <div className={styles.columnAnother}>
                                            <p className={styles.columnText}>Раунд 3</p>
                                            <TournamentMatch team1Name={'TBD'} team2Name={'TBD'} />
                                            <TournamentMatch team1Name={'TBD'} team2Name={'TBD'} />
                                        </div>
                                        <div className={styles.columnAnother}>
                                            <p className={styles.columnText}>Раунд 4</p>
                                            <TournamentMatch team1Name={'TBD'} team2Name={'TBD'} />
                                            <TournamentMatch team1Name={'TBD'} team2Name={'TBD'} />
                                        </div>
                                        <div className={styles.columnAnother}>
                                            <p className={styles.columnText}>Полуфинал нижней сетки</p>
                                            <TournamentMatch team1Name={'TBD'} team2Name={'TBD'} />
                                        </div>
                                        <div className={styles.columnAnother}>
                                            <p className={styles.columnText}>Финал нижней сетки</p>
                                            <TournamentMatch team1Name={'TBD'} team2Name={'TBD'} />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.columnFinal}>
                                    <p className={styles.columnText}>Гранд-финал</p>
                                    <TournamentMatch team1Name={'TBD'} team2Name={'TBD'} />
                                </div>
                            </div>
                            </div>
                        <a href='https://betcity.ru/ru/line/bets?chmp%5B%5D=105176&chmp%5B%5D=175781&chmp%5B%5D=175830&popular=1'
                           target='_blank' className={styles.banner}/>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default withErrorBoundary(Tournament, {
    fallback: (<>
        <Header/>
        <WhiteHeading/>
        <div className={styles.articleHeading}>
            <h1 className={styles.title}>
                Что-то пошло не так
            </h1>
        </div>
        <TextSlide/>
        <Footer/>
    </>)
});