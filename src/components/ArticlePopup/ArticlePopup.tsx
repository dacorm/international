import React, {useEffect, useState} from 'react';
import styles from './ArticlePopup.module.css';
import banner from "../../assets/images/Frame 6.png";
import close from "../../assets/images/close_FILL0_wght400_GRAD0_opsz48.svg";

interface ArticlePopupProps {
    onClose: () => void;
    lazy: boolean;
    isOpen: boolean;
}

const ArticlePopup: React.FC<ArticlePopupProps> = ({ onClose, lazy, isOpen }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen])

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.popup}>
                <a href='https://betcity.ru/ru/line/cybersport' target='_blank'>
                    <img src={banner} alt="Баннер бетсити" className={styles.popupImage}/>
                </a>
                <img src={close} alt="Иконка закрытия" className={styles.close} onClick={onClose} />
            </div>
        </div>
    );
};

export default ArticlePopup;
