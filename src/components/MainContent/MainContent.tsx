import React from 'react';
import Article from "../Article/Article";
import styles from './MainContent.module.css';
import LittleArticle from "../LittleArticle/LittleArticle";
import search from '../../assets/images/searchwhite.svg';
import youtube from '../../assets/images/socials/youtube-svgrepo-com.svg';
import facebook from '../../assets/images/socials/facebook-svgrepo-com3.svg';
import twitter from '../../assets/images/socials/twitter-svgrepo-com (1).svg';
import twitch from '../../assets/images/socials/twitch-svgrepo-com.svg';

const articlesData = [{
    title: 'New expansion pack coming to "Rise of Depredators"',
    labelText: 'Gaming News',
    color: 'blue'
}, {
    title: '"Legend of Kenshi II" is a bit green for now',
    labelText: 'Game Reviews',
    color: 'red'
}, {
    title: '"Ichigo Idol" anime will have a new season in April',
    labelText: 'Geeky News',
    color: 'yellow'
},]

const MainContent = () => {
    return (
        <div className={styles.content}>
            <div className={styles.main}>
                <div className={styles.grid}>
                    <Article className={styles.area}></Article>
                    {
                        articlesData.map((article, index) => (<LittleArticle
                            labelText={article.labelText}
                            titleText={article.title}
                            color={article.color}
                            key={index}
                        />))
                    }
                </div>
            </div>
            <div className={styles.sidebar}>
                <div className={styles.inputWrap}>
                    <input type='text' placeholder='Search for articles here' className={styles.input} />
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
            </div>
        </div>
    );
};

export default MainContent;