import React, {useEffect, useState} from 'react';
import styles from './PlayerOverview.module.css';
import Layout from "../components/Layout/Layout";
import {withErrorBoundary} from "react-error-boundary";
import Header from "../components/Header/Header";
import WhiteHeading from "../components/WhiteHeading/WhiteHeading";
import TextSlide from "../components/TextSlide/TextSlide";
import Footer from "../components/Footer/Footer";
import {useParams} from "react-router-dom";
import {PlayerI} from "../@types/serverType";
import axios from "axios";
import FallbackLoader from "../components/FallbackLoader/FallbackLoader";

const PlayerOverview: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [info, setInfo] = useState<PlayerI>();
    const { id } = useParams();

    const fetchInfo = async (id: string) => {
        setIsLoading(true);
        const { data } = await axios.get(`https://api.opendota.com/api/players/${id}`)
        setInfo(data);
        setIsLoading(false);
    }

    useEffect(() => {
        if (id) {
            fetchInfo(id)
        }
    }, [])

    if (isLoading) {
        return <FallbackLoader />
    }

    return (
        <Layout
            seoDescription={`Информация о игроке ${info?.profile.personaname}`}
            seoTitle={`Информация о игроке ${info?.profile.personaname}`}
            title={`Информация о игроке ${info?.profile.personaname}`}>
            <div className={styles.content}>
                <div>
                    <h2 className={styles.listHeading}>Статистика игрока</h2>
                    <div className={styles.separator}/>
                </div>
                <div className={styles.info}>
                    <img src={info?.profile.avatarfull} alt="Аватар игрока" className={styles.avatar}/>
                    <div className={styles.stats}>
                        <div className={styles.first}>
                            <div>
                                <p className={styles.label}>Никнейм</p>
                                <p className={styles.infoName}>{info?.profile.personaname ?? 'Загрузка'}</p>
                            </div>
                            <div>
                                <p className={styles.label}>Steam профиль</p>
                                <a href={info?.profile.profileurl} target='_blank' className={styles.button}>Профиль</a>
                            </div>
                            <div>
                                <p className={styles.label}>Соревновательный ранг</p>
                                <p className={styles.infoName}>{info?.competitive_rank || 'Нет ранга'}</p>
                            </div>
                        </div>
                        <div className={styles.second}>
                            <p className={styles.label}>Никнейм</p>
                            <p className={styles.infoName}>Никнейм</p>
                        </div>
                        <div className={styles.third}>
                            <p className={styles.label}>Никнейм</p>
                            <p className={styles.infoName}>Никнейм</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default withErrorBoundary(PlayerOverview, {
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
})