import React from 'react';
import styles from './Commentary.module.css';

type CommentaryProps = {
    name: string
    text: string
}

const Commentary: React.FC<CommentaryProps> = ({ name, text }) => {
    return (
        <div className={styles.comment}>
            <div className={styles.avatar}/>
            <div className={styles.commentary}>
                <h2 className={styles.firstName}>{name}</h2>
                <p className={styles.commentText}>{text}</p>
            </div>
        </div>
    );
};

export default Commentary;