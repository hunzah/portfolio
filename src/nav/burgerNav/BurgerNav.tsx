import React, {useState} from 'react';
import s from './BurgerNav.module.scss'
// @ts-ignore
import {animateScroll as scroll, Button, Element, Events, Link, scroller, scrollSpy} from 'react-scroll';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faX} from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className={s.container}>
            <div className={`${isMenuOpen ? s.navOpen : s.navClosed}`}>
                <div className={`${s.burger}`} onClick={toggleMenu}>
                    <FontAwesomeIcon className={s.burgerIcon} icon={faBars} size="2xl"/>
                </div>
                <div className={`${s.burger}`} onClick={toggleMenu}>
                    <FontAwesomeIcon className={s.burgerXIcon} icon={faX} size="2xl"/>
                </div>
                <ul className={`${s.list} ${isMenuOpen ? s.animated : ""}`}>
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