import React from 'react';
import styles from './FreebetPopup.module.css';
import close from '../../assets/images/close_FILL0_wght400_GRAD0_opsz48.svg';
import banner from '../../assets/images/300x350---4.gif';

type FreebetPopupProps = {
    onClose: () => void
}

const FreebetPopup: React.FC<FreebetPopupProps> = ({ onClose }) => {

    return (
        <div className={styles.overlay}>
            <div className={styles.popup}>
                <a href='https://betcity.ru/' target='_blank'>
                    <img src={banner} alt="Баннер бетсити" className={styles.popupImage}/>
                </a>
                <img src={close} alt="Иконка закрытия" className={styles.close} onClick={onClose} />
            </div>
        </div>
    );
};

export default FreebetPopup;