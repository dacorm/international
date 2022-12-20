import React, {
    LegacyRef, useEffect, useRef, useState,
} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './MatchSlide.module.css';
import drop from '../../assets/images/drop2.svg';
import { DotaMatchJSON } from '../../@types/serverType';
import Match from '../Match/Match';
import Preloader from '../Preloader/Preloader';
import { unixTimeStampConverterToTime } from '../../helpers/unixConverters';

const MatchSlide = () => {
    const slider = useRef<HTMLDivElement>(null);
    const [items, setItems] = useState<DotaMatchJSON[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        const data = await axios.get('https://api.opendota.com/api/proMatches?api_key=de6dcb55-631f-474f-9c19-f98d5d016e96');
        setItems(data.data.slice(0, 20));
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    let position = 0;

    const prevHandler = () => {
        position += 245;
        if (position > 300) position = 0;
        slider?.current?.childNodes.forEach((element) => {
            (element as HTMLImageElement).setAttribute('style', `transform: translateX(${position}px)`);
        });
    };

    const nextHandler = () => {
        position -= 245;
        if (position < -5199) position = 0;
        slider?.current?.childNodes.forEach((element) => {
            (element as HTMLImageElement).setAttribute('style', `transform: translateX(${position}px)`);
        });
    };

    return (
        <div className={styles.sliderContainer}>
            <button type="button" className={styles.showMore}>
                <Link to="/calendar" className={styles.linkText}>
                    Показать матчи
                </Link>
            </button>
            <div className={styles.slider}>
                <img src={drop} alt="dropDownIcon" className={styles.dropLeft} onClick={prevHandler} />
                {isLoading && <Preloader />}
                {!isLoading && (
                    <div className={styles.sliderTrack} ref={slider as LegacyRef<HTMLDivElement>}>
                        {
                            items.map((item) => (
                                <Match
                                    id={item.match_id}
                                    radiantName={item.radiant_name}
                                    direName={item.dire_name}
                                    radiantScore={item.radiant_score}
                                    direScore={item.dire_score}
                                    league={item.league_name}
                                    key={`${item.match_id + 65}`}
                                    date={unixTimeStampConverterToTime(item.start_time)}
                                />
                            ))
                        }
                    </div>
                )}
                <img src={drop} alt="dropDownIcon" className={styles.dropRight} onClick={nextHandler} />
            </div>
        </div>
    );
};

export default MatchSlide;
