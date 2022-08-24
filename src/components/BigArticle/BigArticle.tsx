import React from 'react';
import styles from './BigArticle.module.css';
import cn from "classnames";

type BigArticleProps = {
    title: string
    labelText: string
    author: string
    textPreview: string
    commentsCount: number
    date: string
    color?: string
}

const BigArticle: React.FC<BigArticleProps> = ({ title, labelText, author, textPreview, commentsCount, date, color = 'blue' }) => {


    return (
        <div className={styles.article}>
            <div className={styles.articleImage}>
                <div className={cn(styles.label, {
                    [styles.labelYellow]: color === 'yellow',
                    [styles.labelPurple]: color === 'purple',
                    [styles.labelBlue]: color === 'blue',
                    [styles.labelRed]: color === 'red',
                })}>{labelText}</div>
            </div>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.wrapper}>
                <div className={styles.avatar}/>
                <p className={styles.articleAuthor}>By <span className={cn(styles.span, {
                    [styles.spanYellow]: color === 'yellow',
                    [styles.spanPurple]: color === 'purple',
                    [styles.spanBlue]: color === 'blue',
                    [styles.spanRed]: color === 'red',
                })}>{author}</span></p>
                <div className={styles.articleSep}/>
                <p className={styles.articleDate}>{date}</p>
                <div className={styles.articleSep}/>
                <span className={cn(styles.span, {
                    [styles.spanYellow]: color === 'yellow',
                    [styles.spanPurple]: color === 'purple',
                    [styles.spanBlue]: color === 'blue',
                    [styles.spanRed]: color === 'red',
                })}>{commentsCount} Comments</span>
            </div>
            <p className={styles.textPreview}>
                {textPreview}
            </p>
        </div>
    );
};

export default BigArticle;