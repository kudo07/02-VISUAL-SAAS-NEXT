'use client';
import { useState } from 'react';
import FeedbackItem from './componenets/FeedbackItem';
import FeedbackFormPopup from './componenets/FeedbackFormPopup';
import Button from './componenets/Button';

export default function Home() {
  const [showFeedbackPopup, setShowFeedbackPopup] = useState(false);
  function openFeedbackPopup() {
    setShowFeedbackPopup(true);
  }
  return (
    <main className="md:max-w-2xl mx-auto md:shadow-lg md:rounded-lg md:mt-9 overflow-hidden">
      <div className="p-8 flext justify-center align-middle text-center">
        <h1 className=" bg-gradient-to-r from-cyan-300 via-sky-600 to-gray-800 inline-block text-transparent bg-clip-text  font-extrabold  ml-10 text-4xl">
          VISUAL FEEDBACK SAAS
        </h1>
        <p className="text-opacity-90 text-gray-500 font-bold">
          Help me spark my creativity! What should I build next, or how can I
          elevate my current project?
        </p>
      </div>
      <div className=" px-8 py-2 flex border border-gray-700 hover:border-cyan-500">
        <div className="grow"></div>
        <div>
          <Button onClick={openFeedbackPopup}>
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-gray-800 text-transparent inline-block bg-clip-text">
              Help me brainstorm!
            </span>
          </Button>
        </div>
      </div>
      <div className="px-8 py-5">
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />
      </div>
      {showFeedbackPopup && (
        <FeedbackFormPopup setShow={setShowFeedbackPopup} />
      )}
    </main>
  );
}
