import Link from 'next/link'
export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/tech'>Tech</Link></li>
                <li><Link href='/'>Fitness</Link></li>


            </ul>
        </nav>
    )
}