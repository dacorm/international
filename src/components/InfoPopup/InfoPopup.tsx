import React, {useState} from 'react';
import styles from './InfoPopup.module.css';
import loader from '../../assets/images/preloader.svg';
import good from '../../assets/images/good.svg'
import close from '../../assets/images/close_FILL0_wght400_GRAD0_opsz48.svg';

type InfoPopupProps = {
    isLoading: boolean
}

const InfoPopup: React.FC<InfoPopupProps> = ({ isLoading }) => {
    const [isOpened, setIsOpened] = useState(true);
    const isOk = !isLoading
    const isPopupOpened = isLoading && isOpened


    return (
        <div className={`${styles.overlay} ${isPopupOpened ? styles.overlayVisible : ''}`}>
            <div className={styles.popup}>
                <img src={close} alt="Закрыть попап" className={styles.close} onClick={() => {
                    setIsOpened(false)
                }}/>
                {isOk && (<>
                    <img src={good} alt="Статья создана"/>
                    <p className={styles.popupText}>Статья успешно создана</p>
                </>)}
                {
                    !isOk && (<>
                        <img src={loader} alt="Статья создана"/>
                        <p className={styles.popupText}>Подождите, идет создание статьи</p>
                    </>)
                }
            </div>
        </div>
    );
};

export default InfoPopup;