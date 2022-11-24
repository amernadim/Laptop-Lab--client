import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword,getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  
    //Create User
    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
    }
      //update Profile
    const updateUserProfile = (name) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
      })
    }

    //Login 
   const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
   }

     //Google Signin
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }


  const authInfo = {
    user,
    createUser,
    updateUserProfile,
    signIn,
    signInWithGoogle
    
  }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;