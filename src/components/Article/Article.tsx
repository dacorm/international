import React, { memo } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import backImg from '../../assets/images/16.jpg';
import styles from './Article.module.css';

type ArticleProps = {
    className?: string
    image?: string
    id: number | string
    title: string
}

const Article: React.FC<ArticleProps> = memo(({
    className, image = backImg, id, title,
}: ArticleProps) => {
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
            className={cn(styles.article, className)}
            style={{
                backgroundImage: `${inView ? checkImageValidity(image) : ''}`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <div className={styles.wrapper}>
                <div className={styles.label}>Dota2</div>
                <p className={styles.title}>{title}</p>
            </div>
        </Link>
    );
});

export default Article;
