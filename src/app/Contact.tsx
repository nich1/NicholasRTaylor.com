import Image from 'next/image'

export default function Contact() {
    return (
        <div className='py-4 bg-white '>
            <div className="font-bold text-black text-7xl text-center underline underline-offset-8 decoration-red-600"> Get In Touch </div>
            <div className='flex justify-around py-4'>
            <a target="_blank" href="https://github.com/nich1">     
                    <Image  className=''    
                    src="/GitHub.png"
                    width={150}
                    height={150}
                    alt="GitHub"
                /></a> 
                <Image  className=''    
                                        src="/Email.png"
                                        width={150}
                                        height={150}
                                        alt="Email"
                                    />
                <a target='_blank' href="https://www.linkedin.com/in/nichtaylor/">
                <Image  className=''    
                                        src="/linkedin.png"
                                        width={150}
                                        height={150}
                                        alt="LinkedIn"
                                    /></a>
                                    <a target="_blank" href="https://x.com/nich_main?lang=en">
                                    <Image  className=''    
                                        src="/x.png"
                                        width={150}
                                        height={150}
                                        alt="x.com"
                                    /> </a>

                
                                
                          
                

            </div>
            <div className='flex justify-around py-4'>
                
            

                
                

            </div>
            
            
        </div>
    )
}