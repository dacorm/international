import React, { Dispatch, SetStateAction, useState } from 'react';
import styles from './InfoPopup.module.css';
import loader from '../../assets/images/preloader.svg';
import bad from '../../assets/images/bad.svg';
import close from '../../assets/images/close_FILL0_wght400_GRAD0_opsz48.svg';

type InfoPopupProps = {
    isLoading: boolean
    error: boolean
    setError: Dispatch<SetStateAction<boolean>>
}

const InfoPopup: React.FC<InfoPopupProps> = ({ isLoading, error, setError }) => {
    const [isOpened, setIsOpened] = useState(true);
    const isPopupOpened = isOpened && isLoading;

    const changeLoadState = (isLoading: boolean, error: boolean) => {
        if (error) return !isLoading;
        if (!error) return isLoading;
    };

    return (
        <div className={`${styles.overlay} ${isPopupOpened ? styles.overlayVisible : ''}`}>
            <div className={styles.popup}>
                <img
                    src={close}
                    alt="Закрыть попап"
                    className={styles.close}
                    onClick={() => {
                        setIsOpened(false);
                        setError(false);
                    }}
                />
                {
                    changeLoadState(isLoading, error) && (
                        <>
                            <img src={loader} alt="Статья создана" />
                            <p className={styles.popupText}>Подождите, идет создание статьи</p>
                        </>
                    )
                }
                {error && (
                    <>
                        <img src={bad} alt="Статья создана" />
                        <p className={styles.popupText}>Не удалось создать статью, перезагрузите страницу и попробуйте снова</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default InfoPopup;
