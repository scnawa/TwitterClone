import React from 'react';

const Avatar = ({ src }) => {
  return (
    <img
      className="avatar"
      src={src}
      alt="User Avatar"
    />
  );
};

export default Avatar;