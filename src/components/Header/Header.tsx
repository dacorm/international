import React, {useState} from 'react';
import styles from './Header.module.css';
import FR from '../../assets/images/flag-fr.png';
import ES from '../../assets/images/flag-es.png';
import JP from '../../assets/images/flag-jp.png';
import US from '../../assets/images/flag-us.png';
import drop from '../../assets/images/expand_more_FILL0_wght400_GRAD0_opsz48.svg';
import wish from '../../assets/images/favorite_FILL0_wght400_GRAD0_opsz48.svg';
import compare from '../../assets/images/sell_FILL0_wght400_GRAD0_opsz48.svg';

const langs = [{
    image: US,
    name: 'English'
}, {
    image: ES,
    name: 'Spanish'
}, {
    image: FR,
    name: 'France'
}, {
    image: JP,
    name: 'Japaneese'
}]

const wallets = ['U$D', 'Euros', 'Pesos']

const Header = () => {
    const [visible, setVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const [lang, setLang] = useState({
        name: 'English',
        image: US
    })
    const [wallet, setWallet] = useState('U$D');


    const handleLangClick = () => {
        setVisible(!visible);
    }

    const handleWalletClick = () => {
        setOpen(!open);
    }

    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <div className={styles.lang} onClick={handleLangClick}>
                    <img src={lang.image} alt="US Flag" className={styles.image} />
                    <p className={styles.language}>{lang.name}</p>
                    <img src={drop} alt="DropDown" className={`${styles.drop} ${visible ? styles.dropLeft : ''}`} />
                </div>
                <div className={styles.currency} onClick={handleWalletClick}>
                    <p className={styles.text}>Currency: </p>
                    <p className={styles.wallet}>{wallet}</p>
                    <img src={drop} alt="DropDown" className={`${styles.drop} ${open ? styles.dropLeft : ''}`} />
                </div>
                {visible && <div className={styles.langPopup} onClick={() => setVisible(false)}>
                    {
                        langs.map(lang => (
                            <div className={styles.popupItem} onClick={() => {
                                setLang({
                                    name: lang.name,
                                    image: lang.image
                                })
                                setVisible(false);
                            }} key={lang.name}>
                                <img src={lang.image} alt="US Flag" className={styles.popupimg} />
                                <p className={styles.popuplang}>{lang.name}</p>
                            </div>
                        ))
                    }
                </div>}
                {open && <div className={styles.walletPopup}>
                    {
                        wallets.map(wallet => (
                            <div className={styles.popupItemWallet} key={wallet} onClick={() => {
                                setWallet(wallet);
                                setOpen(false);
                            }}>
                                <p className={styles.popupWall}>{wallet}</p>
                            </div>
                        ))
                    }
                </div>}
            </div>
            <div className={styles.right}>
                <div className={styles.account}>
                    <div className={styles.avatar}></div>
                    <p className={styles.username}>James_Spiegel</p>
                    <img src={drop} alt="DropDown" className={styles.drop} />
                </div>
                <div className={styles.wish}>
                    <img src={wish} alt="wishlist" className={styles.wishsvg} />
                    <p className={styles.wishText}>Wishlist (5)</p>
                </div>
                <div className={styles.compare}>
                    <img src={compare} alt="compare" className={styles.comparesvg} />
                    <p className={styles.compareText}>Compare (2)</p>
                </div>
                <button className={styles.logout}>
                    <p className={styles.buttonText}>Logout</p>
                    <div className={styles.dropCont}>
                    <img src={drop} alt="DropDown" className={styles.dropButton} />
                    </div>
                </button>
            </div>
        </header>
    );
};

export default Header;