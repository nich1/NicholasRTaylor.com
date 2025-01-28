export default function Navbar() {
    return (
        <nav className="  bg-gradient-to-b from-neutral-200 text-black to-white text-white-400 shadow-2xl bg-black px-8  py-3 flex justify-end">
            <ul className=' text-2xl flex justify-end'>
                <li  className=" hover:underline mx-6 text-4xl underline underline-offset-8 decoration-red-600"><a target="_blank" href="Resume2025.pdf">Resume</a></li>
            </ul>
        </nav>
    )
}

// <li className=' hover:underline underline-offset-8 decoration-red-600 text-2xl mx-6'><a target="_blank" href="/projects">Projects</a></li>
