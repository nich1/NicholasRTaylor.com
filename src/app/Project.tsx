import Image from 'next/image';

interface ProjectProp {
    title: string;
    caption: string;
    description: string;
    src: string;
    alt: string;
}

// Use ProjectProp here instead of CardProps
export default function Project({ alt, title, caption, description, src }: ProjectProp) {
    return (
        <div className='w-full flex justify-center pl-20'>
            <Image
                className=''
                src={src}
                width={200}
                height={100}
                alt={alt}
            />
            <div className='pl-4'>
                <div className="underline underline-offset-8 pb-2 decoration-red-600 text-left text-5xl">{title}</div>
                <div className='text-3xl'>{caption}</div>
                <div className="text-2xl text-neutral-600">{description}</div>
            </div>
        </div>
    );
}
