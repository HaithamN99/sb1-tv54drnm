import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';
import ImageSlider from './ImageSlider';
import CommentSection from './CommentSection';

const BlogPost: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold">المقال غير موجود</h2>
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center justify-center text-emerald-600 hover:text-emerald-700"
          >
            <ArrowRight className="ml-2" />
            العودة إلى المدونة
          </button>
        </div>
      </div>
    );
  }

  const dummyComments = [
    {
      id: '1',
      author: 'محمد أحمد',
      content: 'مقال رائع ومفيد جداً! شكراً على المعلومات القيمة.',
      date: '2024-03-20'
    },
    {
      id: '2',
      author: 'سارة علي',
      content: 'أتفق تماماً مع النقاط المذكورة. أتمنى رؤية المزيد من المقالات المشابهة.',
      date: '2024-03-19'
    }
  ];

  return (
    <article className="min-h-screen bg-gray-50 py-8 md:py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="overflow-hidden rounded-xl bg-white shadow-lg">
          <ImageSlider 
            images={[
              post.image,
              'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
              'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
            ]} 
          />
          
          <div className="p-4 md:p-8">
            <div className="mb-2 inline-block rounded-full bg-emerald-100 px-4 py-1 text-sm text-emerald-800">
              {post.category}
            </div>
            
            <h1 className="mb-6 text-2xl font-bold md:text-4xl">{post.title}</h1>
            
            <div className="mb-8 flex flex-wrap items-center gap-4 text-gray-600">
              <div className="flex items-center">
                <User size={18} className="ml-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={18} className="ml-2" />
                <span>{new Date(post.date).toLocaleDateString('ar-SA')}</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="ml-2" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-base md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            <CommentSection comments={dummyComments} />

            <div className="mt-8 border-t pt-6 md:mt-12 md:pt-8">
              <button
                onClick={() => navigate('/blog')}
                className="flex items-center text-emerald-600 hover:text-emerald-700"
              >
                <ArrowRight className="ml-2" />
                العودة إلى المدونة
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;