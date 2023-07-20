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


function App() {
    const [isDarkMode] = useState(true);

    return (
        <div className={s.App}>
            <ThemeContext.Consumer>
                {/*@ts-ignore*/}
                {({theme, setTheme}) => (
                    <Toggle
                        onChange={() => {
                            if (theme === themes.light) setTheme(themes.dark)
                            if (theme === themes.dark) setTheme(themes.light)
                        }}
                        value={theme === themes.dark}
                    />
                )}
            </ThemeContext.Consumer>
            <Header isDarkMode={isDarkMode}/>
            <Main/>
            <Skills isDarkMode={isDarkMode}/>
            <MyProjects/>
            <Contact/>
            <Footer/>

        </div>
    );
}

export default App;