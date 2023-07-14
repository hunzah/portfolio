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
                    <div key={item.id} className={s.project} >
                        <a className={s.imgContainer} style={item.img} href={item.link} target="_blank">
                            {/*<div className={s.link} ></div>*/}
                        </a>

                        <div className={s.projectInfo}>
                            <h3 className={s.title}>{item.title}</h3>
                            <p className={s.description}>{item.description} <span className={s.stack}>{item.stack}</span></p>
                        </div>
                    </div>
                )
            })}
        </>
    )
};

export default Project;
