import React from 'react';
import s from './Contact.module.scss';
import stylesContainer from './../common/styles/Container.module.css';
import { Title } from '../common/components/title/Title';
import * as Yup from 'yup';
import {Field, Form, Formik} from 'formik';

interface FormValues {
    name: string
    email: string
    message: string
}

const Contact = () => {
    const initialValues:FormValues = {
        name: '',
        email: '',
        message: ''
    };

    const validationSchema = Yup.object({
        name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        message: Yup.string()
            .min(10, 'Must be at least 10 characters')
            .required('Required')
    });

    const onSubmit = (values:FormValues, { setSubmitting, resetForm }:any) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
        }, 400);
    };

    return (
        <div className={`${stylesContainer.container} ${s.contactContainer}`}>
            <Title title={'Contact'} className={s.title} />
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className={s.form}>
                        <Field type="text" className={s.inputs} placeholder="Name" name="name" />


                        <Field type="email" className={s.inputs} placeholder="Email" name="email" />
                        {/*<ErrorMessage name="email" />*/}

                        <Field
                            as="textarea"
                            className={s.textarea}
                            placeholder="Your Message"
                            name="message"
                        />
                        {/*<ErrorMessage name="message" />*/}
                        <button type="submit" className={s.button} disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Send Message'}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Contact;