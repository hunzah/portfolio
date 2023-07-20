import React, {useState} from 'react';
import s from './BurgerNav.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faX} from '@fortawesome/free-solid-svg-icons';
// @ts-ignore
import * as Scroll from 'react-scroll';

let Link = Scroll.Link;

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                <ul className={s.list}>
                    <li><Link className={s.link}
                              activeClass={s.active}
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              offset={-50}
                              duration={800}
                              to={'aboutMe'}>About me</Link></li>
                    <li><Link className={s.link}
                              activeClass={s.active}
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              offset={-50}
                              duration={800}
                              to={'skills'}>Skills</Link></li>
                    <li><Link className={s.link}
                              activeClass={s.active}
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              offset={-50}
                              duration={800}
                              to={'projects'}>Projects</Link></li>
                    <li><Link className={s.link}
                              activeClass={s.active}
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              offset={-200}
                              duration={800}
                              to={'contacts'}>Contacts</Link></li>
                </ul>
            </div>
        </div>

    );
};
export default Nav;