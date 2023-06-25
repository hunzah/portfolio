import React from 'react';
import s from './Project.module.scss';
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
                        <a className={s.imgContainer} style={item.img} href={item.link}>
                            {/*<div className={s.link} ></div>*/}
                        </a>

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
