import React, {useEffect, useState} from 'react';
import Header from "../components/Header/Header";
import WhiteHeading from "../components/WhiteHeading/WhiteHeading";
import styles from "./Players.module.css";
import TextSlide from "../components/TextSlide/TextSlide";
import Footer from "../components/Footer/Footer";
import {Ids, PlayerI} from "../@types/serverType";
import axios from "axios";
import FallbackLoader from "../components/FallbackLoader/FallbackLoader";
import {withErrorBoundary} from "react-error-boundary";
import Layout from "../components/Layout/Layout";
import {Link} from "react-router-dom";

const Players = () => {
    const [ids, setIds] = useState<Ids[]>();
    const [playerIds, setPlayerIds] = useState<number[]>();
    const [players, setPlayers] = useState<PlayerI[]>();

    const fetchData = async () => {
        const { data } = await axios.get('https://api.opendota.com/api/playersByRank?api_key=de6dcb55-631f-474f-9c19-f98d5d016e96');
        setIds(data.slice(0, 10))
    }

    const fetchPlayers = async (array: any) => {
        let arr = [];
        for (let i = 0; i < array.length; i++) {
            const { data } = await axios.get(`https://api.opendota.com/api/players/${array[i]}?api_key=de6dcb55-631f-474f-9c19-f98d5d016e96`);
            arr.push(data);
        }
        setPlayers(arr);
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
        <Layout title='Рейтинг игроков по MMR' seoTitle='Лучшие игроки Dota2' seoDescription='Лучшие игроки Dota2'>
            <div className={styles.content}>
                <ul className={styles.table}>
                    <li className={styles.heading}>
                        <h2 className={styles.listHeading}>Лучшие игроки по MMR</h2>
                        <div className={styles.separator}/>
                    </li>
                    {players.sort((a, b) => {
                        return b.mmr_estimate.estimate - a.mmr_estimate.estimate
                    }).map((player) => (
                        <li className={styles.tableItem} key={player.profile.account_id}>
                            <Link to={`/players/${player.profile.account_id}`} className={styles.tableItem}>
                            <div className={styles.left}>
                                <img src={`${player.profile.avatarfull}`} alt="Аватар игрока" className={styles.image}/>
                                <p className={styles.name}>{player.profile.personaname}</p>
                            </div>
                            <p className={styles.mmr}>MMR: {player.mmr_estimate.estimate}</p>
                            </Link>
                        </li>
                    ))}
                    <button className={styles.loadButton}>Показать ещё</button>
                </ul>
            </div>
        </Layout>
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