import React from 'react';

interface LabelProps {
	name: string;
}

export const Label: React.FC<LabelProps> = ({ name, children }) => {
	return (
		<label htmlFor={name} className=''>
			{children}
		</label>
	);
};
