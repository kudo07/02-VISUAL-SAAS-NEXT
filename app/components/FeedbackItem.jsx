import React from 'react';

const FeedbackItem = ({ onOpen, title, description, votesCount }) => {
  return (
    <a
      href=""
      onClick={(e) => {
        e.preventDefault();
        onOpen();
      }}
      className="flex gap-4 items-center border border-gray-700 hover:border-cyan-500 mb-2 px-4 py-4 cursor-pointer"
    >
      <div className="">
        <h2 className="bg-gradient-to-r from-sky-300 via-cyan-400 to-gray-800 text-transparent inline-block bg-clip-text font-extrabold text-xl">
          {title}
        </h2>
        <p className="text-gray-400 text-md">{description}</p>
      </div>
      <div>
        <button className="shadow-sm  py-1 px-4  gap-1 bg-gradient-to-r from-sky-400 via-cyan-500 to-gray-800 text-transparent inline-block bg-clip-text font-bold text-sm ">
          <span className="triangle relative -top-2"></span>
          {votesCount}
        </button>
      </div>
    </a>
  );
};

export default FeedbackItem;
