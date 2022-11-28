import React, {useEffect, useState} from 'react';
import styles from './HeadingPopup.module.css';
import team1 from '../../assets/images/01.png';
import team2 from '../../assets/images/02.png';
import post from '../../assets/images/36.jpg';
import cn from 'classnames';
import Post from "../Post/Post";
import {useAppDispatch, useAppSelector} from "../../assets/hooks";
import {convertDate} from "../../helpers/convertDate";
import {useGetLastMatch} from "../../hooks/useGetLastMatch";
import Preloader from "../Preloader/Preloader";
import {unixTimeStampConverterToTime} from "../../helpers/unixConverters";
import axios from "axios";
import {MatchInfoType} from "../../@types/serverType";

type popupProps = {
    className: string
    lazy: boolean
    isOpen: boolean
}

const HeadingPopup: React.FC<popupProps> = ({ className, lazy, isOpen }) => {
    const [isMounted, setIsMounted] = useState(false);
    const [logoRad, setLogoRad] = useState(team1);
    const [logoDire, setLogoDire] = useState(team2);
    const [data, setData] = useState<MatchInfoType | null>();
    const dispatch = useAppDispatch();
    const {posts} = useAppSelector(state => state.posts);
    const { items, isLoading } = useGetLastMatch();


    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen])

    useEffect(() => {
        const fetchLogo = async (matchId: number) => {
            try {
                const {data} = await axios.get(`https://api.opendota.com/api/matches/${matchId}?api_key=de6dcb55-631f-474f-9c19-f98d5d016e96`);
                setData(data);
            } catch (e) {
                console.log(e);
            }
        }

        if (items.length > 0) {
            fetchLogo(items[0].match_id);
        }
    }, [items])

    useEffect(() => {
        const logoUrlConverterDire = (url: string | null | undefined) => {
            if (url) return setLogoDire(url);
            return
        }

        const logoUrlConverterRad = (url: string | null | undefined) => {
            if (url) return setLogoRad(url);
            return
        }

        if (data?.radiant_team) {
            logoUrlConverterRad(data.radiant_team.logo_url)
        }

        if (data?.dire_team) {
            logoUrlConverterDire(data.dire_team.logo_url)
        }
    }, [data])

    if (lazy && !isMounted) {
        return null
    }

    return (
        <div className={cn(styles.popup, className)}>
            <div className={styles.lists}>
                <div className={styles.up}>
                    <ul className={styles.mainPages}>
                        <h2 className={styles.listHeading}>Main Pages</h2>
                        <div className={styles.separator}/>
                        <li className={styles.listItem}>
                            eSports Home
                        </li>
                        <li className={styles.listItem}>
                            eSports News
                        </li>
                        <li className={styles.listItem}>
                            eSports Post Page
                        </li>
                        <li className={styles.listItem}>
                            Tournament Page
                        </li>
                    </ul>
                    <ul className={styles.matchOverviews}>
                        <h2 className={styles.listHeading}>Match Overviews</h2>
                        <div className={styles.separator}/>
                        <li className={styles.listItem}>
                            Match Overview 1
                        </li>
                        <li className={styles.listItem}>
                            Match Overview 2
                        </li>
                        <li className={styles.listItem}>
                            Match Overview 3
                        </li>
                        <li className={styles.listItem}>
                            Match Overview 4
                        </li>
                    </ul>
                    <ul className={styles.teams}>
                        <h2 className={styles.listHeading}>Teams & Players</h2>
                        <div className={styles.separator}/>
                        <li className={styles.listItem}>
                            eSports Team Page
                        </li>
                        <li className={styles.listItem}>
                            eSports Player Page
                        </li>
                        <li className={styles.listItem}>
                            Streamers Page
                        </li>
                        <li className={styles.listItem}>
                            Scores With Calendar
                        </li>
                    </ul>
                </div>
                <div className={styles.widgets}>
                    <h2 className={styles.listHeading}>Esports Widget</h2>
                    <div className={styles.separator}/>
                    <ul className={styles.widget}>
                        <li className={styles.listItem}>
                            Widgets Page 1
                        </li>
                        <li className={styles.listItem}>
                            Widgets Page 2
                        </li>
                        <li className={styles.listItem}>
                            Widgets Page 3
                        </li>
                    </ul>
                </div>
                <div className={styles.streamers}>
                    <h2 className={styles.listHeading}>Pixel Streamers</h2>
                    <div className={styles.separator}/>
                    <ul className={styles.streamersUl}>
                        <li className={styles.streamer}/>
                        <li className={styles.streamer2}/>
                        <li className={styles.streamer3}/>
                        <li className={styles.streamer4}/>
                    </ul>
                </div>
            </div>
            {
                isLoading ? <Preloader /> : (<div className={styles.featuredMatch}>
                    <h2 className={styles.listHeading}>Ближайший матч</h2>
                    <div className={styles.separator}/>
                    <div className={styles.matchinfo}>
                        <p className={styles.league}>{items.map((item) => item.league_name)}</p>
                        <p className={styles.date}>{items.map((item) => unixTimeStampConverterToTime(item.start_time))}</p>
                    </div>
                    <div className={styles.match}>
                        <div className={styles.team}>
                            <img src={logoDire} alt="Team One" className={styles.teamLogo}/>
                            <div className={styles.teamInf}>
                                <p className={styles.teamName}>{items.map((item) => item.dire_name)}</p>
                            </div>
                        </div>
                        <p className={styles.vs}>VS</p>
                        <div className={styles.team}>
                            <img src={logoRad} alt="Team Two" className={styles.teamLogo}/>
                            <div className={styles.teamInf}>
                                <p className={styles.teamName}>{items.map((item) => item.radiant_name)}</p>
                            </div>
                        </div>
                    </div>
                </div>)
            }
            <div className={styles.articles}>
                <h2 className={styles.listHeading}>Последние статьи</h2>
                <div className={styles.separator}/>
                <ul className={styles.articlesUl}>
                    {
                        posts?.items?.slice(0, posts?.items?.length).reverse().slice(0, 4).map((post) => (<Post
                            title={post.title}
                            author={'Admin'}
                            date={convertDate(post.createdAt.toString())}
                            key={post._id}
                            id={post._id}
                            image={post.imageUrl}
                            className={styles.postText}
                        />))
                    }
                </ul>
            </div>
        </div>
    );
};

export default HeadingPopup;
