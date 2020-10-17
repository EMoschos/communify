import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import API from "./utils/API"
import Router from "./routes/Router"
import UserContext from "./utils/UserContext"
import TaskContext from "./utils/TaskContext"
import FuncContext from "./utils/FuncContext"

function App() {

  const [user, setUser] = useState({})
  const [contextTasks, setContextTasks] = useState([])

  const updateContextTasks = () => {
    API.getTasks().then((res) => {
      console.log("Get All Updated Context Tasks");
      console.log(res.data);
      setContextTasks(res.data);
    });
  }

  const getUser = () => {
    API.getUser().then(res => {
      console.log(res.data);
      setUser(res.data)
    })
  }

  useEffect(() => {
    getUser()
    updateContextTasks()
  }, []);



  return (
    <UserContext.Provider value={user}>
      <TaskContext.Provider value={contextTasks}>
        <FuncContext.Provider value={updateContextTasks}>
          <BrowserRouter>
            <div>
              <Nav />
              {/* <button className="btn waves-effect waves-light" type="submit" name="action" onClick={getUser}>Get User
          <i className="material-icons right">send</i>
          </button>
          <div>
            {
              user ? (<h1>Hi @ {user.email} </h1>) : (null)
            }
          </div> */}
              <Router />
            </div>
          </BrowserRouter>
        </FuncContext.Provider>
      </TaskContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
