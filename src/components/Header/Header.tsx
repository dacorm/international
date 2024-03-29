import React, {
    memo, useEffect, useRef, useState,
} from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import FR from '../../assets/images/flag-fr.png';
import ES from '../../assets/images/flag-es.png';
import JP from '../../assets/images/flag-jp.png';
import US from '../../assets/images/flag-us.png';
import drop from '../../assets/images/expand_more_FILL0_wght400_GRAD0_opsz48.svg';
import wish from '../../assets/images/favorite_FILL0_wght400_GRAD0_opsz48.svg';
import compare from '../../assets/images/sell_FILL0_wght400_GRAD0_opsz48.svg';
import banner from '../../assets/images/300x350---6.gif';
import { useAppDispatch, useAppSelector } from '../../assets/hooks';
import { logout, selectIsAuth, selectName } from '../../redux/slices/auth';
import { unixTimeStampConverter } from '../../helpers/unixConverters';

type PopupClick = MouseEvent & {
    path: Node[];
};

const langs = [{
    image: US,
    name: 'English',
}, {
    image: ES,
    name: 'Spanish',
}, {
    image: FR,
    name: 'France',
}, {
    image: JP,
    name: 'Japaneese',
}];

const Header = memo(() => {
    const isAuth = useAppSelector(selectIsAuth);
    const user = useAppSelector(selectName);
    const dispatch = useAppDispatch();
    const [visible, setVisible] = useState(false);
    const [stopAnimation, setStopAnimation] = useState(false);
    const [open, setOpen] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [lang, setLang] = useState({
        name: 'English',
        image: US,
    });
    const popupRef = useRef<HTMLDivElement>(null);

    const isUserAdmin = isAuth && (user.fullName === 'admin');

    const onClickLogout = () => {
        if (window.confirm('Вы действительно хотите выйти?')) {
            dispatch(logout());
            window.localStorage.removeItem('token');
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const _event = event as PopupClick;

            if (popupRef.current && !_event.path.includes(popupRef.current)) {
                setOpen(false);
            }
        };

        document.body.addEventListener('click', handleClickOutside);

        return () => document.body.removeEventListener('click', handleClickOutside);
    }, []);

    const handleLangClick = () => {
        setVisible(!visible);
    };

    const handleWalletClick = () => {
        setOpen(!open);
        if (!stopAnimation) setStopAnimation(true);
    };

    const openPopup = () => {
        setIsPopupOpen((prev) => !prev);
        document.body.style.overflow = 'hidden';
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        document.body.style.overflow = 'auto';
    };

    useEffect(() => {
        if (!isPopupOpen) {
            document.body.style.overflow = 'auto';
        }
    }, [isPopupOpen]);

    return (
        <header className={styles.header} ref={popupRef}>
            {isPopupOpen && <div className={styles.overlay} onClick={closePopup} />}
            <div className={styles.hamburgerLines} onClick={openPopup}>
                <span className={`${styles.line} ${styles.line1} ${isPopupOpen ? styles.line1Opened : null}`} />
                <span className={`${styles.line} ${styles.line2} ${isPopupOpen ? styles.line2Opened : null}`} />
                <span className={`${styles.line} ${styles.line3} ${isPopupOpen ? styles.line3Opened : null}`} />
            </div>
            <div className={`${styles.burgerPopup} ${isPopupOpen ? styles.burgerPopupActive : ''}`}>
                <div className={styles.rightInPopup}>
                    {
                        isAuth && (
                            <Link to="/profile" className={styles.account} onClick={() => openPopup}>
                                <div className={styles.avatar} />
                                <p className={styles.username}>{user.fullName}</p>
                                <img src={drop} alt="DropDown" className={styles.drop} />
                            </Link>
                        )
                    }
                    <Link to="/calendar" className={styles.adminPanelNav}>Матчи</Link>
                    <Link to="/players" className={styles.adminPanelNav}>Топ игроков</Link>
                    <Link to="/tournament" className={styles.adminPanelNav}>TI2022</Link>
                    <Link to="/heroes" className={styles.adminPanelNav}>Герои</Link>
                    <Link to="/news" className={styles.adminPanelNav}>Новости</Link>
                    {isUserAdmin && <Link to="/admin" className={styles.adminPanelNav}>Админка</Link>}
                    {
                        isAuth ? (
                            <button
                                type="button"
                                className={styles.logout}
                                onClick={() => {
                                    onClickLogout();
                                    openPopup();
                                }}
                            >
                                <p className={styles.buttonText}>Выйти</p>
                                <div className={styles.dropCont}>
                                    <img src={drop} alt="DropDown" className={styles.dropButton} />
                                </div>
                            </button>
                        ) : (
                            <Link to="/login" className={styles.logout}>
                                <p className={styles.buttonText}>Войти</p>
                                <div className={styles.dropCont}>
                                    <img src={drop} alt="DropDown" className={styles.dropButton} />
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>
            <div className={styles.left}>
                <div className={styles.lang} onClick={handleLangClick}>
                    <img src={lang.image} alt="US Flag" className={styles.image} />
                    <p className={styles.language}>{lang.name}</p>
                    <img src={drop} alt="DropDown" className={`${styles.drop} ${visible ? styles.dropLeft : ''}`} />
                </div>
                <div className={stopAnimation ? styles.currencyModified : styles.currency} onClick={handleWalletClick} />
                {visible && (
                    <div className={styles.langPopup} onClick={() => setVisible(false)}>
                        {
                            langs.map((lang) => (
                                <div
                                    className={styles.popupItem}
                                    onClick={() => {
                                        setLang({
                                            name: lang.name,
                                            image: lang.image,
                                        });
                                        setVisible(false);
                                    }}
                                    key={lang.name}
                                >
                                    <img src={lang.image} alt="US Flag" className={styles.popupimg} />
                                    <p className={styles.popuplang}>{lang.name}</p>
                                </div>
                            ))
                        }
                    </div>
                )}
                {open && (
                    <div className={styles.walletPopup}>
                        <img src={banner} alt="Бетсити баннер" className={styles.popupImage} />
                        <a
                            href="https://betcity.ru/ru/line/bets?chmp%5B%5D=105176&chmp%5B%5D=175781&chmp%5B%5D=175830&popular=1"
                            className={styles.popupButton}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Получить
                        </a>
                    </div>
                )}
            </div>
            <div className={styles.right}>
                {isUserAdmin && <Link to="/admin" className={styles.adminPanelNav}>Админка</Link>}
                {
                    isAuth && (
                        <Link to="/profile" className={styles.account}>
                            <div className={styles.avatar} />
                            <p className={styles.username}>{user.fullName}</p>
                            <img src={drop} alt="DropDown" className={styles.drop} />
                        </Link>
                    )
                }
                <div className={styles.wish}>
                    <img src={wish} alt="wishlist" className={styles.wishsvg} />
                    <p className={styles.wishText}>Wishlist (5)</p>
                </div>
                <div className={styles.compare}>
                    <img src={compare} alt="compare" className={styles.comparesvg} />
                    <p className={styles.compareText}>Compare (2)</p>
                </div>
                {
                    isAuth ? (
                        <button type="button" className={styles.logout} onClick={onClickLogout}>
                            <p className={styles.buttonText}>Выйти</p>
                            <div className={styles.dropCont}>
                                <img src={drop} alt="DropDown" className={styles.dropButton} />
                            </div>
                        </button>
                    ) : (
                        <Link to="/login" className={styles.logout}>
                            <p className={styles.buttonText}>Войти</p>
                            <div className={styles.dropCont}>
                                <img src={drop} alt="DropDown" className={styles.dropButton} />
                            </div>
                        </Link>
                    )
                }
            </div>
        </header>
    );
});

export default Header;
