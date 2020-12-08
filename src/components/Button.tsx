import React from 'react'

interface ButtonProps {
  handleClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({children, handleClick}) => {
    return (
      <button type='button' onClick={handleClick} className='flex-auto text-pink-800 bg-pink-300 py-1 px-2 rounded border-b-4 border-pink-600 hover:bg-pink-500 hover:border-t-6'>
        {children}
      </button>
    );
}