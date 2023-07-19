import React, {useState} from 'react';
import s from './Nav.module.scss'
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// @ts-ignore
import {animateScroll as scroll, Button, Element, Events, Link, scroller, scrollSpy} from 'react-scroll';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className={s.container}>
                <ul className={`${isMenuOpen ? s.navListMobile : s.navList}`}>
                    <li><a href="#main" onClick={() => scroll.scrollTo(100)}>About me</a></li>
                    <li><a href="#skills" onClick={() => scroll.scrollTo(500)}>Skills</a></li>
                    <li><a href="#projects" onClick={() => scroll.scrollTo(1100)}>Projects</a></li>
                    <li><a href="#contacts" onClick={() => scroll.scrollTo(1500)}>Contacts</a></li>
                </ul>
        </div>
    );
};
export default Nav;