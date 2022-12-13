import "./page2.css"
import "./page1.css"
import blackcomb from "../portfolioImages/blackcomb.jpg";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faReact, faJsSquare, faGit, faCss3Alt, faHtml5, faPython, faFigma} from '@fortawesome/free-brands-svg-icons'

export default function Page2(args) {

    // console.log(args.isPhone)
    let aboutMeDescriptionContainerPhone = args.isPhone ? "aboutMeDescriptionContainerPhone" : "aboutMeDescriptionContainer";
    let aboutMeDescriptionPhone = args.isPhone ? "aboutMeDescriptionPhone" : "aboutMeDescription";
    let aboutMeSkillsContainerPhone = args.isPhone ? "aboutMeSkillsContainerPhone" : "aboutMeSkillsContainer";
    let skillElementPhone = args.isPhone ? "skillElementPhone" : "skillElement";
    let aboutMeSkillsDescriptionPhone = args.isPhone ? "aboutMeSkillsDescriptionPhone" : "aboutMeSkillsDescription";


    return(
        <div className="page2">
            <img
                className="page2BackgroundImage"
                src={blackcomb}
                // style={{ objectPosition: 0% `(-${args.parallaxProperty * -2000}%)` }}
                style={{ objectPosition: `30% ${(100 - ((args.parallaxProperty * 20/args.height)))}%` }}

            ></img>

            <div className="page2Container">
                <div className="aboutMeBox" style={{ transform: `translateY(-${args.parallaxProperty * 0.5}px)` }}
                >
                    <div className="aboutMeText">
                        About me
                    </div>
                    <div className={aboutMeDescriptionContainerPhone}>
                        <div className={aboutMeDescriptionPhone}>
                            I’m a Computer Science student graduating in 2024 from Pitzer College.
                            I’ve always been interested in frontend design,
                            machine learning, and using my interests in CS to help others.
                        </div>
                        <div className={aboutMeDescriptionPhone}>
                            Most days, you can find me tinkering with a number of electronics,
                            tutoring others in CS, at the local climbing gym,
                            or skiing in Mammoth!
                        </div>
                    </div>
                </div>
                <div className="aboutMeBox2" style={{ transform: `translateY(-${args.parallaxProperty * 0.65}px)` }}
                >
                    <div className="aboutMeText">
                        Skills
                    </div>
                    <div className={aboutMeSkillsContainerPhone}>
                        <div className={skillElementPhone}>
                            <FontAwesomeIcon icon={faReact}/>
                            {!args.isPhone && <div className="SkillIconText">React</div>}
                        </div>

                        <div className={skillElementPhone}>
                            <FontAwesomeIcon icon={faJsSquare}/>
                            {!args.isPhone && <div className="SkillIconText">Javascript</div>}
                        </div>

                        <div className={skillElementPhone}>
                            <FontAwesomeIcon icon={faHtml5}/>
                            {!args.isPhone && <div className="SkillIconText">HTML</div>}
                        </div>

                        <div className={skillElementPhone}>
                            <FontAwesomeIcon icon={faCss3Alt}/>
                            {!args.isPhone && <div className="SkillIconText">CSS</div>}
                        </div>

                        <div className={skillElementPhone}>
                            <FontAwesomeIcon icon={faPython}/>
                            {!args.isPhone && <div className="SkillIconText">Python</div>}
                        </div>

                        <div className={skillElementPhone}>
                            <FontAwesomeIcon icon={faGit}/>
                            {!args.isPhone &&  <div className="SkillIconText">Git</div>}
                        </div>
                    </div>
                    <div className={aboutMeSkillsDescriptionPhone}>
                        I also have experience using opencv, pytorch, Figma, Google firebase, and Java
                    </div>
                </div>

            </div>
        </div>
    );
}