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
                
                <div className="  flex-1 text-center  w-60"><div className=" text-cyan-400">Email</div>
                    <div className=" py-8 underline"><a href="mailto:nichtaylor516@gmail.com">NichTaylor516@gmail.com</a></div>
                    
                    <div className="flex justify-center" >
                        <Image
                            src="/email.png"
                            width={180}
                            height={200}
                            alt="email"
                        />
                    </div>
                    
                </div>
                
                <div className=" text-center justify-center w-60"><div className=" text-cyan-400">LinkedIn</div>
                    <div className="py-4 underline"> <a target="_blank" href="https://www.linkedin.com/in/nichtaylor/">nichtaylor</a></div>
                    <Image 
                        
                        src="/linkedin.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                </div>

            </div>
            <div className=" mt-28 min-w-full  text-center text-5xl flex flex-row justify-around ">
                
                
                <div className="  flex-1 text-center  w-60"><div className=" text-cyan-400">GitHub</div>
                    <div className=" py-8 underline"><a target="_blank" href="https://github.com/nich1">nich_1</a></div>
                    
                    <div className="flex justify-center" >
                        <Image
                            src="/github.png"
                            width={180}
                            height={200}
                            alt="email"
                        />
                    </div>
                    
                </div>
                
                <div className="  flex-1 text-center  w-60"><div className=" text-cyan-400">Twitter</div>
                    <div className=" py-8 underline"><a target="_blank" href="https://twitter.com/nich_main">@nich_main</a></div>
                    
                    <div className="flex justify-center" >
                        <Image
                            src="/twitter.png"
                            width={180}
                            height={200}
                            alt="email"
                        />
                    </div>
                    
                </div>

            </div>
            
        </div>
        
    )
}