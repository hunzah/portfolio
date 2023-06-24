import React from 'react';
import s from './MyProjects.module.css'
import stylesContainer from './../common/styles/Container.module.css'
import Project from './project/Project';
import {v1} from 'uuid';
import {Title} from '../common/components/title/Title';
import socialNetwork  from '../assets/images/social-network.svg';

export type ProjectsType = {
    id: string
    img: string
    link: string
    title: string
    description: string
}


const projects: ProjectsType[] = [
    {id: v1(), img: 'img', link: '', title: 'Social Network', description: 'text text text text text text text text text text text text text text text text text text text text'},
    {id: v1(), img: 'img', link: '', title: 'Todo List', description: 'text'},

]
const SocialNetwork = {
    color: 'blue',
    backgroundImage: 'url(' + '../assets/images/social-network.svg' + ')',
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