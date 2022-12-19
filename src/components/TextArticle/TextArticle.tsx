import React, {memo} from 'react';
import styles from './TextArticle.module.css';
import cn from "classnames";
import {Link} from "react-router-dom";

type TextArticleProps = {
    color?: string
    name: string
    title: string
    date: string
    id: string
}

const TextArticle: React.FC<TextArticleProps> = memo(({ color, name, title, date, id }) => {
    return (
        <Link to={`/article/${id}`} className={styles.article}>
            <p className={styles.title}>{title}</p>
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
        </Link>
    );
});

export default TextArticle;