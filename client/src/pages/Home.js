import React from "react";
import M from 'materialize-css'
import CreateTask from "../components/TaskCreate"
import TaskBoard from "../components/TaskBoard";

const Home = () => {
  return (
    <div className="container">
      <div className="slider">
        <ul className="slides">
          <li>
            <img src="./img/volunt1.png" alt="Volunteer" />
            <div className="caption center-align">
              <h3>This is our big Tagline!</h3>
              <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
            </div>
          </li>
          <li>
            <img src="./img/volunt2.jpg" alt="Volunteers" />
            <div className="caption left-align">
              <h3>Left Aligned Caption</h3>
              <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
            </div>
          </li>
          <li>
            <img src="./img/volunt3.jpg" alt="Volunteer" />
            <div className="caption right-align">
              <h3>Right Aligned Caption</h3>
              <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
            </div>
          </li>
          <li>
            <img src="./img/volunt4.jpg" alt="Volunteer" />
            <div className="caption center-align">
              <h3>This is our big Tagline!</h3>
              <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
            </div>
          </li>
        </ul>
      </div>
      <div className="section">
        <div className="row">
          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
              <h5 className="center">Speeds up development</h5>
              <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center brown-text"><i className="material-icons">group</i></h2>
              <h5 className="center">User Experience Focused</h5>
              <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
              <h5 className="center">Easy to work with</h5>
              <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <TaskBoard/>
      </div>
      <div id="modal1" className="modal">
        <div className="modal-content">
          <CreateTask />
        </div>
      </div>
    </div >
  );
};

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.slider');
  M.Slider.init(elems);
  var elems1 = document.querySelectorAll('.modal');
 M.Modal.init(elems1);
});

export default Home;
