import React, {memo, useEffect, useMemo, useState} from 'react';
import Layout from "../components/Layout/Layout";
import {withErrorBoundary} from "react-error-boundary";
import Header from "../components/Header/Header";
import WhiteHeading from "../components/WhiteHeading/WhiteHeading";
import styles from "./HeroInfo.module.css";
import TextSlide from "../components/TextSlide/TextSlide";
import Footer from "../components/Footer/Footer";
import {useGetHeroes} from "../hooks/useGetHeroes";
import {useParams} from "react-router-dom";
import {nameConverter} from "../helpers/nameConverter";
import {Heroes, HeroPopularItems} from "../@types/serverType";
import FallbackLoader from "../components/FallbackLoader/FallbackLoader";
import {HeroStats} from "../components/HeroStats/HeroStats";
import axios from "axios";
import {Item} from "../components/MatchTableItem/MatchTableItem";


const HeroInfo = memo(() => {
    const heroes = useGetHeroes();
    const {id} = useParams();
    const [visible, setVisible] = useState(false);
    const [items, setItems] = useState<Item>();
    const [heroPopularItems, setHeroPopularItems] = useState<HeroPopularItems>();

    const hero = useMemo(() => {
        if (heroes) {
            for (let i = 0; i < heroes.length; i++) {
                if (heroes[i].id === Number(id)) {
                    return heroes[i];
                    break;
                }
            }
        }
    }, [heroes])

    const onClickChangeVisible = () => {
        setVisible((prevState) => !prevState);
    }

    const fetchHeroPopularItems = async () => {
        try {
            const { data } = await axios.get(`https://api.opendota.com/api/heroes/${id}/itemPopularity`);
            setHeroPopularItems(data);
        } catch (e) {
            console.log(e);
        }
    }

    const fetchItems = async () => {
        const { data } = await axios.get('https://api.opendota.com/api/constants/items?api_key=de6dcb55-631f-474f-9c19-f98d5d016e96');
        setItems(data);
    }

    const checkImageValidity = (hero: Heroes) => {
        if (hero) {
            return `url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${nameConverter(hero.localized_name)}.png?)`
        } else {
            return ``
        }
    }

    if (!hero) {
        return <FallbackLoader />
    }

    return (
        <Layout seoDescription={`Dota 2 - ${hero.localized_name}`} seoTitle={`Dota 2 - ${hero.localized_name}`} title={`${hero.localized_name}`}>
            <div className={styles.content}>
                {hero && <div className={styles.heroBanner}>
                    <div
                        className={styles.heroBackground}
                        style={{
                            backgroundImage: checkImageValidity(hero),
                            backgroundSize: 'cover',
                            backgroundRepeat: "no-repeat",
                            filter: 'blur(25px)',
                            height: '125%',
                            left: '-12.5%',
                            objectFit: 'cover',
                            opacity: '0.35',
                        }}
                    />
                    <div className={styles.bannerLeft}>
                        <img
                            className={styles.image}
                            src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${nameConverter(hero.localized_name)}.png?`}
                            alt="Изображение героя"
                        />
                        <div>
                            <h2 className={styles.heroName}>{hero.localized_name}</h2>
                            <p className={styles.heroRoles}>{hero.attack_type} - {hero.roles.map(item => <span key={item} className={styles.span}>{item}</span>)}</p>
                        </div>
                    </div>
                </div>}
                <button className={styles.showMoreButton} onClick={onClickChangeVisible}>
                    {visible ? 'Скрыть детальную статистику' : 'Показать детальную статистику'}
                </button>
                {hero && visible && <HeroStats id={hero.id} />}
            </div>
        </Layout>
    );
});

export default withErrorBoundary(HeroInfo, {
    fallback: (<>
        <Header/>
        <WhiteHeading/>
        <div className={styles.screen}>
            <h1 className={styles.title}>Что-то пошло не так</h1>
        </div>
        <TextSlide/>
        <Footer/>
    </>)
})
;