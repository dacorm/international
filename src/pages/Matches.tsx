import React, {LegacyRef, useCallback, useEffect, useRef, useState} from 'react';
import styles from './Matches.module.css';
import Header from "../components/Header/Header";
import WhiteHeading from "../components/WhiteHeading/WhiteHeading";
import TextSlide from "../components/TextSlide/TextSlide";
import MatchSlide from "../components/MatchSlide/MatchSlide";
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
import {Helmet, HelmetData} from 'react-helmet-async';
import {unixTimeStampConverter, unixTimeStampConverterToTime} from "../helpers/unixConverters";

const helmetData = new HelmetData({});

const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

const Matches = () => {
    const [loading, setLoading] = useState(false);
    const [teamLogo, setTeamLogo] = useState([logo1, logo2, logo3, logo4]);
    const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
    const slider = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const [items, setItems] = useState<ProMatchJSON[]>([]);
    const [filteredItems, setFilteredItems] = useState<ProMatchJSON[]>([]);
    const [position, setPosition] = useState(0);
    const {id} = useParams();

    useEffect(() => {
        let arr = [];

        if (items) {
            for (let i = 0; i < items.length; i++) {
                arr.push(randomNumber(0, 4))
            }
            setRandomNumbers(arr)
        }
    }, [items])

    useEffect(() => {
        navigate(`/calendar/${new Date().getDate()}`)
    }, [])

    const fetchData = async () => {
        setLoading(true);
        const {data} = await axios.get('https://api.opendota.com/api/proMatches');
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
        setPosition((position: number) => position += 75)
        if (position < -751) setPosition(0)
        slider?.current?.childNodes.forEach((element) => {
            (element as HTMLImageElement).setAttribute('style', `transform: translateX(${position}px)`)
        })
    }, [position])

    const monthConverter = (month: number) => {
        switch (month) {
            case 0:
                return 'Январь';
                break;
            case 1:
                return 'Февраль';
                break;
            case 2:
                return 'Март';
                break;
            case 3:
                return 'Апрель';
                break;
            case 4:
                return 'Май';
                break;
            case 5:
                return 'Июнь';
                break;
            case 6:
                return 'Июль';
                break;
            case 7:
                return 'Август';
                break;
            case 8:
                return 'Сентябрь';
                break;
            case 9:
                return 'Октябрь';
                break;
            case 10:
                return 'Декабрь';
                break;
            case 11:
                return 'Январь';
                break;
            default:
                console.warn('enter number')
        }
    }

    const monthDaysConverter = (month: number) => {
        switch (month) {
            case 0:
                return days.slice(0, 31);
                break;
            case 1:
                return days.slice(0, 30);
                break;
            case 2:
                return days.slice(0, 31);
                break;
            case 3:
                return days.slice(0, 30);
                break;
            case 4:
                return days.slice(0, 31);
                break;
            case 5:
                return days.slice(0, 30);
                break;
            case 6:
                return days.slice(0, 31);
                break;
            case 7:
                return days.slice(0, 31);
                break;
            case 8:
                return days.slice(0, 30);
                break;
            case 9:
                return days.slice(0, 31);
                break;
            case 10:
                return days.slice(0, 31);
                break;
            case 11:
                return days.slice(0, 30);
                break;
            default:
                console.warn('enter number')
        }
    }

    return (
        <div>
            <Helmet helmetData={helmetData}>
                <meta
                    name="description"
                    content="match calendar"
                />
                <title>Matches Calendar</title>
            </Helmet>
            <Header/>
            <WhiteHeading/>
            <div className={styles.screen}>
                <h1 className={styles.title}>Результаты матчей за {id} {monthConverter(new Date().getMonth())}</h1>
            </div>
            <TextSlide/>
            <MatchSlide/>
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
                                logo={teamLogo[randomNumbers[index]]}
                                logo2={teamLogo[randomNumbers[index + 1]]}
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
                <a href='https://betcity.ru/' target='_blank' className={styles.banner} />
            </div>
            <Footer/>
        </div>
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