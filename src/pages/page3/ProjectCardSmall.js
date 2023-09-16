import React from 'react'

const ProjectCardSmall = ({image, name, description, link}) => {
  return (
    <div className='flex border-stone-700 border-4 flex-col hover:bg-zinc-800 hover:cursor-pointer rounded-[45px] h-fit w-full'>
        <a href={link} target="_blank" >
        <div className='flex flex-col content-start'>
            <div className=' p-2 min-h-fit min-w-fit flex-row flex'>
                <div className='h-20 w-20 xs:h-32 xs:w-32 flex-shrink-0'>
                    <img className='h-20 w-20 xs:h-32 xs:w-32   overflow-hidden m-auto p-1 rounded-full object-cover object-left-top	' src={image}/>
                </div>
                <div className='text-xl items-center justify-center p-2 my-auto md:text-2xl lg:text-4xl text-slate-50 font-bold'>{name}</div>
            </div>
            <div className='flex text-center items-center justify-center p-2  leading-8 font-thin text-neutral-400 text-xl md:text-2xl'>
                <p >{description}</p>
            </div>
        </div></a>
        </div>

  )

}

export default ProjectCardSmall