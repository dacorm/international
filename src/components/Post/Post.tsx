import React from 'react';
import styles from "./Post.module.css";
import post from "../../assets/images/36.jpg";
import cn from 'classnames';

type PostProps = {
    title: string
    author: string
    date: string
    color?: 'blue' | 'purple'
    className?: string
}

const Post: React.FC<PostProps> = ({ title, author, date, color = 'purple', className }) => {
    return (
        <li className={styles.article}>
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
        </li>
    );
};

export default Post;