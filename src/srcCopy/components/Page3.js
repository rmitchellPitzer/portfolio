import "./page3.css"
import {useState} from "react";
import outerSounds from "../portfolioImages/chert.png";
import todo from "../portfolioImages/todo3.png";
import styleTransfer from "../portfolioImages/styleTransfer.png"
import electron from "../portfolioImages/grass.jpg"
import pollen from "../portfolioImages/blackAndWhite4.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";


export default function Page3(args) {
    const [pageNumber, setPage] = useState(0);
    const pageInformation = [
        ["ToDoiz.io",
            "A fun notes app built with React, Redux, and Google Firebase. " +
            "Take notes, sort, organize them, and share them with others!",
            "https://github.com/rmitchellPitzer/cs124-1",
            "https://rmitchellpitzer.github.io/cs124-1/",
            todo],
        ["Outer Sounds",
            "A project dedicated to my favorite game made using React and Howler.js. " +
            "Listen to the beautiful sounds and music of Outer Wilds with art from Meli-luminati!",
            "https://github.com/rmitchellPitzer/LoFiOuterWildsToStudyAndChillTo",
            "https://rmitchellpitzer.github.io/LoFiOuterWildsToStudyAndChillTo/",
            outerSounds],
        ["Start Style Transfer",
        "A style transfer notebook made using tensorflow. Learn about Machine " +
        "Learning and Style Transfer with this easy to use educational notebook!",
        "https://github.com/rmitchellPitzer/StartStyleTransfer",
        "https://github.com/rmitchellPitzer/StartStyleTransfer",
        styleTransfer],
        ["Electron Card Project",
        "A greeting card made using Electron.js and React. Made to give my partner " +
        "a memorable anniversary card with music, photos and videos!",
        "https://github.com/rmitchellPitzer/SampleElectronApp",
        "https://github.com/rmitchellPitzer/SampleElectronApp",
        electron],
        ["Pollen Identification",
        "A jupyter notebook made with pytorch and opencvto aid in Pollen Identification. " +
        "Automatically augments data, and uses transfer learning to create a model!",
        "https://github.com/rmitchellPitzer/Pollen-Identification-Project",
        "https://github.com/rmitchellPitzer/Pollen-Identification-Project",
            pollen
        ]
    ]
    let page3DescriptionTextPhone = args.isPhone ? "page3DescriptionTextPhone" : "page3DescriptionText";
    let page3ContainerPhone = args.isPhone ? "page3ContainerPhone" : "page3Container";
    let page3BlackBarPhone = args.isPhone ? "page3BlackBarPhone" : "page3BlackBar";
    let page3TitleTextPhone = args.isPhone ? "page3TitleTextPhone" : "page3TitleText";
    let page3ArrowContainerPhone = args.isPhone ? "page3ArrowContainerPhone" : "page3ArrowContainer";
    let page3LeftArrowPhone = args.isPhone ? "page3LeftArrowPhone" : "page3LeftArrow";
    let page3RightArrowPhone = args.isPhone ? "page3RightArrowPhone" : "page3RightArrow";
    let todoPhone = args.isPhone ? "todoPhone" : "todo";
    let outerWildsPhone = args.isPhone ? "outerWildsPhone" : "outerWilds";
    let page3IconContainerPhone = args.isPhone ? "page3IconContainerPhone" : "page3IconContainer";
    let page3DeploymentPhone = args.isPhone ? "page3DeploymentPhone" : "page3Deployment";
    let page3GithubPhone = args.isPhone ? "page3GithubPhone" : "page3Github";
    let pollenPhone = args.isPhone ? "pollenPhone" : "pollen";
    let styleTransferPhone = args.isPhone ? "styleTransferPhone" : "styleTransfer";

    return (
        <div>
            <div className="blackBackground"
                 style={{ opacity: `${(args.parallaxProperty/args.height < 1.7 ?
                             (args.parallaxProperty/args.height - 1.5) * 75
                             : 15
                     )}%` }}
            ></div>
            {/*<div className="page3RightArrow"*/}
            {/*     onClick={() => setPage(pageNumber === 4 ? 0 : pageNumber + 1)}>*/}
            {/*    <FontAwesomeIcon icon={faArrowCircleRight} />*/}
            {/*</div>*/}
            {/*<div className="page3LeftArrow"*/}
            {/*     onClick={() => setPage(pageNumber === 0 ? 4 : pageNumber - 1)}>*/}
            {/*    <FontAwesomeIcon icon={faArrowCircleLeft} />*/}
            {/*</div>*/}

            {!args.isPhone && <div className={page3ArrowContainerPhone}
                 style={{ opacity: `${(args.parallaxProperty/args.height < 1.7 ?
                             (args.parallaxProperty/args.height - 1.5) * 450
                             : 90
                     )}%`, color: pageNumber === 1 || pageNumber === 2 || pageNumber === 3 ? "white" : "black"}}>
                <div className={page3LeftArrowPhone}
                     onClick={() => setPage(pageNumber === 0 ? 4 : pageNumber - 1)}>
                    <FontAwesomeIcon icon={faArrowCircleLeft} />
                </div>
                <div className={page3RightArrowPhone}
                     onClick={() => setPage(pageNumber === 4 ? 0 : pageNumber + 1)}>
                    <FontAwesomeIcon icon={faArrowCircleRight} />
                </div>
            </div>}

            {args.isPhone && <div className="page3NavigationContainer">
                <button className="page3PhoneNavigationButton" id="nav0"
                onClick={() => setPage(0)}
                style={{backgroundColor: pageNumber === 0 ?
                        `rgb(246, 190, 190)` :
                        pageNumber === 4 || pageNumber === 0 ? `#414141FF` : `#e5e5e5`}}>
                </button>
                <button className="page3PhoneNavigationButton" id="nav1"
                        onClick={() => setPage(1)}
                        style={{backgroundColor: pageNumber === 1?
                                `rgb(246, 190, 190)` :
                                pageNumber === 4 || pageNumber === 0 ? `#414141FF` : `#e5e5e5`}}>
                </button>
                <button className="page3PhoneNavigationButton" id="nav2"
                        onClick={() => setPage(2)}
                        style={{backgroundColor: pageNumber === 2?
                                `rgb(246, 190, 190)` :
                                pageNumber === 4 || pageNumber === 0 ? `#414141FF` : `#e5e5e5`}}>
                </button>
                <button className="page3PhoneNavigationButton" id="nav3"
                        onClick={() => setPage(3)}
                        style={{backgroundColor: pageNumber === 3 ?
                                `rgb(246, 190, 190)` :
                                pageNumber === 4 || pageNumber === 0 ? `#414141FF` : `#e5e5e5`}}>
                </button>
                <button className="page3PhoneNavigationButton" id="nav4"
                        onClick={() => setPage(4)}
                        style={{backgroundColor: pageNumber === 4 ?
                                `rgb(246, 190, 190)` :
                                pageNumber === 4 || pageNumber === 0 ? `#414141FF` : `#e5e5e5`}}>
                </button>
            </div>}


            <div className="page3boxContainer">
                <div id = "itemToScrollTo" className="page3Box"
                     style={{ marginLeft: `calc(-100vw * ${pageNumber})` }}
                >
                <div className="page3Background0">
                    <div className={page3ContainerPhone}
                         style={{ opacity: `${(args.parallaxProperty/args.height < 1.7 ?
                                     (args.parallaxProperty/args.height - 1.5) * 450
                                     : 90
                             )}%` }}>
                        <div className={page3TitleTextPhone}>
                            {pageInformation[0][0]}
                        </div>
                        <div className={page3DescriptionTextPhone}>
                            {pageInformation[0][1]}
                        </div>
                        <div className={page3BlackBarPhone}></div>
                        <div className={page3IconContainerPhone}>
                            <button className={page3DeploymentPhone}
                                 onClick={() => window.open(pageInformation[0][3])}
                            >Deployment</button>
                            <button onClick={() => window.open(pageInformation[0][2])}
                                 className={page3GithubPhone}

                            >Github</button>
                        </div>
                    </div>
                    <img className="page3BackgroundImage" id={todoPhone} src={pageInformation[0][4]}/>
                </div>
                <div className="page3Background1">
                    <div className={page3ContainerPhone}
                         style={{ opacity: `${(args.parallaxProperty/args.height < 1.7 ?
                                     (args.parallaxProperty/args.height - 1.5) * 450
                                     : 90
                             )}%`, color: "white"}}>
                        <div className={page3TitleTextPhone}>
                            {pageInformation[1][0]}
                        </div>
                        <div className={page3DescriptionTextPhone}>
                            {pageInformation[1][1]}
                        </div>
                        <div className={page3BlackBarPhone}></div>
                        <div className={page3IconContainerPhone}>
                            <button className={page3DeploymentPhone}
                                 onClick={() => window.open(pageInformation[1][3])}
                            >Deployment</button>
                            <button onClick={() => window.open(pageInformation[1][2])}
                                 className={page3GithubPhone}

                            >Github</button>
                        </div>
                    </div>
                    <img className="page3BackgroundImage" id={outerWildsPhone} src={pageInformation[1][4]}/>
                </div>
                <div className="page3Background2">
                    <div className={page3ContainerPhone}
                         style={{ opacity: `${(args.parallaxProperty/args.height < 1.7 ?
                                     (args.parallaxProperty/args.height - 1.5) * 450
                                     : 90
                             )}%`, color: "white"}}>
                        <div className={page3TitleTextPhone}>
                            {pageInformation[2][0]}
                        </div>
                        <div className={page3DescriptionTextPhone}>
                            {pageInformation[2][1]}
                        </div>
                        <div className={page3BlackBarPhone}></div>
                        <div className={page3IconContainerPhone}>
                            {/*<div className="page3Deployment"*/}
                            {/*     onClick={() => window.open(pageInformation[2][3])}*/}
                            {/*>Deployment</div>*/}
                            <button onClick={() => window.open(pageInformation[2][2])}
                                 className={page3GithubPhone}

                            >Github</button>
                        </div>
                    </div>
                    <img className="page3BackgroundImage" id={styleTransferPhone} src={pageInformation[2][4]}/>
                </div>
                <div className="page3Background3">
                    <div className={page3ContainerPhone}
                         style={{ opacity: `${(args.parallaxProperty/args.height < 1.7 ?
                                     (args.parallaxProperty/args.height - 1.5) * 450
                                     : 90
                             )}%`, color: "white"}}>
                        <div className={page3TitleTextPhone}>
                            {pageInformation[3][0]}
                        </div>
                        <div className={page3DescriptionTextPhone}>
                            {pageInformation[3][1]}
                        </div>
                        <div className={page3BlackBarPhone}></div>
                        <div className={page3IconContainerPhone}>
                            {/*<div className="page3Deployment"*/}
                            {/*     onClick={() => window.open(pageInformation[3][3])}*/}
                            {/*>Deployment</div>*/}
                            <button onClick={() => window.open(pageInformation[3][2])}
                                 className={page3GithubPhone}

                            >Github</button>
                        </div>
                    </div>
                    <img className="page3BackgroundImage" src={electron}/>
                </div>
                <div className="page3Background4">
                    <div className={page3ContainerPhone}
                         style={{ opacity: `${(args.parallaxProperty/args.height < 1.7 ?
                                     (args.parallaxProperty/args.height - 1.5) * 450
                                     : 90
                             )}%`}}>
                        <div className={page3TitleTextPhone} id={args.isPhone ? "pollenTitleFix" : ""}>
                            {pageInformation[4][0]}
                        </div>
                        <div className={page3DescriptionTextPhone}>
                            {pageInformation[4][1]}
                        </div>
                        <div className={page3BlackBarPhone}></div>
                        <div className={page3IconContainerPhone}>
                            {/*<div className="page3Deployment"*/}
                            {/*     onClick={() => window.open(pageInformation[4][3])}*/}
                            {/*>Deployment</div>*/}
                            <button onClick={() => window.open(pageInformation[4][2])}
                                 className={page3GithubPhone}
                            >Github</button>
                        </div>
                    </div>
                    <img className="page3BackgroundImage" id={pollenPhone} src={pageInformation[4][4]}/>
                </div>
            </div>
            </div>


            {/*<div className="page3Container"*/}
            {/*     style={{ opacity: `${(args.parallaxProperty/args.height < 1.7 ?*/}
            {/*                 (args.parallaxProperty/args.height - 1.5) * 450*/}
            {/*                 : 90*/}
            {/*         )}%` }}            >*/}
            {/*    <div className="page3TitleText">*/}
            {/*        {pageInformation[pageNumber][0]}*/}
            {/*    </div>*/}
            {/*    <div className="page3DescriptionText">*/}
            {/*        {pageInformation[pageNumber][1]}*/}
            {/*    </div>*/}
            {/*    <div className="page3BlackBar"></div>*/}
            {/*    <div className="page3IconContainer">*/}
            {/*        <div className="page3Deployment"*/}
            {/*             onClick={() => window.open(pageInformation[pageNumber][3])}*/}
            {/*        >Deployment</div>*/}
            {/*        <div onClick={() => window.open(pageInformation[pageNumber][2])}*/}
            {/*             className="page3Github"*/}

            {/*        >Github</div>*/}
            {/*    </div>*/}

            {/*</div>*/}
            {/*<img className="page3BackgroundImage" src={pageInformation[pageNumber][4]}*/}
            {/*></img>*/}
        </div>
    );
}



























// import todo from "../portfolioImages/todo3.png";
// import "./page3.css"
// import {useState} from "react";
// import outerSounds from "../portfolioImages/guitar.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
// import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
//
//
// export default function Page3(args) {
//     const [pageNumber, setPage] = useState(0);
//     const pageInformation = [
//         ["ToDoiz.io",
//             "A fun notes app built with React, Redux, and Google Firebase. " +
//             "Take notes, sort, organize them, and share them with others!",
//         "https://github.com/rmitchellPitzer/cs124-1",
//             "https://rmitchellpitzer.github.io/cs124-1/",
//             todo],
//         ["Outer Sounds",
//         "A project dedicated to my favorite game made using React and Howler.js. " +
//         "Listen to the beautiful sounds and music of Outer Wilds with art from Meli-luminati!",
//         "https://github.com/rmitchellPitzer/LoFiOuterWildsToStudyAndChillTo",
//         "https://rmitchellpitzer.github.io/LoFiOuterWildsToStudyAndChillTo/",
//         outerSounds],
//         [],
//         [],
//         []
//     ]
//     return (
//         <div>
//             <div className="blackBackground"
//                  style={{ opacity: `${(args.parallaxProperty/args.height < 1.7 ?
//                              (args.parallaxProperty/args.height - 1.5) * 75
//                              : 15
//                      )}%` }}
//             ></div>
//             <div className="page3RightArrow"
//                  onClick={() => setPage(pageNumber === 4 ? 0 : pageNumber + 1)}>
//             <FontAwesomeIcon icon={faArrowCircleRight} />
//             </div>
//                 <div className="page3LeftArrow"
//                      onClick={() => setPage(pageNumber === 0 ? 4 : pageNumber - 1)}>
//                     <FontAwesomeIcon icon={faArrowCircleLeft} />
//                 </div>
//
//             <div className="page3Container"
//                  style={{ opacity: `${(args.parallaxProperty/args.height < 1.7 ?
//                              (args.parallaxProperty/args.height - 1.5) * 450
//                              : 90
//                      )}%` }}            >
//                 <div className="page3TitleText">
//                     {pageInformation[pageNumber][0]}
//                 </div>
//                 <div className="page3DescriptionText">
//                     {pageInformation[pageNumber][1]}
//                 </div>
//                 <div className="page3BlackBar"></div>
//                 <div className="page3IconContainer">
//                     <div className="page3Deployment"
//                          onClick={() => window.open(pageInformation[pageNumber][3])}
//                     >Deployment</div>
//                     <div onClick={() => window.open(pageInformation[pageNumber][2])}
//                      className="page3Github"
//
//                     >Github</div>
//                 </div>
//
//             </div>
//             <img className="page3BackgroundImage" src={pageInformation[pageNumber][4]}
//             ></img>
//         </div>
//         );
// }
