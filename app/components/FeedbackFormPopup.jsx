import Popup from './Popup';

const FeedbackFormPopup = ({ setShow }) => {
  return (
    <Popup setShow={setShow} title={'Help me Brainstorm!'}>
      <form className="border border-gray-600 hover:border-cyan-500  p-8">
        <label className="mt-4 mb-1 bg-gradient-to-r from-sky-300 via-sky-400 to-gray-500 inline-block text-transparent bg-clip-text font-extrabold font-2xl font-mono">
          Title
        </label>
        <input
          type="text"
          className="w-full border p-2 rounded-md"
          placeholder="A short, descriptive title"
        />
        <label className="mt-4 mb-1 bg-gradient-to-r from-cyan-400 via-sky-600 to-gray-600 inline-block text-transparent bg-clip-text font-extrabold font-2xl font-mono">
          Details
        </label>
        <textarea
          className="w-full border p-2 rounded-md"
          placeholder="please
              inclide
              any
              details"
        ></textarea>
        <div className="flex gap-4 mt-2 justify-end ">
          <button className="bg-gradient-to-r from-cyan-300 via-sky-400 to-gray-600 inline-block text-transparent bg-clip-text font-extrabold font-3xl font-mono">
            Attach files
          </button>
          <button className="bg-gradient-to-r from-cyan-300 via-sky-400 to-gray-600 inline-block text-transparent bg-clip-text font-extrabold font-3xl font-mono">
            Create Post
          </button>
        </div>
      </form>
    </Popup>
  );
};

export default FeedbackFormPopup;
