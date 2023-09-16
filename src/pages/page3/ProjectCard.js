import React from 'react'

const ProjectCard = ({image, name, description, link}) => {
  return (
    <div className='flex border-stone-700 border-4 flex-col hover:bg-zinc-800 hover:cursor-pointer rounded-[45px] h-fit w-full'>
        <a href={link} target="_blank" >
        <div className='flex flex-row content-start'>
            <div className=' p-2 min-h-fit min-w-fit  flex'>
                <img className='h-32 w-32  overflow-hidden m-auto p-1 rounded-full object-cover object-left-top	' src={image}/>
            </div>
            <div className='flex py-4 flex-1 flex-col'>
                <div className='text-xl md:text-2xl lg:text-4xl text-slate-50 font-bold pr-2'>{name}</div>
                <div className='pr-2 leading-8 font-thin text-neutral-400 text-xl md:text-2xl'>{description}</div>

            </div>
        </div></a>
        </div>

  )

}

export default ProjectCard