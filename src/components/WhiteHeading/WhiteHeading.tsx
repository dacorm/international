import React, {useState} from 'react';
import styles from './WhiteHeading.module.css';
import logo from '../../assets/images/logo.jpg';
import drop from '../../assets/images/drop2.svg';
import search from '../../assets/images/search_FILL0_wght400_GRAD0_opsz48.svg';
import inv from '../../assets/images/inventory_2_FILL0_wght400_GRAD0_opsz48.svg';
import cn from 'classnames';
import HeadingPopup from "../HeadingPopup/HeadingPopup";
import FeaturesPopup from "../FeturesPopup/FeaturesPopup";
import { Link } from 'react-router-dom';

type HeadingProps = {
    className?: string
}

const WhiteHeading: React.FC<HeadingProps> = ({className}) => {
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(false);

    return (
        <>
            <nav className={cn(styles.whiteNav, className)}>
                <div className={styles.before}></div>
                <Link to='/' className={styles.logo}>
                    <img src={logo} alt="Logo" className={styles.logoImg}/>
                    <div className={styles.text}>
                        <h2 className={styles.logoText}>International<span className={styles.span}>2022</span></h2>
                        <p className={styles.logoSub}>Последние новости</p>
                    </div>
                </Link>
                <ul className={styles.mainMenu}>
                    <li className={styles.menuItem}>
                        <Link to='/players' className={styles.menuText}>Топ игроков</Link>
                    </li>
                    <li className={styles.menuItem} onClick={() => setOpen(!open)} >
                        <p className={styles.menuText}>eSports</p>
                        <img src={drop} alt="dropDownIcon" className={styles.drop}/>
                    </li>
                    {open && <HeadingPopup className={styles.popup} />}
                    <li className={styles.menuItem}>
                        <Link to={'/news'} className={styles.menuText}>News</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link to='/calendar' className={styles.menuText}>Матчи</Link>
                    </li>
                    <li className={styles.menuItem} onClick={() => setVisible(!visible)}>
                        <p className={styles.menuText}>Features</p>
                        <img src={drop} alt="dropDownIcon" className={styles.drop}/>
                    </li>
                    {visible && <FeaturesPopup className={styles.popupFeatures} />}
                    <li className={styles.menuItem}>
                        <Link to='/tournament' className={styles.menuText}>Турнирная таблица</Link>
                    </li>
                </ul>
                <div className={styles.after}></div>
            </nav>
        </>
    );
};

export default WhiteHeading;