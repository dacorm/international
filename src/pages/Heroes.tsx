import React, {useEffect, useState} from 'react';
import styles from './Heroes.module.css';
import Layout from "../components/Layout/Layout";
import {withErrorBoundary} from "react-error-boundary";
import Header from "../components/Header/Header";
import WhiteHeading from "../components/WhiteHeading/WhiteHeading";
import TextSlide from "../components/TextSlide/TextSlide";
import Footer from "../components/Footer/Footer";
import { Heroes as HeroesType } from "../@types/serverType";
import Champion from "../components/Champion/Champion";
import axios from "axios";
import {getWithExpiry, setWithExpiry} from "../helpers/localStorage";

const Heroes = () => {
    const [heroes, setHeroes] = useState<HeroesType[]>();

    useEffect(() => {
       const fetchHeroes = async () => {
           try {
               const { data } = await axios.get('https://api.opendota.com/api/heroes?api_key=de6dcb55-631f-474f-9c19-f98d5d016e96');
               setWithExpiry<HeroesType[]>('heroes', data, 5000000);
               setHeroes(data);
           } catch (e) {
               console.log(e);
           }
       }

       setHeroes(getWithExpiry('heroes'));
       if (!heroes) {
           fetchHeroes();
       }
    }, [])

    return (
        <Layout seoDescription='Герои Dota2' seoTitle='Герои Dota2' title='Герои Dota2'>
            <div className={styles.content}>
                <div className={styles.sectionHeading}>
                    <h2 className={styles.listHeading}>Список героев Dota2</h2>
                    <div className={styles.separator}/>
                </div>
                <div className={styles.heroesContainer}>
                    {heroes && heroes.map((item, index) => (<Champion
                        index={index}
                        key={item.id}
                        id={item.id}
                        heroes={heroes}
                    />))}
                </div>
            </div>
        </Layout>
    );
};

export default withErrorBoundary(Heroes, {
    fallback: (<>
        <Header/>
        <WhiteHeading/>
        <div className={styles.screen}>
            <h1 className={styles.title}>Что-то пошло не так</h1>
        </div>
        <TextSlide/>
        <Footer />
    </>)
})
;