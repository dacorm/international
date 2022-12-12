import React, {memo, useEffect, useState} from 'react';
import styles from './Screen.module.css';
import drop from '../../assets/images/expand_more_FILL0_wght400_GRAD0_opsz48.svg';
import dota from '../../assets/images/banner.webp';
import WhiteHeading from "../WhiteHeading/WhiteHeading";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../assets/hooks";
import {fetchPosts} from "../../redux/slices/posts";
import {Post} from "../../@types/serverType";
import Loader from "../Loader/Loader";

const Screen = memo(() => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [slideActive, setSlideActive] = useState(1);
    const [data, setData] = useState<Post[]>([]);
    const dispatch = useAppDispatch();
    const {posts} = useAppSelector(state => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [])

    useEffect(() => {
        if (posts.items) {
            setData(posts.items.slice(0, posts?.items.length).reverse().slice(0, 3));
        }
    }, [posts])

    const checkImageValidity = (image: string | undefined) => {
        if (image) {
            return `url(https://dota2.press/${image})`
        } else {
            return dota
        }
    }

    // useEffect(() => {
    //     if (activeIndex > 3) {
    //         setActiveIndex(1)
    //         setSlideActive(1);
    //     } else {
    //     setInterval(() => {
    //         setActiveIndex(activeIndex + 1);
    //         setSlideActive(slideActive + 1);
    //     }, 5500)
    //     }
    // }, [activeIndex, slideActive])

    return (
        <div className={styles.screen}>
            <WhiteHeading className={styles.whiteHeading} />
            {
                data.length > 0 ? data.map((item, index) => (
                    <div className={`${styles.back} ${activeIndex === index + 1 ? styles.active : ''}`} style={{
                        backgroundImage: checkImageValidity(item.imageUrl),
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }} key={index}>
                        <div className={styles.label}><p className={styles.labelText}>Dota 2</p></div>
                        <div className={styles.title}>
                            <h1 className={styles.heading}><Link to={`/article/${item._id}`} className={styles.heading}>{item.title}</Link></h1>
                        </div>
                        <button className={styles.button}>
                            <Link to={'/tournament'} className={styles.buttonText}>International</Link>
                            <div className={styles.dropWrapper}>
                                <img src={drop} alt={drop} className={styles.drop} />
                            </div>
                        </button>
                    </div>
                )) : <Loader />
            }
            <div className={styles.slider}>
                <div className={`${styles.slide} ${slideActive === 1 ? styles.slideActive : ''}`} onClick={() => {
                    setActiveIndex(1);
                    setSlideActive(1);
                }}/>
                <div className={`${styles.slide} ${slideActive === 2 ? styles.slideActive : ''}`} onClick={() => {
                    setActiveIndex(2);
                    setSlideActive(2);
                }} />
                <div className={`${styles.slide} ${slideActive === 3 ? styles.slideActive : ''}`} onClick={() => {
                    setActiveIndex(3);
                    setSlideActive(3);
                }} />
            </div>
        </div>
    );
});

export default Screen;