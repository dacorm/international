import React, {memo, useEffect, useMemo} from 'react';
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
import {Heroes} from "../@types/serverType";
import FallbackLoader from "../components/FallbackLoader/FallbackLoader";


const HeroInfo = memo(() => {
    const heroes = useGetHeroes();
    const {id} = useParams();

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
        <Layout seoDescription='Герои Dota2' seoTitle='Герои Dota2' title={`${hero.localized_name}`}>
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
                            <p className={styles.heroRoles}>{hero.attack_type} - {hero.roles.map(item => <span className={styles.span}>{item}</span>)}</p>
                        </div>
                    </div>
                </div>}
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