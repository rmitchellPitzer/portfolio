import Page1 from "./pages/page1/Page1";
import Page2 from "./pages/page2/Page2";
import Page3 from "./pages/page3/Page3";
import Page4 from "./pages/page4/Page4";
import WorkPage from "./pages/workPage/WorkPage";
import { useState, useEffect } from 'react';
import { BrowserRouter,
  Routes,
  Route, } from "react-router-dom";
import BraidLogo from './media/braidLogo.svg'
import braid1 from "./media/braid1.jpg"
import braid2 from "./media/braid2.jpg"
import braid3 from "./media/braid3.jpg"
import hmc from "./media/Harvey_Mudd_College_logo 1.svg"
import tutor1 from "./media/grutoring1.jpg"
import tutor2 from "./media/greg.jpg"
import tutor3 from "./media/CS.jpg"
import beelab1 from "./media/7_25 Update.jpg"
import beelab2 from "./media/flowers.jpg"
import beelab3 from "./media/image3.jpg"
import { useLocation } from "react-router-dom";


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function App() {
  const { height, width } = useWindowDimensions();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="flex flex-col overflow:overlay">
                {/* <div className="flex flex-col [overflow:overlay]"> */}

          <Page1 pageWidth = {[width, height]}/>
          <Page2/>
          <Page3 pageDimensions = {[width, height]}/>

          <Page4 pageWidth = {[width, height]}/>
          {/* <Page4/> */}
          </div>}>
        </Route>
        <Route path="Braid" element={<WorkPage rotate = {true} rounded =  {true} width = {width} height = {height} company = "Braid" title = "Software Engineer Intern" dates = "June 2022 - August 2022" 
        description = "At Braid I honed my skills in frontend and full stack development. I worked in a team to build pages for a new feature being developed, implemented feature flags to test the feature, and made UI improvements across the frontend. This involved working on a React native and React Native for Web frontend and a Java and GraphQL backend. This feature helped increase revenue from an increase in ODFI and RDFI transactions."
        images = {[BraidLogo, braid1, braid2, braid3]} skills = {["Built pages for mobile and desktop frontends in React Native.", "Used GraphQL to implement queries required for a new feature being developed.", "Created and used Feature Flags to test and develop new features.", "Worked with a design system to develop pages consistent with the application’s aesthetic.", "Collaborated with team members using SCRUM.", "Received and gave feedback to team members in the form of pull requests.", "Developed in a typed Javascript environment.", "Fixed various bugs present in the application’s frontend components."]}/>} />
        <Route path="Tutor" element={<WorkPage rotate = {false} rounded =  {false} width = {width} height = {height} company = "Harvey Mudd College" title = "Computer Science Tutor" dates = "September 2022 - Present" 
        description = "I’m very passionate for teaching others in Computer Science and have thoroughly enjoyed working with others as a CS tutor. This fall semester I will be tutoring for two courses; A newly developed course to teach technical and professional skills for working in the industry, and helping the HMC Clinic Program. Currently I am working with other students to develop a tool to be used by professors to generate feedback for students." 
        images = {[hmc, tutor1, tutor2, tutor3]} skills ={["Worked in a team to collaborate and efficiently grade over 60 student assignments weekly." , "Assisted students studying for exams and quizzes by answering questions related to programming paradigms in Python and Java.",  "Gave students guidance as they completed assignments bi-weekly in Python, Java, and Racket.", "Contributed to professor and tutor discussions on how best to teach material.", "Assisted the HMC Clinic program by developing a tool to automate the production of PDF reports for group submissions using Python, CSV, and Py2PDF."]}/>} />
        
        <Route path="Researcher" element={ <WorkPage rotate = {false} rounded =  {false} width = {width} height = {height} company = "Harvey Mudd College" title = "Computer Vision Undergraduate Researcher" dates = "May 2023 - July 2023" 
        description = "At Harvey Mudd College I continued to pursue my passions in environmentalism. I worked in the HMC Bee Lab over the summer to improve semantic segmentation model performance on plant segments to measure floral resources available to bees using machine learning. My findings will be presented on September 21 at the Summer Research Poster Celebration at Harvey Mudd College." 
        images = {[hmc, beelab1, beelab2, beelab3]} skills ={["Reviewed documentation and work done by team members", "Collaborated with other researchers to review and understand relevant text", "Improved model performance primarily by testing and using different loss functions", "Created scripts and tools for a variety of tasks including visualizing memory usage, augmenting datasets, measuring class imbalance, and fixing problems in the color space of binary masks used in training", "Created documentation for a new computer to be used by Bee Lab researchers and helped troubleshoot problems in Windows Subsystem for Linux", "Created weekly reports and gave presentations on progress", "Presented my work to researchers and faculty at the CS open house."]}/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
