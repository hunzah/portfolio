import React, {useState} from 'react';
import s from './Nav.module.scss'

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={s.nav}>
            <a href=''>About me</a>
            <a href=''>Skills</a>
            <a href=''>Projects</a>
            <a href=''>Contacts</a>
            <div className={s.burger} onClick={toggleMenu}>
                <div className={s.burger__icon}></div>
            </div>
            <ul className={`${s.navList} ${isMenuOpen ? s.navListMobile : ''}`}>
                <li><a href=''>About me</a></li>
                <li><a href=''>Skills</a></li>
                <li><a href=''>Projects</a></li>
                <li><a href=''>Contacts</a></li>
            </ul>
        </div>
    );
};
export default Nav;