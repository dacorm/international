import React, {useEffect, useState} from 'react';
import styles from './TextSlide.module.css';
import {useAppSelector} from "../../assets/hooks";

const TextSlide = () => {
    const { posts } = useAppSelector(state => state.posts);
    const [text, setText] = useState<string | undefined>('');

    useEffect(() => {
        const fourPosts = posts?.items?.slice(0, posts?.items?.length).reverse().slice(10, 13).slice(0, 5);
        const titles = fourPosts?.map((item) => item.title)
        setText(titles?.join(' // '));
    }, [posts])

    return (
        <div className={styles.string}>
            <div className={styles.left}/>
            <p className={styles.text}>{text ?? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, sunt?Lorem ipsum\n' +
            '                dolor sit amet, consectetur adipisicing elit. Omnis, sunt?Lorem ipsum dolor sit amet, consectetur\n' +
            '                adipisicing elit. Omnis, sunt?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, sunt?'}
            </p>
            <div className={styles.right}/>
        </div>
    );
};

export default TextSlide;