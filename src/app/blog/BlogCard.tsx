// Type definitions
type Audience = 'Beginner' | 'Intermediate' | 'Experienced';
type Category = 'Technology' | 'Fitness and Health';
type Tag = 'AI' | 'Blockchain' | 'Web' | 'App Dev' | 'Training' | 'Diet' | 'Body Building' | 'Strength';

interface BlogCardProps {
  title: string;

  contentFile: string;
  audience: Audience;
  category: Category;
  tags: Tag[];
  onClick?: () => void;
}

export default function BlogCard({
  title,
  contentFile,
  audience,
  category,
  tags,
  onClick
}: BlogCardProps) {
  // Function to get audience badge color
  const getAudienceColor = (audience: Audience): string => {
    switch (audience) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Experienced':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Function to get category color
  const getCategoryColor = (category: Category): string => {
    switch (category) {
      case 'Technology':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Fitness and Health':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Function to get tag colors
  const getTagColor = (tag: Tag): string => {
    const colors = {
      'AI': 'bg-indigo-100 text-indigo-800',
      'Project': 'bg-purple-100 text-purple-800',
      'Blockchain': 'bg-orange-100 text-orange-800',
      'Web': 'bg-cyan-100 text-cyan-800',
      'App Dev': 'bg-teal-100 text-teal-800',
      'Training': 'bg-pink-100 text-pink-800',
      'Diet': 'bg-lime-100 text-lime-800',
      'Body Building': 'bg-amber-100 text-amber-800',
      'Strength': 'bg-rose-100 text-rose-800'
    };
    return colors[tag] || 'bg-gray-100 text-gray-800';
  };

  // Truncate body text for preview
  const truncateText = (text: string, maxLength: number = 150): string => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 cursor-pointer font-inter group"
      onClick={onClick}
    >
      {/* Header with title and badges */}
      <div className="px-6 py-4 border-b border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-200 tracking-tight mb-3">
          {title}
        </h3>
        
        <div className="flex flex-wrap items-center gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(category)}`}>
            {category}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getAudienceColor(audience)}`}>
            {audience}
          </span>
          {tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className={`px-2 py-1 rounded-full text-xs font-medium ${getTagColor(tag)}`}
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="text-xs text-gray-500 font-medium">
              +{tags.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Content preview */}
      

      
    </div>
  );
}

