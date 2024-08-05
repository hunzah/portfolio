import React from 'react';
import s from './Skills.module.scss';
import stylesContainer from '../common/styles/Container.module.css';
import {v1} from 'uuid';
import Skill from './skiil/Skill';
import {Title} from '../common/components/title/Title';
import TS from './../assets/images/TS.svg'
import TSLight from './../assets/images/TSLight.svg'
import ReactImg from './../assets/images/React.svg'
import ReactLight from './../assets/images/ReactLight.svg'
import Next from './../assets/images/NextJSDark.svg'
import NextLight from './../assets/images/NextJSLight.svg'
import Redux from './../assets/images/Redux.svg'
import ReduxLight from './../assets/images/ReduxLight.svg'
import JS from './../assets/images/JS.svg'
import JSLight from './../assets/images/JSLight.svg'
import DividerSpace from '../common/components/dividerSpace/DividerSpace';
// @ts-ignore
import Fade from 'react-reveal/Fade';

type PropsType = {
    isDarkMode: boolean
}


export type SkillsType = {
    id: string
    title: string
    text: string
    img: string
    spin?: boolean
}


const Skills = (props: PropsType) => {
    const skills: SkillsType[] = [
        {id: v1(), title: 'JavaScript', text: 'text', img: props.isDarkMode ? JSLight : JS},
        {id: v1(), title: 'React', text: 'text', img: props.isDarkMode ? ReactLight : ReactImg, spin: true},
        {id: v1(), title: 'NextJS', text: 'text', img: props.isDarkMode ? NextLight : Next},
        {id: v1(), title: 'Redux', text: 'text', img: props.isDarkMode ? ReduxLight : Redux, spin: true},
        {id: v1(), title: 'TypeScript', text: 'text', img: props.isDarkMode ? TSLight : TS},
    ]

    return (
        <div id={'skills'} className={s.skillsBlock}>
            <div className={`${stylesContainer.container} ${s.skillsContainer}`}>
                <Fade top>
                    <Title title={'Skills'}/>
                    <div className={s.skills}>
                        <Skill skills={skills}/>
                    </div>
                </Fade>
            </div>
            <DividerSpace/>
        </div>
    );
};

export default Skills;


