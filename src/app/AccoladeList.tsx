import AccoladeCard from "./AccoladeCard"

export default function AccoladeList() {
    return (

        <ul className="flex justify-around  bg-white">
            <li>
            <AccoladeCard title="Projects" alt="Project Icon" src="/code2.png" />

            </li>
            <li>
                <AccoladeCard title="Education" alt="UNT" src="/unt.jpg" />

            </li>
            <li>
            <AccoladeCard title="Experience" alt="Certificate Icon" src="/certificate.png" />

            </li>
        </ul>

    )

}