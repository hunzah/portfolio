import React, {useState} from 'react';
import s from './Nav.module.scss'
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={s.container}>
            <div className={s.nav}>
                <div className={`${s.burger}`} onClick={toggleMenu}>
                    <FontAwesomeIcon className={s.burgerIcon} icon={faBars}/>
                    <span></span>
                </div>
                <ul className={`${isMenuOpen ? s.navListMobile : s.navList}`}>
                    <li><a href="">About me</a></li>
                    <li><a href="">Skills</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Contacts</a></li>
                </ul>
            </div>
        </div>
    );
};
export default Nav;