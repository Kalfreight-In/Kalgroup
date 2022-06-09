import React from 'react';
import FaceBookComponent from '../../Components/FaceBookComponent';
import InstagramComponent from '../../Components/InstagramComponent';

const SocialMediaContainer = () => {
  return (
    <>
      <div className="flex flex-row">
        <FaceBookComponent></FaceBookComponent>
        <InstagramComponent></InstagramComponent>
      </div>
    </>
  );
};

export default SocialMediaContainer;
