'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Navbar from '../../Navbar';
import BlogPost from '../BlogPost';

type Audience = 'Beginner' | 'Intermediate' | 'Experienced';
type Category = 'Technology' | 'Fitness and Health';
type Tag = 'AI' | 'Blockchain' | 'Web' | 'App Dev' | 'Training' | 'Diet' | 'Body Building' | 'Strength';

function BlogPageContent() {
  const searchParams = useSearchParams();
  
  // Extract data from query parameters
  const title = searchParams.get('title') || 'Blog Post';
  const contentFile = searchParams.get('contentFile') || '';
  const audience = (searchParams.get('audience') as Audience) || 'Beginner';
  const category = (searchParams.get('category') as Category) || 'Technology';
  const tagsParam = searchParams.get('tags');
  
  // Parse tags from JSON string
  let tags: Tag[] = [];
  if (tagsParam) {
    try {
      tags = JSON.parse(tagsParam);
    } catch (error) {
      console.error('Error parsing tags:', error);
      tags = [];
    }
  }

  // Fix the path - files in public/ are served from root
  // Remove any leading slash and ensure single /blog_content/ prefix
  const cleanContentFile = contentFile.replace(/^\/+/, ''); // Remove leading slashes
  const correctedContentFile = cleanContentFile.startsWith('blog_content/') 
    ? `/${cleanContentFile}` 
    : `/blog_content/${cleanContentFile}`;

  return (
    <main className="scroll-smooth bg-slate-200 min-h-screen">
      <Navbar/>   
      <BlogPost 
        title={title}
        contentFile={correctedContentFile}
        audience={audience}
        category={category}
        tags={tags}
      />
    </main>
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={
      <main className="scroll-smooth bg-slate-200">
        <Navbar/>
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </main>
    }>
      <BlogPageContent />
    </Suspense>
  );
}