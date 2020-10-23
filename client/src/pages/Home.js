import React from "react";
import TaskBoard from "../components/TaskBoard";
import { Slide, Slider, Caption, Parallax } from 'react-materialize';
import "./style.css";

function Home() {

  return (
    <>
    <div className="container">
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
                  <Caption placement="center">
                    <h3 className="light grey-text text-darken-3 z-depth-4">
                      This is our big Tagline!
                </h3>
                    <h5 className="light grey-text text-lighten-3">
                      Here's our small slogan.
                </h5>
                  </Caption>
                </Slide>
                <Slide image={<img alt="" src="./img/volunt2.jpg" />}>
                  <Caption placement="left" className="z-depth-4">
                    <h3 className="light black-text amaticFont">
                      Left Aligned Caption
                </h3>
                    <h5 className="light grey-text text-lighten-3">
                      Here's our small slogan.
                </h5>
                  </Caption>
                </Slide>
                <Slide image={<img alt="" src="./img/volunt3.jpg" />}>
                  <Caption placement="right">
                    <h3 className="light grey-text text-darken-3 amaticFont z-depth-4">
                      Right Aligned Caption
                    </h3>
                    <h5 className="light grey-text text-lighten-3 z-depth-4">
                      Here's our small slogan.
                    </h5>
                  </Caption>
                </Slide>
                <Slide image={<img alt="" src="./img/volunt4.jpg" />}>
                  <Caption placement="center">
                    <h3 className="light grey-text text-darken-3 amaticFont">
                      This is our big Tagline!
                    </h3>
                    <h5 className="light grey-text text-darken-3 rightFont">
                      Here's our small slogan.
                    </h5>
                  </Caption>
                </Slide>
              </Slider>
            </div>
          </div>
      <div>
        <Parallax
          image={<img alt="" src="./img/handbg.jpg" />}
          options={{
            responsiveThreshold: 0
          }}
        />
        <div className="section white">
          <div className="card-panel">
            <h3 className="center-align black-text bungeeFont">TASKBOARD</h3>
            <TaskBoard />
          </div>
        </div>
        <Parallax
          image={<img alt="" src="./img/handbg.jpg" />}
          options={{
            responsiveThreshold: 0
          }}
        />
      </div>
      <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
    </>
  );
};

export default Home;
