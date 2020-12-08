import React, { useEffect, useState } from 'react';
import { Spinner } from '../components';
import { getFeedbacksIndex } from '../utils/api';

interface HomeProps {}

type feedbacks = {
	content: string;
	id: string;
	info: {
		email: string;
	};
}[];

export const Home: React.FC<HomeProps> = () => {
	const [feedbacks, setFeedbacks] = useState<feedbacks>([]);
	useEffect(() => {
		getFeedbacksIndex().then(data => {
			setFeedbacks(data);
		});
	}, []);

	return (
		<div className='w-11/12 lg:w-4/5 lg:w-1/2 xl:w-2/3 container mx-auto sm:p-2 lg:p-10 flex flex-col items-left '>
			<div className='text-left text-2xl p-5'>
				<h1>Feedbacks from the Realm of Chaos</h1>
        
			</div>
			{feedbacks.length === 0 && (
				<div>
					<Spinner/>
				</div>
			)}
			{feedbacks.length > 0 &&
				feedbacks.map(feedback => (
					<div key={feedback.id} className='rounded bg-gray-600 mb-3 p-3 '>
						<div>{feedback.content}</div>
						<div className='text-pink-400 text-right'>
							{feedback.info.email}
						</div>
					</div>
				))}
		</div>
	);
};
