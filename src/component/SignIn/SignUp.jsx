import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";
import useAccessToken from "../../hooks/useAccessToken";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [token] = useAccessToken(userEmail);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const role = form.loginAs.value;

    createUser(email, password)
      .then((reult) => {
        const user = reult.user;
        console.log(user);
        updateUserProfile(name)
          .then(() => {
            console.log(user);
            toast.success("SignUp Success");
            form.reset();
            saveUserToDB(email, name, role);
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, navigate]);


  const saveUserToDB = (email, name, role) => {
    const user = { email, name, role };
    fetch(`https://laptop-lab-server.vercel.app/user/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserEmail(email);
      });
  };

  return (
    <div className="flex max-w-md p-4 rounded-md border-2 shadow-2xl mx-auto mb-5">
      <form onSubmit={handleSubmit} className="space-y-2 mx-auto">
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
          <div>
            <label htmlFor="loginAs" className="text-sm">
              SignUp As
            </label>
            <select
              name="loginAs"
              className="select select-sm select-bordered max-w-x w-full px-3 rounded-sm bg-white max-w-xs my-1"
              required
            >
              <option>User</option>
              <option>Seller</option>
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
