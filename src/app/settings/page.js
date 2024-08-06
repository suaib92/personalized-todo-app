"use client"

import { useState, useEffect } from 'react';

export default function Settings() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  const handleThemeChange = (e) => {
    const newTheme = e.target.value;
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className={`p-6 rounded-lg shadow-lg transition-colors ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <h1 className="text-3xl font-semibold mb-6">Settings</h1>
      <label className="block mb-4">
        <span className="block text-lg font-medium mb-2">Theme:</span>
        <select
          value={theme}
          onChange={handleThemeChange}
          className="block w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
      <p className="text-sm text-gray-500">Choose a theme for the application. The change will be applied immediately.</p>
    </div>
  );
}
