import React from "react";
import M from 'materialize-css'
import CreateTask from "../components/TaskCreate"
import TaskBoard from "../components/TaskBoard";

const Home = () => {
  return (
    <>
      <div className="parallax-container valign-wrapper">
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row center">
            </div>
          </div>
        </div>
        <div className="parallax"><img src="./img/handbg.jpg" alt="Unsplashed background img 2" /></div>
      </div>
      <div className="container">
        <div className="section">
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
        </div>
      </div>
      <div className="parallax-container valign-wrapper">
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row center">
            </div>
          </div>
        </div>
        <div className="parallax"><img src="./img/handbg.jpg" alt="Unsplashed background img 2" /></div>
      </div>
      <div className="card-panel">
        <h3 className="center-align blue text-white">TASKBOARD</h3>
        <TaskBoard />
      </div>
      <div id="modal1" className="modal">
        <div className="modal-content">
          <CreateTask />
        </div>
      </div>
    </>
  );
};

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.slider');
  M.Slider.init(elems);
  var elems1 = document.querySelectorAll('.modal');
  M.Modal.init(elems1);
  var elems2 = document.querySelectorAll('.parallax');
  M.Parallax.init(elems2);
});

export default Home;
