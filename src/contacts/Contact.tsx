import React from 'react';
import s from './Contact.module.scss'
import stylesContainer from './../common/styles/Container.module.css'
import {Title} from '../common/components/title/Title';

const Contact = () => {
    return (
        <div className={s.contact}>
            <div className={`${stylesContainer.container} ${s.contactContainer}` }>
                <Title title={'Contacts'}/>
                <form className={s.form}>
                    <input type = 'text' className={s.inputs}/>
                    <input type = 'text' className={s.inputs}/>
                    <textarea className={s.textarea}/>
                    <button type = 'submit' className={s.button}/>
                </form>
            </div>
        </div>
    );
};

export default Contact;