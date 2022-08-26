import React from 'react';
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
    id: number
}

const Post: React.FC<PostProps> = ({ title, author, date, color = 'purple', className, id }) => {
    return (
        <Link to={`/article/${id}`} className={styles.article}>
            <img src={post} alt="Article Image" className={styles.articleImg}/>
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
};

export default Post;