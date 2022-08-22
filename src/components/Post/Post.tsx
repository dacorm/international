import React from 'react';
import styles from "./Post.module.css";
import post from "../../assets/images/36.jpg";

type PostProps = {
    title: string
    author: string
    date: string
}

const Post: React.FC<PostProps> = ({ title, author, date }) => {
    return (
        <li className={styles.article}>
            <img src={post} alt="Article Image" className={styles.articleImg}/>
            <div className={styles.articleTextWrap}>
                <p className={styles.articleTitle}>{title}</p>
                <div className={styles.textWrap}>
                    <p className={styles.articleAuthor}>By <span className={styles.span}>{author}</span></p>
                    <div className={styles.articleSep}/>
                    <p className={styles.articleDate}>{date}</p>
                </div>
            </div>
        </li>
    );
};

export default Post;