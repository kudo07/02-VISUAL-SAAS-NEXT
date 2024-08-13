'use client';
import { useState } from 'react';
import FeedbackItem from './components/FeedbackItem';
import FeedbackFormPopup from './components/FeedbackFormPopup';
import Button from './components/Button';
import FeedbackItemPopup from './components/FeedbackItemPopup';

export default function Home() {
  const [showFeedbackPopupForm, setShowFeedbackPopupForm] = useState(false);
  const [showFeedbackPopupItem, setShowFeedbackPopupItem] = useState(null);

  function openFeedbackPopupForm() {
    setShowFeedbackPopupForm(true);
  }
  function openFeedbackPopupItem(feedback) {
    setShowFeedbackPopupItem(feedback);
  }
  const feedbacks = [
    {
      title: 'Please Post more videos',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio quia praesentium tempora sapiente rerum quisquam nisi soluta eaque doloribus non distinctio dolor itaque eligendi ipsa nostrum animi error sed cupiditate id commodi corrupti ducimus veritatis.',
      votesCount: 100,
    },
  ];
  return (
    <main className="md:max-w-2xl mx-auto md:shadow-lg md:rounded-lg md:mt-9 overflow-hidden">
      <div className="p-8 flex flex-col justify-center align-middle text-center">
        <h1 className=" bg-gradient-to-r from-cyan-300 via-sky-600 to-gray-800 inline-block text-transparent bg-clip-text  font-extrabold text-4xl">
          VISUAL FEEDBACK SAAS
        </h1>
        <p className="text-opacity-90 text-gray-500 font-bold">
          Help me spark my creativity! What should I build next, or how can I
          elevate my current project?
        </p>
      </div>
      <div className=" px-8 py-3 flex border border-gray-700 hover:border-cyan-500">
        <div className="grow"></div>
        <div>
          <Button onClick={openFeedbackPopupForm}>
            <span className="p-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-gray-800 text-transparent inline-block bg-clip-text hover:bg-cyan-400">
              Help me brainstorm!
            </span>
          </Button>
        </div>
      </div>
      <div className="px-9 py-6">
        {feedbacks.map((feedback) => (
          <FeedbackItem
            {...feedback}
            onOpen={() => openFeedbackPopupItem(feedback)}
          />
        ))}
      </div>
      {showFeedbackPopupForm && (
        <FeedbackFormPopup setShow={setShowFeedbackPopupForm} />
      )}
      {showFeedbackPopupItem && (
        <FeedbackItemPopup
          {...showFeedbackPopupItem}
          setShow={setShowFeedbackPopupItem}
        />
      )}
    </main>
  );
}
