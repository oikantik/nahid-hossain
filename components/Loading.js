import React from "react";

function Loading() {
  return (
    <div className='loading'>
      <img
        src='/assets/images/loading.svg'
        alt='loading'
        className='loading__icon'
      />
      <p className='loading__description'>Please wait, while the site loads</p>
    </div>
  );
}

export default Loading;
