import "../css/titles.css"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFileCsv } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'




export default function FrontPageIcons() {
    return (
        <div className = "iconContainer">
            <button
                type="button" onClick={() => console.log("Hello!")}
                className = "icon"
                id="GithubIcon"

                aria-label="Click to see my Github!"
                title="My Github"
            ><FontAwesomeIcon icon= {faGithub}/></button>
            <button
                type="button" onClick={() => console.log("Hello!")}
                className = "icon"
                id="LinkedinIcon"

                aria-label="Click to see my Linkedin!"
                title="My Linkedin"
            ><FontAwesomeIcon icon= {faLinkedin}/></button>
            <button
                type="button" onClick={() => console.log("Hello!")}
                className = "icon"
                id="ResumeIcon"

                aria-label="Click to see my resume"
                title="My resume"
            ><FontAwesomeIcon icon= {faFileCsv}/></button>

        </div>
    )
}