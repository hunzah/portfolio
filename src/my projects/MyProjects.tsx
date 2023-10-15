import React from 'react';
import s from './MyProjects.module.scss'
import stylesContainer from './../common/styles/Container.module.css'
import Project from './project/Project';
import { v1 } from 'uuid';
import { Title } from '../common/components/title/Title';
import todo from '../assets/images/projects/todolist.gif';
import counter from '../assets/images/projects/counter.png';
import HealthPlate from '../assets/images/projects/food-store.png';
import DividerSpace from '../common/components/dividerSpace/DividerSpace';
// @ts-ignore
import Fade from 'react-reveal/Fade';

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
        id: v1(), img: { backgroundImage: `url(${todo})` }, link: 'https://hunzah.github.io/Todo-List',
        title: 'Todo List', description: `This project is a todo list created as a personal project, 
        designed for easy tracking of tasks or items that need to be completed.`,
        stack: `Stack: TypeScript, React ReduxToolkit, MaterialUI, StoryBook.`
    },
    {
        id: v1(), img: { backgroundImage: `url(${counter})` }, link: 'https://cards-hunzah.vercel.app',
        title: 'Learn Cards', stack: `Stack: TypeScript, React, Redux.`
    },
    {
        id: v1(), img: { backgroundImage: `url(${})` },
        link: 'https://hunzah.github.io/Create-heroes-App/', title: 'Social Network',
        description: 'Create your heroes 🦸‍',
        stack: `Stack: React based on class components, RTK(Query), ReduxForm.`
    },
    {
        id: v1(), img: { backgroundImage: `url(${HealthPlate})` },
        link: 'https://hunzah.github.io/Meals/', title: 'Health Plate',
        description: 'A website for selecting and delivering personalized meals.',
        stack: `Stack: JavaScript`
    },
]


const MyProjects = () => {

    return (
        <div className={s.myProjects}>
            <Fade top>
                <div className={`${stylesContainer.container} ${s.projectContainer}`}>

                    <div className={s.title}>
                        <Title title={'Projects'} />
                    </div>
                    <div className={s.projects}>
                        <Project projects={projects} />
                    </div>

                </div>
                <DividerSpace />
            </Fade>
        </div>

    );
};

export default MyProjects;