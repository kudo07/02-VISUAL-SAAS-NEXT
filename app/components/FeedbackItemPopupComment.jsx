import React, { useState } from 'react';
import Button from './Button';
import Avatar from './Avatar';

const FeedbackItemPopupComment = () => {
  const [commentText, setCommentText] = useState('');

  return (
    <div className="p-8 m-3 w-full flex flex-col gap-4">
      <div className="gap-4 mb-8 border border-gray-500 hover:border-cyan-400  px-4 py-6">
        <div className="flex gap-8 ">
          <span>
            <Avatar />
          </span>
          <p className="bg-gradient-to-r from-cyan-300 via-sky-600 to-gray-800 inline-block text-transparent bg-clip-text  font-semibold text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            commodi voluptates? Dolorum consectetur, optio porro hic accusantium
            totam quos vero, fugit voluptatem tenetur accusamus perferendis
            labore iure maiores magnam aliquid.
            <p className="text-gray-500 mt-2 ">
              Anonymous &middot; a few seconds ago
            </p>
          </p>
        </div>
      </div>

      <form>
        <textarea
          className="border rounded-md w-full p-2"
          placeholder="What you think"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <div className="flex justify-end gap-2 mt-2">
          <button className=" ml-2 bg-gradient-to-r from-cyan-300 via-sky-600 to-gray-800 inline-block text-transparent bg-clip-text  font-semibold text-md">
            Attach Files
          </button>
          <button
            className="mr-10 bg-gradient-to-r from-cyan-300 via-sky-600 to-gray-800 inline-block text-transparent bg-clip-text  font-semibold text-md"
            disabled={commentText === ''}
          >
            Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackItemPopupComment;
