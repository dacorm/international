import React, {
    memo, useEffect, useMemo, useState,
} from 'react';
import { withErrorBoundary } from 'react-error-boundary';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import customAxios from '../axios';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import WhiteHeading from '../components/WhiteHeading/WhiteHeading';
import styles from './HeroInfo.module.css';
import TextSlide from '../components/TextSlide/TextSlide';
import Footer from '../components/Footer/Footer';
import { useGetHeroes } from '../hooks/useGetHeroes';
import { nameConverter } from '../helpers/nameConverter';
import { Heroes, HeroPopularItems } from '../@types/serverType';
import FallbackLoader from '../components/FallbackLoader/FallbackLoader';
import { HeroStats } from '../components/HeroStats/HeroStats';
import { Item } from '../components/MatchTableItem/MatchTableItem';
import { HeroItems } from '../components/HeroItems/HeroItems';
import { useAppSelector } from '../assets/hooks';
import { selectIsAuth, selectName } from '../redux/slices/auth';

const HeroInfo = memo(() => {
    const heroes = useGetHeroes();
    const { id } = useParams();
    const [visible, setVisible] = useState(false);
    const [items, setItems] = useState<Item[]>();
    const [text, setText] = useState();
    const [heroPopularItems, setHeroPopularItems] = useState<HeroPopularItems>();
    const isAuth = useAppSelector(selectIsAuth);
    const user = useAppSelector(selectName);

    const isUserAdmin = isAuth && (user.fullName === 'admin');

    const hero = useMemo(() => {
        if (heroes) {
            for (let i = 0; i < heroes.length; i++) {
                if (heroes[i].id === Number(id)) {
                    return heroes[i];
                }
            }
        }
    }, [heroes]);

    const onClickChangeVisible = () => {
        setVisible((prevState) => !prevState);
    };

    const fetchHeroPopularItems = async () => {
        try {
            const { data } = await axios.get(`https://api.opendota.com/api/heroes/${id}/itemPopularity`);
            setHeroPopularItems(data);
        } catch (e) {
            console.log(e);
        }
    };

    const fetchItems = async () => {
        const { data } = await axios.get('https://api.opendota.com/api/constants/items?api_key=de6dcb55-631f-474f-9c19-f98d5d016e96');
        setItems(data);
    };

    const fetchGuide = async () => {
        const { data } = await customAxios.get(`/guides/${id}`);
        setText(data.text);
    };

    useEffect(() => {
        fetchItems();
        fetchHeroPopularItems();
        fetchGuide();
    }, []);

    const filterStartGameItems = useMemo(() => {
        const res: Item[] = [];
        if (items && heroPopularItems) {
            const startGamePopular = heroPopularItems.start_game_items;
            const ids = Object.keys(startGamePopular);
            const uniqueIds = new Set(ids);
            const itemsArray = Object.entries(items);
            for (let i = 0; i < itemsArray.length; i++) {
                uniqueIds.forEach((id) => {
                    if (itemsArray[i][1].id === +id) {
                        res.push(itemsArray[i][1]);
                    }
                });
            }
        }
        return res;
    }, [items, heroPopularItems]);

    const filterEarlyGameItems = useMemo(() => {
        const res: Item[] = [];
        if (items && heroPopularItems) {
            const earlyGameItems = heroPopularItems.early_game_items;
            const ids = Object.keys(earlyGameItems);
            const uniqueIds = new Set(ids);
            const itemsArray = Object.entries(items);
            for (let i = 0; i < itemsArray.length; i++) {
                uniqueIds.forEach((id) => {
                    if (itemsArray[i][1].id === +id) {
                        res.push(itemsArray[i][1]);
                    }
                });
            }
        }
        return res;
    }, [items, heroPopularItems]);

    const filterMidGameItems = useMemo(() => {
        const res: Item[] = [];
        if (items && heroPopularItems) {
            const midGameItems = heroPopularItems.mid_game_items;
            const ids = Object.keys(midGameItems);
            const uniqueIds = new Set(ids);
            const itemsArray = Object.entries(items);
            for (let i = 0; i < itemsArray.length; i++) {
                uniqueIds.forEach((id) => {
                    if (itemsArray[i][1].id === +id) {
                        res.push(itemsArray[i][1]);
                    }
                });
            }
        }
        return res;
    }, [items, heroPopularItems]);

    const filterLateGameItems = useMemo(() => {
        const res: Item[] = [];
        if (items && heroPopularItems) {
            const lateGameItems = heroPopularItems.late_game_items;
            const ids = Object.values(lateGameItems);
            const uniqueIds = new Set(ids);
            const itemsArray = Object.entries(items);
            for (let i = 0; i < itemsArray.length; i++) {
                uniqueIds.forEach((id) => {
                    if (itemsArray[i][1].id === id) {
                        res.push(itemsArray[i][1]);
                    }
                });
            }
        }
        return res;
    }, [items, heroPopularItems]);

    const checkImageValidity = (hero: Heroes) => {
        if (hero) {
            return `url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${nameConverter(hero.localized_name)}.png?)`;
        }
        return '';
    };

    if (!hero) {
        return <FallbackLoader />;
    }

    return (
        <Layout
            /* eslint-disable-next-line max-len */
            seoDescription={`Гайд на ${hero.localized_name}: стратегия игры и способности (абилки) ${hero.localized_name} в Dota 2. Свежий гайд на героя ${hero.localized_name} - актуальная сборка, контр-пики, связки с героями.`}
            seoTitle={`Гайд и сборка ${hero.localized_name} Дота 2 - Как играть за героя ${hero.localized_name} - Dota 2`}
            title={`Гайд и сборка на ${hero.localized_name}`}
        >
            <div className={styles.content}>
                {hero && (
                    <div className={styles.heroBanner}>
                        <div
                            className={styles.heroBackground}
                            style={{
                                backgroundImage: checkImageValidity(hero),
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
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
                                <p className={styles.heroRoles}>
                                    {hero.attack_type}
                                    {' '}
                                    -
                                    {' '}
                                    {hero.roles.map((item) => <span key={item} className={styles.span}>{item}</span>)}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                <button type="button" className={styles.showMoreButton} onClick={onClickChangeVisible}>
                    {visible ? 'Скрыть детальную статистику' : 'Показать детальную статистику'}
                </button>
                {hero && visible && <HeroStats id={hero.id} />}
                <div className={styles.itemsContainer}>
                    {items && <HeroItems items={filterStartGameItems} title="Стартовая закупка" />}
                    {items && <HeroItems items={filterEarlyGameItems} title="Начальная игра" />}
                    {items && <HeroItems items={filterMidGameItems} title="Средняя игра" />}
                    {items && <HeroItems items={filterLateGameItems} title="Поздняя игра" />}
                </div>
                <div className={styles.sectionHeading}>
                    <h2 className={styles.listHeading}>Гайд на героя</h2>
                    <div className={styles.separator} />
                    {isAuth && isUserAdmin && !text && <Link to={`/guides/${id}`} className={styles.guideButton}>Создать гайд на героя</Link>}
                    {text ? <ReactMarkdown className={styles.mdn}>{text}</ReactMarkdown> : null}
                </div>
            </div>
        </Layout>
    );
});

export default withErrorBoundary(HeroInfo, {
    fallback: (
        <>
            <Header />
            <WhiteHeading />
            <div className={styles.screen}>
                <h1 className={styles.title}>Что-то пошло не так</h1>
            </div>
            <TextSlide />
            <Footer />
        </>),
});
