import React from 'react';
import { blogPosts } from '../../data/blogPosts';
import BlogCard from './BlogCard';
import { useNavigate } from 'react-router-dom';

const BlogList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">مدونة التعليم</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            اكتشف أحدث المقالات والأفكار في مجال التعليم والإدارة المدرسية
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              onClick={() => navigate(`/blog/${post.id}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;