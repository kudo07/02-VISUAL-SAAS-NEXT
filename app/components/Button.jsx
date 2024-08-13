import React from 'react';

const Button = (props) => {
  const extraClasses = props?.className || '';
  return (
    <button
      {...props}
      disabled={props.disabled}
      className={
        'bg-gradient-to-r from-slate-800 to-black py-1 px-4 rounded-md text-sky-600 font-extrabold text-opacity-90' +
        extraClasses +
        ' ' +
        (props.disabled
          ? ' text-opacity-80 bg-opacity-90 cursor-not-allowed'
          : ' ')
      }
    />
  );
};

export default Button;
