import React, {memo} from 'react';
import styles from './BigArticle.module.css';
import cn from "classnames";
import {Link} from "react-router-dom";
import { useInView } from 'react-intersection-observer';

type BigArticleProps = {
    title: string
    labelText: string
    author: string
    textPreview: string
    commentsCount: number
    date: string
    color?: string
    id: number | string
    image?: string
}

const BigArticle: React.FC<BigArticleProps> =
    memo(({ title,
         labelText,
         author,
         textPreview,
         commentsCount
         , date, color = 'blue', id, image }) => {
    const { ref, inView } = useInView({
        threshold: 0.3,
    });

    const checkImageValidity = (image: string | undefined) => {
        if (image) {
            return `url(https://dota2.press/${image})`
        } else {
            return ``
        }
    }

    return (
        <Link to={`/article/${id}`} className={styles.article} ref={ref}>
            <div className={styles.articleImage}
                 style={{
                     backgroundImage: `${inView ? checkImageValidity(image) : ''}`,
                     backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat',
                     backgroundPosition: 'center'
                 }}
            >
                <div className={cn(styles.label, {
                    [styles.labelYellow]: color === 'yellow',
                    [styles.labelPurple]: color === 'purple',
                    [styles.labelBlue]: color === 'blue',
                    [styles.labelRed]: color === 'red',
                })}>{labelText}</div>
            </div>
            <p className={styles.title}>{title}</p>
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
                })}>{commentsCount} просмотров</span>
            </div>
            <p className={styles.textPreview}>
                {textPreview}
            </p>
        </Link>
    );
});

export default BigArticle;