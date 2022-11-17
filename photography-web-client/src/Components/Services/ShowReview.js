import React from 'react';

const ShowReview = ({showReview}) => {
   
  const {review, image, email, serviceName, name} = showReview;

  return (
    <div className='col-12  mt-3 mb-2'>
    <div className='bg-color'>

    <img src={image} alt="" className='img-fluid rounded-circle review-img h-25  w-25 p-3' />
    <p>{name}</p>
    <p>{email}</p>
  
    <div class=" border p-2">

      <p>{review}</p>
      <p>{serviceName}</p>

    </div>

  </div>
  </div>
  );
};

export default ShowReview;