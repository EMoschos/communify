import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Nav from "./components/Nav";
import API from "./utils/API"
// import Router from "./routes/Router"
import UserContext from "./utils/UserContext"
import TaskContext from "./utils/TaskContext"
import FuncContext from "./utils/FuncContext"
import Home from "./pages/Home";
import Account from "./pages/Account";
import NoMatch from "./pages/NoMatch";
import SignUpForm from "./components/SignUpForm"
import Login from "./components/Login"
import Auth from "./routes/Auth"
import Footer from "./components/Footer";

function App() {

  const [user, setUser] = useState({})
  const [contextTasks, setContextTasks] = useState([])

  const updateContextTasks = () => {
    const id = user._id
    API.getTasks().then((res) => {
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
          <div>
            <Router>
            <Nav />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/signup" component={SignUpForm} />
                <PrivateRoute exact path="/account" component={Account} />
                <Route exact path="/login" component={Login} />
                <Route path="*" component={NoMatch} />
              </Switch>
              <Footer/>
            </Router>
          </div>
        </FuncContext.Provider>
      </TaskContext.Provider>
    </UserContext.Provider>

  );
}
function PrivateRoute({ component: Component, ...rest }) {

  return (
      <Route
          {...rest}
          render={props =>
              Auth.isUserAuthenticated() ? (
                  <Component {...props} />
              ) : (
                      <Redirect
                          to={{
                              pathname: "/login"
                          }}
                      />
                  )
          }
      />
  );
}

export default App;
