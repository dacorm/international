import React, {useEffect, useState} from 'react';
import styles from './MatchInfo.module.css';
import Header from "../components/Header/Header";
import WhiteHeading from "../components/WhiteHeading/WhiteHeading";
import TextSlide from "../components/TextSlide/TextSlide";
import MatchSlide from "../components/MatchSlide/MatchSlide";
import {Helmet, HelmetData} from "react-helmet-async";
import Footer from "../components/Footer/Footer";
import team1 from '../assets/images/teams/01.png';
import team2 from '../assets/images/teams/02.png';
import {useParams} from "react-router-dom";
import axios from "axios";
import {MatchInfoType} from "../@types/serverType";
import {unixTimeStampConverterMatch} from "../helpers/unixConverters";
import {withErrorBoundary} from "react-error-boundary";


const helmetData = new HelmetData({});


const MatchInfo = () => {
    const {id} = useParams();
    const [info, setInfo] = useState<MatchInfoType>();

    const fetchData = async () => {
        const {data} = await axios.get(`https://api.opendota.com/api/matches/${id}`)
        setInfo(data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        fetchData();
    }, [info])

    return (
        <div>
            <Helmet helmetData={helmetData}>
                <meta
                    name="description"
                    content="match overview"
                />
                <title>Информация о матче</title>
            </Helmet>
            <Header/>
            <WhiteHeading/>
                <div className={styles.screen}>
                    <h1 className={styles.title}>Информация о матче</h1>
                </div>
                <TextSlide/>
                <MatchSlide/>
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
                    <div className={styles.replay}>
                        <h2 className={styles.listHeading}>Повтор матча</h2>
                        <div className={styles.separator}/>
                        <iframe width="1280" height="720" src="https://www.youtube.com/embed/jHyrFF2x1OM"
                                title="A Legacy of Champions"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen className={styles.iframe}/>
                    </div>
                </div>
            <Footer/>
        </div>
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
        <Footer />
    </>)
});