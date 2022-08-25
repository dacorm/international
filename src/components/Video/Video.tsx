import React from 'react';
import styles from './Video.module.css';
import play from '../../assets/images/play-svgrepo-com.svg';

type VideoProps = {
    text: string
    textSmall: string
}

const Video: React.FC<VideoProps> = ({text, textSmall}) => {

    return (
        <div className={styles.video}>
            <div className={styles.overlay}>
                <img src={play} alt="Play" className={styles.play}/>
            </div>
            <p className={styles.text}>{text}</p>
            <p className={styles.textSmall}>{textSmall}</p>
        </div>
    );
};

export default Video;