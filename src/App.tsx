import React, {useState} from 'react';
import s from './App.module.scss';
import Header from './header/Header';
import Main from './main/Main';
import Skills from './skills/Skills';
import MyProjects from './my projects/MyProjects';
import Contact from './contacts/Contact';
import Footer from './footer/Footer';
import {Toggle} from './Togle';
import {ThemeContext, themes} from './contexts/ThemeContext';

type PropsType = {
    value: boolean
    onChange: (value: any) => void
}
function App({value,onChange}:PropsType) {

    return (
        <div className={s.App}>
                    <Toggle
                        onChange={onChange}
                        value={value}/>
            <Header isDarkMode={!value}/>
            <Main/>
            <Skills isDarkMode={!value}/>
            <MyProjects/>
            <Contact/>
            <Footer/>

        </div>
    );
}

export default App;