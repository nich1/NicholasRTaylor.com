'use client';
import Image from 'next/image';
import { useRef } from 'react';
import SkillCard from './SkillCard';
import ContactButton from './ContactButton';

export default function AboutMe() {
    // Specify the type of ref as HTMLDivElement
    const ref = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        // Now ref.current is typed as HTMLDivElement, so scrollIntoView is valid
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="pb-16 w-full bg-white text-black">
            <div className="flex justify-center">
                <button onClick={handleClick}>
                    <Image
                        className="py-3"
                        src="/downarrow.png"
                        width={50}
                        height={50}
                        alt="Scroll Down"
                    />
                </button>
            </div>
            <div className="flex justify-center border-red-600 w-1/3"></div>
            <div className="flex justify-around">
                <div className="w-1/3 pl-8">
                    <div ref={ref} className="text-8xl text-red-600">
                        About Me
                    </div>
                    <div className="font-bold text-left pb-3 text-4xl">Brief Introduction</div>
                    <div className="pb-2 text-xl text-neutral-600">
                        I began my software engineering journey at 10 years old making Minecraft mods and servers in Java. Since then I&apos;ve made myself a full stack developer touching several frameworks, platforms, languages, and technologies.
                    </div>

                    <div className="pb-2 text-xl text-neutral-600">
                        I graduated with a bachelors in science in computer science in July 2025 from the University of North Texas. I&apos;ve interned at 2 companies and have made several personal projects.
                    </div>
                    <div className="text-neutral-600 text-xl">
                        Currently I&apos;m seeking employment in an environment where I can elevate my skills and develop a career.
                    </div>
                    <ContactButton />
                </div>
                <div className="text-xl w-1/3">
                    <div className="text-left font-bold text-4xl">Technologies</div>
                    <div className="text-left pl-1 pt-2 text-neutral-600 text-2xl">Frameworks and Libraries</div>
                    <div className="flex flex-wrap">
                        <SkillCard title="React" />
                        <SkillCard title="Tailwind CSS" />
                        <SkillCard title="Next" />
                        <SkillCard title="Flutter" />
                        <SkillCard title="Gin" />
                        <SkillCard title="NumPy" />
                        <SkillCard title="Pandas" />
                    </div>
                    <div className="text-left pl-1 text-2xl pt-2 text-neutral-600">Languages I&apos;ve Written In</div>
                    <div className="flex flex-wrap">
                        <SkillCard title="C++" />
                        <SkillCard title="Java" />
                        <SkillCard title="Rust" />
                        <SkillCard title="Go" />
                        <SkillCard title="TypeScript" />
                        <SkillCard title="Python" />
                        <SkillCard title="C" />
                        <SkillCard title="C#" />
                        <SkillCard title="JavaScript" />
                        <SkillCard title="SQL" />
                    </div>
                    <div className="text-left pl-1 pt-2 text-neutral-600 text-2xl">Software and Tools</div>
                    <div className="flex flex-wrap">
                        <SkillCard title="AWS" />
                        <SkillCard title="Postgres" />
                        <SkillCard title="Github" />
                        <SkillCard title="JSON" />
                        <SkillCard title="Firebase" />
                    </div>
                </div>
            </div>
        </div>
    );
}
