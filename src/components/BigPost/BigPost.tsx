import React, {memo} from 'react';
import styles from './BigPost.module.css';
import cn from 'classnames'
import {Link} from "react-router-dom";
import {useInView} from "react-intersection-observer";

type BigPostProps = {
    title: string
    author: string
    date: string
    textPreview: string
    labelText: string
    color?: string
    id: string
    image?: string
}

const BigPost: React.FC<BigPostProps> = memo(({ title, color = 'yellow', author, textPreview, labelText, date, id, image }) => {
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
        <Link ref={ref} to={`/article/${id}`} className={styles.post}>
            <div className={styles.postImg}
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
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.authorDate}>
                <p className={styles.articleAuthor}>By <span className={cn(styles.span, {
                    [styles.spanYellow]: color === 'yellow',
                    [styles.spanPurple]: color === 'purple',
                    [styles.spanBlue]: color === 'blue',
                    [styles.spanRed]: color === 'red',
                })}>{author}</span></p>
                <div className={styles.articleSep}/>
                <p className={styles.articleDate}>{date}</p>
            </div>
            <p className={styles.textPreview}>{textPreview}</p>
        </Link>
    );
});

export default BigPost;