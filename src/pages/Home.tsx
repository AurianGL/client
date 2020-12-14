import React, { useEffect, useState } from 'react';
import { Button, Spinner } from '../components';
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
	const [page, setPage] = useState<number>(1);
	useEffect(() => {
		getFeedbacksIndex({ page: page, postPerPage: 5 }).then(data => {
			setFeedbacks(data);
		});
		// return () => setPage(1)
	}, [page]);

	return (
		<div className='w-11/12 lg:w-4/5 lg:w-1/2 xl:w-2/3 container mx-auto sm:p-2 lg:p-10 flex flex-col items-left '>
			<div className='text-left text-2xl p-5 flex'>
				<h1>Feedbacks from the Realm of Chaos</h1>
			</div>
			{feedbacks.length === 0 && (
				<div>
					<Spinner />
				</div>
			)}
			<div className='flex-grow'>
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
			<div className='w-full grid grid-cols-3 bg-gray-900 bottom-0 left-0 p-2 fixed'>
				{page > 1 && (
					<Button handleClick={() => setPage(page - 1)}>Previous</Button>
				)}
				{page === 1 && <div></div>}
				<div className="text-center">{page}</div>
				{feedbacks.length >= 5 && (
					<Button handleClick={() => setPage(page + 1)}>Next</Button>
				)}
				{feedbacks.length === 5 && <div></div>}
			</div>
		</div>
	);
};
