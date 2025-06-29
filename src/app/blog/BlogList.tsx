"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // App Router navigation
import BlogCard from "./BlogCard";

// Type definitions to match BlogCard
type Audience = 'Beginner' | 'Intermediate' | 'Experienced';
type Category = 'Technology' | 'Fitness and Health';
type Tag = 'AI' | 'Blockchain' | 'Web' | 'App Dev' | 'Training' | 'Diet' | 'Body Building' | 'Strength';

interface BlogPost {
  title: string;
  contentFile: string;
  audience: Audience;
  category: Category;
  tags: Tag[];
}

export default function BlogList() {
  const router = useRouter();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Filter states
  const [selectedAudience, setSelectedAudience] = useState<Audience | 'All'>('All');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/blog_data/data.json');
        
        if (!response.ok) {
          throw new Error(`Failed to load blog posts: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Validate that data is an array
        if (!Array.isArray(data)) {
          throw new Error('Invalid JSON format: expected an array');
        }
        
        setBlogPosts(data);
        setError(null);
      } catch (err) {
        console.error('Error loading blog posts:', err);
        setError(err instanceof Error ? err.message : 'Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    };

    loadBlogPosts();
  }, []);

  const handleCardClick = (post: BlogPost) => {
    // Convert contentFile to a URL-friendly slug
    // Remove file extension and convert to lowercase with hyphens
    const slug = post.contentFile
      .replace(/\.[^/.]+$/, '') // Remove file extension
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
      .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens

    // Navigate to BlogPage with the post data as query parameters
    const queryParams = new URLSearchParams({
      title: post.title,
      contentFile: post.contentFile,
      audience: post.audience,
      category: post.category,
      tags: JSON.stringify(post.tags)
    });

    router.push(`/blog/${slug}?${queryParams.toString()}`);
  };

  // Filter posts based on selected filters
  const filteredPosts = blogPosts.filter(post => {
    const audienceMatch = selectedAudience === 'All' || post.audience === selectedAudience;
    const categoryMatch = selectedCategory === 'All' || post.category === selectedCategory;
    const tagMatch = selectedTags.length === 0 || selectedTags.some(tag => post.tags.includes(tag));
    
    return audienceMatch && categoryMatch && tagMatch;
  });

  // Get unique values for filter options
  const uniqueAudiences: Audience[] = ['Beginner', 'Intermediate', 'Experienced'];
  const uniqueCategories: Category[] = ['Technology', 'Fitness and Health'];
  const uniqueTags: Tag[] = ['AI', 'Blockchain', 'Web', 'App Dev', 'Training', 'Diet', 'Body Building', 'Strength'];

  const handleTagToggle = (tag: Tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearAllFilters = () => {
    setSelectedAudience('All');
    setSelectedCategory('All');
    setSelectedTags([]);
  };

  if (loading) {
    return (
      <article className="mt-10 max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <div className="p-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog posts...</p>
        </div>
      </article>
    );
  }

  if (error) {
    return (
      <article className="mt-10 max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <div className="p-8 text-center">
          <div className="text-red-500 mb-4">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.996-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Error Loading Posts</h3>
          <p className="text-gray-600">{error}</p>
        </div>
      </article>
    );
  }

  if (blogPosts.length === 0) {
    return (
      <article className="mt-10 max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <div className="p-8 text-center">
          <div className="text-gray-400 mb-4">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Blog Posts Found</h3>
          <p className="text-gray-600">Check back later for new content!</p>
        </div>
      </article>
    );
  }

  return (
    <article className="mt-10 max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Latest Blog Posts</h2>
          {(selectedAudience !== 'All' || selectedCategory !== 'All' || selectedTags.length > 0) && (
            <button
              onClick={clearAllFilters}
              className="text-sm bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full hover:from-red-600 hover:to-pink-600 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
            >
              Clear All
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-5 mb-6 border border-slate-200 shadow-sm">
          <div className="flex flex-wrap items-center gap-6">
            {/* Audience Filter */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-slate-700 min-w-fit">Audience:</span>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedAudience('All')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedAudience === 'All'
                      ? 'bg-gradient-to-r from-slate-700 to-slate-800 text-white shadow-lg transform scale-105'
                      : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-100 hover:shadow-md'
                  }`}
                >
                  All
                </button>
                {uniqueAudiences.map(audience => (
                  <button
                    key={audience}
                    onClick={() => setSelectedAudience(audience)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedAudience === audience
                        ? audience === 'Beginner'
                          ? 'bg-gradient-to-r from-emerald-400 to-green-500 text-white shadow-lg transform scale-105'
                          : audience === 'Intermediate'
                          ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg transform scale-105'
                          : 'bg-gradient-to-r from-rose-400 to-red-500 text-white shadow-lg transform scale-105'
                        : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-100 hover:shadow-md'
                    }`}
                  >
                    {audience}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-slate-700 min-w-fit">Category:</span>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('All')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === 'All'
                      ? 'bg-gradient-to-r from-slate-700 to-slate-800 text-white shadow-lg transform scale-105'
                      : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-100 hover:shadow-md'
                  }`}
                >
                  All
                </button>
                {uniqueCategories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? category === 'Technology'
                          ? 'bg-gradient-to-r from-blue-400 to-cyan-500 text-white shadow-lg transform scale-105'
                          : 'bg-gradient-to-r from-purple-400 to-pink-500 text-white shadow-lg transform scale-105'
                        : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-100 hover:shadow-md'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tags Filter */}
          <div className="flex items-start gap-3 mt-4 pt-4 border-t border-slate-200">
            <span className="text-sm font-semibold text-slate-700 min-w-fit mt-1">Tags:</span>
            <div className="flex flex-wrap gap-2">
              {uniqueTags.map(tag => {
                const isSelected = selectedTags.includes(tag);
                const getTagColor = () => {
                  if (!isSelected) return 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-100 hover:shadow-md';
                  
                  const colors = {
                    'AI': 'bg-gradient-to-r from-indigo-400 to-purple-500 text-white shadow-lg transform scale-105',
                    'Blockchain': 'bg-gradient-to-r from-orange-400 to-red-500 text-white shadow-lg transform scale-105',
                    'Web': 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg transform scale-105',
                    'App Dev': 'bg-gradient-to-r from-teal-400 to-green-500 text-white shadow-lg transform scale-105',
                    'Training': 'bg-gradient-to-r from-pink-400 to-rose-500 text-white shadow-lg transform scale-105',
                    'Diet': 'bg-gradient-to-r from-lime-400 to-green-500 text-white shadow-lg transform scale-105',
                    'Body Building': 'bg-gradient-to-r from-amber-400 to-yellow-500 text-white shadow-lg transform scale-105',
                    'Strength': 'bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow-lg transform scale-105'
                  };
                  return colors[tag] || 'bg-gradient-to-r from-gray-400 to-slate-500 text-white shadow-lg transform scale-105';
                };

                return (
                  <button
                    key={tag}
                    onClick={() => handleTagToggle(tag)}
                    className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${getTagColor()}`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12 bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl border border-slate-200">
            <div className="text-slate-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">No Posts Match Your Filters</h3>
            <p className="text-slate-600">Try adjusting your filters to discover more content.</p>
          </div>
        ) : (
          <>
            <div className="mb-6 flex items-center justify-between">
              <div className="text-sm font-medium text-slate-600 bg-slate-100 px-4 py-2 rounded-full">
                <span className=" font-bold">{filteredPosts.length}</span> of <span className="font-bold">{blogPosts.length}</span> posts
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {filteredPosts.map((post, index) => (
                <BlogCard
                  key={`${post.contentFile}-${index}`}
                  title={post.title}
                  contentFile={post.contentFile}
                  audience={post.audience}
                  category={post.category}
                  tags={post.tags}
                  onClick={() => handleCardClick(post)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </article>
  );
}