import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import type { BlogPost } from '../../../types/blog';
import { formatDate } from '../../../utils/dateUtils';

interface BlogPostListProps {
  posts: BlogPost[];
  onEdit: (post: BlogPost) => void;
  onDelete: (postId: string) => void;
}

export function BlogPostList({ posts, onEdit, onDelete }: BlogPostListProps) {
  return (
    <div className="bg-purple-900/30 rounded-xl p-6 border border-purple-500/20">
      <h2 className="text-xl font-semibold mb-6">Blog Posts</h2>
      <div className="space-y-4">
        {posts.map(post => (
          <div
            key={post.id}
            className="bg-black/30 rounded-lg p-4 border border-purple-500/20 hover:border-amber-400/20 transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-white mb-2">{post.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{formatDate(post.date)}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 ml-4">
                <button
                  onClick={() => onEdit(post)}
                  className="p-2 text-gray-400 hover:text-amber-400 transition-colors"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onDelete(post.id)}
                  className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}