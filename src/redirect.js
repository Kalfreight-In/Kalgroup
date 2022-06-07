import React, { useEffect } from 'react';

function Redirect() {
  useEffect(() => {
    window.location.href = '/';
  }, []);

  return (
    <div>
      <h2>Contact</h2>
    </div>
  );
}

export default Redirect;
