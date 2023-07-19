import React, {useState} from 'react';
import s from './Nav.module.scss'
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// @ts-ignore
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={s.container}>
            <div className={s.nav}>
                <div className={`${s.burger}`} onClick={toggleMenu}>
                    <FontAwesomeIcon className={s.burgerIcon} icon={faBars} size="2xl" />
                    <span></span>
                </div>
                <ul className={`${isMenuOpen ? s.navListMobile : s.navList}`}>
                    <li><a href="#main" onClick={() => scroll.scrollTo(100)}>About me</a></li>
                    <li><a href="#skills" onClick={() => scroll.scrollTo(500)}>Skills</a></li>
                    <li><a href="#projects" onClick={() => scroll.scrollTo(1100)}>Projects</a></li>

                    <li><a href="#contacts" onClick={() => scroll.scrollTo(1500)}>Contacts</a></li>
                </ul>
            </div>
        </div>
    );
};
export default Nav;