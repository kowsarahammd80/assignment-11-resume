import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import './ServicesCard.css'

const ServicesCard = ({ service }) => {

  const { _id, serviceImage, serviceName, serviceDetail, price, rating } = service

  return (
    <div className="col">

      <div className="card border-0">

        <PhotoProvider>
           <PhotoView src={serviceImage}>
            <img src={serviceImage} className="card-img-top image p-2" alt="..." />
           </PhotoView>
        </PhotoProvider>

        <div className="card-body">

          <h5 className="card-title font-style">{serviceName}</h5>
          <p className="card-text ">{serviceDetail.slice(0, 200)}</p>

          <div className='d-flex justify-content-evenly'>
            <p className=''>Price: ${price}</p>
            <p>Rating : {rating}</p>
          </div>

          <div className='  p-3 text-center'>


            <div>

              <Link to={`/services/${_id}`}>
                <button className='bg-dark text-light btn-book'>Viwe Details</button>
              </Link>

            </div>


          </div>

        </div>

      </div>

    </div>
  );
};

export default ServicesCard;