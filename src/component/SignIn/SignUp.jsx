import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {
  const { createUser, updateUserProfile} = useContext(AuthContext);

  const handleSubmit = event => {
     event.preventDefault()
     const form = event.target;
     const email = form.email.value;
     const name = form.name.value;
     const password = form.password.value;
    //  console.log(email,name,password);
  
    createUser(email,password)
    .then(reult => {
      const user = reult.user;
      console.log(user);
      updateUserProfile(name)
      .then(() => {       
        console.log(user);
        toast.success('SignUp Success')
      })
      .then(error => console.log(error.message))
    })
    .then(err => {
      console.log(err);
    })

  }


  return (
    <div className="flex max-w-md p-2 rounded-md border-2 shadow-md mx-auto mb-3">
    <form onSubmit={handleSubmit}  className="space-y-2 mx-auto" >
      <h1 className="my-1 text-center text-3xl font-bold">Sign Up</h1>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full px-3 py-2 border-b-2 rounded-sm "
            required
           />
        </div>
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
          Already Have An Account? 
          <Link to="/signIn" className="hover:underline ">
            Sign in
          </Link>
        </p>
      </div>
    </form>
  </div>

  );
};

export default SignUp;