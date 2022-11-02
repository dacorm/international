import React, {useEffect, useState} from 'react';
import styles from './MatchInfo.module.css';
import Header from "../components/Header/Header";
import WhiteHeading from "../components/WhiteHeading/WhiteHeading";
import TextSlide from "../components/TextSlide/TextSlide";
import Footer from "../components/Footer/Footer";
import team1 from '../assets/images/teams/01.png';
import team2 from '../assets/images/teams/02.png';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Heroes, MatchInfoType} from "../@types/serverType";
import {unixTimeStampConverterMatch} from "../helpers/unixConverters";
import {withErrorBoundary} from "react-error-boundary";
import Layout from "../components/Layout/Layout";
import FallbackLoader from "../components/FallbackLoader/FallbackLoader";
import {translit} from "../helpers/translateText";


const MatchInfo = () => {
    const {id} = useParams();
    const [info, setInfo] = useState<MatchInfoType>();
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [memoizedId, setMemoizedId] = useState('');
    const [heroes, setHeroes] = useState<Heroes[]>();
    const [title, setTitle] = useState('');
    const navigate = useNavigate();

    const filterPicks = () => {
        return info?.picks_bans.filter((item) => item.is_pick);
    }

    const filterBans = () => {
        return info?.picks_bans.filter((item) => !item.is_pick);
    }

    const nameConverter = (name: string) => {
        if (name === 'Lifestealer') {
            return 'life_stealer'
        } else if (name === 'Anti-Mage') {
            return 'antimage'
        } else if (name === 'Doom') {
            return 'doom_bringer'
        } else if (name === 'Shadow Fiend') {
            return 'nevermore'
        }
        return name.toLowerCase().split(' ').join('_')
    }

    const fetchHeroes = async () => {
        try {
            const { data } = await axios.get('https://api.opendota.com/api/heroes?api_key=de6dcb55-631f-474f-9c19-f98d5d016e96');
            setHeroes(data);
        } catch (e) {
            console.log(e);
        }
    }

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const {data} = await axios.get(`https://api.opendota.com/api/matches/${memoizedId || id}?api_key=de6dcb55-631f-474f-9c19-f98d5d016e96`);
            setInfo(data);
            setIsLoading(false);
        } catch (e) {
            console.log(e);
        }
    }

    const intersect = (arr: any[] | undefined) => {
        let picksArr = arr;
        let intersectArr: any[] = [];
        if (heroes && picksArr) {
            for (let i = 0; i < heroes.length; i++) {
                if (intersectArr.length <= 10) {
                    picksArr.forEach((pick) => {
                        if (heroes[i].id === pick.hero_id) {
                            intersectArr.push(heroes[i].localized_name);
                        }
                    })
                }
            }
        }
        return intersectArr;
    }

    useEffect(() => {
        if (!isOpen && id) {
            setMemoizedId(id);
            setIsOpen(true);
        }
        fetchData();
        fetchHeroes();
    }, [])


    useEffect(() => {
        if (title) {
            navigate(`/match/${title}`);
        }
    }, [title])

    useEffect(() => {
        if (info) {
            setTitle(translit(`${info.dire_team.name} против ${info.radiant_team.name}`));
        }
    }, [info])

    if (isLoading) {
        return <FallbackLoader/>
    }

    return (
        <Layout seoDescription={`Информация о матче ${info?.dire_team.name} против ${info?.radiant_team.name}`}
                seoTitle={`Информация о матче ${info?.dire_team.name} против ${info?.radiant_team.name}`}
                title={`Информация о матче ${info?.dire_team.name} против ${info?.radiant_team.name}`}>
            <div className={styles.content}>
                <div className={styles.info}>
                    <p className={styles.league}>{info?.league.name ?? 'Загрузка...'}</p>
                    <p className={styles.date}>{unixTimeStampConverterMatch(info?.start_time)}</p>
                </div>
                <div className={styles.match}>
                    <div className={styles.team}>
                        <div className={styles.teamText}>
                            <p className={styles.teamName}>{info?.radiant_team.name ?? 'Загрузка...'}</p>
                            <p className={styles.teamCountry}>{info?.radiant_team.tag ?? 'Загрузка...'}</p>
                        </div>
                        <img src={team1} alt="Team1" className={styles.teamLogo}/>
                    </div>
                    <div className={styles.score}>
                        <p className={styles.scoreCount}>{info?.dire_score ?? 'Загрузка...'} - {info?.radiant_score ?? 'Загрузка...'}</p>
                        <p className={styles.stage}>{info?.league.tier ?? 'Загрузка...'}</p>
                    </div>
                    <div className={styles.team}>
                        <img src={team2} alt="Team2" className={styles.teamLogo}/>
                        <div className={styles.teamText}>
                            <p className={styles.teamName}>{info?.dire_team.name ?? 'Загрузка...'}</p>
                            <p className={styles.teamCountry}>{info?.dire_team.tag ?? 'Загрузка...'}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.sectionHeading}>
                    <h2 className={styles.listHeading}>Составы команд</h2>
                    <div className={styles.separator}/>
                </div>
                <div className={styles.roasters}>
                    <ul className={styles.teamsTable}>
                        <>
                            <div className={styles.tableHeadingTeams}>
                                <h2 className={styles.tableHeadingText}>{info?.radiant_team.name ?? 'Загрузка...'} состав</h2>
                            </div>
                            {info?.players.slice(0, 5).map((item, index) => (<li key={index} className={styles.teamMember}>
                                <p className={styles.memberText}><span
                                    className={styles.memberSpan}>{item?.personaname}</span></p>
                            </li>))}
                        </>
                    </ul>
                    <ul className={styles.teamsTable}>
                        <>
                            <div className={styles.tableHeadingTeams}>
                                <h2 className={styles.tableHeadingText}>{info?.dire_team.name ?? 'Загрузка...'} состав</h2>
                            </div>
                            {info?.players.slice(5, 10).map((item, index) => (<li key={index + 1} className={styles.teamMember}>
                                <p className={styles.memberText}><span
                                    className={styles.memberSpan}>{item?.personaname}</span></p>
                            </li>))}
                        </>
                    </ul>
                </div>
                <div className={styles.sectionHeading}>
                    <h2 className={styles.listHeading}>Пики чемпионов</h2>
                    <div className={styles.separator}/>
                    <ul>
                    {intersect(filterPicks()).map((item, index) => (<li  key={index+3}>
                        <img
                            src={`https://api.opendota.com/apps/dota2/images/dota_react/heroes/icons/${nameConverter(item)}.png?api_key=de6dcb55-631f-474f-9c19-f98d5d016e96`}
                            alt="hero icon"
                        />
                        <p>{index+1}. {item}</p>
                    </li>))}
                    </ul>
                </div>
                <div className={styles.sectionHeading}>
                    <h2 className={styles.listHeading}>Баны чемпионов</h2>
                    <div className={styles.separator}/>
                    <ul>
                    {intersect(filterBans()).map((item, index) => (<li key={index+4}>
                        <img src={`https://api.opendota.com/apps/dota2/images/dota_react/heroes/icons/${nameConverter(item)}.png?api_key=de6dcb55-631f-474f-9c19-f98d5d016e96`} alt="hero icon"/>
                        <p>{index+1}. {item}</p>
                    </li>))}
                    </ul>
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
            </div>
        </Layout>
    );
};

export default withErrorBoundary(MatchInfo, {
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