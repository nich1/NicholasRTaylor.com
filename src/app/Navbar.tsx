import Link from 'next/link'
export default function Navbar() {
    return (
        <nav className="flex min-h-screen flex-col items-center justify-between p-24">
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/tech'>Tech</Link></li>
                <li><Link href='/fitness'>Fitness</Link></li>
                <li><Link href='/projects'>Projects</Link></li>
            </ul>
        </nav>
    )
}