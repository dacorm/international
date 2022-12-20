import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import styles from './WhiteHeading.module.css';
import logo from '../../assets/images/logo.jpg';
import drop from '../../assets/images/drop2.svg';
import cn from 'classnames';
import HeadingPopup from "../HeadingPopup/HeadingPopup";
import {Link} from 'react-router-dom';

type HeadingProps = {
    className?: string
}

type PopupClick = MouseEvent & {
    path: Node[];
};

const WhiteHeading: React.FC<HeadingProps> = memo(({className}) => {
    const [open, setOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    const togglePopup = useCallback((e: MouseEvent) => {
        if (!open) {
            setOpen(true);
            document.body.style.overflow = "hidden"
        } else {
            setOpen(false);
            document.body.style.overflow = "auto"
        }
    }, [open])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const _event = event as PopupClick;

            if (navRef.current && !_event.path.includes(navRef.current)) {
                setOpen(false);
                document.body.style.overflow = "auto"
            }
        };

        document.body.addEventListener('click', handleClickOutside);

        return () => document.body.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <>
            <nav className={cn(styles.whiteNav, className)} ref={navRef}>
                <div className={styles.before}></div>
                <Link to='/' className={styles.logo}>
                    <img src={logo} alt="Logo" className={styles.logoImg}/>
                    <div className={styles.text}>
                        <h2 className={styles.logoText}>Dota<span className={styles.span}>2</span></h2>
                        <p className={styles.logoSub}>Последние новости</p>
                    </div>
                </Link>
                <ul className={styles.mainMenu}>
                    <li className={styles.menuItem}>
                        <Link to='/players' className={styles.menuText}>Топ игроков</Link>
                    </li>
                    <li className={styles.menuItem} onClick={(e) => {
                        togglePopup(e as unknown as MouseEvent);
                    }}>
                        <p className={styles.menuText}>eSports</p>
                        <img src={drop} alt="dropDownIcon" className={styles.drop}/>
                    </li>
                    {open && <HeadingPopup
                        lazy={true}
                        isOpen={open}
                        className={styles.popup}
                    />}
                    <li className={styles.menuItem}>
                        <Link to={'/news'} className={styles.menuText}>News</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link to='/calendar' className={styles.menuText}>Матчи</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link to='/heroes' className={styles.menuText}>Герои</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link to='/tournament' className={styles.menuText}>TI2022</Link>
                    </li>
                </ul>
                <div className={styles.after}></div>
            </nav>
        </>
    );
});

export default WhiteHeading;
