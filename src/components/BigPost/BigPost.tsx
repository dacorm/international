import React from 'react';
import styles from './BigPost.module.css';
import cn from 'classnames'

type BigPostProps = {
    title: string
    author: string
    date: string
    textPreview: string
    labelText: string
    color?: string
}

const BigPost: React.FC<BigPostProps> = ({ title, color = 'yellow', author, textPreview, labelText, date }) => {
    return (
        <div className={styles.post}>
            <div className={styles.postImg}>
                <div className={cn(styles.label, {
                    [styles.labelYellow]: color === 'yellow',
                    [styles.labelPurple]: color === 'purple',
                    [styles.labelBlue]: color === 'blue',
                    [styles.labelRed]: color === 'red',
                })}>{labelText}</div>
            </div>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.authorDate}>
                <p className={styles.articleAuthor}>By <span className={cn(styles.span, {
                    [styles.spanYellow]: color === 'yellow',
                    [styles.spanPurple]: color === 'purple',
                    [styles.spanBlue]: color === 'blue',
                    [styles.spanRed]: color === 'red',
                })}>Vellatrix</span></p>
                <div className={styles.articleSep}/>
                <p className={styles.articleDate}>{date}</p>
            </div>
            <p className={styles.textPreview}>{textPreview}</p>
        </div>
    );
};

export default BigPost;