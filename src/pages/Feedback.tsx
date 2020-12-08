import React, { useContext, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import {
	FormSuccess,
	FormFailure,
	SubmitButton,
	Label,
	Button,
	TextAreaInput,
	TextInput,
	Spinner,
	FormContent,
} from '../components';
import * as yup from 'yup';
import { sendFeedack } from '../utils/api';
import { Link } from 'react-router-dom';
import {
	formAnimation,
	FormAnimationContext,
} from '../context/FormAnimationContext';

interface FeedbackProps {}

// define 2 steps validation schema with yup
const InfoSchema = yup.object({
	firstName: yup.string(),
	lastName: yup.string(),
	email: yup.string().email('invalid email').required('required'),
});

const MessageSchema = yup.object({
	content: yup.string().required('required'),
});

// infer type from the 2 steps validation schemas
type InfoType = yup.InferType<typeof InfoSchema>;
type MessageType = yup.InferType<typeof MessageSchema>;
export interface FeedbackType extends InfoType, MessageType {}

type ApiRes = { message?: string; errors?: [] };

// define intitial values of feedback form
const initialValues: FeedbackType = {
	firstName: '',
	lastName: '',
	email: '',
	content: '',
};

export const Feedback: React.FC<FeedbackProps> = () => {
	const [res, setRes] = useState<ApiRes>({});
	const { oneStepCloser, step, cycle } = useContext(formAnimation);

	return (
		<div className='container flex flex-col items-center '>
			<div className='text-left text-2xl p-5'>
				<h1> send your feedback</h1>
			</div>
			<Formik
				enableReinitialize
				initialValues={initialValues}
				// dynamically set validation schema
				validationSchema={
					step === 1 ? InfoSchema : step === 2 ? MessageSchema : null
				}
				onSubmit={(values, errors) => {
					oneStepCloser(+1);
					if (step === 2)
						sendFeedack({ ...values }).then(response => setRes(response));
				}}>
				{({ errors, touched }) => (
					<Form className='w-11/12 lg:w-4/5 lg:w-1/2 xl:w-1/3 items-center '>
						<div className=' flex-auto flex flex-col py-4'>
							{step === 1 && (
								<FormContent>
									<Label name='firstname'>
										First Name{' '}
										{errors.firstName && touched.firstName && errors.firstName}
									</Label>
									<Field
										id='firstName'
										name='firstName'
										placeholder='Frodo'
										as={TextInput}
									/>
									<Label name='lastName'>
										Last Name{' '}
										{errors.lastName && touched.lastName && errors.lastName}
									</Label>
									<Field
										id='lastName'
										name='lastName'
										placeholder='Baggins'
										as={TextInput}
									/>
									<Label name='email'>
										Email {errors.email && touched.email && errors.email}
									</Label>
									<Field
										id='email'
										name='email'
										placeholder='frodo@lotr.com'
										as={TextInput}
									/>
								</FormContent>
							)}
							{step === 2 && (
								<FormContent>
									<Label name='content'>
										Your Feedback{' '}
										{errors.content && touched.content && errors.content}
									</Label>
									<Field
										id='content'
										name='content'
										placeholder='super bien'
										as={TextAreaInput}
									/>
								</FormContent>
							)}
							{step === 3 && !res.message && !res.errors && (
								<FormContent>
									"sending your message to slaanesh..."
									<Spinner />
								</FormContent>
							)}
							{step === 3 && res.message === 'success' && (
								<FormContent>
									<FormSuccess />
								</FormContent>
							)}
							{step === 3 && res.errors && (
								<FormContent>
									<FormFailure />
								</FormContent>
							)}
						</div>
						<div className='flex space-x-3'>
							{step === 1 && <SubmitButton>next</SubmitButton>}
							{step === 2 && (
								<div className='grid grid-cols-2 gap-4 w-full'>
									<Button handleClick={() => oneStepCloser(-1)}> back</Button>
									<SubmitButton>Send</SubmitButton>
								</div>
							)}
							{step === 3 && (
								<div className='grid grid-cols-2 gap-4 w-full'>
									<Button handleClick={() => oneStepCloser(-1)}>Send Another one</Button>
									<Link
										to='/'
										className='text-center flex-auto text-pink-800 bg-pink-300 py-1 px-2 rounded border-b-4 border-pink-600 hover:bg-pink-500 hover:border-t-6'>
										Back Home
									</Link>
								</div>
							)}
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};
