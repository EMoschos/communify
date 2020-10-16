import axios from "axios";

export default {
  // Gets the user with the given id
  getUser: function() {
    return axios.get("/api/user/getUser");
  },
  // Saves a User to the database
  signUp: function(userData) {
    return axios.post("/api/user/signup", userData);
  },
  // Login a User
  login: function(userData) {
    return axios.post("/api/user/login", userData);
  },
  // Logout a User
  logOut: function() {
    return axios.get("/api/user/logout");
  },
  taskCreate: function(taskData) {
    return axios.post("/api/task/create", taskData);
  },
  getTasks: function() {
    return axios.get("/api/task");
  },
};
