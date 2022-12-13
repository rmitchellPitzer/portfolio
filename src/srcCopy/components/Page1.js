import"./page1.css"
import Cards from "./Cards";
import Bubbles from "../animatedComponents/bubblesBackground";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFileCsv } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Page1(args) {
    // console.log(args.isPhone)
    let isPhoneContainer = args.isPhone ? "page1pageContainerPhone" : "page1pageContainer";
    let isPhoneContents = args.isPhone ? "page1pagetextContentsPhone" : "page1pagetextContents";
    let isPhoneDescription = args.isPhone ? "page1pagetitleDescriptionPhone" : "page1pagetitleDescription";
    let isPhoneLine = args.isPhone ? "page1pageLinePhone" : "page1pageLine";
    let isPhoneIcons = args.isPhone ? "page1pagefloatIconsContainerPhone" : "page1pagefloatIconsContainer";
    let isPhoneIcon = args.isPhone ? "floatIconPhone" : "floatIcon";



    return(
        <div>
            <div className={isPhoneContainer}>
                <div className={isPhoneContents}>
                    <div className="page1pagetitleText" >
                        Hello!
                    </div>
                    <div className={isPhoneDescription} >
                        My name is Ryder Mitchell,
                        I’m a Computer Science student at Pitzer College and former software engineer intern at Braid, and this is my portfolio!
                    </div>
                    <div className={isPhoneLine}></div>
                    <div className={isPhoneIcons} >
                        <FontAwesomeIcon onClick={() => window.open('https://linkedin.com/in/rmitche')} className={isPhoneIcon} icon={faLinkedin} />
                        <FontAwesomeIcon onClick={() => window.open('https://github.com/rmitchellPitzer')} className={isPhoneIcon} icon= {faGithub}/>
                        <FontAwesomeIcon onClick={() => window.open('https://drive.google.com/file/d/1FiWybRrJYXQynjETlyFGmanZPOz2FD_j/view?usp=sharing')} className={isPhoneIcon} icon= {faFileCsv}/>

                    </div>
                </div>



                {/*<div className="page1pagetestingText">*/}
                {!args.isPhone && <Cards/>}
                {/*</div>*/}
                {/*<div className="page1pagecardStack" onClick={() => document.getElementById("itemToScrollTo").scrollIntoView({ block: 'end',  behavior: 'smooth' })}></div>*/}

            </div>
            <Bubbles/>
            <div className="background" ></div>


        </div>
    )

}





//
//     return(
//         <div>
//             <div className="page1Container">
//
//                 <div className="textContents">
//
//                     <div className="titleText" >
//                         Hello!
//                     </div>
//                     <div className="titleDescription" >
//                         My name is Ryder Mitchell,
//                         I’m a Computer Science student at Pitzer College and former software engineer intern at Braid, and this is my portfolio!
//                     </div>
//                     <div className="page1Line"></div>
//                     <div className="floatIconsContainer" >
//                         <FontAwesomeIcon onClick={() => window.open('https://linkedin.com/in/rmitche')} className="floatIcon" icon={faLinkedin} />
//                         <FontAwesomeIcon onClick={() => window.open('https://github.com/rmitchellPitzer')} className="floatIcon" icon= {faGithub}/>
//                         <FontAwesomeIcon onClick={() => window.open('https://drive.google.com/file/d/1Caq79pSWSXEEP82TgMoNgepagswKu1zg/view?usp=sharing')} className="floatIcon" icon= {faFileCsv}/>
//
//                     </div>
//                 </div>
//
//
//
//                 <div className="testingText">
//                     <Cards/>
//                 </div>
//             </div>
//             <Bubbles/>
//             <div className="background" ></div>
//
//
//         </div>
//     )
//
// }
