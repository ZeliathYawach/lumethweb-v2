import React, { useState } from 'react';
import { PageLayout } from '../../components/layouts/PageLayout';
import { BlogPostList } from './components/BlogPostList';
import { BlogPostEditor } from './components/BlogPostEditor';
import { Plus, AlertCircle } from 'lucide-react';
import type { BlogPost } from '../../types/blog';

// Mock data - In a real app, this would come from an API
const INITIAL_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Top 10 Beauty Trends for 2024',
    excerpt: 'Discover the latest beauty trends that are shaping the industry this year...',
    content: 'Full content here...',
    author: 'Sarah Johnson',
    date: '2024-03-15',
    category: 'Trends',
    imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'AI in Beauty: The Future is Here',
    excerpt: 'How artificial intelligence is revolutionizing personalized beauty recommendations...',
    content: 'Full content here...',
    author: 'Michael Chen',
    date: '2024-03-10',
    category: 'Technology',
    imageUrl: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?auto=format&fit=crop&q=80&w=800',
  },
];

export function AdminDashboard() {
  const [posts, setPosts] = useState<BlogPost[]>(INITIAL_POSTS);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleCreatePost = () => {
    setSelectedPost(null);
    setIsEditing(true);
  };

  const handleEditPost = (post: BlogPost) => {
    setSelectedPost(post);
    setIsEditing(true);
  };

  const handleDeletePost = (postId: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(post => post.id !== postId));
      if (selectedPost?.id === postId) {
        setSelectedPost(null);
        setIsEditing(false);
      }
    }
  };

  const handleSavePost = (post: BlogPost) => {
    if (selectedPost) {
      setPosts(posts.map(p => p.id === post.id ? post : p));
    } else {
      setPosts([...posts, { ...post, id: Date.now().toString() }]);
    }
    setIsEditing(false);
    setSelectedPost(null);
  };

  return (
    <PageLayout title="Blog Admin Dashboard">
      <div className="mb-8 flex justify-between items-center">
        <div className="flex items-center space-x-2 text-amber-400">
          <AlertCircle className="w-5 h-5" />
          <span className="text-sm">Changes are saved locally. In production, these would persist to a database.</span>
        </div>
        <button
          onClick={handleCreatePost}
          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-400 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          <Plus className="w-5 h-5" />
          <span>New Post</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <BlogPostList
          posts={posts}
          onEdit={handleEditPost}
          onDelete={handleDeletePost}
        />
        {isEditing && (
          <BlogPostEditor
            post={selectedPost}
            onSave={handleSavePost}
            onCancel={() => {
              setIsEditing(false);
              setSelectedPost(null);
            }}
          />
        )}
      </div>
    </PageLayout>
  );
}