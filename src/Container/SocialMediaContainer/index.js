import React from 'react';
import FaceBookComponent from '../../Components/FaceBookComponent';
import InstagramComponent from '../../Components/InstagramComponent';

const SocialMediaContainer = () => {
  return (
    <>
      <div className="flex flex-row ">
        <FaceBookComponent className="flex-1 "></FaceBookComponent>
        <InstagramComponent className="flex-2 "></InstagramComponent>
      </div>
    </>
  );
};

export default SocialMediaContainer;
