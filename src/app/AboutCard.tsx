export default function AboutCard(language:string, imageURL:string, comment:string) {
    return (
        <div className="flex-1">
            <p>{language}</p>
            <div>
            {comment}
            </div>

        </div>
    )
}