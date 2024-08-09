import React from 'react';

const Button = (props) => {
  return (
    <button
      {...props}
      className="bg-gradient-to-r from-slate-800 to-black py-1 px-4 rounded-md text-sky-600 font-extrabold text-opacity-90"
    />
  );
};

export default Button;
