import React, { useState } from "react";
import {BrowserRouter} from "react-router-dom";
import Nav from "./components/Nav";
import API from "./utils/API"
import Router from "./routes/Router"

function App() {
  const [user, setUser] = useState({
  })

  const getUser = () => {
    API.getUser().then(res => {
      console.log(res.data);
      setUser(res.data)
    })
  }

  return (
    <BrowserRouter>
      <div>
        <Nav />
        <button className="btn waves-effect waves-light" type="submit" name="action" onClick={getUser}>Get User
          <i className="material-icons right">send</i>
        </button>
        <div>
          {
            user ? (<h1>Hi @ {user.email} </h1>) : (null)
          }
        </div>
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
