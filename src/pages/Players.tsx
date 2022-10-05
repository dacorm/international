import React, {useEffect, useState} from 'react';
import {Helmet, HelmetData} from "react-helmet-async";
import Header from "../components/Header/Header";
import WhiteHeading from "../components/WhiteHeading/WhiteHeading";
import styles from "./Players.module.css";
import TextSlide from "../components/TextSlide/TextSlide";
import MatchSlide from "../components/MatchSlide/MatchSlide";
import Footer from "../components/Footer/Footer";
import {Ids, PlayerI} from "../@types/serverType";
import axios from "axios";
import FallbackLoader from "../components/FallbackLoader/FallbackLoader";
import {withErrorBoundary} from "react-error-boundary";

const helmetData = new HelmetData({});


const Players = () => {
    const [ids, setIds] = useState<Ids[]>();
    const [playerIds, setPlayerIds] = useState<number[]>();
    const [players, setPlayers] = useState<PlayerI[]>();

    const fetchData = async () => {
        const { data } = await axios.get('https://api.opendota.com/api/playersByRank');
        setIds(data.slice(0, 10))
    }

    const fetchPlayers = async (array: any) => {
        let arr = [];
        for (let i = 0; i < array.length; i++) {
            const { data } = await axios.get(`https://api.opendota.com/api/players/${array[i]}`);
            arr.push(data);
        }
        setPlayers(arr);
        console.log(arr);
        console.log(players);
    }

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        let array: number[] = []
      if (ids) {
          ids.forEach((item: Ids) => {
              array.push(item.account_id);
          })
          setPlayerIds(array)
      }
    }, [ids])

    useEffect(() => {
        if (playerIds) {
            fetchPlayers(playerIds);
        }
    }, [playerIds])

    if (!players) {
        return <FallbackLoader />
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
                <h1 className={styles.title}>Рейтинг игроков по MMR</h1>
            </div>
            <TextSlide/>
            <MatchSlide/>
            <div className={styles.content}>
                <ul className={styles.table}>
                    <li className={styles.heading}>
                        <h2 className={styles.listHeading}>Лучшие игроки по MMR</h2>
                        <div className={styles.separator}/>
                    </li>
                    {players.sort((a, b) => {
                        return b.mmr_estimate.estimate - a.mmr_estimate.estimate
                    }).map((player) => (
                        <li className={styles.tableItem}>
                            <div className={styles.left}>
                                <img src={`${player.profile.avatarfull}`} alt="Аватар игрока" className={styles.image}/>
                                <p className={styles.name}>{player.profile.personaname}</p>
                            </div>
                            <p className={styles.mmr}>MMR: {player.mmr_estimate.estimate}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </div>
    );
};

export default withErrorBoundary(Players, {
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