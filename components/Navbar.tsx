"use client";
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed w-full z-50 bg-white dark:bg-gray-900 shadow">
      <nav className="flex items-center justify-between p-4 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">MyPortfolio</h1>
        <button onClick={() => setOpen(!open)} className="md:hidden">☰</button>
        <ul className={`md:flex gap-6 ${open ? 'block' : 'hidden'} md:block`}>
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-blue-500">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
