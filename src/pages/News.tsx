import React, {useEffect, useState} from 'react';
import {Helmet, HelmetData} from "react-helmet-async";
import Header from "../components/Header/Header";
import WhiteHeading from "../components/WhiteHeading/WhiteHeading";
import styles from "./News.module.css";
import TextSlide from "../components/TextSlide/TextSlide";
import MatchSlide from "../components/MatchSlide/MatchSlide";
import Footer from "../components/Footer/Footer";
import {useAppDispatch, useAppSelector} from "../assets/hooks";
import BigArticle from "../components/BigArticle/BigArticle";
import {convertTextIntoPreview} from "../helpers/convertTextIntoPreview";
import {convertDate} from "../helpers/convertDate";
import {fetchPosts} from "../redux/slices/posts";
import FallbackLoader from "../components/FallbackLoader/FallbackLoader";
import BigPost from "../components/BigPost/BigPost";
import {getRandomNumber} from "../helpers/getRandomNumber";
import {withErrorBoundary} from "react-error-boundary";
import Layout from "../components/Layout/Layout";

const helmetData = new HelmetData({});


const News = () => {
    const [number, setNumber] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useAppDispatch();
    const {posts} = useAppSelector(state => state.posts);

    useEffect(() => {
        if (posts!.items!.length === 0) {
            setIsLoading(true);
            dispatch(fetchPosts());
            setIsLoading(false);
        }
    }, [])

    useEffect(() => {
       if (posts.items) {
           setNumber(getRandomNumber(0, posts.items.length))
       }
    }, [posts])

    if (isLoading) {
        return <FallbackLoader />
    }

    return (
        <Layout seoTitle='Все новости Dota2' seoDescription='Новости Dota2' title='Новости Dota2'>
            <div className={styles.content}>
                <div className={styles.posts}>
                    {posts!.items!.slice(0, posts?.items?.length).reverse().map((item) => (
                        <BigArticle
                            title={item.title}
                            labelText={'Dota2'}
                            author={'Admin'}
                            textPreview={convertTextIntoPreview(item.text)}
                            commentsCount={item.viewsCount}
                            date={convertDate(item.createdAt.toString())}
                            key={item._id}
                            id={item._id}
                            image={item.imageUrl} />
                    ))}
                </div>
                <div className={styles.related}>
                    <h2 className={styles.listHeading}>Рекомендованные статьи</h2>
                    <div className={styles.separator}/>
                    {
                        posts?.items?.slice(number, number + 2).map((post) => (<BigPost
                            title={post.title}
                            author={'Admin'}
                            date={convertDate(post.createdAt.toString())}
                            textPreview={convertTextIntoPreview(post.text)}
                            labelText={'Dota2'}
                            key={post._id}
                            id={post._id}
                            image={post.imageUrl}
                        />))
                    }
                </div>
            </div>
        </Layout>
    );
};

export default withErrorBoundary(News, {
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