import React from 'react';
import s from './Project.module.scss';
import {ProjectsType} from "../data";

type PropsType = {
    projects: ProjectsType[]
}

const Project = (props: PropsType) => {
    const {projects} = props
    return (
        <>
            {projects.map(item => {
                return (
                    <div key={item.id} className={`${s.project} ${s.myprojects}`}>
                        <a
                            className={s.imgContainer}
                            style={item.img}
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={item.img.backgroundImage} alt={''}/>
                            <span className="sr-only">{''}</span>
                        </a>
                        <div className={s.projectInfo}>
                            <h3 className={s.title}>{item.title}</h3>
                            <div className={s.description}>{item.description} <p className={s.stack}>{item.stack}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
};

export default Project;
