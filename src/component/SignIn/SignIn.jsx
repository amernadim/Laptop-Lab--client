import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import googlePng from "../../assets/image/google.png"
import { AuthContext } from "../../context/AuthProvider";
import toast from 'react-hot-toast';

const SignIn = () => {
  const {signIn, signInWithGoogle} = useContext(AuthContext);
  const navigate = useNavigate()

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const loginAs = form.loginAs.value;
    // console.log(email,loginAs,password);

    signIn(email,password)
    .then(result => {
      const user = result.user;
      toast.success('Login Successfully');
      navigate('/')
      console.log(user);
    })
    .catch(error => console.log(error))
 
 }

 const handleGoogle = () => {
  signInWithGoogle()
  .then(result => {
    const user = result.user;
    console.log(user);
    toast.success('Login Successfully');
    navigate('/')
  })
  .catch(error => {
    console.log(error);
  })
 }



  return (
    <div className="flex max-w-md p-2 rounded-md border-2 shadow-md mx-auto mb-3">
      <form onSubmit={handleSubmit} className="space-y-2 mx-auto">
        <h1 className="my-1 text-center text-3xl font-bold">Sign In</h1>
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-3 py-2 rounded-sm "
              required
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
            </div>
            <input
              type="password"
              name="password"
              placeholder="*****"
              className="w-full px-3 py-2 rounded-sm "
              required
            />
          </div>
          <div>
            <label htmlFor="loginAs" className="text-sm">
              Login As a
            </label>
            <select name="loginAs" className="select select-sm select-bordered max-w-x w-full px-3 rounded-sm bg-white max-w-xs my-1" required>
              <option >User</option>
              <option >Seller</option>
            </select>
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="btn btn-md rounded-sm w-full px-8 py-3 font-semibold  text-white"
            >
              Sign up
            </button>
          </div>
          <p className="px-6 text-sm text-center">
            You have no account?
            <Link to="/signUp" className="hover:underline ">
              Sign Up
            </Link>
            .
          </p>
        </div>
             <div onClick={handleGoogle} className="flex gap-2 justify-center items-center border-black border-2 p-2 my-3 ">
               <img className="w-5 h-5" src={googlePng} alt="" />
               <h2 className="text-xl">Google Login</h2>
             </div>
      </form>

      
    </div>
  );
};

export default SignIn;
