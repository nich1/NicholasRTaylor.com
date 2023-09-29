export default function Footer() {
    return (
        <footer className="flex  flex-col items-center  p-24">
            <p className=" text-2xl">
                Made By: Nick Taylor
            </p>
            <p className=" text-lg">NichTaylor516@gmail.com</p>
            <p className=" text-xl">Technologies Used</p>
            <ul className=" text-center">
                <li>TypeScript</li>
                <li>ReactJS</li>
                <li>Tailwind CSS</li>
                <li>NextJS</li>
                <li>Postgres DB</li>
                <li>AWS RDS</li>
                <li>Prisma ORM</li>
            </ul>
        </footer>
    )
}