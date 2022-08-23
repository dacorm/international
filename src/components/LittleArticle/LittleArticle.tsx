import React from 'react';
import styles from './LittleArticle.module.css';
import cn from "classnames";

type LittleArticleProps = {
    labelText: string
    color?: string
    titleText: string
}

const LittleArticle: React.FC<LittleArticleProps> = ({ labelText, color = 'blue', titleText }) => {
    return (
        <div className={styles.article}>
            <div className={cn(styles.label, {
                [styles.labelYellow]: color === 'yellow',
                [styles.labelPurple]: color === 'purple',
                [styles.labelBlue]: color === 'blue',
                [styles.labelRed]: color === 'red',
            })}>{labelText}</div>
            <h2 className={styles.title}>{titleText}</h2>
        </div>
    );
};

export default LittleArticle;