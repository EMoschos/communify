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
    const id = user._id
    console.log(id)
    API.getTasks().then((res) => {
      console.log("Get All Updated Context Tasks");
      console.log(res.data);
      setContextTasks(res.data);
    });
    getUser();
    // API.getUser(id).then(res => {
    //   console.log("update user context");
    //   console.log(res.data);
    //   setUser(res.data)
    // })
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

    <BrowserRouter>
      <UserContext.Provider value={user}>
        <TaskContext.Provider value={contextTasks}>
          <FuncContext.Provider value={updateContextTasks}>
            <div>
              <Nav />
              {/* <button className="btn waves-effect waves-light" type="submit" name="action" onClick={getUser}>Get User
          <i className="material-icons right">send</i>
          </button>
          <div>
            {
              user ? (<h1>Hi @ {user.firstName} </h1>) : (null)
            }
          </div> */}
              <Router />
            </div>
          </FuncContext.Provider>
        </TaskContext.Provider>
      </UserContext.Provider>
    </BrowserRouter >

  );
}

export default App;
