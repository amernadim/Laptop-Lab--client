import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword,getAuth, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  
    // Create User
    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
      })
    }


  const authInfo = {
    user,
    createUser,
    updateUserProfile
  }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;