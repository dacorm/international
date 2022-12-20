import React from 'react';
import styles from './Tag.module.css';

type TagProps = {
    text: string
}

const Tag: React.FC<TagProps> = ({ text }) => (
    <div className={styles.tag}>
        <p className={styles.tagText}>{text}</p>
    </div>
);

export default Tag;
