import React from 'react';
import styles from './Article.module.css';
import cn from 'classnames';
import backImg from '../../assets/images/16.jpg'

type ArticleProps = {
    className: string
    image?: string
}

const Article: React.FC<ArticleProps> = ({ className, image= backImg }) => {
    return (
        <div className={cn(styles.article, className)}  style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }}>
            <div className={styles.wrapper}>
                <div className={styles.label}>Game Reviews</div>
                <h2 className={styles.title}>We Reviewed the new magimons game</h2>
                <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic!</p>
            </div>
        </div>
    );
};

export default Article;