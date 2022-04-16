import axios from "axios";
import jwt_decode from "jwt-decode";

const client = axios.create({
  baseURL: "https://localhost:8080",
  xsrfCookieName: "csrftoken",
  xsrfHeaderName: "X-CSRFToken",
});


export default client;
