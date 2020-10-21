import axios from "axios";

export default {
  // Gets the user with the given id
  getUserId: function(id) {
    return axios.get("/api/user/" + id);
  },
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
  //Update user profile settings
  userUpdate: function(id, userData){
    return axios.put("/api/user/" + id, userData);
  },
  createTask: function(taskData) {
    return axios.post("/api/task/create", taskData);
  },
  getTasks: function() {
    return axios.get("/api/task");
  },
  acceptTasks: function(id) {
    return axios.put("/api/task/" + id);
  }
};
