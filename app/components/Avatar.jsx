import React from 'react';

const Avatar = ({ url = null }) => {
  return (
    // as the flex so only the upper grid is strech
    <div>
      <div className="rounded-full bg-gradient-to-r from-gray-500 to-gray-900 w-12 h-12"></div>
    </div>
  );
};

export default Avatar;
