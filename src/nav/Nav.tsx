import React, {useState} from 'react';
import s from './Nav.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';


const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={s.nav}>
            <div className={s.burger} onClick={toggleMenu}>
                <div className={s.burgerIcon}></div>
                <FontAwesomeIcon icon={faBars}/>
            </div>
            <ul className={`${s.navList} ${isMenuOpen ? s.navListMobile : ''}`}>
                <li><a href="">About me</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contacts</a></li>
            </ul>
        </div>
    );
};
export default Nav;