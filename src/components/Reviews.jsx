import React, { useState, useEffect } from 'react';

const Reviews = () => {
  const [comments, setComments] = useState([]);
  
  const variantId = 10; 

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${variantId}/comments`)
      .then(response => response.json()) 
      .then(data => {
        setComments(data); 
      })
      .catch(error => console.error('Помилка завантаження:', error));
  }, []); 

  return (
    <section className="p-8 bg-white border-t border-gray-100">
      <h2 className="text-xl font-bold mb-6 text-center text-gray-800 uppercase tracking-widest">
        Відгуки попередніх роботодавців
      </h2>
      
      <div className="max-w-4xl mx-auto grid gap-6">
        {/* Використовуємо метод map() для створення списку карток відгуків [cite: 137] */}
        {comments.map(comment => (
          <div key={comment.id} className="p-5 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-bold text-gray-900 capitalize">{comment.name}</h4>
            <p className="text-gray-600 my-3 leading-relaxed italic">
              "{comment.body}"
            </p>
            <div className="text-sm text-blue-500 font-medium">
              Email: {comment.email}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;