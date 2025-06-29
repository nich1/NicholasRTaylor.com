import Link from "next/link"
export default function Navbar() {
    return (
        <nav className="  bg-gradient-to-b from-neutral-200 to-white text-black  text-white-400 shadow-2xl bg-black px-8  py-3 flex justify-end">
            <ul className=' text-2xl flex justify-end'>
            <li  className=" mx-6 text-4xl hover:text-gray-600 underline-offset-8 "><Link href="/blog">Blog</Link></li>

                <li  className=" hover:underline mx-6 text-4xl underline underline-offset-8 hover:text-gray-600 decoration-red-600 hover:decoration-red-700"><a target="_blank" href="Resume2025.pdf">Résumé</a></li>
            </ul>
        </nav>
    )
}

// <li className=' hover:underline underline-offset-8 decoration-red-600 text-2xl mx-6'><a target="_blank" href="/projects">Projects</a></li>
