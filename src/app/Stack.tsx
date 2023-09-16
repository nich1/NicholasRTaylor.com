import Image from "next/image"
import Link from "next/link"
export default function Stack() {
    return (
        <div className="flex justify-evenly pb-40">
            <Link href=""><Image src="/typescript.png" width={150} height={150} alt="TypeScript"/></Link>
            <Link href=""><Image src="/golang.png" width={150} height={150} alt="GoLang"/></Link>

            <Link href=""><Image src="/react.png" width={150} height={150} alt="ReactJS"/></Link>
            <Link href=""><Image src="/nextjs-icon.svg" width={150} height={150} alt="NextJS"/></Link>
            <Link href=""><Image src="/postgresql.png" width={150} height={150} alt="PostgreSql"/></Link>

        </div>
    )
}