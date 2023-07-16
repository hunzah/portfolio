import React from 'react';
import s from './MyProjects.module.scss'
import stylesContainer from './../common/styles/Container.module.css'
import Project from './project/Project';
import {v1} from 'uuid';
import {Title} from '../common/components/title/Title';
import SanAndreas from '../assets/images/SanAndreas.jpg';
import DividerSpace from '../common/components/dividerSpace/DividerSpace';

export type ProjectsType = {
    id: string
    img: { backgroundImage: string }
    link: string
    title: string
    description?: string
    stack?: string
}


const projects: ProjectsType[] = [
    {
        id: v1(), img: {backgroundImage: `url(${SanAndreas})`}, link: 'https://hunzah.github.io/Todo-List',
        title: 'Todo List', description: `This project is a todo list created as a personal project, 
        designed for easy tracking of tasks or items that need to be completed.`,
        stack: `Stack: TypeScript, React ReduxToolkit, MaterialUI, StoryBook.`
    },
    {
        id: v1(), img: {backgroundImage: `url(${SanAndreas})`}, link: 'https://hunzah.github.io/counter',
        title: 'Counter',stack: `Stack: TypeScript, React, Redux.`
    },
    {
        id: v1(), img: {backgroundImage: `url(${SanAndreas})`},
        link: 'https://hunzah.github.io/React-TS-Project-Social-Network', title: 'Social Network',
        description: 'Social Network',
        stack: `Stack: TypeScript, React based on class components. Class Components Redux, ReduxForm.`
    },
    {
        id: v1(), img: {backgroundImage: `url(${SanAndreas})`},
        link: 'https://hunzah.github.io/Meals/', title: 'Health Plate',
        description: 'A website for selecting and delivering personalized meals.',
        stack: `Stack: JavaScript`
    },
]


const MyProjects = () => {

    return (
        <div className={s.myProjects}>
            <div className={`${stylesContainer.container} ${s.projectContainer}`}>
                <div className={s.title}>
                    <Title title={'Projects'}/>
                </div>
                <div className={s.projects}>
                    <Project projects={projects}/>
                </div>
            </div>
            <DividerSpace/>
        </div>
    );
};

export default MyProjects;