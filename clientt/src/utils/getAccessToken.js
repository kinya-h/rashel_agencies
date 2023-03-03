import axios from "axios";

export async function getAccessToken(username, password) {
  console.log("getAccess Token called!");
  try {
    const response = await axios.post("auth/jwt/create", {
      username: username,
      password: password,
    });

    // Store the JWT token in local storage or cookies.
    localStorage.setItem("access", response.data.access);
    localStorage.setItem("refresh", response.data.refresh);
    console.log("ACCESS TOKEN = ", response.data.access);
    return response;
  } catch (error) {
    console.error(error);
  }
}
