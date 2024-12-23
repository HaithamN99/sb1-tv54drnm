import React, { useState } from 'react';
import { User } from 'lucide-react';
import { Comment } from '../../types';

interface CommentSectionProps {
  comments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewComment('');
  };

  return (
    <div className="mt-8 md:mt-12">
      <h3 className="mb-4 text-xl font-bold md:mb-6 md:text-2xl">
        التعليقات ({comments.length})
      </h3>
      
      <form onSubmit={handleSubmit} className="mb-6 md:mb-8">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full rounded-lg border p-3 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 md:p-4 md:text-base"
          placeholder="اكتب تعليقك هنا..."
          rows={4}
        />
        <button
          type="submit"
          className="mt-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm text-white transition-colors hover:bg-emerald-600 md:px-6 md:text-base"
        >
          إضافة تعليق
        </button>
      </form>

      <div className="space-y-4 md:space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="rounded-lg bg-gray-50 p-4 md:p-6">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <User className="h-5 w-5 text-gray-500 md:h-6 md:w-6" />
              <span className="mr-2 font-semibold">{comment.author}</span>
              <span className="text-xs text-gray-500 md:text-sm">
                {new Date(comment.date).toLocaleDateString('ar-SA')}
              </span>
            </div>
            <p className="text-sm text-gray-700 md:text-base">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;