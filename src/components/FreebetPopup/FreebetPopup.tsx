import React, {useEffect, useState} from 'react';
import styles from './FreebetPopup.module.css';
import close from '../../assets/images/close_FILL0_wght400_GRAD0_opsz48.svg';
import banner from '../../assets/images/300x350---4.gif';

type FreebetPopupProps = {
    onClose: () => void
    lazy: boolean
    isOpen: boolean
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
                <a href='https://betcity.ru/ru/line/bets?chmp%5B%5D=105176&chmp%5B%5D=175781&chmp%5B%5D=175830&popular=1' target='_blank'>
                    <img src={banner} alt="Баннер бетсити" className={styles.popupImage}/>
                </a>
                <img src={close} alt="Иконка закрытия" className={styles.close} onClick={onClose} />
            </div>
        </div>
    );
};

export default FreebetPopup;