import React, { createContext, useEffect, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut, updateProfile} from 'firebase/auth'
import app from '../../Firebase/firebase.config';


export let AuthContext = createContext()
 
let auth = getAuth(app)


const AuthProvider = ({children}) => {

  let [user, setUser] = useState(null)
  let [loading, setLoding] = useState(true)

  let providerLogin = (provider) => {
      setLoding(true)
     return signInWithPopup(auth, provider)

  }

  let singUp = (email, password) => {
    setLoding(true)
    return createUserWithEmailAndPassword(auth, email, password)

  }

  let signIn = (email, password) => {
    setLoding(true)
    return signInWithEmailAndPassword( auth, email, password )

  }


  let logOut = () => {
    setLoding(true)
    return signOut(auth)

  }


  let setNamePhotoProfile = (profile) => {
     
   return updateProfile(auth.currentUser, profile)

  }


  useEffect(() => {
    
    onAuthStateChanged(auth, (currentUser) => {
       
      setUser(currentUser)
      setLoding(false)
    })   

  },[]) 


  let authInfo = {

    user,
    loading, 
    singUp, 
    signIn, 
    providerLogin, 
    logOut, 
    setNamePhotoProfile

  }


  return (
    <div>
        
         <AuthContext.Provider value={authInfo}>

              {children}

         </AuthContext.Provider>    
        
    </div>
  );
};

export default AuthProvider;