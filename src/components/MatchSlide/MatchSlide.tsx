import React, {LegacyRef, useEffect, useRef, useState} from 'react';
import styles from './MatchSlide.module.css';
import drop from "../../assets/images/drop2.svg";
import axios from "axios";
import {DotaMatchJSON} from "../../@types/serverType";
import Match from "../Match/Match";
import Preloader from "../Preloader/Preloader";

const MatchSlide = () => {
    const slider = useRef<HTMLDivElement>(null);
    const [items, setItems] = useState<DotaMatchJSON[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        const data = await axios.get('https://api.opendota.com/api/proMatches');
        setItems(data.data.slice(0, 20));
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    let position = 0;

    const prevHandler = () => {
        position += 265
        if (position > 300) position = 0
        slider?.current?.childNodes.forEach((element) => {
            (element as HTMLImageElement).setAttribute('style', `transform: translateX(${position}px)`)
        })
    }

    const nextHandler = () => {
        position -= 265
        if (position < -5199) position = 0
        slider?.current?.childNodes.forEach((element) => {
            (element as HTMLImageElement).setAttribute('style', `transform: translateX(${position}px)`)
        })
    }

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.showMore}>
                <a href='#' className={styles.linkText}>
                    Show More Matches
                </a>
            </div>
            <div className={styles.slider}>
                <img src={drop} alt="dropDownIcon" className={styles.dropLeft} onClick={prevHandler}/>
                {isLoading && <Preloader />}
                {!isLoading && <div className={styles.sliderTrack} ref={slider as LegacyRef<HTMLDivElement>}>
                    {
                        items.map((item) => (<Match
                            radiantName={item.radiant_name}
                            direName={item.dire_name}
                            radiantScore={item.radiant_score}
                            direScore={item.dire_score}
                            league={item.league_name}
                            key={item.match_id}
                        />))
                    }
                </div>}
                <img src={drop} alt="dropDownIcon" className={styles.dropRight} onClick={nextHandler}/>
            </div>
        </div>
    );
};

export default MatchSlide;