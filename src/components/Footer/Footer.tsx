import React, {LegacyRef, useRef, useState} from 'react';
import styles from './Footer.module.css';
import logo from "../../assets/images/logo.png";
import sponsor from '../../assets/images/sponsor03.png';
import drop from "../../assets/images/expand_more_FILL0_wght400_GRAD0_opsz48.svg";
import youtube from '../../assets/images/socials/youtube-svgrepo-com.svg';
import facebook from '../../assets/images/socials/facebook-svgrepo-com2.svg';
import twitter from '../../assets/images/socials/twitter-svgrepo-com (1).svg';
import twitch from '../../assets/images/socials/twitch-svgrepo-com.svg';
import Post from "../Post/Post";
import FooterBottom from "../FooterBottom/FooterBottom";
import mail from '../../assets/images/mail.svg';
import message from '../../assets/images/message.svg';

const postsData = [{
    title: 'gwen parker is leading her team to the semifinals',
    author: 'Dexter',
    date: 'Dec, 15th',
    id: 35,
}, {
    title: 'Pro Soccer League Kicked Off Today!!',
    author: 'Faye V.',
    date: 'Dec, 15th',
    id: 36
}, {
    title: 'Last night the wolves beat the rhinos 12-10',
    author: 'Dexter',
    date: 'Dec, 15th',
    id: 37
},]

const Footer = () => {
    const slider = useRef<HTMLDivElement>(null);
    const [items, setItems] = useState([sponsor, sponsor, sponsor, sponsor, sponsor, sponsor, sponsor, sponsor, sponsor, sponsor, sponsor, sponsor]);

    let position = 0;

    const prevHandler = () => {
        position += 115
        if (position > 350) position = 0
        slider?.current?.childNodes.forEach((element) => {
            (element as HTMLImageElement).setAttribute('style', `transform: translateX(${position}px)`)
        })
    }

    const nextHandler = () => {
        position -= 115
        if (position < -1299) position = 0
        slider?.current?.childNodes.forEach((element) => {
            (element as HTMLImageElement).setAttribute('style', `transform: translateX(${position}px)`)
        })
    }


    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.upWrap}>
                    <div className={styles.logo}>
                        <img src={logo} alt="Logo" className={styles.logoImg}/>
                        <div className={styles.text}>
                            <h2 className={styles.logoText}>Pixel<span className={styles.logoSpan}>Diamond</span></h2>
                            <p className={styles.logoSub}>The Latest Gaming News</p>
                        </div>
                    </div>
                    <div className={styles.slider}>
                        <img src={drop} alt="dropDownIcon" className={styles.dropLeft} onClick={prevHandler}/>
                        <div className={styles.sliderTrack} ref={slider as LegacyRef<HTMLDivElement>}>
                            {
                                items.map((item, index) => (
                                    <img alt='Sponsor' src={item} className={styles.sliderItem} key={index}/>))
                            }
                        </div>
                        <img src={drop} alt="dropDownIcon" className={styles.dropRight} onClick={nextHandler}/>
                    </div>
                    <div className={styles.socials}>
                        <div className={styles.socialYou}><img src={youtube} alt="YouTube"
                                                               className={styles.socialImg}/></div>
                        <div className={styles.socialFb}><img src={facebook} alt="Facebook"
                                                              className={styles.socialImg}/></div>
                        <div className={styles.socialTwitch}><img src={twitch} alt="Twitch"
                                                                  className={styles.socialImg}/></div>
                        <div className={styles.socialTwitter}><img src={twitter} alt="Twitter"
                                                                   className={styles.socialImg}/></div>
                    </div>
                </div>
                <div className={styles.downWrap}>
                    <div className={styles.listWrap}>
                        <ul className={styles.mainPages}>
                            <h2 className={styles.listHeading}>Pixel Diamond</h2>
                            <div className={styles.separator}/>
                            <li className={styles.listItem}>
                                <img src={drop} alt="dropDownIcon" className={styles.dropRight}/>
                                eSports Home
                            </li>
                            <li className={styles.listItem}>
                                <img src={drop} alt="dropDownIcon" className={styles.dropRight}/>
                                eSports News
                            </li>
                            <li className={styles.listItem}>
                                <img src={drop} alt="dropDownIcon" className={styles.dropRight}/>
                                eSports Post Page
                            </li>
                            <li className={styles.listItem}>
                                <img src={drop} alt="dropDownIcon" className={styles.dropRight}/>
                                Tournament Page
                            </li>
                        </ul>
                        <ul className={styles.mainPages}>
                            <li className={styles.listItem}>
                                <img src={drop} alt="dropDownIcon" className={styles.dropRight}/>
                                eSports Home
                            </li>
                            <li className={styles.listItem}>
                                <img src={drop} alt="dropDownIcon" className={styles.dropRight}/>
                                eSports News
                            </li>
                            <li className={styles.listItem}>
                                <img src={drop} alt="dropDownIcon" className={styles.dropRight}/>
                                eSports Post Page
                            </li>
                            <li className={styles.listItem}>
                                <img src={drop} alt="dropDownIcon" className={styles.dropRight}/>
                                Tournament Page
                            </li>
                        </ul>
                    </div>
                    <ul className={styles.mainPages}>
                        <h2 className={styles.listHeading}>Latest reviews</h2>
                        <div className={styles.separator}/>
                        {
                            postsData.map((post, index) => (<Post
                                title={post.title}
                                author={post.author}
                                date={post.date}
                                key={post.id}
                                id={post.id}
                                className={styles.postText}
                            />))
                        }
                    </ul>
                    <ul className={styles.mainPages}>
                        <h2 className={styles.listHeading}>Latest posts</h2>
                        <div className={styles.separator}/>
                        {
                            postsData.map((post, index) => (<Post
                                title={post.title}
                                author={post.author}
                                date={post.date}
                                key={post.id}
                                id={post.id}
                                className={styles.postText}
                            />))
                        }
                    </ul>
                    <ul className={styles.mainPages}>
                        <h2 className={styles.listHeading}>Popular posts</h2>
                        <div className={styles.separator}/>
                        {
                            postsData.map((post, index) => (<Post
                                title={post.title}
                                author={post.author}
                                date={post.date}
                                key={post.id}
                                id={post.id}
                                className={styles.postText}
                            />))
                        }
                    </ul>
                </div>
                <div className={styles.footerDownDown}>
                    <h2 className={styles.listHeading}>Contact info</h2>
                    <div className={styles.separatorDown}/>
                    <p className={styles.footerText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Cum et eum quaerat quasi sed similique!</p>
                    <div className={styles.subscribeWrap}>
                        <div className={styles.greenRound}>
                            <img src={message} alt="MessageIcon" className={styles.messageIcon}/>
                        </div>
                        <p className={styles.subscribeText}>Subscribe to our newsletter</p>
                    </div>
                    <div className={styles.inputWrap}>
                        <input type='email' placeholder='Enter your email here' className={styles.input}/>
                        <div className={styles.greenInput}>
                            <img src={drop} alt="dropDownIcon" className={styles.dropRight} />
                        </div>
                    </div>
                    <div className={styles.emailWrap}>
                        <img src={mail} alt="Email icon" className={styles.mailIcon}/>
                        <p className={styles.emailText}>info@pixeldiamond@mail.ru</p>
                    </div>
                </div>
            </div>
            <FooterBottom/>
        </footer>
    );
};

export default Footer;