import React from 'react';
import s from './Skills.module.css';
import stylesContainer from '../common/styles/Container.module.css';
import {v1} from 'uuid';
import Skill from './skiil/Skill';
import {Title} from '../common/components/title/Title';

export type SkillsType = {
    id: string
    title: string
    text: string
    img: string
}

const skills:SkillsType[] = [
    {id: v1(), title: 'TS', text: 'text', img: 'img'},
    {id: v1(), title: 'React', text: 'text', img: 'img'},
    {id: v1(), title: 'JS', text: 'text', img: 'img'},
    {id: v1(), title: 'CSS', text: 'text', img: 'img'},
    {id: v1(), title: 'HTML', text: 'text', img: 'img'},
]


const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${stylesContainer.container} ${s.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={s.skills}>
                    <Skill skills={skills} />
                </div>
            </div>
        </div>
    );
};

export default Skills;

