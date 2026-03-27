import React, { useEffect, useState } from 'react';

function Footer() {
  // Стан для відображення інформації в JSX 
  const [systemData, setSystemData] = useState('');

  useEffect(() => {
    // 1. Зчитуємо системну інформацію при монтуванні [cite: 126, 127, 128]
    const info = `User Agent: ${navigator.userAgent} | Platform: ${navigator.platform}`;

    // 2. Зберігаємо дані в localStorage [cite: 129]
    localStorage.setItem('systemInfo', info);

    // 3. Отримуємо дані з localStorage для відображення [cite: 130]
    const storedInfo = localStorage.getItem('systemInfo');
    setSystemData(storedInfo);
  }, []); // Порожній масив означає виконання лише при монтуванні [cite: 107, 114]

  return (
    <footer className="bg-gray-50 p-8 text-center border-t border-gray-100">
      <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em]">
        &copy; 2026 Yeva Malakhova. Prepared for Laboratory Work №4.
      </p>
      
      {/* Відображення отриманих даних [cite: 131] */}
      {systemData && (
        <p className="mt-4 text-[9px] text-gray-500 font-mono italic">
          System Info from LocalStorage: {systemData}
        </p>
      )}
    </footer>
  );
}

export default Footer;