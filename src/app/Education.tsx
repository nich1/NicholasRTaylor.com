import SkillCard from "./SkillCard"

export default function Education() {
    return (
        <div className="bg-black text-white">
            
                <div className="flex justify-around py-4 ">
                    <div className="text-left w-1/3">
                        <div className="font-bold text-red-600 text-6xl">Education</div>
                        <div className="pt-2 text-bold text-4xl text-neutral-400 text-left">Major</div>
                        <div className="text-3xl text-left text-white"> B.S. Computer Science</div>
                        <div className=" pt-2 text-bold text-4xl text-neutral-400 text-left">Graduation</div>
                        <div className=" text-left text-3xl text-white"> Summer, 2025</div>
                        
                    </div>
                    <div className="text-left w-1/3">
                    
                    <div className="font-bold text-red-600 text-6xl">Notable Classes</div>
                    <div className='pt-2 text-bold text-xl text-blue-400 text-left justify-left  flex flex-wrap'>
                                    <SkillCard title="Software Engineering"/>
                                    <SkillCard title="Computer Networks"/>
                                    <SkillCard title="Algorithms"/>
                                    <SkillCard title="Systems Programming"/>
                                    <SkillCard title="Linear Algebra"/>
                                    <SkillCard title="Programming Languages"/>
                                    <SkillCard title="Digital Logic"/>
                                    <SkillCard title="Calculus II"/>
                                    <SkillCard title="Assembly Language"/>
                                    <SkillCard title="Data Structures and Algorithms"/>
                                 </div>
                        

                    </div>


                </div>
        </div>
    )
}