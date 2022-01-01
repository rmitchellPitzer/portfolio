import './css/App.css';
import './css/titles.css';
import './css/index.css';
import './css/icons.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Bubbles from "./animatedComponents/bubblesBackground";
import Description from "./animatedComponents/Description";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFileCsv } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Typist from 'react-typist';
import FrontPageIcons from "./components/FrontPageIcons";
import AboutMe from "./components/AboutMe";

// import Aos from "aos";
// import "aos/dist/aos.css";



function App() {
  return (
      <div className="appContents">
          <div className="FirstPage">
          <Bubbles/>
          <div className="myName">Ryder Mitchell</div>
          <Description/>
          <FrontPageIcons/></div>
          <div className="SecondPage">
          <AboutMe/>
          </div>
      </div>
  );
}

export default App;
