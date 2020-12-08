import React from 'react';

interface SubmitButtonProps {}

export const SubmitButton: React.FC<SubmitButtonProps> = props => {
  const {children} = props
	return (
		<button
			type='submit'
			className=' flex-auto bg-pink-300 py-1 px-2 rounded border-b-4 border-pink-600 text-pink-800 hover:bg-pink-500 hover:border-pink-500	'>
			{children}
		</button>
	);
};
