import SkillCard from './SkillCard'
import Project from './Project'


export default function Projects({id}: {id: string}) {
    return (
        <section id={id}>
        <div className=" bg-neutral-100 w-full text-black">
            <div className="pt-8 font-bold text-center text-red-600 text-7xl">Personal Projects</div>
                        <Project src="/lock.png" alt="bit bastion icon" title="Bit Bastion" caption="CLI Encrypted File Tree + Password Manager" description="Portable encrypted file tree and password manager CLI written in Rust. Using a master password, users can manage their encrypted password manager and file tree. Encrypted with AES-GCM, the SHA256 hashed master password is used as the AES symmetric encryption key that unlocks program functionality. " />
                        <div className='flex text-xl flex-wrap justify-center w-3/4 '>
                                    <SkillCard title="Rust"/>
                                    <SkillCard title="Hashing (SHA256)"/>
                                    <SkillCard title="Symmetric Encryption (AES)"/>

                                    
                        </div>
                        
                        
                        <Project src="/eagle.png" alt="Eagle" title="Eagle Hub" caption="Cross-Platform Mobile App" description="Helps UNT students navigate campus food resources tailored to dietary needs and preferences. School project where we followed an AGILE development methodology."/>
                        <div className='w-3/4 flex text-xl flex-wrap justify-center' >
                                    <SkillCard title="Flutter"/>
                                    <SkillCard title="Dart"/>
                                    <SkillCard title="Google Maps API"/>
                                 </div>
                                 


                        <Project src="/brain.png" alt="brain" title="Nich Neuron" caption="Back-End Server Learning Project" description="Locally hosted personal server and database. Using Go's multithreading tools, it concurrently hosts an FTP server, HTTP server, email server, and a crono module for scheduled server functions. With these functionalities, this server serves similar functionality to Google Drive. No front-end was ever created, tested using Postman." />
                        <div className='flex flex-wrap text-xl justify-center w-3/4 '>
                                    <SkillCard title="JSON"/>
                                    <SkillCard title="REST API"/>
                                    <SkillCard title="Postman"/>
                                    <SkillCard title="Go"/>
                                    <SkillCard title="Gin"/>
                                    
                        </div>
                            
                        
                        <Project src="/internet.png" alt="internet" title="Portfolio Website" caption="Front-End Website" description="Personal portfolio website made with React, NextJS, and Tailwind hosted on AWS. Learned how to host a website, create decent UI, and get some more experience with TypeScript and React" />
                        <div className='justify-center text-xl w-3/4 flex flex-wrap'>
                                    <SkillCard title="AWS"/>
                                    <SkillCard title="React"/>
                                    <SkillCard title="TypeScript"/>
                                    <SkillCard title="Tailwind"/>
                                    <SkillCard title="Next"/>
                                 </div>
                    </div>
        </section>
    )
}