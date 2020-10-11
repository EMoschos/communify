import axios from "axios";

export default {
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Saves a User to the database
  signUp: function(userData) {
    return axios.post("/api/user/signup", userData);
  },
  logOut: function() {
    return axios.get("/api/user/logout");
  },
  login: function(userData) {
    return axios.post("/api/user/login", userData);
  }
};
