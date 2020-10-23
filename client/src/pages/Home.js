import React from "react";
import TaskBoard from "../components/TaskBoard";
import { Slide, Slider, Caption, Parallax } from 'react-materialize';
import "./style.css";

function Home() {

  return (
    <>
      <div className="section">
        <Slider
          fullscreen={false}
          options={{
            duration: 500,
            height: 400,
            indicators: true,
            interval: 6000
          }}
        >
          <Slide image={<img alt="" src="./img/volunt1.png" />}>
            <Caption placement="left" className="z-depth-4">
              <h3 className="light grey-text text-lighten-3 rightFont">
                COMMUNIFYING THE POEPLE!
                </h3>
              <h5 className="light grey-text text-lighten-3 rightFont">
                Bringing people together through action!
                </h5>
            </Caption>
          </Slide>
          <Slide image={<img alt="" src="./img/volunt2.jpg" />}>
            <Caption placement="right" className="z-depth-4">
              <h1 className="light  light-green-text accent-3 amaticFont">
                Complete Tasks and Rise the ranks!
                </h1>
              <h3 className="light purple-text text-darken-3 amaticFont">
                Be a Local Legend!
                </h3>
            </Caption>
          </Slide>
          <Slide image={<img alt="" src="./img/volunt4.jpg" />}>
            <Caption placement="center" className="z-depth-4">
              <h1 className="light grey-text text-darken-3 amaticFont">
                Start Your Community Quest Today!
                    </h1>
              <h4 className="light red-text text-darken-3 rightFont">
                Click The Button Below!
                    </h4>
            </Caption>
          </Slide>
        </Slider>
      </div>

      <div>
        <Parallax
          image={<img alt="" src="./img/Volunteer-Hands.jpg" />}
          options={{
            responsiveThreshold: 0
          }}
        ><div class="container">
              <h1 class="header center black-text luckyFont">Communify</h1>
            <div class="row center">
              <a href="/signup" id="download-button" class="btn-large waves-effect waves-light red z-depth-4">SIGN UP TO COMMUNIFY</a>
            </div>
          </div>
        </Parallax>
        <div className="section white">
          <div className="card-panel">
            <h3 className="center-align black-text bungeeFont">TASKBOARD</h3>
            <TaskBoard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
