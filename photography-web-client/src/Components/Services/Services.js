import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Spiner from '../../Sheard/Spiner/Spiner';
import UseTitle from '../Title/Title';

import ServicesCard from './ServicesCard';

const Services = ({ len }) => {

  UseTitle("Service")

  const [services, setServices] = useState([])

  const [loading, setLoading] = useState(true)

   

  useEffect(() => {

    fetch('https://photography-web-server.vercel.app/services',
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('photo-token')}`
        }

      }
    )
      .then(res => res.json())
      .then(data => { 
        
        setServices(data); 
        setLoading(false)
      })

  }, [])

  if(loading){
    return <Spiner/>
  }

  let length = 0;
  !len ? length = services.length : length = len;

  return (
    <div className='container mt-3'>

      <h3 className='text-center font-style mt-2 mb-3'>See Of Service</h3>
      <h5 className='text-center mb-3'>TWO HEARTS THAT BEAT AS ONE!</h5>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

        {
          services.slice(0, length).map(service => <ServicesCard key={service._id}
            service={service}
          ></ServicesCard>)
        }

      </div>
    </div>
  );
};

export default Services;