import React from 'react';
import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Skills from './skills/Skills';
import MyProjects from './my projects/MyProjects';
import Contact from './contacts/Contact';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyProjects/>
            <Contact/>
        </div>
    );
}

export default App;
