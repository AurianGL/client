import React, { useContext } from 'react'
import { formAnimation } from '../context/FormAnimationContext';

interface FormContentProps {
}

export const FormContent: React.FC<FormContentProps> = ({children}) => {
    const { cycle } = useContext(formAnimation);

    return (
      <div	className={`animate-${cycle} flex-auto flex flex-col h-44	`}>
        {children}
      </div>
    );
}