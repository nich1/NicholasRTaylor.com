// No React import needed for Server Components

// Type definitions
type Audience = 'Beginner' | 'Intermediate' | 'Experienced';
type Category = 'Technology' | 'Fitness and Health';
type Tag = 'AI' | 'Blockchain' | 'Web' | 'App Dev' | 'Training' | 'Diet' | 'Body Building' | 'Strength';

interface BlogPostProps {
  title: string;
  body?: string; // Optional for backward compatibility
  htmlContent?: string; // New option for HTML content
  contentFile?: string; // New option for external HTML file
  audience: Audience;
  category: Category;
  tags: Tag[];
}

export default function BlogPost({ 
  title, 
  body,
  htmlContent,
  contentFile,
  audience, 
  category, 
  tags 
}: BlogPostProps) {
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

  return (
    <article className="mt-10 max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-4">
          {title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-3">
          <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(category)}`}>
            {category}
          </span>
          <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getAudienceColor(audience)}`}>
            {audience}
          </span>
          
          {/* Tags */}
          <span className="text-sm font-medium text-gray-600"></span>
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-xs font-medium ${getTagColor(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          {/* Option 1: HTML content directly - expands naturally */}
          {htmlContent && (
            <div 
              dangerouslySetInnerHTML={{ __html: htmlContent }}
              className="w-full overflow-visible"
              style={{ minHeight: 'auto', height: 'auto' }}
            />
          )}
          
          {/* Option 2: External HTML file with dynamic height */}
          {contentFile && (
            <iframe 
              src={contentFile}
              className="w-full border-0 overflow-hidden"
              style={{ 
                height: '100vh', // Start with viewport height
                minHeight: '500px',
                resize: 'vertical' // Allow manual resizing if needed
              }}
              title="Blog content"
              onLoad={(e) => {
                // Auto-resize iframe to content height
                const iframe = e.target as HTMLIFrameElement;
                try {
                  // Wait a bit for content to load
                  setTimeout(() => {
                    const contentHeight = iframe.contentWindow?.document.body.scrollHeight;
                    if (contentHeight && contentHeight > 0) {
                      iframe.style.height = (contentHeight + 50) + 'px'; // Add some padding
                    }
                  }, 100);
                } catch (error) {
                  // Cross-origin restrictions may prevent access
                  console.log('Cannot auto-resize iframe due to cross-origin restrictions');
                  // Fallback: set a reasonable height
                  iframe.style.height = '80vh';
                }
              }}
            />
          )}
          
          {/* Option 3: Enhanced text with proper line breaks */}
          {!htmlContent && !contentFile && body && (
            <div>
              {body.split('\n').map((paragraph, index) => {
                if (paragraph.trim() === '') {
                  return <br key={index} />;
                }
                // Handle tabs as indentation
                const indentLevel = paragraph.match(/^\t*/)?.[0].length || 0;
                const content = paragraph.replace(/^\t*/, '');
                
                return (
                  <p 
                    key={index} 
                    className="mb-4"
                    style={{ marginLeft: `${indentLevel * 2}rem` }}
                  >
                    {content}
                  </p>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

// Example usage - you can remove this from your actual component file
// This is just for demonstration in the artifact
function BlogPostExample() {
  // Example 1: Enhanced text with line breaks and tabs
  const textExample: BlogPostProps = {
    title: "Weight Loss Fundamentals",
    body: `People often have a hard time cutting weight\n\nThis is another line too\n\n\tThis line is indented\n\t\tThis line is double indented\n\nBack to normal text`,
    audience: 'Beginner',
    category: 'Fitness and Health',
    tags: ['Diet', 'Training']
  };

  // Example 2: HTML content - this will expand automatically
  const htmlExample: BlogPostProps = {
    title: "Advanced Web Development",
    htmlContent: `
      <h2 style="margin-top: 0;">Introduction to Modern Web Dev</h2>
      <p>This is a paragraph with <strong>bold text</strong> and <em>italic text</em>.</p>
      <ul>
        <li>First list item</li>
        <li>Second list item</li>
        <li>Third list item</li>
      </ul>
      <h3>Code Example</h3>
      <pre style="background-color: #f5f5f5; padding: 1rem; border-radius: 0.5rem;"><code>const hello = "world";
console.log(hello);</code></pre>
      <p>Here's a longer content section to demonstrate how the height expands automatically:</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <h4 style="margin: 10px 0;">Reduced Spacing Header</h4>
      <p>This header has reduced spacing as requested. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>And here's even more content to show the automatic expansion working properly.</p>
    `,
    audience: 'Intermediate',
    category: 'Technology',
    tags: ['Web', 'App Dev']
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 space-y-8">
      <BlogPost {...textExample} />
      <BlogPost {...htmlExample} />
    </div>
  );
}

export { BlogPostExample };