import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googlePng from "../../assets/image/google.png";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";

const SignIn = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
   
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Login Successfully");
        form.reset();
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const handleGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login Successfully");
        const role = "User";
        saveUser(user?.email, user?.displayName, role);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const saveUser = (email, name, role) => {
    const user = { email, name, role };
    fetch(`http://localhost:5000/user/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="flex max-w-md p-4 rounded-md border-2 shadow-md mx-auto mb-5 shadow-2xl ">
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
          <div className="w-full">
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
            You have no account?
            <Link to="/signUp" className="hover:underline ">
              Sign Up
            </Link>
            .
          </p>
        </div>
        <div
          onClick={handleGoogle}
          className="flex gap-2 justify-center items-center border-gray-300 shadow-md shadow-black border-2 p-2 my-3 "
        >
          <img className="w-5 h-5" src={googlePng} alt="" />
          <h2 className="text-xl">Google Login</h2>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
