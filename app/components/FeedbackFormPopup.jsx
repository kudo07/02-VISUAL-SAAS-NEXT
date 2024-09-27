import { useState } from 'react';
import Popup from './Popup';

import axios from 'axios';
const FeedbackFormPopup = ({ setShow }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // handle the create post button from the feedback api
  const handleCreatePostButtonClick = (e) => {
    e.preventDefault();
    // implement the post req using the axios
    axios.post('api/feedback', { title, description }).then((res) => {
      setShow(false);
    });
  };
  // create the attach file
  async function handleAttachFilesInput(e) {
    // we spred the files and spread it and stored it in the array

    const Files = [...e.target.files];
    console.log('Files from the client', Files);

    const data = new FormData();
    // in the client we set the FormData which is the constructor
    for (const file of Files) {
      console.log(file);
      data.append('file', file);
    }
    console.log('data', data);

    const res = await axios.post('/api/upload', data);
    // console.log(res);
  }

  return (
    <Popup setShow={setShow} title={'Help me Brainstorm!'}>
      <form className="border border-gray-600 hover:border-cyan-500  p-8">
        <label className="mt-4 mb-1 bg-gradient-to-b from-cyan-300 via-cyan-600 to-blue-800 inline-block text-transparent bg-clip-text font-extrabold font-2xl font-mono">
          Title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="w-full border p-2 rounded-md"
          placeholder="A short, descriptive title"
        />
        <label className="mt-4 mb-1 bg-gradient-to-b from-cyan-300 via-cyan-500 to-blue-800 inline-block text-transparent bg-clip-text font-extrabold font-2xl font-mono">
          Details
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded-md w-full max-w-lg h-40 resize-none"
          placeholder="please
              inclide
              any
              details"
        />
        <div className="flex gap-4 mt-2 justify-end ">
          <label className="cursor-pointer bg-gradient-to-b from-cyan-300 via-sky-500 to-sky-800 inline-block text-transparent bg-clip-text font-extrabold font-3xl font-mono">
            <span>Attach files</span>
            <input
              multiple
              onChange={handleAttachFilesInput}
              type="file"
              className="hidden"
            />
          </label>
          <button
            className="bg-gradient-to-b from-cyan-300 via-cyan-500 to-blue-800 inline-block text-transparent bg-clip-text font-extrabold font-3xl font-mono"
            onClick={handleCreatePostButtonClick}
          >
            Create Post
          </button>
        </div>
      </form>
    </Popup>
  );
};

export default FeedbackFormPopup;
