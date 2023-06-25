import React from 'react';
import s from './Header.module.scss'
import Nav from '../nav/Nav';
import logo from '../assets/images/letter-y-blue.svg'
import stylesContainer from './../common/styles/Container.module.css'

const Header = () => {
    return (
        <div className={`${stylesContainer} ${s.header}`}>
            <div className={s.logo}>
                <img alt={'logo'} src={logo}/>
                <h2>Yusup <span className={s.lastName}>Magomedov</span></h2>
            </div>
            <Nav/>
        </div>
    );
};

export default Header;