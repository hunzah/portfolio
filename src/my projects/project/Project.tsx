import React from 'react';
import s from './Project.module.css';
import {ProjectsType} from '../MyProjects';

type PropsType = {
    projects: ProjectsType[]
}

const Project = (props: PropsType) => {
    const {projects}=props
    return (
        <>
            {projects.map(item => {
                return (
                    <div className={s.project} key={item.id}>
                        <img alt={item.title} src={item.img} className={s.img}/>
                        <a href={item.link}></a>
                        <h3 className={s.title}>{item.title}</h3>
                        <p className={s.text}>{item.description}</p>
                    </div>
                )
            })}
        </>
    )
};

export default Project;
