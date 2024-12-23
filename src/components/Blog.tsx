import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'كيف تحسن إدارة الفصول الدراسية',
    excerpt: 'نصائح وإرشادات لتحسين إدارة الفصول الدراسية وزيادة كفاءة العملية التعليمية',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    date: '2024-03-15',
    author: 'أحمد محمد'
  },
  {
    id: 2,
    title: 'أهمية التكنولوجيا في التعليم الحديث',
    excerpt: 'دور التكنولوجيا في تطوير العملية التعليمية وتحسين تجربة الطلاب',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    date: '2024-03-10',
    author: 'سارة أحمد'
  },
  {
    id: 3,
    title: 'تطوير المناهج الدراسية',
    excerpt: 'استراتيجيات فعالة لتطوير المناهج الدراسية وتحسين مخرجات التعلم',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    date: '2024-03-05',
    author: 'محمد علي'
  }
];

const Blog: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">المدونة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{new Date(post.date).toLocaleDateString('ar-SA')}</span>
                </div>
                <button className="mt-4 w-full bg-emerald-500 text-white rounded-lg py-2 px-4 hover:bg-emerald-600 transition duration-300">
                  اقرأ المزيد
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;