import React from 'react';
import s from './Skills.module.css';
import stylesContainer from '../common/styles/Container.module.css';
import {v1} from 'uuid';



const skills = [
    {id:v1()}
]


const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${stylesContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skills/>
                </div>
            </div>
        </div>
    );
};

export default Skills;