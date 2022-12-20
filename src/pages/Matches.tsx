import React, {LegacyRef, useCallback, useEffect, useRef, useState} from 'react';
import styles from './Matches.module.css';
import Header from "../components/Header/Header";
import WhiteHeading from "../components/WhiteHeading/WhiteHeading";
import TextSlide from "../components/TextSlide/TextSlide";
import Footer from "../components/Footer/Footer";
import drop from '../assets/images/expand_more_FILL0_wght400_GRAD0_opsz48.svg';
import {NavLink, useNavigate, useParams} from "react-router-dom";
import SingleMatch from "../components/SingleMatch/SingleMatch";
import axios from "axios";
import {ProMatchJSON} from "../@types/serverType";
import Preloader from "../components/Preloader/Preloader";
import logo1 from '../assets/images/teams/01.png';
import logo2 from '../assets/images/teams/02.png';
import logo3 from '../assets/images/teams/03.png';
import logo4 from '../assets/images/teams/04.png';
import {randomNumber} from "../assets/helpers";
import {withErrorBoundary} from "react-error-boundary";
import {unixTimeStampConverter, unixTimeStampConverterToTime} from "../helpers/unixConverters";
import {monthDaysConverter} from "../helpers/monthDaysConverter";
import {monthConverter} from "../helpers/monthConverter";
import FallbackLoader from "../components/FallbackLoader/FallbackLoader";
import Layout from "../components/Layout/Layout";


const Matches = () => {
    const [loading, setLoading] = useState(false);
    const slider = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const [items, setItems] = useState<ProMatchJSON[]>([]);
    const [filteredItems, setFilteredItems] = useState<ProMatchJSON[]>([]);
    const [position, setPosition] = useState(0);
    const {id} = useParams();

    useEffect(() => {
        navigate(`/calendar/${new Date().getDate()}`)
    }, [])

    const fetchData = async () => {
        setLoading(true);
        const {data} = await axios.get('https://api.opendota.com/api/proMatches?api_key=de6dcb55-631f-474f-9c19-f98d5d016e96');
        setItems(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])


    useEffect(() => {
        if (items) {
            const arr = items.filter(item => unixTimeStampConverter(item.start_time) === id)
            setFilteredItems(arr)
        }
    }, [items, id])

    const prevHandler = useCallback(() => {
        setPosition((position: number) => position += 75)
        if (position > 620) setPosition(0)
        slider?.current?.childNodes.forEach((element) => {
            (element as HTMLImageElement).setAttribute('style', `transform: translateX(${position}px)`)
        })
    }, [position])

    const nextHandler = useCallback(() => {
        setPosition((position: number) => position -= 75)
        if (position < -751) setPosition(0)
        slider?.current?.childNodes.forEach((element) => {
            (element as HTMLImageElement).setAttribute('style', `transform: translateX(${position}px)`)
        })
    }, [position])

    if (loading) {
        return <FallbackLoader />
    }

    return (
        <Layout seoDescription='The International 2022 по Dota 2: расписание матчей по турниру International 11'
                seoTitle={`The International 2022 по Dota 2: расписание матчей по турниру International 11`}
                title={`Результаты матчей за ${id} ${monthConverter(new Date().getMonth())}`}>
            <div className={styles.calendar}>
                <div className={styles.header}>
                    <p className={styles.text}>{monthConverter(new Date().getMonth())} {new Date().getFullYear()}</p>
                </div>
                <div className={styles.calendarDateSlider}>
                    <button className={styles.button} onClick={prevHandler}><img src={drop} alt="dropDownIcon"
                                                                                 className={styles.dropLeft}/></button>
                    <div className={styles.sliderTrack} ref={slider as LegacyRef<HTMLDivElement>}>
                        {
                            monthDaysConverter(new Date().getMonth())?.map((item) => (
                                <NavLink
                                    to={`/calendar/${item}`}
                                    key={item}
                                    className={({isActive}) => isActive ? `${styles.sliderItem} ${styles.active}` : `${styles.sliderItem}`}>
                                    <p className={styles.navText}>{monthConverter(new Date().getMonth())?.split('').slice(0, 3).join('')}</p>
                                    {item}
                                </NavLink>
                            ))
                        }
                    </div>
                    <button className={styles.button} onClick={nextHandler}><img src={drop} alt="dropDownIcon"
                                                                                 className={styles.dropRight}/></button>
                </div>
                {loading && <Preloader/>}
                {!loading && <div className={styles.matches}>
                    {
                        filteredItems.length > 0 ? filteredItems.map((item, index) => (
                            <SingleMatch
                                matchId={item.match_id}
                                key={item.match_id}
                                leagueName={item.league_name}
                                playTime={unixTimeStampConverterToTime(item.start_time)}
                                direName={item.dire_name}
                                direScore={item.dire_score}
                                radiantName={item.radiant_name}
                                radiantScore={item.radiant_score}/>
                        )) : (<div className={styles.wrapper}>
                            <h1 className={styles.matchesNotFound}>Матчи в этот день не найдены</h1>
                        </div>)
                    }
                </div>}
                <a href='https://promote.betcity.ru/freebet500app/' target='_blank' className={styles.banner} rel="noreferrer" />
            </div>
        </Layout>
    );
};

export default withErrorBoundary(Matches, {
    fallback: (<>
        <Header/>
        <WhiteHeading/>
        <div className={styles.screen}>
            <h1 className={styles.title}>Что-то пошло не так</h1>
        </div>
        <TextSlide/>
        <Footer />
    </>)
});