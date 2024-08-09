import React from 'react';

const FeedbackItem = () => {
  return (
    <div className="flex gap-4 items-center border border-gray-700 hover:border-cyan-500 mb-2 px-3 py-4">
      <div className="">
        <h2 className="bg-gradient-to-r from-sky-300 via-cyan-400 to-gray-800 text-transparent inline-block bg-clip-text font-extrabold text-xl">
          Please Post more videos
        </h2>
        <p className="text-gray-400 text-md">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio quia
          praesentium tempora sapiente rerum quisquam nisi soluta eaque
          doloribus, non distinctio dolor itaque eligendi ipsa nostrum animi
          error sed cupiditate id commodi corrupti ducimus veritatis.
        </p>
      </div>
      <div>
        <button className="shadow-sm  py-1 px-4 flex gap-1 bg-gradient-to-r from-sky-400 via-cyan-500 to-gray-800 text-transparent inline-block bg-clip-text font-bold text-sm ">
          <span className="triangle relative -top-2"></span>
          100
        </button>
      </div>
    </div>
  );
};

export default FeedbackItem;
