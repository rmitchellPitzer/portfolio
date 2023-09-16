import React from 'react'
import BraidLogo from '../../media/braidLogo.svg'
import WorkCard from './WorkCard'
import HMC from "../../media/Harvey_Mudd_College_logo 1.svg"
import ProjectCard from './ProjectCard'
import ToDoiz from "../../media/ToDoiz.jpg"
import Bulbasaur from "../../media/styleTransfer.jpg"
import Pollen from "../../media/pollen.jpg"
import Sage from "../../media/sage.jpg"
import Riebek from "../../media/riebek.jpg"
import News from "../../media/News.jpg"
import Equity from "../../media/equity.jpg"
import ICS from "../../media/ICS.jpg"
import PyGame from "../../media/PyGame.jpg"
import ProjectCardSmall from './ProjectCardSmall'


const Page3 = (props) => {
  return (
    <div className='text-slate-50 w-full min-h-screen h-fit bg-black justify-center flex font-hind'>
        <div className='relative w-11/12 bg-zinc-900 min-h-screen h-fit'>
        <div id="experience" className='md:text-7xl text-5xl mt-8 ml-8 font-bold pb-8'>Experience And Projects</div>
            <div className='grid grid-flow-row lg:grid-flow-col auto-cols-auto justify-center content-start gap-10  lg:gap-2 pb-8'>

                <div className='w-[80%] xs:w-[95%] s:w-[100%] leading-relaxed font-thin text-3xl text-neutral-400 relative flex flex-col gap-3 items-center mx-auto'>
                        <WorkCard image={BraidLogo} name={"Braid"} title={"Software Engineer Intern"} date={"June 2022 - August 2022"}         description = "At Braid I honed my skills in frontend and full stack development. I worked in a team to build pages for a new feature being developed, implemented feature flags to test the feature, and made UI improvements across the frontend. This involved working on a React native and React Native for Web frontend and a Java and GraphQL backend. This feature helped increase revenue from an increase in ODFI and RDFI transactions."
 skills={"React Native, GraphQL, Java, Flow, RN for Web."} link={"/braid"}/>
                        <WorkCard image={HMC} name={"Harvey Mudd College"} title={"Computer Science Tutor"} date={"September 2022 - Present"}         description = "I’m very passionate for teaching others in Computer Science and have thoroughly enjoyed working with others as a CS tutor. This fall semester I will be tutoring for two courses; A newly developed course to teach technical and professional skills for working in the industry, and helping the HMC Clinic Program. Currently I am working with other students to develop a tool to be used by professors to generate feedback for students." 
 skills={"Python, Java, Py2PDF, CSV."} link={"/tutor"}/>
                        <WorkCard image={HMC} name={"Harvey Mudd College"} title={"Computer Vision Researcher"} date={"June 2023 - August 2023"}         description = "At Harvey Mudd College I continued to pursue my passions in environmentalism. I worked in the HMC Bee Lab over the summer to improve semantic segmentation model performance on plant segments to measure floral resources available to bees using machine learning. My findings will be presented on September 21 at the Summer Research Poster Celebration at Harvey Mudd College." 
 skills={"Python, PyTorch, OpenCV, Unix."} link={"/researcher"}/>
                </div>
                {(props.pageDimensions[0] > 800) ? 
                <div className='w-[80%] xs:w-[95%] s:w-[100%] leading-relaxed font-thin text-3xl text-neutral-400 relative flex flex-col gap-3 items-center mx-auto'>
                    <ProjectCard image={ToDoiz} name={"ToDoiz.IO"} description={"Note taking web app made in React. Enables authentication and task sharing using Google Firebase"} link={"https://rmitchellpitzer.github.io/cs124-1/"}/>  
                    <ProjectCard image={Bulbasaur} name={"Learn Style Transfers"} description={"Style Transfer tutorial made using Tensorflow and Jupyter Notebook. Targetted at Beginners learning programming."} link={"https://github.com/rmitchellPitzer/StartStyleTransfer"}/>  
                    <ProjectCard image={Pollen} name={"Pollen Identification"} description={"Machine Learning project made using PyTorch and OpenCV to aid researchers classifying pollen grains."} link={"https://github.com/rmitchellPitzer/Pollen-Identification-Project"}/>  
                    <ProjectCard image={Sage} name={"Sage"} description={"Desktop application made using Tauri and Javascript. Enables desktop notifications by using REST API’s to fetch newest posts."} link={"https://github.com/rmitchellPitzer/Sage/releases/tag/releases"}/>  
                    <ProjectCard image={Riebek} name={"Music From The Outer Wilds"} description={"Web application made using React and Howler. Users can sync instruments together to form harmonies."} link={"https://rmitchellpitzer.github.io/LoFiOuterWildsToStudyAndChillTo/"}/>  
                    <ProjectCard image={News} name={"News Analysis Using NLTK"} description={"Project to visualize sentiment differences among fake and real news using datasets from Kaggle, Python NLTK and Seaborns."} link={"https://github.com/rmitchellPitzer/NewsAnalysis/blob/main/project3FINALPOSTER.png"}/>  
                    <ProjectCard image={Equity} name={"Social Equity Lookup"} description={"Built during 5C Hacks, utilizing the Education Data Portal to view trends among schools over time."} link={"https://rmitchellpitzer.github.io/insights/"}/>  
                    <ProjectCard image={ICS} name={"ICS Specific Language"} description={"A desktop application built to demonstrate a Domain Specific Language. Users can create and view calendars using Python and TKinter."} link={"https://github.com/hmc-cs111-spring2023/artifact-rmitchellPitzer"}/>  
                    <ProjectCard image={PyGame} name={"PyGame Tutorial"} description={"Built in a team at Harvey Mudd College, this tutorial focuses on beginners learning programming by teaching how to build games using PyGame."} link={"https://colab.research.google.com/drive/18O9tpDVbs5vpZ5ZDq33zOClu8EOxadYJ?usp=sharing"}/>  
                </div>   

                : <div className='w-[80%] xs:w-[95%] s:w-[100%] leading-relaxed font-thin text-3xl text-neutral-400 relative flex flex-col gap-3 items-center mx-auto'>
                <ProjectCardSmall image={ToDoiz} name={"ToDoiz.IO"} description={"Note taking web app made in React. Enables authentication and task sharing using Google Firebase"} link={"https://rmitchellpitzer.github.io/cs124-1/"}/>  
                <ProjectCardSmall image={Bulbasaur} name={"Learn Style Transfers"} description={"Style Transfer tutorial made using Tensorflow and Jupyter Notebook. Targetted at Beginners learning programming."} link={"https://github.com/rmitchellPitzer/StartStyleTransfer"}/>  
                <ProjectCardSmall image={Pollen} name={"Pollen Identification"} description={"Machine Learning project made using PyTorch and OpenCV to aid researchers classifying pollen grains."} link={"https://github.com/rmitchellPitzer/Pollen-Identification-Project"}/>  
                <ProjectCardSmall image={Sage} name={"Sage"} description={"Desktop application made using Tauri and Javascript. Enables desktop notifications by using REST API’s to fetch newest posts."} link={"https://github.com/rmitchellPitzer/Sage/releases/tag/releases"}/>  
                <ProjectCardSmall image={Riebek} name={"Music From The Outer Wilds"} description={"Web application made using React and Howler. Users can sync instruments together to form harmonies."} link={"https://rmitchellpitzer.github.io/LoFiOuterWildsToStudyAndChillTo/"}/> 
                <ProjectCardSmall image={News} name={"News Analysis Using NLTK"} description={"Project to visualize sentiment differences among fake and real news using datasets from Kaggle, Python NLTK and Seaborns."} link={"https://github.com/rmitchellPitzer/NewsAnalysis/blob/main/project3FINALPOSTER.png"}/> 
                <ProjectCardSmall image={Equity} name={"Social Equity Lookup"} description={"Built during 5C Hacks, utilizing the Education Data Portal to view trends among schools over time."} link={"https://rmitchellpitzer.github.io/insights/"}/>  
                <ProjectCardSmall image={ICS} name={"ICS Specific Language"} description={"A desktop application built to demonstrate a Domain Specific Language. Users can create and view calendars using Python and TKinter."}  link={"https://github.com/hmc-cs111-spring2023/artifact-rmitchellPitzer"}/>   
                <ProjectCardSmall image={PyGame} name={"PyGame Tutorial"} description={"Built in a team at Harvey Mudd College, this tutorial focuses on beginners learning programming by teaching how to build games using PyGame."} link={"https://colab.research.google.com/drive/18O9tpDVbs5vpZ5ZDq33zOClu8EOxadYJ?usp=sharing"}/>  
            </div>   }
                
            </div>
        </div>

    </div>
  )
}

export default Page3