import Link from 'next/link'
export default function Navbar() {
    return (
        <nav className="  text-cyan-400 bg-black px-8 py-5  flex justify-between">
            <div className=' text-2xl '>Nicholas R Taylor.com</div>
            <ul className=' text-2xl flex justify-end w-2/5'>
                <li className=' mx-10'><Link href="/projects">Projects</Link></li>
                <li className=' mx-10'><Link href="/blog">Blog</Link></li>
                <li  className=" mx-10 underline underline-offset-8 font-bold  decoration-white">Download CV</li>

            </ul>
        </nav>
    )
}