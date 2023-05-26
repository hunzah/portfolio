import React from 'react';
import s from './MyProjects.module.css'
import stylesContainer from './../common/styles/Container.module.css'
import Project from './project/Project';
import {v1} from 'uuid';
import {SkillsType} from '../skills/Skills';

export type ProjectsType = {
    id: string
    img: string
    link: string
    title: string
    description: string
}


const projects:ProjectsType[] = [
    {id: v1(), img: 'img', link:'', title: 'TS', description: 'text'},
    {id: v1(), img: 'img', link:'', title: 'TS', description: 'text'},

]

const MyProjects = () => {
    return (
        <div className={s.myProjects}>
            <div className={`${stylesContainer.container} ${s.projectContainer}`}>
                <h2 className={s.title}>My Projects</h2>
                <div className={s.projects}>
                    <Project projects={projects}/>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;