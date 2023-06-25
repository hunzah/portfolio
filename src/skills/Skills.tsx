import React from 'react';
import s from './Skills.module.css';
import stylesContainer from '../common/styles/Container.module.css';
import {v1} from 'uuid';
import Skill from './skiil/Skill';
import {Title} from '../common/components/title/Title';
import TS from './../assets/images/TS.svg'
import ReactImg from './../assets/images/React.svg'
import Redux from './../assets/images/ReduxV.svg'
import JS from './../assets/images/JS.svg'
import CSS from './../assets/images/CSS.svg'




export type SkillsType = {
    id: string
    title: string
    text: string
    img: string
}

const skills:SkillsType[] = [
    {id: v1(), title: 'JavaScript', text: 'text', img: JS},
    {id: v1(), title: 'React', text: 'text', img: ReactImg},
    {id: v1(), title: 'Redux', text: 'text', img: Redux},
    {id: v1(), title: 'TypeScript', text: 'text', img: TS},
    {id: v1(), title: 'CSS', text: 'text', img: CSS},
    // {id: v1(), title: 'HTML', text: 'text', img: 'img'},
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


