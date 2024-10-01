import AccoladeCard from "./AccoladeCard"

export default function AccoladeList() {
    return (

        <ul className="flex justify-around  bg-white">
            <li>
            <AccoladeCard title="Projects" alt="Project Icon" src="/code2.png" comment="Learning Projects"/>

            </li>
            <li>
                <AccoladeCard title="Education" alt="UNT" src="/unt.jpg" comment="B.S. Computer Science"/>

            </li>
            <li>
            <AccoladeCard title="Certifications" alt="Certificate Icon" src="/certificate.png" comment="AWS Certified"/>

            </li>
        </ul>

    )

}