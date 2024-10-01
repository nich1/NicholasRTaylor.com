'use client'
import Image from 'next/image'
import Link from 'next/link'
import {useRef} from 'react';
import SkillCard from './SkillCard';
import ContactButton from './ContactButton';


export default function AboutMe() {
    const ref = useRef(null);
    const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
    };
    return (
        <div className="  pb-16 w-full bg-white text-black">
            <div className="flex justify-center">
                <button onClick={handleClick}>
            <Image  className='py-3'
                        src="/downarrow.png"
                        width={50}
                        height={50}
                        alt="Scroll Down"
                    /></button>
            </div>
            <div className='flex justify-center border-red-600 w-1/3' ></div>
            <div className='flex justify-around'> 
                <div className='w-1/3 pl-8'>
                <div ref={ref} className='text-8xl text-red-600'>About Me</div>
                    <div  className=' font-bold text-left pb-3 text-4xl'>Brief Introduction</div> 
                    <div className='pb-2 text-xl text-neutral-600'>I&aposve always been fascinated by software that deals with the internet. I&aposve created a handful of projects to demonstrate some of my knowledge.</div>
                    
                    <div className='pb-2 text-xl text-neutral-600'>I&aposm in my senior year at the University of North Texas.</div>
                    <div className="text-neutral-600 text-xl">
                        Currently seeking internship experience, employment, or an environment where I can grow within the industry.</div>
                    <ContactButton/>
                </div>
                <div className=' text-xl w-1/3'>
                    <div className='text-left font-bold text-4xl'>Technologies</div> 
                    <div className='text-left pl-1 pt-2 text-neutral-600 text-2xl'>Frameworks and Libraries</div>
                    <div className='flex flex-wrap'>
                        <SkillCard title="React"/>
                        <SkillCard title="Tailwind CSS"/>
                        <SkillCard title="Next"/>
                        <SkillCard title="Prisma"/>
                        <SkillCard title="Gin"/>
                        <SkillCard title="NumPy"/>
                        <SkillCard title="Pandas"/>

                    </div>
                        <div className='text-left pl-1 text-2xl pt-2 text-neutral-600'>Languages I&aposve Written In</div>
                    <div className='flex flex-wrap'>
                        <SkillCard title="C++"/>
                        <SkillCard title="Java"/>   
                        <SkillCard title="Rust"/>  
                        <SkillCard title="Go"/>
                        <SkillCard title="TypeScript"/>
                        <SkillCard title="Python"/>
                        <SkillCard title="C"/>
                        <SkillCard title="C#"/>   
                        <SkillCard title="JavaScript"/>
                        <SkillCard title="SQL"/>
                    </div>
                    <div className='text-left pl-1 pt-2 text-neutral-600 text-2xl'>Software and Tools</div>
                    <div className='flex flex-wrap'>
                        <SkillCard title="AWS"/>
                        <SkillCard title="Postgres"/>
                        
                        <SkillCard title="Github"/>
                        <SkillCard title="JSON"/>
                        <SkillCard title="Firebase"/>

                    </div>
                    
                    
                    

                </div>
            </div>
            
        
        </div>
    )
}