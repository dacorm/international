import React from 'react';
import styles from './CommentForm.module.css';
import drop from "../../assets/images/expand_more_FILL0_wght400_GRAD0_opsz48.svg";

const CommentForm = () => {
    return (
        <form className={styles.form}>
            <label htmlFor='input' className={styles.inputLabel}>Your name</label>
            <input className={styles.input} type='text' placeholder={'Enter your firstname'} id='input' />
            <label htmlFor='textarea' className={styles.textLabel}>Your comment</label>
            <textarea className={styles.textarea} placeholder={'Write your comment here'} id='textarea' />
            <button className={styles.button}>
                <p className={styles.buttonText}>Post Your Comment</p>
                <div className={styles.dropWrapper}>
                    <img src={drop} alt={drop} className={styles.drop} />
                </div>
            </button>
        </form>
    );
};

export default CommentForm;