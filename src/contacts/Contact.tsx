import React from 'react';
import s from './Contact.module.scss'
import stylesContainer from './../common/styles/Container.module.css'
import {Title} from '../common/components/title/Title';

const Contact = () => {
    return (
            <div className={`${stylesContainer.container} ${s.contactContainer}` }>
                <Title title={'Contact'}  className={s.title}/>
                <form className={s.form}>
                    <input type = 'text' className={s.inputs} placeholder={'Name'}/>
                    <input type = 'text' className={s.inputs} placeholder={'Email'}/>
                    <textarea className={s.textarea} placeholder={'Your Message'}/>
                    <button type = 'submit' className={s.button} >Send Message</button>
                </form>
            </div>
    );
};

export default Contact;