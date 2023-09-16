import React from 'react'
import image1 from '../../media/Rectangle 65.jpg'
import image2 from '../../media/Rectangle 67.jpg'
import image3 from '../../media/Rectangle 68.jpg'

const Page2 = () => {
  return (
    <div className='text-slate-50 w-full h-fit bg-black justify-center flex font-hind'>
        <div className='relative w-11/12 bg-zinc-900 h-fit'>
            <div className='flex flex-col md:flex-row gap-5'>
                <div className='w-11/12 md:w-1/2 flex flex-col md:gap-0 gap-3 m-2 md:m-8'>
                    <span className='text-5xl md:text-7xl 2xl:text-8xl 4xl:text-9xl 6xl:text-10xl font-bold'>About Me</span>
                    <div className='md:leading-relaxed 2xl:leading-[100%] 2xl:text-5xl 4xl:text-6xl 6xl:text-8xl leading-tight font-thin text-3xl text-neutral-400 w-full'>I’m a Computer Science student graduating in 2024 from Pitzer College. I was drawn to Pitzer due to it’s environmental analysis and social justice programs, but soon fell in love with Computer Science at Harvey Mudd College. Ever since then I’ve been using my passions in full stack development and machine learning to help bring a positive change.
Most days you can find me tinkering with electronics in the Harvey Mudd Makerspace, tutoring others in CS, and on weekends at the climbing gym or skiing at Mammoth!
                    </div>
                </div>
                <div className='w-7/12 md:py-3 md:flex-col md:w-5/12 flex gap-0 flex-row items-center justify-center m-auto'>
                    <img alt='A portrait of Ryder Mitchell in front of the McGregor Computer Science building at Harvey Mudd College.' className='relative lg:w-[56%] md:w-[80%] md:-rotate-3 rounded-full w-[58%] -mr-3  md:m-auto' src={image1} />
                    <img alt='A selfie of Ryder Mitchell taken with one of the creators of Outer Wilds Alex Beachaum.' className= 'relative lg:w-[56%] md:w-[80%] md:rotate-3 md:-mt-14 rounded-full w-[58%]  md:m-auto' src={image3} />
                    <img alt='A selfie of Ryder Mitchell in a ski jacket and goggles taken while snowing.' className='relative lg:w-[56%] md:w-[80%] md:-rotate-3 md:-mt-14 rounded-full w-[58%] md:m-auto -ml-3' src={image2} />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Page2

{/* <div className='w-5/12 items-center justify-center m-auto'>
                    <img className='relative rounded-full w-[52%] -rotate-3 m-auto' src={image1} />
                    <img className= 'relative rounded-full w-[52%] -mt-14 rotate-3 m-auto' src={image3} />
                    <img className='relative rounded-full w-[52%] -mt-14 -rotate-3 m-auto' src={image2} />
                </div> */}