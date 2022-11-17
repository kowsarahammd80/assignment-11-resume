import React from 'react';
import './Together.css';
import image from '../../assets/wed-img.png';

const Together = () => {
  return (
    <div className='bg-color'>

      <div className='container-fluid'>

        <div className='row'>

          <div className='col-12 col-lg-6 col-md-6 d-flex justify-content-center  align-items-center'>

            <div className='ms-0 ms-lg-5 p-2'>
              <h4 className='mb-2 mb-lg-4 text-color'>HERE IS TO LOVE & HAPPILY HEREAFTER...</h4>

              <p> Formal wedding photos during the wedding. Rather, they might pose for a formal photo in their best clothes before more couples started posing in their wedding clothes or sometimes hired a photographer to come to the wedding venue.</p>
            </div>

          </div>

          <div className='col-12 col-lg-6 col-md-6'>

            <img src={image} alt="" className='img-fluid' />

          </div>

        </div>

      </div>

    </div>
  );
};

export default Together;