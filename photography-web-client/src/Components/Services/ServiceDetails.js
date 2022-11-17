import React, { useContext, useEffect, useState } from 'react';
import './ServicesCard.css';
import { useLoaderData } from 'react-router-dom';
import TextReview from './TextReview';
import ShowReview from './ShowReview';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Spiner from '../../Sheard/Spiner/Spiner';
import UseTitle from '../Title/Title';




const ServiceDetails = () => {

  UseTitle("Service")

  const { serviceName, serviceImage, serviceDetail, price, rating, _id } = useLoaderData()

  const { loading } = useContext(AuthContext)

  const [showReviews, setShowReviews] = useState([])

  useEffect(() => {
    fetch(`https://photography-web-server.vercel.app/reviews/${_id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('photo-token')}`
      }

    })
      .then(res => res.json())
      .then(data => {
        if (loading.data) {
          <Spiner />
        }
        setShowReviews(data)
      })
      .catch(error => console.error(error))

  }, [showReviews])


  return (

    <div>
      <div className='container mt-4 mb-2 mt-sm-2 '>

        <div className='row'>

          <div className='col-12 col-lg-6 border-2'>

            <img src={serviceImage} alt="" className='img-fluid h-100' />

          </div>

          <div className='col-12 col-lg-6 '>

            <h3 className='mt-2 mt-lg-1'>{serviceName}</h3>
            <p>{serviceDetail}</p>

            <div className='d-flex justify-content-around '>
              <p>Price: ${price}</p>
              <p>Rating: {rating}</p>
            </div>

          </div>


        </div>

      </div>


      {/* review post */}


      <div>
        <h4 className='text-center'>Please Post Your Review</h4>
        <TextReview />
      </div>

      {/* review get */}

      <div className='container '>

        <div className='row '>


          {
            showReviews.map(showReview => <ShowReview
              key={showReview._id}
              showReview={showReview}
            ></ShowReview>)
          }


        </div>


      </div>

    </div>


  );
};

export default ServiceDetails;