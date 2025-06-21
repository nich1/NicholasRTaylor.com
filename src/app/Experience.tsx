import SkillCard from "./SkillCard"

export default function Education() {
    return (
        <div className="bg-black text-white">
            
                <div className="flex justify-around py-4 ">
                    <div className="text-left w-1/3">
                        <div className="font-bold text-red-600 text-6xl">Experience</div>
                        <div className="pt-2 text-bold text-4xl text-neutral-400 text-left">Internship 2025</div>
                        <div className="text-3xl text-left text-white"> Rocktop.io</div>
                        <div className=" pt-2 text-bold text-4xl text-neutral-400 text-left">Internship 2022</div>
                        <div className=" text-left text-3xl text-white"> Viscosity NA</div>
                        
                    </div>
                    <div className="text-left w-1/3">
                    
                    <div className="font-bold text-neutral-400 text-4xl">Rocktop.io</div>
                    <div className="font-bold text-white text-2xl">Application Development & Generative AI</div>

                        <div className='pt-2 text-bold text-xl text-blue-400 text-left justify-left  flex flex-wrap'>
                            <SkillCard title="Generative AI"/>
                            <SkillCard title="VsCode Extension"/>
                            <SkillCard title="CLI Tool"/>
                            <SkillCard title="Azure DevOps Extension"/>
                            <SkillCard title="Angular"/>
                            <SkillCard title="C#"/>
                            <SkillCard title="Python"/>
                        </div>
                    
                        <div className="font-bold text-neutral-400 text-4xl">Viscosity NA</div>
                    <div className="font-bold text-white text-2xl">Software Engineer</div>

                        <div className='pt-2 text-bold text-xl text-blue-400 text-left justify-left  flex flex-wrap'>
                            <SkillCard title="Incorta Cloud"/>
                            <SkillCard title="SQL"/>
                            <SkillCard title="Python"/>


                        </div>

                    
                    
                        

                    </div>


                </div>
        </div>
    )
}