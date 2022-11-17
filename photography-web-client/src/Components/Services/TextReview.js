import moment from 'moment/moment';
import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const TextReview = () => {
  const { user } = useContext(AuthContext)

  const { _id, serviceName, } = useLoaderData()

  const [reviewes, setReviewes] = useState([])

  const handleReviewPost = (event) => {

    event.preventDefault()
    const form = event.target;
    const review = form.review.value;
    const userTime = moment().format("MMM Do YYYY, h:mm:ss a");

    const reviews = {
      review: `${review}`,
      image: `${user.photoURL}`,
      email: `${user.email}`,
      name: `${user.displayName}`,
      serviceName: `${serviceName}`,
      serviceId: `${_id}`,
      Time: `${userTime}`
    }

    fetch('https://photography-web-server.vercel.app/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('photo-token')}`

      },
      body: JSON.stringify(reviews)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setReviewes(data)

        toast.success('Post Success', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

      })
      .catch(error => console.error(error))

    form.reset()

  }

  return (
    <div className='container'>

      <div className=''>

        {
          user?.uid ?

            <form onSubmit={handleReviewPost}>

              <div class="mb-2 mt-4">

                <div className='text-center'>
                  <img src={user.photoURL} alt="" className='img-fluid rounded-circle w-15 img-hight height-div' />
                  <div className='mb-2 mt-2'>
                    <p>{user.displayName}</p>
                    <input type="text" name="email" id="" defaultValue={user.email} readOnly />
                  </div>
                </div>

                <textarea class="form-control" id="exampleFormControlTextarea1" name='review' rows="3" />

              </div>

              <div className='mb-2 d-flex justify-content-end'>

                <button type='submit' className='btn bg-dark text-light'>Post</button>

              </div>

              <ToastContainer />

            </form>

            :
            <div class="mb-3">
              <div>
                <h4>Please Log In For Post Your Review</h4>
                <Link to='/login'>
                  <button>Log In</button>
                </Link>
              </div>
            </div>
        }

      </div>

    </div>

  );
};

export default TextReview;