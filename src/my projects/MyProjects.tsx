import React from 'react';
import s from './MyProjects.module.css'
import stylesContainer from './../common/styles/Container.module.css'
import Project from './project/Project';
import {v1} from 'uuid';
import {Title} from '../common/components/title/Title';
import socialNetwork  from '../assets/images/San Andreas.jpg';

export type ProjectsType = {
    id: string
    img: { backgroundImage: string }
    link: string
    title: string
    description: string
}


const projects: ProjectsType[] = [
    {id: v1(), img: {backgroundImage: `url(${socialNetwork})`}, link: '', title: 'Social Network', description: 'text text text text text text text text text text text text text text text text text text text text'},
    {id: v1(), img: {backgroundImage: `url(${socialNetwork})`}, link: '', title: 'Todo List', description: 'text'},

]
const SocialNetwork = {
    backgroundImage: `url(${socialNetwork})`,
};

const MyProjects = () => {

    return (
        <div className={s.myProjects}>
            <div className={`${stylesContainer.container} ${s.projectContainer}`}>
                <Title title={"Projects"}/>
                <div className={s.projects}>
                    <Project projects={projects}/>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;