import React, {useEffect, useState} from 'react';
import styles from './FreebetPopup.module.css';
import close from '../../assets/images/close_FILL0_wght400_GRAD0_opsz48.svg';
import banner from '../../assets/images/300x350---5.gif';

type FreebetPopupProps = {
    onClose: () => void;
    lazy: boolean;
    isOpen: boolean;
}

const FreebetPopup: React.FC<FreebetPopupProps> = ({ onClose, lazy, isOpen }) => {
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
                <a href='https://promote.betcity.ru/freebet500app/' target='_blank' rel="noreferrer">
                    <img src={banner} alt="Баннер бетсити" className={styles.popupImage}/>
                </a>
                <img src={close} alt="Иконка закрытия" className={styles.close} onClick={onClose} />
            </div>
        </div>
    );
};

export default FreebetPopup;
