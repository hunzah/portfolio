import React from 'react';
import s from './Skills.module.css';
import stylesContainer from '../common/styles/Container.module.css';
import {v1} from 'uuid';
import Skill from './skiil/Skill';

export type SkillsType = {
    id: string
    title: string
    text: string
    img: string
}

const skills:SkillsType[] = [
    {id: v1(), title: 'React', text: 'text', img: 'img'},
    {id: v1(), title: 'React', text: 'text', img: 'img'},
    {id: v1(), title: 'React', text: 'text', img: 'img'},
    {id: v1(), title: 'React', text: 'text', img: 'img'},
    {id: v1(), title: 'React', text: 'text', img: 'img'},
]


const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${stylesContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill skills={skills} />
                </div>
            </div>
        </div>
    );
};

export default Skills;