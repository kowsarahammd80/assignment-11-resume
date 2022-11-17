import moment from 'moment/moment';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import UseTitle from '../Title/Title';


const AddService = () => {

  const [addServices, setAddServices] = useState([])

  UseTitle("Add Service")

  let handlerAddService = (event) => {

    event.preventDefault()
    const form = event.target;
    const serviceImage = form.serviceImage.value;
    const serviceName = form.serviceName.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const serviceDetail = form.serviceDetail.value;



    const time = moment().format('MMMM Do YYYY, h:mm:ss a');

    const servicePost = {

      serviceImage: `${serviceImage}`,
      serviceName: `${serviceName}`,
      rating: `${rating}`,
      price: `${price}`,
      serviceDetail: `${serviceDetail}`,
      time: `${time}`

    }

    fetch('https://photography-web-server.vercel.app/services', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('photo-token')}`
      },
      body: JSON.stringify(servicePost)
    })
      .then(res => res.json())
      .then(data => {
        setAddServices(data)

        toast.success('Service Add Success', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        form.reset()
      })
      .catch(error => console.error(error))


  }

  return (
    <div className='container'>

      <h5 className='text-center mt-3'>Add Your Service</h5>

      <div className='container mt-4 mb-5'>

        <form className='' onSubmit={handlerAddService}>

          <div class="mb-3">

            <label for="exampleFormControlInput1" class="form-label">Service PhotoURL</label>
            <input type="text" class="form-control" name='serviceImage' id="exampleFormControlInput1" placeholder="Img URL" />

          </div>

          <div class="mb-3">

            <label for="exampleFormControlInput1" class="form-label">Service Name</label>
            <input type="text" class="form-control" name='serviceName' id="exampleFormControlInput1" placeholder="Service Name" />

          </div>

          <div class="mb-3">

            <label for="exampleFormControlInput1" class="form-label">Service Price</label>

            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Price" name='price' />

          </div>

          <div class="mb-3">

            <label for="exampleFormControlInput1" class="form-label">Service Rating</label>

            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Rating" name='rating' />

          </div>

          <div class="mb-3">

            <label for="exampleFormControlTextarea1" class="form-label">Service details</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" name='serviceDetail' rows="3" />

            <div className='text-center mt-3'>

              <button type='submit' className='btn btn-dark w-50'>Add Service</button>

            </div>

          </div>

        </form>

      </div>
      <ToastContainer />

    </div>
  );
};

export default AddService;