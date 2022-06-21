import React from 'react';
import FaceBookComponent from '../../Components/FaceBookComponent';
import InstagramComponent from '../../Components/InstagramComponent';

const SocialMediaContainer = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col sm:m-2 m-0 h-1/2">
        <FaceBookComponent className="flex-1 lg:flex-1"></FaceBookComponent>
        <InstagramComponent className="flex-1 lg:flex-2"></InstagramComponent>
      </div>
    </>
  );
};

export default SocialMediaContainer;
