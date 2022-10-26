import React, {useState} from 'react';
import styles from './Video.module.css';
import play from '../../assets/images/play-svgrepo-com.svg';

type VideoProps = {
    src: string
    title: string
}

const Video: React.FC<VideoProps> = ({src, title}) => {
    const [visible, setVisible] = useState(false);


    const handleClick = () => {
        setVisible(true);
    }


    return (
        <div className={styles.video} onClick={handleClick}>
            {visible ? <>
                    <iframe src={src ?? 'https://www.youtube.com/embed/qQzz2YLi0LI'}
                            title={title ?? '[RU] OG vs Team Liquid – Game 2 - The International 2022 - Main Event Day 4'}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen className={styles.iframeVideo}/>
                </> :
                <>
                    <div className={styles.overlay}>
                        <img src={play} alt="Play" className={styles.play}/>
                    </div>
                    <p className={styles.text}>Последняя трансляция The Internatonal 2022</p>
                    <p className={styles.textSmall}>Нажми чтобы смотреть последние матчи play off в прямом эфире</p>
                </>}
        </div>
    );
};

export default Video;