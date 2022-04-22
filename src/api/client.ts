import axios from "axios";

export const client = axios.create({
    baseURL: "http://localhost:8080",
    xsrfCookieName: "csrftoken",
    xsrfHeaderName: "X-CSRFToken",
});
