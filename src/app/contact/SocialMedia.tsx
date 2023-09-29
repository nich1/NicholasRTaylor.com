import Image from "next/image"
import Link from "next/link"
export default function SocialMedia() {
    return (
        <div className=" min-w-full">
            <div className=" mt-28 min-w-full  text-center text-5xl flex flex-row justify-around ">
                <div className=" text-center justify-center w-60"><div className=" text-cyan-400">Discord</div>
                    <div className="py-4 ">_nich1</div>
                    <Image
                        src="/discord.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                </div>
                
                <div className="  flex-1 text-center  w-60"><a href="mailto:nichtaylor516@gmail.com"><div className=" text-cyan-400">Email</div>
                    <div className=" py-8 underline">NichTaylor516@gmail.com</div>
                    
                    <div className="flex justify-center" >
                        <Image
                            src="/email.png"
                            width={180}
                            height={200}
                            alt="email"
                        />
                    </div>
                    </a>
                    
                </div>
                
                <a target="_blank" href="https://www.linkedin.com/in/nichtaylor/"><div className=" text-center justify-center w-60"><div className=" text-cyan-400">LinkedIn</div>
                    <div className="py-4 underline">  nichtaylor</div>
                    <Image 
                        
                        src="/li.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                </div></a>

            </div>
            <div className=" mt-28 min-w-full  text-center text-5xl flex flex-row justify-around ">
                
                
                <div className="  flex-1 text-center  w-60"><a target="_blank" href="https://github.com/nich1"><div className=" text-cyan-400">GitHub</div>
                    <div className=" py-8 underline">nich_1</div>
                    
                    <div className="flex justify-center" >
                        <Image
                            src="/github.png"
                            width={180}
                            height={200}
                            alt="email"
                        />
                    </div>
                    </a>
                    
                </div>
                
                <div className="  flex-1 text-center  w-60"><a target="_blank" href="https://twitter.com/nich_main"><div className=" text-cyan-400">Twitter</div>
                    <div className=" py-8 underline">@nich_main</div>
                    
                    <div className="flex justify-center" >
                        <Image
                            src="/twitter.png"
                            width={180}
                            height={200}
                            alt="email"
                        />
                    </div>
                    </a>
                </div>

            </div>
            
        </div>
        
    )
}