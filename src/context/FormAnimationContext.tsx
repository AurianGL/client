import React, { createContext, useState } from 'react';

interface formAnimationContextProps {}

export const formAnimation: React.Context<any> = createContext(undefined);

export const FormAnimationContext: React.FC<formAnimationContextProps> = ({
	children,
}) => {
	const [step, setStep] = useState(1);
	const [cycle, setCycle] = useState<'mount' | 'unmount'>('mount');

	const oneStepCloser = (direction: number) => {
    console.log("1 :", step)
		setCycle('unmount');
		setTimeout(() => {
      console.log("2 :", step)
			setCycle('mount');
      setStep(step + direction);
      console.log("3 :", step)
		}, 1000);
	};

	return (
		<formAnimation.Provider value={{ oneStepCloser, step, cycle }}>
			{children}
		</formAnimation.Provider>
	);
};
