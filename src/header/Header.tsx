import React from 'react';
import s from './Header.module.scss'
import Nav from '../nav/Nav';
import logo from '../assets/images/letter-y-blue.svg'
import logoLight from '../assets/images/letter-y-green.svg'
import stylesContainer from './../common/styles/Container.module.css'

type PropsType = {
    isDarkMode:boolean
}
const Header = (props:PropsType) => {
    return (
        <div className={`${stylesContainer} ${s.header}`}>
            <div className={s.logo}>
                {props.isDarkMode ? <img alt={'logo'} src={logoLight}/>: <img alt={'logo'} src={logo}/>}
                <h2>Yusup <span className={s.lastName}>Magomedov</span></h2>
            </div>
            <Nav/>
        </div>
    );
};

export default Header;