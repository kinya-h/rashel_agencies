import axios from "axios";

export async function getAccessToken(username, password) {
  console.log("getAccess Token called!");
  let url = "https://rashel-production.up.railway.app";
  // let baseUrl = window.location.protocol + "//" + window.location.host;
  const baseURL = 'http://localhost:5000';

  try {
    const response = await axios.post(`${baseURL}/auth/jwt/create`, {
      username: username,
      password: password,
    });

    // Store the JWT token in local storage or cookies.
    localStorage.setItem("access", response.data.access);
    localStorage.setItem("refresh", response.data.refresh);
    console.log("ACCESS TOKEN => ", response.data.access);
    return response;
  } catch (error) {
    console.error(error);
  }
}
