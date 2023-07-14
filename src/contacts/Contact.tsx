import React, {useEffect, useState} from 'react';
import s from './Contact.module.scss';
import stylesContainer from './../common/styles/Container.module.css';
import {Title} from '../common/components/title/Title';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

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
                .required('Required'),
        }),
        onSubmit: async (values, {resetForm}) => {
            setIsSubmitting(true);

            try {
                const response = await fetch('https://formspree.io/f/xnqkqyjz', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });
                    toast.success('🙌 Your Message has been sent', {
                        draggable: true,
                        progress: undefined,
                        theme: 'colored',
                    });
            } catch (error) {
                toast.error('😲 Failed to send message. Please retry or contact me on Telegram', {
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                });
            } finally {
                setIsSubmitting(false);
            }

        },
    });
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        setIsDisabled(!!Object.keys(formik.errors).length);
    }, [formik.errors]);


    return (
        <div className={`${stylesContainer.container} ${s.contactContainer}`}>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss

            />
            <Title title={'Contact'} className={s.title}/>
            <form className={s.form} onSubmit={formik.handleSubmit}>
                <label htmlFor="name"></label>
                <input
                    className={s.inputs}
                    placeholder="Name"
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />

                {formik.errors.name && formik.touched.name ?
                    <div className={s.error}>{formik.errors.name}</div>
                    : null}

                <label htmlFor="email"></label>
                <input
                    className={s.inputs}
                    placeholder="Email"
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className={s.error}>{formik.errors.email}</div>
                ) : null}

                <label htmlFor="message"></label>
                <textarea
                    className={s.textarea}
                    placeholder="Your Message"
                    id="message"
                    name="message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                />
                {formik.touched.message && formik.errors.message ? (
                    <div className={s.error}>{formik.errors.message}</div>
                ) : null}


                <button disabled={isDisabled || formik.isSubmitting} type="submit"
                        className={`${s.button} ${isDisabled ? s.disable : ''}`}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

            </form>

        </div>
    );
};
export default Contact;