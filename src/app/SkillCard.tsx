interface SkillCardProps {
    title: string;
  }
  export default function SkillCard({title}:SkillCardProps) {
    
    return (
        <div className="bg-neutral-200 mx-2 mb-3 border-white rounded-lg text-neutral-800">
          <div className="px-4 text-center ">
          {title}
          </div>
          </div>
    )
}