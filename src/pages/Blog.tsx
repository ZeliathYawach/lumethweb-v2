import React from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../components/layouts/PageLayout';
import { formatDate } from '../utils/dateUtils';
import type { BlogPost } from '../types/blog';

const FEATURED_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Top 10 Beauty Trends for 2024',
    excerpt: 'Discover the latest beauty trends that are shaping the industry this year...',
    author: 'Sarah Johnson',
    date: '2024-03-15',
    category: 'Trends',
    imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'AI in Beauty: The Future is Here',
    excerpt: 'How artificial intelligence is revolutionizing personalized beauty recommendations...',
    author: 'Michael Chen',
    date: '2024-03-10',
    category: 'Technology',
    imageUrl: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?auto=format&fit=crop&q=80&w=800',
  },
];

export function Blog() {
  return (
    <PageLayout title="Beauty Blog">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {FEATURED_POSTS.map((post) => (
          <article
            key={post.id}
            className="bg-purple-900/30 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-amber-400/20 transition-all duration-300"
          >
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-amber-400 text-sm">{post.category}</span>
                <span className="text-gray-400 text-sm">{formatDate(post.date)}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {post.title}
              </h3>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">By {post.author}</span>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-amber-400 hover:text-amber-300 transition-colors"
                >
                  Read more →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      <div className="text-center">
        <Link
          to="/blog/create"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-400 to-purple-600 text-white rounded-full hover:opacity-90 transition-opacity"
        >
          Write a Blog Post
        </Link>
      </div>
    </PageLayout>
  );
}