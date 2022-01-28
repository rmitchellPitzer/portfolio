import "../css/RecentProjects.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faJsSquare, faPython, faReact} from "@fortawesome/free-brands-svg-icons";

import outersounds1 from "../media/outersounds/outersounds1.png"
import outersounds2 from "../media/outersounds/outersounds2.png"

import sampleelectronapp1 from "../media/sampleelectronapp/sampleelectronapp1.png"
import sampleelectronapp2 from "../media/sampleelectronapp/sampleelectronapp2.png"

import startstyletransfer1 from "../media/startstyletransfer/startstyletransfer1.png"
import startstyletransfer2 from "../media/startstyletransfer/startstyletransfer2.png"

import todoiz1 from "../media/todoiz/todoiz1.png"
import todoiz2 from "../media/todoiz/todoiz2.png"


export default function RecentProjects() {
    return(
    <div className="RecentProjectsPage">

        <div className="recentProjectsTitle">Recent Projects</div>
        <div data-aos="zoom-out">
        <div className="projectsContainer">
            <div className="SkillIconItem">
                <button type="button" className="projectButton" onClick={() => window.open('https://rmitchellpitzer.github.io/cs124-1/')}>
                <img src={todoiz1} className="projectImage"></img>
                </button>
                <div className="projectTitle">ToDoiz.io
                    <br/> <a target="_blank" rel="noopener noreferrer" className= "projectGithubLink" href="https://github.com/rmitchellPitzer/cs124-1">Github Repo</a>
                    <br/> <a target="_blank" rel="noopener noreferrer" className= "projectGithubLink" href="https://rmitchellpitzer.github.io/cs124-1/">Deployment</a>
                </div>
            </div>

            <div  className="SkillIconItem">
                <button type="button" className="projectButton" onClick={() => window.open('https://github.com/rmitchellPitzer/StartStyleTransfer')}>
                <img src={startstyletransfer1} className="projectImage"></img>
                </button>
                <div className="projectTitle">startStyleTransfer <br/> <a target="_blank" rel="noopener noreferrer" className= "projectGithubLink" href="https://github.com/rmitchellPitzer/StartStyleTransfer">Github Repo</a></div>
            </div>
        </div>

        <div className="projectsContainer">
            <div className="SkillIconItem">
                <button type="button" className="projectButton" onClick={() => window.open('https://rmitchellpitzer.github.io/LoFiOuterWildsToStudyAndChillTo/')}>
                <img src={outersounds2} className="projectImage"></img>
                </button>
                <div className="projectTitle">Outer Sounds
                    <br/> <a target="_blank" rel="noopener noreferrer" className= "projectGithubLink" href="https://github.com/rmitchellPitzer/LoFiOuterWildsToStudyAndChillTo">Github Repo</a>
                    <br/> <a target="_blank" rel="noopener noreferrer" className= "projectGithubLink" href="https://rmitchellpitzer.github.io/LoFiOuterWildsToStudyAndChillTo/">Deployment</a>
                </div>
            </div>

            <div className="SkillIconItem">
                <button type="button" className="projectButton" onClick={() => window.open('https://github.com/rmitchellPitzer/SampleElectronApp')}>
                <img src={sampleelectronapp1} className="projectImage"></img>
                </button>
                <div className="projectTitle">Sample Electron App
                    <br/> <a target="_blank" rel="noopener noreferrer" className= "projectGithubLink" href="https://github.com/rmitchellPitzer/SampleElectronApp">Github Repo</a></div>
            </div>
        </div>

        </div>
    </div>)
}