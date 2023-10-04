import { Oxygen } from "next/font/google";
import Link from 'next/link'

import AboutCard from "./AboutCard";

const oxygen = Oxygen({
  subsets: ['latin'],
  weight: ['400']
})

export default function About() {
    return (
        <div className={oxygen.className}>
            <div className="flex justify-end  w-full">
                <div className=" text-center  bg-slate-900 shadow-2xl  ">
                    {/*
                    
                    <div className=" text-cyan-400  ">
                        <div className=" py-6 text-center text-8xl">What I&apos;ve Worked With</div>
                    </div>
                    <div className=" mx-40   text-3xl ">
                        <div className="flex text-6xl">
                                <div className=" border-r  text-7xl  flex-1 text-cyan-400">Languages</div>
                                <div className="  flex-1">C++
                                </div>
                               
                                <div className="  flex-1">Go</div>
                                <div className="  flex-1">TypeScript</div>
                        </div>
                        <div className="flex text-5xl">
                            <div className="  flex-1">      </div>
                            <div className="  flex-1">Python
                            </div>
                            <div className="  flex-1">C#</div>
                            <div className="  flex-1">Java</div>
                            <div className="  flex-1">Rust</div>
                            
                        </div>


                        <div className="  mt-20 flex text-6xl">
                               
                                <div className="  flex-1">React</div>
                                <div className="  flex-1">Next</div>
                                <div className="  flex-1">Prisma</div>


                                <div className=" border-l  text-7xl  flex-1 text-cyan-400">Frameworks and Libraries</div>

                        </div>
                        <div className="  flex text-5xl">
                                <div className="  flex-1">Auth</div>
                                <div className="  flex-1">Gin</div>
                                <div className="  flex-1">Svelte</div>
                                <div className="  flex-1">Pandas</div>
                                <div className="  flex-1">NumPy</div>
                        </div>


                        <div className="flex text-6xl mt-20">
                                <div className=" border-r  text-7xl  flex-1 text-cyan-400">Solutions</div>
                                <div className="  flex-1">AWS RDS</div>
                               
                                <div className="  flex-1">Vercel</div>
                                <div className="  flex-1">Postgres</div>
                        </div>
                        */}
                        
                        
                        
                        



                        <div className="  mb-8 text-8xl text-cyan-400">About Me</div>
                        <p className=" px-60 text-4xl ">
                            I&apos;m a computer science junior at the University of North Texas. I&apos;ve been coding since I was a kid. The foundations
                            I&apos;ve built in my youth have been vital to my current knowledge of Web Development and Software Engineering. 
                            I&apos;m currently looking for internship and employment opportunities. The tools I&apos;ve learned to make this website are TypeScript/JavaScript,
                            AWS (Amplify and RDS), Prisma ORM, and Postgres database. While I have been learning frameworks and solutions related to
                            Full Stack Web Development and Software Engineering, I am open to all opportunities. 
                        </p>
                        <p className=" py-16 px-60 text-4xl ">
                            I believe in a fine balance between cutting edge technologies and technologies that have stood the test of time and have strong ecosystems. While new technologies are typically
                            worth learning, having secure, industry proven 
                            technologies is what I aim to use in production-level products. This is a mentality shift I&apos;ve had to make in recent years, 
                            as I found myself learning new concepts and technologies that were conceptually powerful, and practically useful, yet without
                            a strong development community, it can be difficult to make direct swaps with currently existing solutions.
                            Instead, I now monitor the communities of newer technologies while passively learning new solutions.
                        </p>
                        
                        
                        
                            

                    </div>
                </div>
            </div>
        
    )
}
