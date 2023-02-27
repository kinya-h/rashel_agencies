import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { Navigate, useNavigate } from "react-router-dom";

import axios from "axios";
import { getAccessToken } from "../utils/getAccessToken";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    // event.preventDefault();

    //     try {
    //       const response = await fetch("http://localhost:5000/api/login/", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //           username: username,
    //           password: password,
    //         }),
    //       });
    //       const data = await response.json();
    //       if (data.authenticated) {
    //         // User is authenticated
    //         console.log("User authenticated");
    //       } else {
    //         // Authentication failed
    //         console.log("Authentication failed");
    //       }
    //     } catch (error) {
    //       console.error("Error occurred while authenticating user: ", error);
    //     }

    //   try {
    //     const response = await axios.post(
    //       "http://localhost:5000/auth/jwt/create",
    //       {
    //         username: username,
    //         password: password,
    //       }
    //     );

    //     // Store the JWT token in local storage or cookies.
    //     localStorage.setItem("token", response.data.access);
    //     console.log(response.data.access);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    // const res = await getAccessToken(username, password);
    // if (typeof res !== "undefined") {
    //   // Usage of fetchUserData function
    //   const accessToken = res.data.access;
    //   console.log("access access = ", accessToken);

    //   instance
    //     .get("/auth/users/")
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });

    // api.get("http://localhost:5000/auth/users/").then((response) => {
    //   console.log(response.data);
    // });

    // fetchUserData(accessToken)
    //   .then((userData) => {
    //     console.log("UserData = ", userData);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    const response = await loginUser(e);
    if (response.status === 200) {
      navigate("/");
    }
  };
  // };

  // Function to fetch user data from Django endpoint
  async function fetchUserData(accessToken) {
    console.log("ACESS TOKEN = ", accessToken);
    axios
      .post(
        "http://localhost:5000/api/customers/",

        {
          headers: {
            Authorization: `JWT ${accessToken}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-sm">
        <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 text-center">
            Sign in to your account
          </h2>
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="mb-4">
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
            <div className="mb-6">
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
            <div className="flex items-center justify-between mb-6">
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
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
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

export default Login;
