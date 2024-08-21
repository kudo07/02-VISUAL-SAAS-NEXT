import Button from './Button';
import FeedbackItemPopupComment from './FeedbackItemPopupComment';
import Popup from './Popup';

const FeedbackItemPopup = ({ title, description, setShow, votesCount }) => {
  return (
    <Popup title={title} setShow={setShow}>
      <div className="border border-gray-600 hover:border-cyan-500   ">
        <div className="p-9 pb-3 ">
          <p className=" bg-gradient-to-r from-gray-400 via-gray-500 to-gray-700 text-transparent inline-block bg-clip-text font-semibold text-md   ">
            {description}
          </p>
        </div>
        <div className=" flex align-middle items-center text-center justify-end px-9 py-3 border border-l-0 border-r-0  border-gray-500 ">
          <button className="shadow-sm   bg-gradient-to-r from-cyan-400 via-sky-400 gap-2 to-gray-700 text-transparent inline-block bg-clip-text font-bold text-sm   ">
            <span className="triangleTwo mr-1  relative -top-5"></span>
            {votesCount}
          </button>
        </div>
        <div>
          <FeedbackItemPopupComment />
        </div>
      </div>
    </Popup>
  );
};

export default FeedbackItemPopup;
