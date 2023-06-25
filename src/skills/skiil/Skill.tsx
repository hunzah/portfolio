import React from 'react';
import {SkillsType} from '../Skills';
import s from './Skill.module.scss'

type PropsType = {
    skills: SkillsType[]
}


const Skill = (props: PropsType) => {
   const {skills}=props
    return (
        <>
            {skills.map(item => {
                return (
                    <div className={s.skill} key={item.id}>
                        <img alt={item.title} src={item.img} className={s.img} />
                        <h3 className={s.title}>{item.title}</h3>
                    </div>
                )
            })}
        </>
    )
};

export default Skill;