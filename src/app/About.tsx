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
                    <div className=" text-cyan-400  ">
                        <div className=" py-6 text-center text-8xl">What I've Worked With</div>
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
                                <div className="  flex-1">Gin</div>
                                <div className="  flex-1">Pandas</div>
                                <div className="  flex-1">NumPy</div>
                        </div>


                        <div className="flex text-6xl mt-20">
                                <div className=" border-r  text-7xl  flex-1 text-cyan-400">Solutions</div>
                                <div className="  flex-1">AWS RDS</div>
                               
                                <div className="  flex-1">Vercel</div>
                                <div className="  flex-1">Postgres</div>
                        </div>
                        
                        
                        
                        
                        



                        <div className=" mt-24 mb-8 text-8xl text-cyan-400">My Journey</div>
                        <p className=" ">
                            I began my coding journey 10 years ago at age 10. I began learning Java by messing around with different API's for manking Minecraft™ mods.
                            While I never made anything crazy, it kickstarted my passion for coding, procedural thinking, and problem solving. I'd even argue that it changed the way I view the world.
                            When I went into middle school, I took various classes that taught me HTML, CSS, and basic computer hardware. 

                            Throughout highschool I learned C# with Unity in my Game Programming classes, and I more formally learned the Java programming language in traditional computer science classes.
                            In my free time I also learned Python3 while learning basic data structures and algorithms (Linked Lists, BST, Hashes, Divide and Conquer Techniques, etc.)
                        </p>
                        <p className="py-6">
                            The summer before my freshman year, I learned C++ because I heard that was the language primarily taught at the school I was going to.
                            This is where a massive gap in my knowledge became filled related to computer memory and pointers. I found C++ to be much more enjoyable and useful than Java.
                            My freshman year was a breeze after having spent the summer learning C++, there were no new concepts that I hadn't learned on my own. I was fortunate enough to have gotten
                            an internship this summer, and I learned a lot of database concepts working with some of the big Oracle guys at Viscosity NA. Also during that summer
                            I learned the Rust language in my free time, as I found the ownership system in the language to be an interesting method of handling memory.
                        </p>
                        <p className=" py-6">
                            When I came into college, I was still limited in perception of the computer science world. All I knew was there were
                            a bunch of different programming languages that each had their benefits. After my internship, I had learned to think
                            in terms of frameworks and architecture rather than programming languages. From here on out, instead of broadening my knowledge
                            by "learning a new programming language," instead I would learn a new architecture, concept, or framework.
                        </p>
                        <p className="py-6">
                            In my sophmore year, I decided to begin a personal project called the Nich Neuron. While I didn't complete the project,
                            the concepts I learned along the way was invaluable. Most notably marshalling and
                            unmarshalling JSON files, REST, and back-end frameworks. The back-end framework I learned was <a href="https://github.com/gin-gonic/gin" target="_blank" className=" font-bold underline">Gin</a> written for Golang, a language I acquired a strong taste for at the end of my "Language Learning Arc."
                        </p>
                        <p className="py-6">
                            I am now a Junior, and this year I've been focusing on creating several projects with my accumulated knowledge over the years. I've found with time that I enjoy and gravitate towards web development, and I am excited to create more web development related projects this year. Some of the tools I've become much more familiar with this
                
                            year have been AWS, Postgres, React, Next, Golang, and C. You can find out more about the projects I've worked on in the <Link href="/projects" className=" font-bold underline">projects tab</Link>. You can contact and connect with me in the <Link href="/contact" className=" font-bold underline">contact tab</Link>.
                        </p>
                            

                    </div>
                </div>
            </div>
        </div>
        
    )
}