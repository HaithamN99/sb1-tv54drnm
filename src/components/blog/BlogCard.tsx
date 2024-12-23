import React from 'react';
import { BlogPost } from '../../types';
import { Calendar, Clock, User } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
  onClick: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onClick }) => {
  return (
    <article 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm">
          {post.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 hover:text-emerald-600 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <User size={16} />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar size={16} />
            <span>{new Date(post.date).toLocaleDateString('ar-SA')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock size={16} />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;