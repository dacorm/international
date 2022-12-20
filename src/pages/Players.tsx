import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withErrorBoundary } from 'react-error-boundary';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import WhiteHeading from '../components/WhiteHeading/WhiteHeading';
import styles from './Players.module.css';
import TextSlide from '../components/TextSlide/TextSlide';
import Footer from '../components/Footer/Footer';
import { Ids, PlayerI } from '../@types/serverType';
import FallbackLoader from '../components/FallbackLoader/FallbackLoader';
import Layout from '../components/Layout/Layout';

const firstNumber = 0;
let secondNumber = 10;

const Players = () => {
    const [ids, setIds] = useState<Ids[]>();
    const [playerIds, setPlayerIds] = useState<number[]>();
    const [players, setPlayers] = useState<PlayerI[]>();
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        const { data } = await axios.get('https://api.opendota.com/api/playersByRank?api_key=de6dcb55-631f-474f-9c19-f98d5d016e96');
        setIds(data.slice(firstNumber, secondNumber));
    };

    const loadMorePlayers = () => {
        secondNumber += 10;
        fetchData();
    };

    const fetchPlayers = async (array: any) => {
        const arr = [];
        for (let i = 0; i < array.length; i++) {
            // eslint-disable-next-line no-await-in-loop
            const { data } = await axios.get(`https://api.opendota.com/api/players/${array[i]}?api_key=de6dcb55-631f-474f-9c19-f98d5d016e96`);
            arr.push(data);
        }
        setPlayers(arr);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const array: number[] = [];
        if (ids) {
            ids.forEach((item: Ids) => {
                array.push(item.account_id);
            });
            setPlayerIds(array);
        }
    }, [ids]);

    useEffect(() => {
        if (playerIds) {
            fetchPlayers(playerIds);
        }
    }, [playerIds]);

    if (!players) {
        return <FallbackLoader />;
    }

    return (
        <Layout title="Рейтинг игроков по MMR" seoTitle="Лучшие игроки Dota2" seoDescription="Лучшие игроки Dota2">
            <div className={styles.content}>
                <ul className={styles.table}>
                    <li className={styles.heading}>
                        <h2 className={styles.listHeading}>Лучшие игроки по MMR</h2>
                        <div className={styles.separator} />
                    </li>
                    {players.sort((a, b) => b.mmr_estimate.estimate - a.mmr_estimate.estimate).map((player) => (
                        <li className={styles.tableItem} key={player.profile.account_id}>
                            <Link to={`/players/${player.profile.account_id}`} className={styles.tableItem}>
                                <div className={styles.left}>
                                    <img src={`${player.profile.avatarfull}`} alt="Аватар игрока" className={styles.image} />
                                    <p className={styles.name}>{player.profile.personaname}</p>
                                </div>
                                <p className={styles.mmr}>
                                    MMR:
                                    {player.mmr_estimate.estimate}
                                </p>
                            </Link>
                        </li>
                    ))}
                    <button
                        type="button"
                        onClick={loadMorePlayers}
                        className={`${styles.loadButton} ${isLoading ? styles.loadButtonDisabled : ''}`}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Загрузка...' : 'Показать ещё'}
                    </button>
                </ul>
            </div>
        </Layout>
    );
};

export default withErrorBoundary(Players, {
    fallback: (
        <>
            <Header />
            <WhiteHeading />
            <div className={styles.articleHeading}>
                <h1 className={styles.title}>
                    Что-то пошло не так
                </h1>
            </div>
            <TextSlide />
            <Footer />
        </>),
});
