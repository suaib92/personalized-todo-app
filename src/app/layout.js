"use client"

import { useEffect, useState } from 'react';
import './globals.css';

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  return (
    <html lang="en" className={theme}>
      <body className={`transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
        <header className={`bg-${theme === 'dark' ? 'gray-800' : 'blue-600'} text-white shadow-md p-4`}>
          <nav className="container mx-auto flex justify-between items-center">
            <a href="/" className="hover:text-gray-300 transition-colors">Home</a>
            <a href="/completed-tasks" className="hover:text-gray-300 transition-colors">Completed Tasks</a>
            <a href="/settings" className="hover:text-gray-300 transition-colors">Settings</a>
          </nav>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
