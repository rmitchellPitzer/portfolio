import './css/App.css';
import './css/titles.css';
import './css/index.css';
import './css/icons.css';
import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Bubbles from "./animatedComponents/bubblesBackground";
import Description from "./animatedComponents/Description";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFileCsv } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Typist from 'react-typist';
import FrontPageIcons from "./components/FrontPageIcons";
import AboutMe from "./components/AboutMe";
import RecentProjects from "./components/RecentProjects";

// import Aos from "aos";
// import "aos/dist/aos.css";



function App() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", null);

        return () => window.removeEventListener("scroll", handleScroll)
    }, []);

  return (
      <div className="appContents">
          <div className="FirstPage" style={{transform: 'translateY(${ offsetY * 20}px)'}}>
          <Bubbles style={{transform: 'translateY(${ offsetY * 0.5}px)'}}/>
          <div className="myName" >Ryder Mitchell</div>
          <Description/>
          <FrontPageIcons/>
          </div>
          <div className="SecondPage">
          <AboutMe/>
              <div className="ThirdPage">
                  <RecentProjects/>
              </div>
          </div>
      </div>
  );
}

export default App;
