import React, { useContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import UseTitle from '../Title/Title';
import MyReviewCard from './MyReviewCard';


const MyReview = () => {

  UseTitle("My Review")

  const { user } = useContext(AuthContext);

  const [userEmails, setUserEmails] = useState([]);

  useEffect(() => {
    fetch(`https://photography-web-server.vercel.app/myreview/${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('photo-token')}`
      }

    })
      .then(res => res.json())
      .then(data => {
        setUserEmails(data)

      })
      .catch(error => console.log(error))

  }, [userEmails]);



  let handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete this review");
    if (proceed) {
      fetch(`https://photography-web-server.vercel.app/myreview/${id}`, {

        method: 'DELETE',

        headers: {
          authorization: `Bearer ${localStorage.getItem('photo-token')}`
        }

      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {

            toast.success('Delete Your Post', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",

            });

            let remaining = userEmails.filter(email => email._id !== id);
            setUserEmails(remaining);

          }
        })
    }
  }



  return (


    <div className='container'>

      <h3 className='text-center mt-2'>There have my review</h3>

      <div className='container mt-5 mb-4'>

        <div className='row '>

          {
            userEmails?.map(userEmail => <MyReviewCard key={userEmail._id}
              userEmail={userEmail}
              handleDelete={handleDelete}
            ></MyReviewCard>)
          }

          <ToastContainer />

        </div>

      </div>
    </div>


  );

};

export default MyReview;