import "../css/AboutMe.css"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faReact, faJsSquare, faGit, faCss3Alt, faHtml5, faPython, faFigma} from '@fortawesome/free-brands-svg-icons'

import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";




export default function AboutMe() {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    return (
        <div data-aos="fade-right" className="AboutMe">
            <div   id="aboutMeTitle">About me</div>
            <div className="AboutMeDescription">Planning to graduate in 2023 from Pitzer
                college while studying Computer Science at Harvey Mudd college. I'm passionate to grow my
                experience in machine learning and full stack development.</div>

             <div className="AboutMeDescription">When I’m not coding you can find
                me tinkering with a number of electronics or at the
                local climbing gym.</div>
            <div id="aboutMeTitle">Skills</div>
            <div className="skillIcons">
                <div data-aos="zoom-out" data-aos-delay='100' className="SkillIconItem">
                    <FontAwesomeIcon icon={faReact}/>
                    <div className="SkillIconText">React</div>
                </div>

                <div data-aos="zoom-out" data-aos-delay='200' className="SkillIconItem">
                    <FontAwesomeIcon icon={faJsSquare}/>
                    <div className="SkillIconText">Javascript</div>
                </div>

                <div data-aos="zoom-out" data-aos-delay='300'  className="SkillIconItem">
                    <FontAwesomeIcon icon={faPython}/>
                    <div className="SkillIconText">Python</div>
                </div>
            </div>

            <div  className="skillIcons">
                <div data-aos="zoom-out" data-aos-delay='150'  className="SkillIconItem">
                    <FontAwesomeIcon icon={faHtml5}/>
                    <div className="SkillIconText">HTML</div>
                </div>
                <div data-aos="zoom-out" data-aos-delay='250'   className="SkillIconItem">
                    <FontAwesomeIcon icon={faCss3Alt}/>
                    <div className="SkillIconText">CSS</div>
                </div>
                <div data-aos="zoom-out" data-aos-delay='350' className="SkillIconItem">
                    <FontAwesomeIcon icon={faGit}/>
                    <div className="SkillIconText">Git</div>
                </div>
            </div>
            <div  className="OtherSkills">
                Some other skills and tools I use include Google Firebase, Figma, C++, Java, and Tensorflow.
            </div>
        </div>
    )
}