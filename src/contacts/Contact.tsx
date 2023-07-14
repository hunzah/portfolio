import React, {useEffect, useState} from 'react';
import s from './Contact.module.scss';
import stylesContainer from './../common/styles/Container.module.css';
import {Title} from '../common/components/title/Title';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const Contact = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            message: Yup.string()
                .min(15, 'Must be at least 15 characters')
                .required('Required')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    })
    const [isDisabled, setIsDisabled] = useState(false);


    useEffect(() => {
        setIsDisabled(!!Object.keys(formik.errors).length);
    }, [formik.errors]);


    return (
        <div className={`${stylesContainer.container} ${s.contactContainer}`}>
            <Title title={'Contact'} className={s.title}/>
            <form className={s.form} action="https://formspree.io/f/xnqkqyjz" method="POST" onSubmit={formik.handleSubmit}>
                <input type="text" className={s.inputs} placeholder={'Name'} name="name"
                       value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>

                {formik.errors.name && formik.touched.name ? <div className={s.error}>{formik.errors.name}</div> : null}

                <input type="text" className={s.inputs} placeholder={'Email'} name="email"
                       value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>

                {formik.errors.email && formik.touched.email ?
                    <div className={s.error}>{formik.errors.email}</div> : null}

                <textarea className={s.textarea} placeholder={'Your Message'} name="message"
                          value={formik.values.message} onChange={formik.handleChange} onBlur={formik.handleBlur}/>

                {formik.errors.message && formik.touched.message ?
                    <div className={s.error}>{formik.errors.message}</div> : null}

                <button disabled={!!formik.errors || formik.isSubmitting} type="submit"
                        className={`${s.button} ${isDisabled ? s.disable : ''}`}
                        onClick={formik.handleSubmit}>
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;