import React, { memo } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import styles from './LittleArticle.module.css';

type LittleArticleProps = {
    labelText: string
    color?: string
    titleText: string
    id: number | string
    image?: string
}

const LittleArticle: React.FC<LittleArticleProps> = memo(({
    labelText, color = 'blue', titleText, id, image,
}: LittleArticleProps) => {
    const { ref, inView } = useInView({
        threshold: 0.3,
    });

    const checkImageValidity = (image: string | undefined) => {
        if (image) {
            return `url(https://dota2.press/${image})`;
        }
        return '';
    };

    return (
        <Link
            ref={ref}
            to={`/article/${id}`}
            className={styles.article}
            style={{
                backgroundImage: `${inView ? checkImageValidity(image) : ''}`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <div className={cn(styles.label, {
                [styles.labelYellow]: color === 'yellow',
                [styles.labelPurple]: color === 'purple',
                [styles.labelBlue]: color === 'blue',
                [styles.labelRed]: color === 'red',
            })}
            >
                {labelText}
            </div>
            <p className={styles.title}>{titleText}</p>
        </Link>
    );
});

export default LittleArticle;
