import React from 'react';
import {SkillsType} from '../Skills';
import s from './Skill.module.css'

type PropsType = {
    skills: SkillsType[]
}

const Skill = (props: PropsType) => {
    return (
        <div className={s.skill}>{
            props.skills.map(item => {
                return (
                    <>
                        <img alt={item.title} src={item.img} className={s.img}/>
                        <h3 className={s.title}>{item.title}</h3>
                        <p className={s.text}>{item.text}</p>
                    </>
                )
            })}
        </div>
    )
};

export default Skill;