import React from 'react';
import Button from './Button';

const FeedbackFormPopup = ({ setShow }) => {
  return (
    <div className="fixed inset-0 bg-white md:bg-black md:bg-opacity-80 flex md:items-center">
      <button
        onClick={() => setShow(false)}
        className="hidden md:block fixed top-2 right-2 text-red-500 font-extrabold text-3xl"
      >
        X
      </button>
      <div className="w-full">
        <div className="bg-white md:max-w-2xl md:mx-auto md:rounded-lg overflow-hidden">
          <div className="relative">
            <button
              onClick={() => setShow(false)}
              className="absolute top-2 left-8  flex ml-3 md:hidden text-red-500 font-semibold text-xl"
            >
              X
            </button>
            <h2 className="py-4 text-center border-b">Help me brainstorm!</h2>
          </div>
          <form className="p-8">
            <label className="block mt-4 mb-1 text-slate-800">Title</label>
            <input
              type="text"
              className="w-full border p-2 rounded-md"
              placeholder="A short, descriptive title"
            />
            <label className="block mt-4 mb-1 text-slate-800">Details</label>
            <textarea
              className="w-full border p-2 rounded-md"
              placeholder="please
              inclide
              any
              details"
            ></textarea>
            <div className="flex gap-2 mt-2 justify-end ">
              <Button>Attach files</Button>
              <Button>Create post</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackFormPopup;
