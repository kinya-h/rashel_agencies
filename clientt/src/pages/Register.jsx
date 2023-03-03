import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { getAccessToken } from "../utils/getAccessToken";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import URLSearchParams from "url-search-params";
import { ReactSpinner } from "react-spinning-wheel";
import "react-spinning-wheel/dist/style.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [signUpError, setSignUpError] = useState("");
  const { axiosInstance } = useContext(UserContext);
  const navigate = useNavigate();

  const API_URL = "https://rashel-production.up.railway.app";

  const { referrer, setReferrer, registerReferral } = useContext(UserContext);

  useEffect(() => {
    const searchParams = new URLSearchParams(document.location.search);

    const referrerd_by = searchParams.get("invitedby");
    setReferrer(referrerd_by);
  }, [setReferrer]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Usage of registerUser function
    const newUser = {
      username: username,
      email: email,
      password: password,
    };
    setLoading(true);
    try {
      const response = await registerUser(username, email, password, phone);
    } catch (error) {
      setLoading(false);
      if (error.response.status === 400) {
        setSignUpError("The password is too similar to the username.");
      } else {
        setSignUpError("Registration failed");
      }
    }
  };

  const registerUser = async (username, email, password, phone) => {
    try {
      const response = await axios.post(`${API_URL}/auth/users/`, {
        username,
        email,
        password,
      });

      const access = await getAccessToken(username, password); //Authenticate and get Access token and save it on the client
      console.log("my access token = ", access);

      if (referrer !== null) {
        registerReferral(referrer);
      }
      //get the user via the access token

      const user_data = await axiosInstance
        .get("https://rashel-production.up.railway.app/auth/users/")
        .then((response) => {
          console.log("User ===> ", response);
          // Register user as a customer on successful response
          const customerResponse = axiosInstance
            .put(`${API_URL}/api/customers/me/`, {
              id: response.data.id,
              phone,
              email,
            })
            .then((res) => {
              if (res.status === 200) {
                navigate("/login");
              }
            });

          console.log("customerResponse", customerResponse);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
      console.log("user data", user_data);

      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <div className="flex items-center mt-5 justify-center h-screen bg-gray-100">
      <div className="w-full max-w-sm">
        <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-2">
          <h3 className="mb-4 text-3xl font-extrabold text-gray-900 text-center">
            Sign up for an account
          </h3>
          {loading ? <ReactSpinner size={50} color="#686769" /> : ""}
          <h5 className="text-red-500"> {signUpError} </h5>
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="mb-2">
              <label
                htmlFor="username"
                className="block text-gray-700 font-bold mb-2"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="email-address"
                className="block text-gray-700 font-bold mb-2"
              >
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="phone"
                autoComplete="phone"
                required
                className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Phone Number"
                value={phone}
                onChange={handlePhoneChange}
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  alredy signed up Login?
                </a>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
