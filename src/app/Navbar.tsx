import Link from 'next/link'
export default function Navbar() {
    return (
        <nav className="  text-cyan-400 shadow-2xl bg-slate-900 px-8 py-5  flex justify-between">
            <div className=' hover:underline hover:text-white text-4xl '><Link href="/">Nicholas R Taylor.com</Link></div>
            <ul className=' text-2xl flex justify-end w-2/5'>
                <li className='hover:underline hover:text-white text-3xl mx-6'><Link href="/contact">Contact</Link></li>
                <li className=' hover:underline hover:text-white text-3xl mx-6'><Link href="/projects">Projects</Link></li>
                <li className=' hover:underline hover:text-white text-3xl mx-6'><Link href="/blog">Blog</Link></li>
                <li  className=" hover:text-white mx-6 underline underline-offset-8 font-bold  decoration-white">Download CV</li>
            </ul>
        </nav>
    )
}