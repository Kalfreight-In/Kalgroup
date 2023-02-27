import { useState, useEffect } from 'react';

const useFacebookPosts = (accessToken) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    window.fbAsyncInit = function () {
      FB.init({
        appId: '{your-app-id}',
        xfbml: true,
        version: 'v11.0',
      });

      FB.api('/me/feed', function (response) {
        if (response && !response.error) {
          setPosts(response.data);
        }
      });
    };
  }, [accessToken]);

  return posts;
};

export default useFacebookPosts;
