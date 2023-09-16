import React from 'react'
import { IoReturnUpBack} from 'react-icons/io5'
import {Link, useNavigate } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';

function useScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  }

const renderSkills = (skills) => {
    return skills.map(skills => <li className='text-neutral-400 6xl:text-6xl 6xl:leading-[80px] font-thin px-3 text-3xl leading-relaxed'>{skills}</li>)
}



const WorkPage = (props) => {
    const navigate = useNavigate();
    useScrollToTop()

  return (
    <div className='text-slate-50 w-full min-h-screen h-fit bg-black justify-center flex font-hind'>
        <div className='relative w-11/12 bg-zinc-900 min-h-screen h-fit flex flex-col md:flex-row gap-6 p-8'>
                <div className='flex gap-0 md:w-1/2 w-full flex-col'>
                    <div className='flex flex-row pb-2'>
                        {props.rounded ? <img className='w-28 h-28 flex-shrink-0 6xl:w-40 6xl:h-40 overflow-hidden p-1 rounded-full object-cover object-left-top ' src={props.images[0]}/> : 
                        <img className='w-28 h-28 flex-shrink-0 6xl:w-40 6xl:h-40 overflow-hidden p-1 object-cover object-left-top ' src={props.images[0]}/>}
                        <div className='md:text-6xl lg:text-7xl pl-2 6xl:text-8xl text-5xl flex flex-col justify-around font-bold'>{props.company}</div>
                    </div> 
                    <div className='flex 6xl:text-4xl 6xl:pt-5 text-neutral-400 opacity-75 text-2xl font-thin flex-col'>
                        <div>{props.title}</div>
                        <div>{props.dates}</div>
                    </div>
                    <div className='leading-relaxed 6xl:text-6xl 6xl:leading-[80px] flex-1 font-thin text-3xl text-neutral-400'>{props.description}</div>
                    
                    {props.rotate ?  <div className='flex flex-row justify-center  pt-3'>
                        <img className='relative aspect-square  md:-rotate-3 rounded-full w-[35%] md:w-[33%] -mr-3' src ={props.images[1]}></img>
                        <img className='relative  aspect-square md:rotate-3 rounded-full w-[35%] md:w-[33%] ' src ={props.images[2]}></img>
                        <img className='relative  aspect-square md:-rotate-3 rounded-full w-[35%] md:w-[33%]  -ml-3' src ={props.images[3]}></img>

                    </div> :  <div className='flex flex-row justify-center  pt-3'>
                        <img className='relative aspect-square   rounded-full w-[35%] md:w-[33%] -mr-3' src ={props.images[1]}></img>
                        <img className='relative  aspect-square  rounded-full w-[35%] md:w-[33%] ' src ={props.images[2]}></img>
                        <img className='relative  aspect-square  rounded-full w-[35%] md:w-[33%]  -ml-3' src ={props.images[3]}></img>
                    </div>}
                   

                </div>
                <div className='flex gap-3 w-full md:w-1/2 flex-col'>
                    <div className='border-stone-700 6xl:w-11/12 h-fit lg:w-full border-4 rounded-[50px] items-center justify-center mx-auto pb-2'>
                        <div className='md:text-4xl 6xl:text-6xl  text-2xl p-4 font-bold '>Skills and technologies learned</div>
                        {renderSkills(props.skills)}
                    </div>
                    <div className='flex-1'></div>
                    {/* <Link to="/"> */}
                        <button onClick={() => navigate(-1)} className='mx-auto 6xl:w-11/12 w-full lg:w-full h-fit font-thin text-3xl text-neutral-400 border-stone-700 flex flex-row border-4 rounded-[40px]'>

                            < IoReturnUpBack className='mx-2 my-auto opacity-75' size={props.width < 800 ? 40 : props.width * 0.025} /> 
                            <span className='my-auto text-left opacity-75  6xl:text-5xl h-fit'>Back To Experience</span></button>
                        </div>

            </div>
    </div>
  )
}

export default WorkPage