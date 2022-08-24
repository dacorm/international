import React from 'react';
import styles from './TextArticle.module.css';
import cn from "classnames";

type TextArticleProps = {
    color?: string
    name: string
    title: string
    date: string
}

const TextArticle: React.FC<TextArticleProps> = ({ color, name, title, date }) => {
    return (
        <div className={styles.article}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.authorDate}>
                <p className={styles.articleAuthor}>By <span className={cn(styles.span, {
                    [styles.spanYellow]: color === 'yellow',
                    [styles.spanPurple]: color === 'purple',
                    [styles.spanBlue]: color === 'blue',
                    [styles.spanRed]: color === 'red',
                })}>{name}</span></p>
                <div className={styles.articleSep}/>
                <p className={styles.articleDate}>{date}</p>
            </div>
        </div>
    );
};

export default TextArticle;