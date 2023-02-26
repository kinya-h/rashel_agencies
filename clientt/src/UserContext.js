import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext();

export const UserProvider = (props) => {
  const [access, setAccess] = useState(() =>
    localStorage.getItem("access") ? localStorage.getItem("access") : null
  );
  const [refresh, setRefresh] = useState(() =>
    localStorage.getItem("refresh") ? localStorage.getItem("refresh") : null
  );
  const [loading, setLoading] = useState(true);
  const [username, setUserName] = useState("");

  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    console.log("loginUser  called!");
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/jwt/create",
        {
          username: e.target.username.value,
          password: e.target.password.value,
        }
      );

      if (response.status === 200) {
        // Store the JWT token in local storage or cookies.
        localStorage.setItem("access", response.data.access);
        localStorage.setItem("refresh", response.data.refresh);
        setAccess(response.data.access);
        setRefresh(response.data.refresh);
        console.log(response.data.access);
        console.log("refresh::", response.data.refresh);

        // navigate("/");
      }

      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const refreshToken = async () => {
    console.log("refresh Token called!");
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/jwt/refresh",
        {
          refresh: localStorage.getItem("refresh"),
        }
      );

      if (response.status === 200) {
        // Store the JWT token in local storage or cookies.
        localStorage.setItem("access", response.data.access);
        setAccess(response.data.access);
        setRefresh(response.data.refresh);
      }
      if (response.status === 401) {
        logoutUser();
      }
      if (loading) {
        setLoading(false);
      }
      return response;
    } catch (error) {
      console.error(error);
      logoutUser();
    }
  };

  useEffect(() => {
    if (loading) {
      if (access) {
        refreshToken();
      } else {
        console.log("No token");
      }
    }

    let fourMinutes = 1000 * 60 * 4;

    let interval = setInterval(() => {
      console.log("use Effect called");
      if (access && refresh) {
        refreshToken();
      }
    }, fourMinutes);
    return () => clearInterval(interval);
  }, [access, refresh, refreshToken, loading]);

  const logoutUser = () => {
    setAccess(null);
    setRefresh(null);
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/login");
  };

  const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:5000",
    headers: {
      Authorization: `JWT ${access}`,
    },
  });

  const getBalance = async () => {
    try {
      const response = await axiosInstance.get("/api/wallets/me");

      if (response.status === 200) {
        // navigate("/");
        // setUserName(response.data.)
      }

      return response;
    } catch (error) {
      console.error(error);
    }
  };
  const updateBalance = async () => {
    try {
      const response = await axiosInstance.post("/api/wallets/me");

      if (response.status === 200) {
        // navigate("/");
      }

      return response;
    } catch (error) {
      console.error(error);
    }
  };
  const getUser = async () => {
    try {
      const response = await axiosInstance.get("/auth/users/me");

      if (response.status === 200) {
        // navigate("/");
        setUserName(response.data.username);
      }

      return response;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        loginUser,
        logoutUser,
        access,
        refresh,
        axiosInstance,
        getBalance,
        updateBalance,
        refreshToken,
        getUser,
        username,
      }}
    >
      {/* {loading ? false : props.children} */}
      {props.children}
    </UserContext.Provider>
  );
};
