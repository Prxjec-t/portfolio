import { useState } from 'react';
import hamburgerLight from '../assets/hamburgerLight.svg';
import closeLight from '../assets/closeLight.svg';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-fit z-50 bg-[#5B1111] shadow-md">
        <div className="mx-auto flex items-center justify-between px-5 py-4">
          <p className="text-xl font-bold text-white cursor-default">Kimi Leminaho</p>
          <button
            className="text-2xl md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}>
            {isOpen ? (
              <img src={closeLight} alt="Close" className="size-10" />
            ) : (
              <img src={hamburgerLight} alt="Menu" className="size-10" />
            )}
          </button>

          <nav
            className={`
            absolute text-white left-0 top-full w-full flex-col items-center gap-4 px-5 py-4 md:static md:flex md:w-auto md:flex-row md:p-0 md:text-sm bg-[#6C6B6B] md:bg-transparent
            ${isOpen ? 'flex' : 'hidden md:flex'}`}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="transition-colors hover:text-gray-400">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
