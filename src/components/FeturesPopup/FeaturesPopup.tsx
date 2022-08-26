import React from 'react';
import styles from './FeaturesPopup.module.css'
import BigPost from "../BigPost/BigPost";
import cn from 'classnames';

const postsData = [{
    title: 'New "Rizen" game is gonna be released in summer 2019',
    author: 'Vellatrix',
    date: 'December, 15th',
    textPreview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus.',
    labelText: 'Gaming News',
    color: 'yellow',
    id: 13,
},{
    title: 'The new mecha cyber games is breaking barriers',
    author: 'Vellatrix',
    date: 'December, 15th',
    textPreview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus.',
    labelText: 'Gaming Reviews',
    color: 'blue',
    id: 14,
},{
    title: 'Pro soccer 2017 league kicked off today',
    author: 'Faye V.',
    date: 'December, 15th',
    textPreview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus.',
    labelText: 'eSports',
    color: 'red',
    id: 15,
},{
    title: 'Jessica time to star in new Charlotte series',
    author: 'Vellatrix',
    date: 'December, 15th',
    textPreview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus.',
    labelText: 'Geeky news',
    color: 'yellow',
    id: 16,
},]

type FeaturesPopupProps = {
    className: string
}

const FeaturesPopup: React.FC<FeaturesPopupProps> = ({ className }) => {
    return (
        <div className={cn(styles.popup, className)}>
            <div className={styles.up}>
                <div className={styles.firstList}>
                    <ul className={styles.list}>
                        <h2 className={styles.listHeading}>Pixel Main Features</h2>
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
                            Home Page
                        </li>
                        <li className={styles.listItem}>
                            News Page
                        </li>
                        <li className={styles.listItem}>
                            Main Page
                        </li>
                        <li className={styles.listItem}>
                            Tournament Page
                        </li>
                    </ul>
                    <ul className={styles.list}>
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
                        <li className={styles.listItem}>
                            Tournament Page
                        </li>
                        <li className={styles.listItem}>
                            Tournament Page
                        </li>
                        <li className={styles.listItem}>
                            Tournament Page
                        </li>
                    </ul>
                    <ul className={styles.list}>
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
                            Home Page
                        </li>
                        <li className={styles.listItem}>
                            News Page
                        </li>
                        <li className={styles.listItem}>
                            Main Page
                        </li>
                        <li className={styles.listItem}>
                            Tournament Page
                        </li>
                    </ul>
                </div>
                <div className={styles.secondList}>
                    <ul className={styles.list}>
                        <h2 className={styles.listHeading}>Account & Company</h2>
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
                            Home Page
                        </li>
                        <li className={styles.listItem}>
                            News Page
                        </li>
                        <li className={styles.listItem}>
                            Main Page
                        </li>
                        <li className={styles.listItem}>
                            Tournament Page
                        </li>
                    </ul>
                </div>
                <div className={styles.thirdList}>
                    <ul className={styles.list}>
                        <h2 className={styles.listHeading}>Pixel Foums</h2>
                        <div className={styles.separatorPurple}/>
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
                        <li className={styles.listItem}>
                            Tournament Page
                        </li>
                        <li className={styles.listItem}>
                            Tournament Page
                        </li>
                        <li className={styles.listItem}>
                            Tournament Page
                        </li>
                    </ul>
                    <ul className={styles.list}>
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
                            Home Page
                        </li>
                        <li className={styles.listItem}>
                            News Page
                        </li>
                        <li className={styles.listItem}>
                            Main Page
                        </li>
                        <li className={styles.listItem}>
                            Tournament Page
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.down}>
                {
                    postsData.map((post, index) => ( <BigPost
                        title={post.title}
                        author={post.author}
                        date={post.date}
                        textPreview={post.textPreview}
                        labelText={post.labelText}
                        color={post.color}
                        key={post.id}
                        id={post.id}
                    />))
                }
            </div>
        </div>
    );
};

export default FeaturesPopup;