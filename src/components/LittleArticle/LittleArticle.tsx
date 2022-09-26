import React from 'react';
import styles from './LittleArticle.module.css';
import cn from "classnames";
import {Link} from "react-router-dom";

type LittleArticleProps = {
    labelText: string
    color?: string
    titleText: string
    id: number | string
    image?: string
}

const LittleArticle: React.FC<LittleArticleProps> = ({ labelText, color = 'blue', titleText, id, image }) => {

    const checkImageValidity = (image: string | undefined) => {
        if (image) {
            return `url(https://mern-blog-dacorm.herokuapp.com/${image})`
        } else {
            return ``
        }
    }

    return (
        <Link to={`/article/${id}`} className={styles.article}
              style={{
                  backgroundImage: checkImageValidity(image),
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
              }}
        >
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