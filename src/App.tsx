import React from 'react';
import './App.module.css';
import Header from './header/Header';
import Main from './main/Main';
import Skills from './skills/Skills';
import MyProjects from './my projects/MyProjects';
import Contact from './contacts/Contact';
import Footer from './footer/Footer';
import s from './App.module.css'

function App() {
    return (
        <div className={s.App}>
            <Header/>
            <Main/>
            <Skills/>
            <MyProjects/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
