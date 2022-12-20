import React, {
    memo, useCallback, useEffect, useRef, useState,
} from 'react';
import _debounce from 'lodash/debounce';
import Article from '../Article/Article';
import styles from './MainContent.module.css';
import LittleArticle from '../LittleArticle/LittleArticle';
import search from '../../assets/images/searchwhite.svg';
import youtube from '../../assets/images/socials/youtube-svgrepo-com.svg';
import facebook from '../../assets/images/socials/facebook-svgrepo-com3.svg';
import twitter from '../../assets/images/socials/twitter-svgrepo-com (1).svg';
import twitch from '../../assets/images/socials/twitch-svgrepo-com.svg';
import BigPost from '../BigPost/BigPost';
import BigArticle from '../BigArticle/BigArticle';
import Post from '../Post/Post';
import Comment from '../Comment/Comment';
import TextArticle from '../TextArticle/TextArticle';
import {
    commentData,
    geekyPostData,
    newsPostData,
    reviewsPostData,
    smallPostsData,
    videoData,
} from '../../assets/mainContentData';
import drop from '../../assets/images/expand_more_FILL0_wght400_GRAD0_opsz48.svg';
import Video from '../Video/Video';
import Tag from '../Tag/Tag';
import { useAppDispatch, useAppSelector } from '../../assets/hooks';
import { fetchPosts } from '../../redux/slices/posts';
import { convertTextIntoPreview } from '../../helpers/convertTextIntoPreview';
import { convertDate } from '../../helpers/convertDate';

const MainContent = memo(() => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const slider = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
    const { posts } = useAppSelector((state) => state.posts);

    useEffect(() => {
        setIsLoading(true);
        dispatch(fetchPosts());
        setIsLoading(false);
    }, []);

    let position = 0;

    const prevHandler = () => {
        position += 280;
        if (position > 350) position = 0;
        slider?.current?.childNodes.forEach((element) => {
            (element as HTMLImageElement).setAttribute('style', `transform: translateX(${position}px)`);
        });
    };

    const debouncePrev = useCallback(_debounce(prevHandler, 150), [position]);

    const nextHandler = () => {
        position -= 280;
        if (position < -1299) position = 0;
        slider?.current?.childNodes.forEach((element) => {
            (element as HTMLImageElement).setAttribute('style', `transform: translateX(${position}px)`);
        });
    };

    const debounceNext = useCallback(_debounce(nextHandler, 150), [position]);

    return (
        <div className={styles.content}>
            <div className={styles.main}>
                <div className={styles.grid}>
                    {
                        posts?.items?.slice(0, posts?.items?.length).reverse().slice(9, 10).map((article, index) => (
                            <Article
                                className={styles.area}
                                image={article.imageUrl}
                                id={article._id}
                                title={article.title}
                                key={`${index + 5}`}
                            />
                        ))
                    }
                    {
                        posts?.items?.slice(0, posts?.items?.length).reverse().slice(10, 13).map((article, index) => (
                            <LittleArticle
                                labelText="Dota2"
                                titleText={article.title}
                                key={`${index + 6}`}
                                id={article._id}
                                image={article.imageUrl}
                            />
                        ))
                    }
                </div>
                <div className={styles.articles}>
                    <div className={styles.bigArticles}>
                        {
                            posts?.items?.slice(0, posts?.items?.length).reverse().slice(5, 8).map((article, index) => (
                                <BigArticle
                                    title={article.title}
                                    labelText="Dota2"
                                    author="Admin"
                                    textPreview={convertTextIntoPreview(article.text)}
                                    commentsCount={article.viewsCount}
                                    date={convertDate(article.createdAt.toString())}
                                    key={`${index + 15}`}
                                    id={article._id}
                                    image={article.imageUrl}
                                />
                            ))
                        }
                    </div>
                    <div className={styles.littleArticles}>
                        {
                            posts?.items?.slice(0, posts?.items?.length).reverse().slice(0, 5).map((post, index) => (
                                <BigPost
                                    title={post.title}
                                    author="Admin"
                                    date={convertDate(post.createdAt.toString())}
                                    textPreview={convertTextIntoPreview(post.text)}
                                    labelText="Dota2"
                                    key={`${index + 18}`}
                                    id={post._id}
                                    image={post.imageUrl}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className={styles.textPreviews}>
                    <div className={styles.newsReviews}>
                        <h2 className={styles.Heading}>Обзоры игр</h2>
                        <div className={styles.separatorDown} />
                        {
                            posts?.items?.slice(0, posts?.items?.length).reverse().slice(15, 18).map((post, index) => (
                                <TextArticle
                                    color="blue"
                                    name="Admin"
                                    title={post.title}
                                    date={convertDate(post.createdAt.toString())}
                                    key={`${index + 19}`}
                                    id={post._id}
                                />
                            ))
                        }
                    </div>
                    <div className={styles.gameReviews}>
                        <h2 className={styles.Heading}>Новости Dota2</h2>
                        <div className={styles.separatorPurple} />
                        {
                            posts?.items?.slice(0, posts?.items?.length).reverse().slice(10, 13).map((post, index) => (
                                <TextArticle
                                    color="blue"
                                    name="Admin"
                                    title={post.title}
                                    date={convertDate(post.createdAt.toString())}
                                    key={`${index + 21}`}
                                    id={post._id}
                                />
                            ))
                        }
                    </div>
                    <div className={styles.geekyReviews}>
                        <h2 className={styles.Heading}>Из мира киберспорта</h2>
                        <div className={styles.separatorYellow} />
                        {
                            posts?.items?.slice(0, posts?.items?.length).reverse().slice(18, 21).map((post, index) => (
                                <TextArticle
                                    color="blue"
                                    name="Admin"
                                    title={post.title}
                                    date={convertDate(post.createdAt.toString())}
                                    key={`${index + 22}`}
                                    id={post._id}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className={styles.latestVideos}>
                    <div className={styles.videosHeading}>
                        <div>
                            <h2 className={styles.Heading}>Последние трансляции матчей</h2>
                            <div className={styles.separatorVid} />
                        </div>
                        <div>
                            <button type="button" className={styles.button} onClick={debouncePrev}>
                                <img src={drop} alt="dropDownIcon" className={styles.dropLeft} />
                            </button>
                            <button type="button" className={styles.button} onClick={debounceNext}>
                                <img src={drop} alt="dropDownIcon" className={styles.dropRight} />
                            </button>
                        </div>
                    </div>
                    <div className={styles.videoContainer} ref={slider}>
                        {
                            videoData.map((video, index) => (
                                <Video
                                    src={video.src}
                                    title={video.title}
                                    key={`${index + 24}`}
                                />
                            ))
                        }
                    </div>
                    <div className={styles.faq}>
                        <div>
                            <h1 className={styles.Heading}>Dota 2</h1>
                            <div className={styles.separatorVid} />
                        </div>
                        <div className={styles.quest}>
                            <p className={styles.question}>Dota 2 — многопользовательская командная компьютерная игра в жанре MOBA</p>
                            <div className={isOpen ? styles.remove : styles.add} onClick={() => setIsOpen(!isOpen)} />
                        </div>
                        {
                            isOpen && (
                                <p>Dota 2 — многопользовательская командная компьютерная игра в жанре MOBA</p>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className={styles.sidebar}>
                <div className={styles.inputWrap}>
                    <input type="text" placeholder="Поиск статей" className={styles.input} />
                    <div className={styles.blueRound}>
                        <img src={search} alt="Search icon" className={styles.search} />
                    </div>
                </div>
                <h2 className={styles.Heading}>Социальные сети</h2>
                <div className={styles.separatorDown} />
                <div className={styles.socialWrapper}>
                    <div className={styles.social1}>
                        <img src={facebook} alt="" className={styles.socialIcon} />
                        <p className={styles.counter}>2560</p>
                    </div>
                    <div className={styles.social2}>
                        <img src={twitter} alt="" className={styles.socialIcon} />
                        <p className={styles.counter}>1945</p>
                    </div>
                    <div className={styles.social3}>
                        <img src={youtube} alt="" className={styles.socialIcon} />
                        <p className={styles.counter}>835</p>
                    </div>
                    <div className={styles.social4}>
                        <img src={twitch} alt="" className={styles.socialIcon} />
                        <p className={styles.counter}>9632</p>
                    </div>
                </div>
                <h2 className={styles.Heading}>Популярные посты</h2>
                <div className={styles.separatorDown} />
                <div className={styles.popularPosts}>
                    {
                        posts?.items?.slice(0, posts?.items?.length).sort((a, b) => b.viewsCount - a.viewsCount).slice(0, 4).map((post, index) => (
                            <Post
                                title={post.title}
                                author="Admin"
                                date={convertDate(post.createdAt.toString())}
                                key={post._id + 26}
                                id={`${index + 50}`}
                                image={post.imageUrl}
                            />
                        ))
                    }
                </div>
                <h2 className={styles.Heading}>Последние статьи</h2>
                <div className={styles.separatorPurple} />
                <div className={styles.popularPosts}>
                    {
                        posts?.items?.slice(0, posts?.items?.length).reverse().slice(0, 4).map((post, index) => (
                            <Post
                                title={post.title}
                                author="Admin"
                                date={convertDate(post.createdAt.toString())}
                                key={post._id + 28}
                                id={`${index + 51}`}
                                image={post.imageUrl}
                            />
                        ))
                    }
                </div>
                <h2 className={styles.Heading}>Последние комментарии</h2>
                <div className={styles.separatorDown} />
                <div className={styles.comments}>
                    {
                        commentData.map((comment, index) => (
                            <Comment
                                name={comment.name}
                                title={comment.title}
                                comment={comment.comment}
                                key={`${index + 29}`}
                                color={comment.color}
                            />
                        ))
                    }
                </div>
                <div>
                    <p className={styles.Heading}>Облако тегов</p>
                    <div className={styles.separatorDown} />
                    <div className={styles.tags}>
                        <Tag text="Gaming" />
                        <Tag text="Video Reviews" />
                        <Tag text="Previews" />
                        <Tag text="Movie Reviews" />
                        <Tag text="eSports" />

                    </div>
                </div>
            </div>
        </div>
    );
});

export default MainContent;
