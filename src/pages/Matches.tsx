import React, {LegacyRef, useEffect, useRef, useState} from 'react';
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

const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

const Matches = () => {
    const slider = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const [items, setItems] = useState<ProMatchJSON[]>([]);
    const { id } = useParams();

    const unixTimeStampConverter = (unix: number) => {
        let miliseconds = unix * 1000
        return String(new Date(miliseconds).getDate())
    }

    const unixTimeStampConverterToTime = (unix: number) => {
        const unix_timestamp = unix
        const date = new Date(unix_timestamp * 1000);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const formattedTime = hours + ':' + minutes + ':' + seconds;
        return formattedTime
    }

    useEffect(() => {
        navigate(`/matches/${new Date().getDate()}`)
    }, [])

    const fetchData = async () => {
        const { data } = await axios.get('https://api.opendota.com/api/proMatches');
        setItems(data);
    }

    useEffect(() => {
        fetchData();
    }, [])


    let position = 0;

    const prevHandler = () => {
        position += 75
        if (position > 620) position = 0
        slider?.current?.childNodes.forEach((element) => {
            (element as HTMLImageElement).setAttribute('style', `transform: translateX(${position}px)`)
        })
    }

    const nextHandler = () => {
        position -= 75
        if (position < -751) position = 0
        slider?.current?.childNodes.forEach((element) => {
            (element as HTMLImageElement).setAttribute('style', `transform: translateX(${position}px)`)
        })
    }

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
            <Header />
            <WhiteHeading />
            <div className={styles.screen}>
                <h1 className={styles.title}>Scores With Calendar</h1>
            </div>
            <TextSlide />
            <MatchSlide />
            <div className={styles.calendar}>
                <div className={styles.header}>
                    <p className={styles.text}>{monthConverter(new Date().getMonth())} {new Date().getFullYear()}</p>
                </div>
                <div className={styles.calendarDateSlider}>
                    <button className={styles.button} onClick={prevHandler}><img src={drop} alt="dropDownIcon" className={styles.dropLeft} /></button>
                    <div className={styles.sliderTrack} ref={slider as LegacyRef<HTMLDivElement>}>
                    {
                        monthDaysConverter(new Date().getMonth())?.map((item) => (
                            <NavLink
                                to={`/matches/${item}`}
                                key={item}
                                className={({isActive}) => isActive ? `${styles.sliderItem} ${styles.active}` : `${styles.sliderItem}`}>
                                <p className={styles.navText}>{monthConverter(new Date().getMonth())?.split('').slice(0, 3).join('')}</p>
                                {item}
                            </NavLink>
                        ))
                    }
                    </div>
                    <button className={styles.button} onClick={nextHandler}><img src={drop} alt="dropDownIcon" className={styles.dropRight} /></button>
                </div>
                <div className={styles.matches}>
                    {
                        items.filter(item => unixTimeStampConverter(item.start_time) === id).map((item) => (
                            <SingleMatch
                                leagueName={item.league_name}
                                playTime={unixTimeStampConverterToTime(item.start_time)}
                                direName={item.dire_name}
                                direScore={item.dire_score}
                                radiantName={item.radiant_name}
                                radiantScore={item.radiant_score} />
                        ))
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Matches;