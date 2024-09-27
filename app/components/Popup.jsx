import React from 'react';

const Popup = ({ setShow, children, title }) => {
  return (
    <div
      className="fixed inset-0 bg-black md:bg-black md:bg-opacity-80 flex items-center  align-middle justify-center md:items-center "
      onClick={() => setShow(false)}
    >
      <button
        onClick={() => setShow(false)}
        className="hidden md:block fixed top-2 right-2 text-red-500 font-extrabold text-3xl"
      >
        X
      </button>
      <div className="w-full">
        <div
          className="bg-salte-900 md:max-w-2xl md:mx-auto md:rounded-lg overflow-hidden"
          onClick={(e) => e.stopPropagation()}
          // to stop the bubbling by clocking the inside so we stop the propagation by being clicked inside the div
        >
          <div className="relative flex justify-center ">
            <button
              onClick={() => setShow(false)}
              className="absolute top-2 left-8  flex ml-3 md:hidden text-red-500 font-semibold text-xl"
            >
              X
            </button>
          </div>

          <div className="flex flex-col justify-center items-center align-middle p-8  ">
            <h2 className=" bg-gradient-to-b from-cyan-300 via-cyan-500 to-blue-800 inline-block text-transparent bg-clip-text font-extrabold text-3xl p-8 ">
              {title}
            </h2>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
