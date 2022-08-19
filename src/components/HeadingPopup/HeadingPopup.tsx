import React from 'react';
import styles from './HeadingPopup.module.css';
import team1 from '../../assets/images/01.png';
import team2 from '../../assets/images/02.png';
import post from '../../assets/images/36.jpg';
import cn from 'classnames';

type popupProps = {
    className: string
}

const HeadingPopup: React.FC<popupProps> = ({ className }) => {
    return (
        <div className={cn(styles.popup, className)}>
            <div className={styles.lists}>
                <div className={styles.up}>
                    <ul className={styles.mainPages}>
                        <h2 className={styles.listHeading}>Main Pages</h2>
                        <div className={styles.separator}/>
                        <li className={styles.listItem}>
                            eSports Home
                        </li>
                        <li className={styles.listItem}>
                            eSports News
                        </li>
                        <li className={styles.listItem}>
                            eSports Post Page
                        </li>
                        <li className={styles.listItem}>
                            Tournament Page
                        </li>
                    </ul>
                    <ul className={styles.matchOverviews}>
                        <h2 className={styles.listHeading}>Match Overviews</h2>
                        <div className={styles.separator}/>
                        <li className={styles.listItem}>
                            Match Overview 1
                        </li>
                        <li className={styles.listItem}>
                            Match Overview 2
                        </li>
                        <li className={styles.listItem}>
                            Match Overview 3
                        </li>
                        <li className={styles.listItem}>
                            Match Overview 4
                        </li>
                    </ul>
                    <ul className={styles.teams}>
                        <h2 className={styles.listHeading}>Teams & Players</h2>
                        <div className={styles.separator}/>
                        <li className={styles.listItem}>
                            eSports Team Page
                        </li>
                        <li className={styles.listItem}>
                            eSports Player Page
                        </li>
                        <li className={styles.listItem}>
                            Streamers Page
                        </li>
                        <li className={styles.listItem}>
                            Scores With Calendar
                        </li>
                    </ul>
                </div>
                <div className={styles.widgets}>
                    <h2 className={styles.listHeading}>Esports Widget</h2>
                    <div className={styles.separator}/>
                    <ul className={styles.widget}>
                        <li className={styles.listItem}>
                            Widgets Page 1
                        </li>
                        <li className={styles.listItem}>
                            Widgets Page 2
                        </li>
                        <li className={styles.listItem}>
                            Widgets Page 3
                        </li>
                    </ul>
                </div>
                <div className={styles.streamers}>
                    <h2 className={styles.listHeading}>Pixel Streamers</h2>
                    <div className={styles.separator}/>
                    <ul className={styles.streamersUl}>
                        <li className={styles.streamer}/>
                        <li className={styles.streamer2}/>
                        <li className={styles.streamer3}/>
                        <li className={styles.streamer4}/>
                    </ul>
                </div>
            </div>
            <div className={styles.featuredMatch}>
                <h2 className={styles.listHeading}>Featured Match</h2>
                <div className={styles.separator}/>
                <div className={styles.matchinfo}>
                    <p className={styles.league}>xenowatch league finals</p>
                    <p className={styles.date}>August 28th</p>
                </div>
                <div className={styles.match}>
                    <div className={styles.team}>
                        <img src={team1} alt="Team One" className={styles.teamLogo}/>
                        <div className={styles.teamInf}>
                            <p className={styles.teamName}>The Lone Wolves</p>
                            <p className={styles.teamCountry}>United States</p>
                        </div>
                    </div>
                    <p className={styles.vs}>VS</p>
                    <div className={styles.team}>
                        <img src={team2} alt="Team Two" className={styles.teamLogo}/>
                        <div className={styles.teamInf}>
                            <p className={styles.teamName}>The Racing Rhinos</p>
                            <p className={styles.teamCountry}>South Africa</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.articles}>
                <h2 className={styles.listHeading}>Featured Articles</h2>
                <div className={styles.separator}/>
                <ul className={styles.articlesUl}>
                    <li className={styles.article}>
                        <img src={post} alt="Article Image" className={styles.articleImg} />
                        <div className={styles.articleTextWrap}>
                            <p className={styles.articleTitle}>gwen parker is leading her team to the semifinals</p>
                            <div className={styles.textWrap}>
                                <p className={styles.articleAuthor}>By <span className={styles.span}>Dexter</span></p>
                                <div className={styles.articleSep}/>
                                <p className={styles.articleDate}>Dec, 15th</p>
                            </div>
                        </div>
                    </li>
                    <li className={styles.article}>
                        <img src={post} alt="Article Image" className={styles.articleImg}/>
                        <div className={styles.articleTextWrap}>
                            <p className={styles.articleTitle}>Pro Soccer League Kicked Off Today!!</p>
                            <div className={styles.textWrap}>
                                <p className={styles.articleAuthor}>By <span className={styles.span}>Faye V.</span></p>
                                <div className={styles.articleSep}/>
                                <p className={styles.articleDate}>Dec, 15th</p>
                            </div>
                        </div>
                    </li>
                    <li className={styles.article}>
                        <img src={post} alt="Article Image" className={styles.articleImg}/>
                        <div className={styles.articleTextWrap}>
                            <p className={styles.articleTitle}>Last night the wolves beat the rhinos 12-10</p>
                            <div className={styles.textWrap}>
                                <p className={styles.articleAuthor}>By <span className={styles.span}>Dexter</span></p>
                                <div className={styles.articleSep}/>
                                <p className={styles.articleDate}>Dec, 15th</p>
                            </div>
                        </div>
                    </li>
                    <li className={styles.article}>
                        <img src={post} alt="Article Image" className={styles.articleImg}/>
                        <div className={styles.articleTextWrap}>
                            <p className={styles.articleTitle}>gwen parker is leading her team to the semifinals</p>
                            <div className={styles.textWrap}>
                                <p className={styles.articleAuthor}>By <span className={styles.span}>Dexter</span></p>
                                <div className={styles.articleSep}/>
                                <p className={styles.articleDate}>Dec, 15th</p>
                            </div>
                        </div>
                    </li>
                    <li className={styles.article}>
                        <img src={post} alt="Article Image" className={styles.articleImg}/>
                        <div className={styles.articleTextWrap}>
                            <p className={styles.articleTitle}>gwen parker is leading her team to the semifinals</p>
                            <div className={styles.textWrap}>
                                <p className={styles.articleAuthor}>By <span className={styles.span}>Dexter</span></p>
                                <div className={styles.articleSep}/>
                                <p className={styles.articleDate}>Dec, 15th</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HeadingPopup;