import React from 'react';


const MyReviewCard = ({userEmail, handleDelete,  handleStatusUpdat}) => {

  const { _id, review, image, serviceName, email, name } = userEmail;

  return (
    <div className='col-12 mt-2 mb-2'>

      <div className='bg-color'>

        <img src={image} alt="" className='img-fluid rounded-circle review-img h-25  w-25 p-3' />
         <p>{name}</p>
         <p>{email}</p>

        <div class=" border p-2">

          <p>{serviceName}</p>
          <p>{review}</p>

        </div>

        <div className='d-flex justify-content-end p-2'>

          <div className='me-3'>
            <button onClick={() => handleStatusUpdat(_id)} className='bg-dark text-light'>Edit</button>
          </div>

          <div>
            <button  onClick={() => handleDelete(_id)} className='bg-dark text-light'>Delete</button>
          </div>

        </div>

      </div>


    </div>
  );
};

export default MyReviewCard;