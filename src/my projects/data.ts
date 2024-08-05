import {v1} from "uuid";
import cards from '../assets/images/projects/flashcards.webp';
import todo from '../assets/images/projects/todolist.gif';
import HealthPlate from '../assets/images/projects/food-store.png';
import wildberries from '../assets/images/projects/wildberries-logo.webp';
import spaceAI from '../assets/images/projects/SpaceAI.svg';

export type ProjectsType = {
    id: string
    img: { backgroundImage: string }
    link: string
    title: string
    description?: string
    stack?: string
}

export const petProjects: ProjectsType[] = [
    {
        id: v1(),
        img: {backgroundImage: `url(${cards})`},
        link: 'https://cards-hunzah.vercel.app',
        title: 'Learn Cards',
        description: 'The "Cards" project is an interactive learning platform designed to enhance your study and memorization experience. Whether you\'ore preparing for exams, learning a new language, or acquiring new skills, "Cards" empowers you with the tools you need for effective learning',
        stack: `Stack: TypeScript, React, RTK Query, Vite, adix.`
    },
    {
        id: v1(), img: {backgroundImage: `url(${todo})`}, link: 'https://hunzah.github.io/Todo-List',
        title: 'Todo List',
        description: `This project is a todo list created as a personal project,
        designed for easy tracking of tasks or items that need to be completed.`,
        stack: `Stack: TypeScript, React ReduxToolkit, MaterialUI, StoryBook.`
    },
    {
        id: v1(), img: {backgroundImage: `url(${HealthPlate})`},
        link: 'https://hunzah.github.io/Meals/', title: 'Health Plate',
        description: 'A website for selecting and delivering personalized meals.',
        stack: `Stack: JavaScript`
    },
]

export const projects: ProjectsType[] = [
    {
        id: v1(), img: {backgroundImage: `url(${wildberries})`}, link: 'https://wildberries.ru',
        title: 'WILDBERRIES', description: 'E-commerce platform',
        stack: `Stack: TypeScript, ReactJS, AngularJS, NestJS.`
    },
    {
        id: v1(), img: {backgroundImage: `url(${spaceAI})`}, link: 'https://spaceai.ru/demo',
        title: 'SpaceAI', description: 'Marketplace of AI-powered services',
        stack: `Stack: TypeScript, NextJS, React Query, RTK, Webpack.`
    },
]