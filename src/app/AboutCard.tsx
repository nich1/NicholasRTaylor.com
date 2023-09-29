export default function AboutCard(language:string, imageURL:string, comment:string) {
    return (
        <div className="flex-1">
            <p>{language}</p>
            <img src={imageURL} alt="" />
            <div>
            {comment}
            </div>

        </div>
    )
}