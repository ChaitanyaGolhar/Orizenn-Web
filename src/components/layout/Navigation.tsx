'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Navigation() {
  const [isFloating, setIsFloating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger floating state when scrolled past 50px
      setIsFloating(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Check initial state in case of page reload halfway down
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-700 ease-out pointer-events-none ${isFloating ? 'pt-4 md:pt-6' : 'pt-0'
          }`}
      >
        <div
          className={`pointer-events-auto w-full transition-all duration-700 ease-out flex items-center justify-between ${isFloating
            ? 'max-w-[1000px] h-[60px] px-6 bg-[#070709]/80 backdrop-blur-md border border-white/10 md:rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'max-w-[1400px] h-[80px] px-8 bg-transparent border-transparent'
            }`}
        >

          {/* Left: Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src="/dark-logo.svg"
                alt="Orizenn Logo"
                width={isFloating ? 24 : 32}
                height={isFloating ? 24 : 32}
                className="transition-all duration-700 ease-out"
                priority
              />
              <span className={`font-sans font-medium tracking-tight text-foreground transition-all duration-500 ease-out ${isFloating ? 'text-sm' : 'text-lg'}`}>
                Orizenn
              </span>
            </Link>
          </div>

          {/* Center: Main Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/product" className={`font-sans text-muted transition-colors hover:text-foreground ${isFloating ? 'text-[13px]' : 'text-sm'}`}>Product</Link>
            <Link href="/how-it-works" className={`font-sans text-muted transition-colors hover:text-foreground ${isFloating ? 'text-[13px]' : 'text-sm'}`}>How It Works</Link>
            <Link href="/institutions" className={`font-sans text-muted transition-colors hover:text-foreground ${isFloating ? 'text-[13px]' : 'text-sm'}`}>For Institutions</Link>
            <Link href="/about" className={`font-sans text-muted transition-colors hover:text-foreground ${isFloating ? 'text-[13px]' : 'text-sm'}`}>About</Link>
          </nav>

          {/* Right: CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://orizenn.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-mono font-medium text-foreground border border-white/10 rounded transition-all duration-700 ease-out hover:bg-white/5 hover:border-white/20 ${isFloating ? 'text-[11px] px-3 py-1.5' : 'text-xs px-4 py-2'
                }`}
            >
              Open App ↗
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-[4px] relative z-50 pointer-events-auto bg-transparent border-none p-0 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <span className={`block w-5 h-[1.5px] bg-foreground transition-transform duration-300 ease-out origin-center ${isMobileMenuOpen ? 'translate-y-[5.5px] rotate-45' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-foreground transition-opacity duration-300 ease-out ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-foreground transition-transform duration-300 ease-out origin-center ${isMobileMenuOpen ? '-translate-y-[5.5px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#070709] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden flex flex-col items-center justify-center ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <nav className="flex flex-col items-center gap-8 text-2xl font-sans tracking-tight">
          <Link href="/product" onClick={() => setIsMobileMenuOpen(false)} className={`text-muted hover:text-foreground transition-all duration-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 delay-0'}`}>Product</Link>
          <Link href="/how-it-works" onClick={() => setIsMobileMenuOpen(false)} className={`text-muted hover:text-foreground transition-all duration-500 delay-75 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 delay-0'}`}>How It Works</Link>
          <Link href="/institutions" onClick={() => setIsMobileMenuOpen(false)} className={`text-muted hover:text-foreground transition-all duration-500 delay-150 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 delay-0'}`}>For Institutions</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className={`text-muted hover:text-foreground transition-all duration-500 delay-200 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 delay-0'}`}>About</Link>
        </nav>
      </div>
    </>
  );
}
