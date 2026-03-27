import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';

function App() {
  // 1. Створення змінної стану theme
  const [theme, setTheme] = useState('light');

  // 2. Автоматичне перемикання теми при завантаженні
  useEffect(() => {
    const currentHour = new Date().getHours();
    
    // Перевірка: денна тема від 07:00 до 21:00, інакше нічна
    if (currentHour >= 7 && currentHour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  // 3. Функція для ручного перемикання між режимами
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    /* 4. Застосування CSS-класу до головної обгортки додатку */
    <div className={`${theme === 'dark' ? 'dark-mode' : ''} min-h-screen py-10 px-4 font-serif transition-colors duration-500`}>
      
      {/* Кнопка ручного перемикання теми в шапці/навігації */}
      <button 
        onClick={toggleTheme}
        className="fixed top-5 right-5 z-[100] px-4 py-2 bg-white dark:bg-zinc-800 border border-gray-300 rounded shadow-lg text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all"
      >
        {theme === 'light' ? '🌙 Night Mode' : '☀️ Day Mode'}
      </button>

      {/* Модальне вікно форми зворотнього зв'язку */}
      <ContactForm /> 

      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-sm overflow-hidden border border-gray-200">
        <Header />

        <main className="p-8 md:p-12">
          <About />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-10">
            <aside className="md:col-span-4">
              <Skills />
            </aside>

            <section className="md:col-span-8 space-y-12">
              <Education />
              <Experience />
            </section>
          </div>

          {/* Компонент Reviews для відображення коментарів */}
          <div className="mt-12 border-t border-gray-100 pt-10">
            <Reviews />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;