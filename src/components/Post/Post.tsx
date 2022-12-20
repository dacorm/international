import React, {memo} from 'react';
import styles from "./Post.module.css";
import post from "../../assets/images/36.jpg";
import cn from 'classnames';
import {Link} from "react-router-dom";

type PostProps = {
    title: string
    author: string
    date: string
    color?: 'blue' | 'purple'
    className?: string
    id: string
    image?: string
}

const Post: React.FC<PostProps> = memo(({ title, author, date, color = 'purple', className, id, image }) => {

    const checkImageValidity = (image: string | undefined) => {
        if (image) {
            return `https://dota2.press/${image}`
        } else {
            return post
        }
    }

    return (
        <Link to={`/article/${id}`} className={styles.article}>
            <img src={checkImageValidity(image)} alt="Article Cover" className={styles.articleImg}/>
            <div className={styles.articleTextWrap}>
                <p className={cn(styles.articleTitle, className)}>{title}</p>
                <div className={styles.textWrap}>
                    <p className={styles.articleAuthor}>By <span className={cn(styles.span, {
                        [styles.spanBlue]: color === 'blue',
                    })}>{author}</span></p>
                    <div className={styles.articleSep}/>
                    <p className={styles.articleDate}>{date}</p>
                </div>
            </div>
        </Link>
    );
});

export default Post;