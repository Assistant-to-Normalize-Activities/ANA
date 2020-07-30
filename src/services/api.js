import axios from "axios";
// Here, axios call the api data by baseURl, that is the api url
const api = axios.create({
  baseURL: "http://backend-ana.us-south.cf.appdomain.cloud",
});

export default api;
