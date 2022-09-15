import React, {useEffect, useState} from 'react';
import styles from './Screen.module.css';
import drop from '../../assets/images/expand_more_FILL0_wght400_GRAD0_opsz48.svg';
import cs from '../../assets/images/099a6cd51d99d94856577c535e858cc0.jpg';
import dota from '../../assets/images/ae306fadfec0cb591697545dbb30a456.jpg';
import lol from '../../assets/images/57167e56a68d8.jpg';
import WhiteHeading from "../WhiteHeading/WhiteHeading";
import banner from '../../assets/images/300x350---5.gif';
import close from '../../assets/images/close_FILL0_wght400_GRAD0_opsz48.svg';

const data = [{
    image: dota,
    title: 'The "Clash of Eternity" new game was just released',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}, {
    image: cs,
    title: 'We reviewed the new Magimons game',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}, {
    image: lol,
    title: 'New expansion pack coming to "Rise of Depredators"',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}]

const Screen = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [slideActive, setSlideActive] = useState(1);
    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => {
       setIsOpen(true);
       document.body.style.overflow = "hidden"
    }

    const closePopup = () => {
        setIsOpen(false);
        document.body.style.overflow = "auto"
    }

    // useEffect(() => {
    //     if (activeIndex > 3) {
    //         setActiveIndex(1)
    //         setSlideActive(1);
    //     } else {
    //     setInterval(() => {
    //         setActiveIndex(activeIndex + 1);
    //         setSlideActive(slideActive + 1);
    //     }, 5500)
    //     }
    // }, [activeIndex, slideActive])

    return (
        <div className={styles.screen}>
            <WhiteHeading className={styles.whiteHeading} />
            {
                data.map((item, index) => (
                    <div className={`${styles.back} ${activeIndex === index + 1 ? styles.active : ''}`} style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }} key={index}>
                        <div className={styles.label}><p className={styles.labelText}>Gaming News</p></div>
                        <div className={styles.title}>
                            <h1 className={styles.heading}>{item.title}</h1>
                            <p className={styles.subheading}>{item.subtitle}</p>
                        </div>
                        <button className={styles.button} onClick={openPopup}>
                            <p className={styles.buttonText}>Получи фрибет</p>
                            <div className={styles.dropWrapper}>
                                <img src={drop} alt={drop} className={styles.drop} />
                            </div>
                        </button>
                        {isOpen && (<div className={styles.overlay}>
                            <div className={styles.popup}>
                            <img src={close} alt="Закрыть попап" className={styles.close} onClick={closePopup}/>
                            <img src={banner} alt="Бетсити баннер" className={styles.banner}/>
                            <a href='https://betcity.ru/' target='_blank' className={styles.popupButton}>Получить</a>
                        </div>
                        </div>)}
                    </div>
                ))
            }
            <div className={styles.slider}>
                <div className={`${styles.slide} ${slideActive === 1 ? styles.slideActive : ''}`} onClick={() => {
                    setActiveIndex(1);
                    setSlideActive(1);
                }}/>
                <div className={`${styles.slide} ${slideActive === 2 ? styles.slideActive : ''}`} onClick={() => {
                    setActiveIndex(2);
                    setSlideActive(2);
                }} />
                <div className={`${styles.slide} ${slideActive === 3 ? styles.slideActive : ''}`} onClick={() => {
                    setActiveIndex(3);
                    setSlideActive(3);
                }} />
            </div>
        </div>
    );
};

export default Screen;