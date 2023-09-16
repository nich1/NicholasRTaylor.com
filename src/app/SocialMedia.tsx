import Image from "next/image"
import Link from "next/link"
export default function SocialMedia() {
    return (
        <div className="flex justify-evenly">
            <Link href=""><Image src="/github.png" width={100} height={100} alt="Github"/></Link>
            <Link href=""><Image src="/twitter.png" width={100} height={100} alt="Github"/></Link>
            <Link href=""><Image src="/discord.png" width={100} height={100} alt="Discord"/></Link>
        </div>
    )
}