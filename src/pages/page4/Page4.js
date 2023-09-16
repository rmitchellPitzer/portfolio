import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillFileText } from 'react-icons/ai'
import {FaCode} from 'react-icons/fa'
import { IconContext } from "react-icons";
import { TbMailFilled } from "react-icons/tb"



const Page4 = (props) => {
    const [github, setGithub] = React.useState("black");
    const [linkedin, setlinkedin] = React.useState("black");
    const [resume, setResume] = React.useState("black");
    const [work, setWork] = React.useState("black");

 
    if (props.pageWidth[0] > 500 & props.pageWidth[1] > 698){
    return (
      <div id="container" className=' w-full overflow-hidden relative grid grid-cols-1 min-h-fit h-screen'>
          
          <div className='absolute  w-full min-h-fit h-screen overflow-hidden bg-fuchsia-300'>
              <div className='absolute h-screen  w-full z-10 backdrop-blur-[80px] '></div>
              <div className='absolute h-1/2 w-[80%] bg-sky-400 -bottom-[10%] rounded-landingpage animate-landingpageanim animation-delay-4000'></div>
              <div className='absolute h-4/5 w-7/12 bg-blue-300 -top-1/4 -left-1/4 rounded-landingpage animate-blob3 animation-delay-500'></div>
              <div className='absolute h-4/6 w-8/12 bg-cyan-500 -bottom-1/4 -right-1/4 rounded-landingpage animate-landingpageanim animation-delay-2000'></div>
              <div className='absolute h-1/2 w-3/4 bg-cyan-400 -bottom-[20%] rounded-landingpage animate-blob2 animation-delay-3000'></div>
              <div className='absolute h-1/3 w-[40%] bg-sky-200 top-1/4 left-1/4 rounded-landingpage animate-landingpageanim animation-delay-5000'></div>
              <div className='absolute h-1/2 w-1/4 bg-sky-100 left-[5%] top-[75%] rounded-landingpage animate-blob1 animation-delay-2000'></div>
          </div>
  
          <div className='relative h-[1/2] w-3/4 md:w-3/6  top-[5%] sm:top-[15%] md:top-[20%] lg:top-[25%] left-[10%] flex flex-col font-hind gap-2 z-20 max-h-fit'>
            <div className='z-20 text-6xl md:text-7xl 2xl:text-8xl 4xl:text-9xl 6xl:text-10xl font-bold'>Send me a message,</div>
            <div className='z-20 2xl:text-5xl 4xl:text-5xl 6xl:text-6xl font-thin text-3xl'>I would love to connect!</div>
            <div className='z-20 h-1 w-6/6 bg-black rounded-lg'></div>
            <div className='z-20 font-thin flex flex-row gap-2'>
                             
            <button onMouseOver={() => setResume("#eff6ff")} onMouseLeave={() => setResume("black")} className='flex text-start'>
                <a href = "mailto: rmitchell@hmc.edu">
                <div className='border text-lg text-[80%] flex-none flex flex-row border-black  duration-700	rounded-3xl px-3 items-center justify-center gap-1 h-14'> 
                    <TbMailFilled className='duration-700' color={resume} size={40}/> Send me an email
                </div></a>
            </button>
            
        </div>
        </div>
      </div>
    )}
    else if (((props.pageWidth[1] / props.pageWidth[0]) > 1.8) & (props.pageWidth[0] > 360) & (props.pageWidth[0] < 600)){
    return (
      <div id="container" className='overflow-hidden w-full grid grid-cols-1 min-h-fit h-screen'>
          
          <div className='absolute  w-full min-h-fit h-screen overflow-hidden bg-fuchsia-300'>
              <div className='absolute h-screen  w-full z-10 backdrop-blur-[80px] '></div>
              <div className='absolute h-1/2 w-[80%] bg-sky-400 -bottom-[10%] rounded-landingpage animate-landingpageanim animation-delay-4000'></div>
              <div className='absolute h-4/5 w-7/12 bg-blue-300 -top-1/4 -left-1/4 rounded-landingpage animate-blob3 animation-delay-500'></div>
              <div className='absolute h-4/6 w-8/12 bg-cyan-500 -bottom-1/4 -right-1/4 rounded-landingpage animate-landingpageanim animation-delay-2000'></div>
              <div className='absolute h-1/2 w-3/4 bg-cyan-400 -bottom-[20%] rounded-landingpage animate-blob2 animation-delay-3000'></div>
              <div className='absolute h-1/3 w-[40%] bg-sky-200 top-1/4 left-1/4 rounded-landingpage animate-landingpageanim animation-delay-5000'></div>
              <div className='absolute h-1/2 w-1/4 bg-sky-100 left-[5%] top-[75%] rounded-landingpage animate-blob1 animation-delay-2000'></div>
          </div>
  
          <div className='relative w-3/4 md:w-3/6  top-[15%] sm:top-[15%] md:top-[20%] lg:top-[25%] left-[10%] flex flex-col font-hind gap-2 z-20 max-h-fit'>
            <div className='z-20 text-6xl md:text-7xl font-bold'>Send me a message,</div>
            <div className='z-20 font-thin text-3xl'>I would love to connect!</div>

            <div className='z-20 h-1 w-6/6 bg-black rounded-lg'></div>
            <div className='z-20 font-thin flex gap-4 flex-row'>
    
                <button onMouseOver={() => setResume("#eff6ff")} onMouseLeave={() => setResume("black")} className='flex text-start'>
                <a href = "mailto: rmitchell@hmc.edu">
                    <div className='border text-lg text-[80%] flex-none flex flex-row border-black duration-700	rounded-3xl px-3 items-center justify-center gap-1 h-14'> 
                        <TbMailFilled className='duration-700' color={resume} size={30}/> 
                            Send me an email
                    </div></a>
                </button>

            </div>            
              </div>
      </div>
    )}
    else if ((props.pageWidth[1] < 550) & (props.pageWidth[0] < 970)){
        return (
            <div id="container" className='overflow-hidden w-full grid grid-cols-1 min-h-fit h-screen'>
                
                <div className='absolute  w-full min-h-fit h-screen overflow-hidden bg-fuchsia-300'>
              <div className='absolute h-screen  w-full z-10 backdrop-blur-[80px] '></div>
              <div className='absolute h-1/2 w-[80%] bg-sky-400 -bottom-[10%] rounded-landingpage animate-landingpageanim animation-delay-4000'></div>
              <div className='absolute h-4/5 w-7/12 bg-blue-300 -top-1/4 -left-1/4 rounded-landingpage animate-blob3 animation-delay-500'></div>
              <div className='absolute h-4/6 w-8/12 bg-cyan-500 -bottom-1/4 -right-1/4 rounded-landingpage animate-landingpageanim animation-delay-2000'></div>
              <div className='absolute h-1/2 w-3/4 bg-cyan-400 -bottom-[20%] rounded-landingpage animate-blob2 animation-delay-3000'></div>
              <div className='absolute h-1/3 w-[40%] bg-sky-200 top-1/4 left-1/4 rounded-landingpage animate-landingpageanim animation-delay-5000'></div>
              <div className='absolute h-1/2 w-1/4 bg-sky-100 left-[5%] top-[75%] rounded-landingpage animate-blob1 animation-delay-2000'></div>
          </div>
        
                <div className='relative h-[40%] justify-around w-3/4 md:w-3/6  top-[25%]  left-[10%] flex flex-col font-hind gap-2 z-20 max-h-fit'>
                  <div className='z-20 text-5xl font-bold'>Send me a message,</div>
                  <div className='z-20 font-thin text-xl'>I would love to connect!</div>
                  <div className='z-20 min-h-[2px] h-1 w-6/6 bg-black rounded-lg'></div>
                  <div className='z-20 font-thin flex flex-row gap-2'>
                            
                  <button onMouseOver={() => setResume("#eff6ff")} onMouseLeave={() => setResume("black")} className='flex text-start'>
                    <a href = "mailto: rmitchell@hmc.edu">
                      <div className='border text-lg text-[80%] flex-none flex flex-row border-black  duration-700	rounded-3xl px-3 items-center justify-center gap-1 h-14'> 
                          <TbMailFilled className='duration-700' color={resume} size={40}/> Send me an email
                      </div></a>
                  </button>
                        
              </div>
              </div>
            </div>
          )}
    else{
        return (
            <div id="container" className='overflow-hidden w-full grid grid-cols-1 min-h-fit h-screen'>
                
                <div className='absolute  w-full min-h-fit h-screen overflow-hidden bg-fuchsia-300'>
              <div className='absolute h-screen  w-full z-10 backdrop-blur-[80px] '></div>
              <div className='absolute h-1/2 w-[80%] bg-sky-400 -bottom-[10%] rounded-landingpage animate-landingpageanim animation-delay-4000'></div>
              <div className='absolute h-4/5 w-7/12 bg-blue-300 -top-1/4 -left-1/4 rounded-landingpage animate-blob3 animation-delay-500'></div>
              <div className='absolute h-4/6 w-8/12 bg-cyan-500 -bottom-1/4 -right-1/4 rounded-landingpage animate-landingpageanim animation-delay-2000'></div>
              <div className='absolute h-1/2 w-3/4 bg-cyan-400 -bottom-[20%] rounded-landingpage animate-blob2 animation-delay-3000'></div>
              <div className='absolute h-1/3 w-[40%] bg-sky-200 top-1/4 left-1/4 rounded-landingpage animate-landingpageanim animation-delay-5000'></div>
              <div className='absolute h-1/2 w-1/4 bg-sky-100 left-[5%] top-[75%] rounded-landingpage animate-blob1 animation-delay-2000'></div>
          </div>
        
                <div className='relative w-3/4 md:w-3/6  top-[15%] sm:top-[15%] md:top-[20%] lg:top-[25%] left-[10%] flex flex-col font-hind gap-2 z-20 max-h-fit'>
                  <div className='z-20 text-6xl font-bold'>Send me a message,</div>
                  <div className='z-20 font-thin text-2xl'>I would love to connect!</div>

                  <div className='z-20 h-1 w-6/6 bg-black rounded-lg'></div>
                  <div className='z-20 font-thin flex gap-4 flex-row'>
          
                  <button onMouseOver={() => setResume("#eff6ff")} onMouseLeave={() => setResume("black")} className='flex text-start'>
                  <a href = "mailto: rmitchell@hmc.edu">
                    <div className='border text-lg text-[80%] flex-none flex flex-row border-black duration-700	rounded-3xl px-3 items-center justify-center gap-1 h-14'> 
                        <TbMailFilled className='duration-700' color={resume} size={30}/> 
                            Send me an email
                    </div></a>
                </button>

            

            </div>
                  
                    </div>
            </div>
          )}
  }
  
  export default Page4

