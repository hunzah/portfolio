import React from 'react';
import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Skills from './skills/Skills';
import MyProjects from './my projects/MyProjects';
import Contacts from './contacts/Contacts';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyProjects/>
            <Contacts/>
        </div>
    );
}

export default App;
