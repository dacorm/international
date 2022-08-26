import React, {useRef} from 'react';
import Article from "../Article/Article";
import styles from './MainContent.module.css';
import LittleArticle from "../LittleArticle/LittleArticle";
import search from '../../assets/images/searchwhite.svg';
import youtube from '../../assets/images/socials/youtube-svgrepo-com.svg';
import facebook from '../../assets/images/socials/facebook-svgrepo-com3.svg';
import twitter from '../../assets/images/socials/twitter-svgrepo-com (1).svg';
import twitch from '../../assets/images/socials/twitch-svgrepo-com.svg';
import magimons from '../../assets/images/unnamed.png'
import BigPost from "../BigPost/BigPost";
import BigArticle from "../BigArticle/BigArticle";
import Post from "../Post/Post"
import Comment from "../Comment/Comment";
import TextArticle from "../TextArticle/TextArticle";
import {
    articlesData,
    bigArticlesData,
    commentData,
    geekyPostData,
    newsPostData,
    postsData,
    reviewsPostData,
    smallPostsData,
    videoData
} from "../../assets/mainContentData";
import drop from "../../assets/images/expand_more_FILL0_wght400_GRAD0_opsz48.svg";
import Video from "../Video/Video";
import Tag from "../Tag/Tag";


const MainContent = () => {
    const slider = useRef<HTMLDivElement>(null);

    let position = 0;

    const prevHandler = () => {
        position += 280
        if (position > 350) position = 0
        slider?.current?.childNodes.forEach((element) => {
            (element as HTMLImageElement).setAttribute('style', `transform: translateX(${position}px)`)
        })
    }

    const nextHandler = () => {
        position -= 280
        if (position < -1299) position = 0
        slider?.current?.childNodes.forEach((element) => {
            (element as HTMLImageElement).setAttribute('style', `transform: translateX(${position}px)`)
        })
    }

    return (
        <div className={styles.content}>
            <div className={styles.main}>
                <div className={styles.grid}>
                    <Article className={styles.area} image={magimons} id={1} />
                    {
                        articlesData.map((article, index) => (<LittleArticle
                            labelText={article.labelText}
                            titleText={article.title}
                            color={article.color}
                            key={article.id}
                            id={article.id}
                        />))
                    }
                </div>
                <div className={styles.articles}>
                    <div className={styles.bigArticles}>
                        {
                            bigArticlesData.map((article, index) => (<BigArticle title={article.title}
                                                                                 labelText={article.labelText}
                                                                                 author={article.author}
                                                                                 textPreview={article.textPreview}
                                                                                 commentsCount={article.commentsCount}
                                                                                 date={article.date}
                                                                                 color={article.color}
                                                                                 key={article.id}
                                                                                 id={article.id}
                            />))
                        }
                    </div>
                    <div className={styles.littleArticles}>
                        {
                            postsData.map((post, index) => (<BigPost
                                title={post.title}
                                color={post.color}
                                author={post.author}
                                date={post.date}
                                textPreview={post.textPreview}
                                labelText={post.labelText}
                                key={post.id}
                                id={post.id}
                            />))
                        }
                    </div>
                </div>
                <div className={styles.textPreviews}>
                    <div className={styles.newsReviews}>
                        <h2 className={styles.Heading}>Gaming news</h2>
                        <div className={styles.separatorDown}/>
                        {
                            newsPostData.map((post, index) => (<TextArticle
                                color={post.color}
                                name={post.author}
                                title={post.title}
                                date={post.data}
                                key={post.id}
                                id={post.id}
                            />))
                        }
                    </div>
                    <div className={styles.gameReviews}>
                        <h2 className={styles.Heading}>Game Reviews</h2>
                        <div className={styles.separatorPurple}/>
                        {
                            reviewsPostData.map((post, index) => (<TextArticle
                                color={post.color}
                                name={post.author}
                                title={post.title}
                                date={post.data}
                                key={post.id}
                                id={post.id}
                            />))
                        }
                    </div>
                    <div className={styles.geekyReviews}>
                        <h2 className={styles.Heading}>Geeky news</h2>
                        <div className={styles.separatorYellow}/>
                        {
                            geekyPostData.map((post, index) => (<TextArticle
                                color={post.color}
                                name={post.author}
                                title={post.title}
                                date={post.data}
                                key={post.id}
                                id={post.id}
                            />))
                        }
                    </div>
                </div>
                <div className={styles.latestVideos}>
                    <div className={styles.videosHeading}>
                        <div>
                            <h2 className={styles.Heading}>Latest Videos</h2>
                            <div className={styles.separatorVid}/>
                        </div>
                        <div>
                            <button className={styles.button} onClick={prevHandler}>
                                <img src={drop} alt="dropDownIcon" className={styles.dropLeft} />
                            </button>
                            <button className={styles.button} onClick={nextHandler}>
                                <img src={drop} alt="dropDownIcon" className={styles.dropRight} />
                            </button>
                        </div>
                    </div>
                    <div className={styles.videoContainer} ref={slider} >
                        {
                            videoData.map((video, index) => (<Video
                                text={video.text}
                                textSmall={video.textSmall}
                                key={`${index}+5`}
                            />))
                        }
                    </div>
                </div>
            </div>
            <div className={styles.sidebar}>
                <div className={styles.inputWrap}>
                    <input type='text' placeholder='Search for articles here' className={styles.input}/>
                    <div className={styles.blueRound}>
                        <img src={search} alt="Search icon" className={styles.search}/>
                    </div>
                </div>
                <h2 className={styles.Heading}>Social Pixel</h2>
                <div className={styles.separatorDown}/>
                <div className={styles.socialWrapper}>
                    <div className={styles.social1}>
                        <img src={facebook} alt="" className={styles.socialIcon}/>
                        <p className={styles.counter}>2560</p>
                    </div>
                    <div className={styles.social2}>
                        <img src={twitter} alt="" className={styles.socialIcon}/>
                        <p className={styles.counter}>1945</p>
                    </div>
                    <div className={styles.social3}>
                        <img src={youtube} alt="" className={styles.socialIcon}/>
                        <p className={styles.counter}>835</p>
                    </div>
                    <div className={styles.social4}>
                        <img src={twitch} alt="" className={styles.socialIcon}/>
                        <p className={styles.counter}>9632</p>
                    </div>
                </div>
                <h2 className={styles.Heading}>Popular Posts</h2>
                <div className={styles.separatorDown}/>
                <div className={styles.popularPosts}>
                    {
                        smallPostsData.map((post, index) => (<Post
                            title={post.title}
                            author={post.author}
                            date={post.date}
                            key={post.id}
                            id={post.id}
                        />))
                    }
                </div>
                <h2 className={styles.Heading}>Latest Reviews</h2>
                <div className={styles.separatorPurple}/>
                <div className={styles.popularPosts}>
                    {
                        smallPostsData.map((post, index) => (<Post
                            title={post.title}
                            author={post.author}
                            date={post.date}
                            key={post.id}
                            id={post.id}
                        />))
                    }
                </div>
                <h2 className={styles.Heading}>Lastest comments</h2>
                <div className={styles.separatorDown}/>
                <div className={styles.comments}>
                    {
                        commentData.map((comment, index) => (<Comment
                            name={comment.name}
                            title={comment.title}
                            comment={comment.comment}
                            key={`${index}+2`}
                            color={comment.color}
                        />))
                    }
                </div>
                <div>
                    <h2 className={styles.Heading}>Pixel tags</h2>
                    <div className={styles.separatorDown}/>
                    <div className={styles.tags}>
                        <Tag text={'Gaming'} />
                        <Tag text={'Video Reviews'} />
                        <Tag text={'Previews'} />
                        <Tag text={'Movie Reviews'} />
                        <Tag text={'eSports'} />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;