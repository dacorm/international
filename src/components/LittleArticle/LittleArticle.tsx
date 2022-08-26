import React from 'react';
import styles from './LittleArticle.module.css';
import cn from "classnames";
import {Link} from "react-router-dom";

type LittleArticleProps = {
    labelText: string
    color?: string
    titleText: string
    id: number
}

const LittleArticle: React.FC<LittleArticleProps> = ({ labelText, color = 'blue', titleText, id }) => {



    return (
        <Link to={`/article/${id}`} className={styles.article}>
            <div className={cn(styles.label, {
                [styles.labelYellow]: color === 'yellow',
                [styles.labelPurple]: color === 'purple',
                [styles.labelBlue]: color === 'blue',
                [styles.labelRed]: color === 'red',
            })}>{labelText}</div>
            <h2 className={styles.title}>{titleText}</h2>
        </Link>
    );
};

export default LittleArticle;