import React from 'react';
import { PageLayout } from '../components/layouts/PageLayout';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <PageLayout title="Contact Us">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
              Get in Touch
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-purple-900/30 border border-purple-500/20 rounded-lg focus:outline-none focus:border-amber-400 text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-purple-900/30 border border-purple-500/20 rounded-lg focus:outline-none focus:border-amber-400 text-white"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-purple-900/30 border border-purple-500/20 rounded-lg focus:outline-none focus:border-amber-400 text-white"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-400 to-purple-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-amber-400" />
                <span className="text-gray-300">support@lumeth.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-amber-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-amber-400" />
                <span className="text-gray-300">123 Beauty Street, Suite 100<br />New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}