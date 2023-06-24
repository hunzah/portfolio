import React from 'react';
import s from './Contact.module.css'
import stylesContainer from './../common/styles/Container.module.css'

const Contact = () => {
    return (
        <div className={s.contact}>
            <div className={`${stylesContainer.container} ${s.contactContainer}` }>
                <h4 className={s.title}>Contact</h4>
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