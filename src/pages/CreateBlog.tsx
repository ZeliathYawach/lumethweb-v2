import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '../components/layouts/PageLayout';
import type { BlogPost } from '../types/blog';

export function CreateBlog() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    content: '',
    imageUrl: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to an API
    console.log('Blog post created:', formData);
    navigate('/blog');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <PageLayout title="Write a Blog Post">
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
        <div className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-purple-900/30 border border-purple-500/20 rounded-lg focus:outline-none focus:border-amber-400 text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-purple-900/30 border border-purple-500/20 rounded-lg focus:outline-none focus:border-amber-400 text-white"
              required
            >
              <option value="">Select a category</option>
              <option value="Trends">Trends</option>
              <option value="Technology">Technology</option>
              <option value="Tips">Tips</option>
              <option value="Business">Business</option>
            </select>
          </div>

          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-300 mb-2">
              Cover Image URL
            </label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-purple-900/30 border border-purple-500/20 rounded-lg focus:outline-none focus:border-amber-400 text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-300 mb-2">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={10}
              className="w-full px-4 py-2 bg-purple-900/30 border border-purple-500/20 rounded-lg focus:outline-none focus:border-amber-400 text-white"
              required
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate('/blog')}
              className="px-6 py-2 border border-amber-400 text-amber-400 rounded-full hover:bg-amber-400/10 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-amber-400 to-purple-600 text-white rounded-full hover:opacity-90 transition-opacity"
            >
              Publish Post
            </button>
          </div>
        </div>
      </form>
    </PageLayout>
  );
}