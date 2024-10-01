import Image from 'next/image'
import Link from 'next/link'


interface CardProps {
    title: string;
    src: string;
    alt: string;
  }

export default function AccoladeCard({alt, title, src}:CardProps){
    return (
        <Link href="/">
        <div className="   decoration-rose-600 underline-offset-8 h-80 w-80  rounded-t-3xl  rounded-b-3xl pt-8   text-white text-center ">
            <ul className='bg-opacity-50  bg-gradient-to-b from-neutral-950  rounded-3xl   to-red-950'>
                <li className=" border-t border-black  rounded-t-3xl text- bg-black  underline underline-offset-8 decoration-red-600 py-2  text-4xl"> {title} </li>
                <li className='flex justify-center'>
                    <Image  className='    py-3'
                        src={src}
                        width={200}
                        height={200}
                        alt={alt}
                    />
                </li>

            </ul>
            
        </div>
        </Link>
    )
}