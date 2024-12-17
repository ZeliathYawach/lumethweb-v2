import React, { useState, useEffect } from 'react';
import { Save, X } from 'lucide-react';
import type { BlogPost } from '../../../types/blog';

interface BlogPostEditorProps {
  post: BlogPost | null;
  onSave: (post: BlogPost) => void;
  onCancel: () => void;
}

const CATEGORIES = ['Trends', 'Technology', 'Tips', 'Business', 'Tutorials', 'News'];

export function BlogPostEditor({ post, onSave, onCancel }: BlogPostEditorProps) {
  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    imageUrl: '',
    author: '',
    date: new Date().toISOString().split('T')[0],
  });

  useEffect(() => {
    if (post) {
      setFormData(post);
    }
  }, [post]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: post?.id || Date.now().toString(),
      title: formData.title || '',
      excerpt: formData.excerpt || '',
      content: formData.content || '',
      category: formData.category || '',
      imageUrl: formData.imageUrl || '',
      author: formData.author || '',
      date: formData.date || new Date().toISOString().split('T')[0],
    });
  };

  return (
    <div className="bg-purple-900/30 rounded-xl p-6 border border-purple-500/20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">
          {post ? 'Edit Post' : 'Create New Post'}
        </h2>
        <button
          onClick={onCancel}
          className="p-2 text-gray-400 hover:text-red-400 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-black/30 border border-purple-500/20 rounded-lg focus:outline-none focus:border-amber-400 text-white"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-black/30 border border-purple-500/20 rounded-lg focus:outline-none focus:border-amber-400 text-white"
            required
          >
            <option value="">Select a category</option>
            {CATEGORIES.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Excerpt
          </label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            rows={2}
            className="w-full px-4 py-2 bg-black/30 border border-purple-500/20 rounded-lg focus:outline-none focus:border-amber-400 text-white"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Content
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-2 bg-black/30 border border-purple-500/20 rounded-lg focus:outline-none focus:border-amber-400 text-white"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Cover Image URL
          </label>
          <input
            type="url"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-black/30 border border-purple-500/20 rounded-lg focus:outline-none focus:border-amber-400 text-white"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Author
          </label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-black/30 border border-purple-500/20 rounded-lg focus:outline-none focus:border-amber-400 text-white"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Publication Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-black/30 border border-purple-500/20 rounded-lg focus:outline-none focus:border-amber-400 text-white"
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-amber-400 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            <Save className="w-5 h-5" />
            <span>Save Post</span>
          </button>
        </div>
      </form>
    </div>
  );
}