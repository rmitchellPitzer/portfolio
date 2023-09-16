import React from 'react'
import {Link, useNavigate } from 'react-router-dom'

const WorkCard = ({image, name, title, date, description, skills, link}) => {
  return (
    <Link to={link}>
    <div className='flex flex-col hover:bg-zinc-800 hover:cursor-pointer border-stone-700 rounded-[50px] border-4 h-fit w-full'>
        <div className='flex flex-row content-start'>
            <div className='w-40 h-40 flex'>
              <img className='w-32 h-32 m-auto p-1' src={image}/>
            </div>
            <div className='flex py-4 flex-col'>
                <div className='text-4xl text-slate-50 font-bold pr-2'>{name}</div>
                <div className='text-3xl font-thin pr-2'>{title}</div>
                <div className='font-thin text-3xl pr-2'>{date}</div>
            </div>
        </div>
        <div className='px-5 text-center md:text-left leading-8 font-thin  text-2xl'>{description}</div>
        <div className='pb-2 text-center px-5 leading-8 font-thin italic text-2xl'>{skills}</div>
    </div></Link>
  )
}

export default WorkCard