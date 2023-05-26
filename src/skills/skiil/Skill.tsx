import React from 'react';
import {SkillsType} from '../Skills';
import s from './Skill.module.css'

type PropsType = {
    skills: SkillsType[]
}

const Skill = (props: PropsType) => {
    return (
        <>
            {props.skills.map(item => {
                return (
                    <div className={s.skill}>
                        <img alt={item.title} src={item.img} className={s.img}/>
                        {/*<div className={s.img}></div>*/}
                        <h3 className={s.title}>{item.title}</h3>
                        <p className={s.text}>{item.text}</p>
                    </div>
                )
            })}
        </>
    )
};

export default Skill;