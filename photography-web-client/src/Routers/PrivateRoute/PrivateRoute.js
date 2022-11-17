import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Spiner from '../../Sheard/Spiner/Spiner';

const PrivateRoute = ({children}) => {
   
  let {user, loading} = useContext(AuthContext)

  let location = useLocation()
  if(loading){
    return <Spiner/>
  }


  if(user){

    return children;
    
  }
  
  return <Navigate to='/login' state={{from: location}} replace></Navigate>
   


  
  
};

export default PrivateRoute;