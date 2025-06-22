import AccoladeCard from "./AccoladeCard"

export default function AccoladeList() {
    return (

        <ul className="flex justify-around  bg-white">
            <li>
                <a href="#projects">
                    <AccoladeCard title="Projects" alt="Project Icon" src="/code2.png" />
                </a>
            </li>
            <li>
                <a href="#education">
                    <AccoladeCard title="Education" alt="UNT" src="/unt.jpg" />
                </a>
            </li>
            <li>
                <a href="#experience">
                    <AccoladeCard title="Experience" alt="Certificate Icon" src="/certificate.png" />
                </a>
            </li>
        </ul>

    )

}