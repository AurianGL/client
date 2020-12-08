import React from 'react'

interface CustomInputProps {

}

export const TextInput: React.FC<CustomInputProps> = (props) => {
    return (
      <input className="focus:outline-none focus:ring-1 focus:ring-pink-300 p-1 bg-gray-500 text-gray-800 rounded " type="text" {...props}/>
    );
}

export const TextAreaInput: React.FC<CustomInputProps> = (props) => {
  return (
    <textarea className="focus:outline-none focus:ring-1 focus:ring-pink-300 p-1 bg-gray-500 text-gray-800 w-full rounded" {...props}/>
  );
}