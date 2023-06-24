import React from 'react';
import s from './Project.module.css';
import {ProjectsType} from '../MyProjects';

type PropsType = {
    projects: ProjectsType[]
}

const Project = (props: PropsType) => {
    const {projects} = props
    return (
        <>
            {projects.map(item => {
                return (
                    <div className={s.project} key={item.id}>
                        <div className={s.imgContainer}>
                            {/*<img alt={item.title} src={item.img} className={s.img} style={props.backgroundImage}/>*/}
                            <div style={item.img}></div>
                            <a href={item.link}>Watch</a>
                        </div>
                        <div className={s.projectInfo}>
                            <h3 className={s.title}>{item.title}</h3>
                            <p className={s.description}>{item.description}</p>
                        </div>
                    </div>
                )
            })}
        </>
    )
};

export default Project;
