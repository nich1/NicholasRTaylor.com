export default function MiddleHome() {
    // old color for first div: bg-slate-900 bg-[url('bg.jpg')]
    return (
        <div className="px-40 pt-32 pb-40 flex justify-left w-full">
            <div className=" backgroun">
                <div className=" my-4 text-9xl">Hey I&apos;m <span className="text-cyan-400 font-bold">Nick</span>, </div>
                <div className="  text-9xl">Web Developer,</div>
                <p className="  text-5xl underline">Computer Science student</p>

            </div>
            <div>
                <ul className=" pl-40 pt-16 text-5xl text-white-400">
                    <li className="my-5">- Web Servers</li>
                    <li className="my-5">- Interfaces</li>
                    <li className="my-5">- Databases</li>
                </ul>
            </div>
            
        </div>
        
    )
}