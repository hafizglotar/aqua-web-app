'use client';

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SubscriptionForm = () => {
    const initialValues = {
        email: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
    });

    const onSubmit = async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            if (response.ok) {
                alert('Subscribed successfully!');
                resetForm();
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
        setSubmitting(false);
    };

    return (
        <div className="">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="flex justify-end">
                            <div className="w-9/12 relative">
                                <Field
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="border border-white rounded rounded-r-none px-3 py-2 w-full outline-none"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-red-500 text-sm mt-1 absolute -bottom-5"
                                />
                            </div>
                            <div className="w-3/12">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="aquaGradient text-white w-full h-full border border-l-0 border-white rounded rounded-l-none"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Subscribe'}
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SubscriptionForm;