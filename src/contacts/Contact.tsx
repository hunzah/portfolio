import React from 'react';
import s from './Contact.module.css'
import stylesContainer from './../common/styles/Container.module.css'

const Contact = () => {
    return (
        <div className={s.contact}>
            <div className={`${stylesContainer.container} ${s.contactContainer}` }>
                <h4 className={s.title}>Contact</h4>
                <div className={s.form}>
                    <input className={s.inputs}/>
                    <input className={s.inputs}/>
                    <textarea className={s.textarea}/>
                    <button className={s.button}/>
                </div>
            </div>
        </div>
    );
};

export default Contact;