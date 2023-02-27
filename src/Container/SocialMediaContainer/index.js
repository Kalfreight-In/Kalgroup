import React, { useEffect, useState } from 'react';
import FaceBookComponent from '../../Components/FaceBookComponent';
import InstagramComponent from '../../Components/InstagramComponent';
// import { useInitFbSDK } from '../../Hooks/fb-hooks';
import { Instagramfeeds } from '../../data';
import { initFacebookSdk } from '../../HelpFunctions/initFacebookSdk';
// const PAGE_ID = process.env.REACT_APP_FACEBOOK_APP_ID;

const SocialMediaContainer = () => {
  const [showFeed, setShowFeed] = useState(false);
  const [fdata, setFdata] = useState();
  // const isFbSDKInitialized = useInitFbSDK();
  initFacebookSdk();
  // function startUp() {
  //   setShowFeed(true);
  // }
  useEffect(() => {
    window.FB.api(
      '/114517358232743/posts',
      'GET',
      { fields: 'full_picture,message,created_time' },
      function (response) {
        // Insert your code here
        console.log(response);
        setShowFeed(true);
        setFdata(response.data);
      }
    );
  }, []);
  return (
    <>
      <div className="flex md:flex-row flex-col sm:m-2 m-0 h-1/2 gap-6">
        <FaceBookComponent
          FeedData={showFeed ? Instagramfeeds : Instagramfeeds}
          className="flex-1 lg:flex-1 "
        ></FaceBookComponent>
        <InstagramComponent
          FeedData={showFeed ? Instagramfeeds : Instagramfeeds}
          className="flex-1 lg:flex-2 "
        ></InstagramComponent>
      </div>
    </>
  );
};

export default SocialMediaContainer;
