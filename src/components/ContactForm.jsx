import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  // 1. Стан для відкриття/закриття модального вікна
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 2. Таймер: встановити isOpen в true через 1 хвилину (60000 мс)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    // Очищення таймера, якщо компонент зникне раніше
    return () => clearTimeout(timer);
  }, []);

  // Якщо вікно закрите, нічого не відображаємо
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8 relative">
        
        {/* 3. Кнопка "Закрити" */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors text-2xl"
        >
          &times;
        </button>

        <h3 className="text-2xl font-bold mb-4 text-gray-800 uppercase tracking-tight">Зворотній зв'язок</h3>
        <p className="text-gray-500 mb-6 text-sm">Форма з'явилася, бо ви на сайті вже більше хвилини.</p>

        {/* 4. Форма з твоїм ендпоїнтом Formspree */}
        <form 
          action="https://formspree.io/f/xaqlyzjr" 
          method="POST"
          className="space-y-4"
        >
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Ім'я</label>
            <input type="text" name="name" required className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2 transition-colors" />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Email</label>
            <input type="email" name="email" required className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2 transition-colors" />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Номер телефону</label>
            <input type="tel" name="phone" required className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2 transition-colors" />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Повідомлення</label>
            <textarea name="message" rows="3" required className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2 resize-none transition-colors"></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-black text-white font-bold py-3 px-4 rounded-sm hover:bg-gray-800 transition-all uppercase text-xs tracking-widest mt-4"
          >
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;