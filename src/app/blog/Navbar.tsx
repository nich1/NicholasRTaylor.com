import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 text-gray-800 shadow-sm px-8 py-3 flex justify-end">
            <ul className='text-2xl flex justify-end'>
                <li className="mx-6 text-4xl underline-offset-8">
                    <Link href="/" className="hover:text-gray-600 transition-colors duration-200">Portfolio</Link>
                </li>
                <li className="mx-6 text-4xl underline underline-offset-8 decoration-gray-400">
                    <a target="_blank" href="Resume2025.pdf" className="hover:text-gray-600 hover:decoration-gray-600 transition-colors duration-200">Résumé</a>
                </li>
            </ul>
        </nav>
    )
}

// <li className='hover:underline underline-offset-8 decoration-gray-400 text-2xl mx-6'><a target="_blank" href="/projects">Projects</a></li>