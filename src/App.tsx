import React, { useEffect, useState } from 'react';
import s from './App.module.scss';
import Header from './header/Header';
import Main from './main/Main';
import Skills from './skills/Skills';
import MyProjects from './my projects/MyProjects';
import Contact from './contacts/Contact';
import Footer from './footer/Footer';
import './common/styles/sass/darkTheme.scss';
import './common/styles/sass/lightTheme.scss';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const body = document.getElementsByTagName('body')[0];
        if (isDarkMode) {
            body.classList.add(s.dark);
            body.classList.remove(s.light);
        } else {
            body.classList.add(s.light);
            body.classList.remove(s.dark);
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={s.App}>
            <button className={s.toggleTheme} onClick={toggleDarkMode}>
                {isDarkMode ? 'Light mode' : 'Dark mode'}
            </button>
            <Header />
            <Main />
            <Skills />
            <MyProjects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;