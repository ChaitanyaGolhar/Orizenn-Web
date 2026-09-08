'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Navigation() {
  const [isFloating, setIsFloating] = useState(false);

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-700 ease-out pointer-events-none ${isFloating ? 'pt-4 md:pt-6' : 'pt-0'
        }`}
    >
      <div
        className={`pointer-events-auto w-full transition-all duration-700 ease-out flex items-center justify-between ${isFloating
          ? 'max-w-[1000px] h-[60px] px-6 bg-surface/80 backdrop-blur-md border border-border/50 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'max-w-[1400px] h-[80px] px-8 bg-transparent border-transparent'
          }`}
      >

        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/dark-logo.svg"
              alt="Orizenn Logo"
              width={isFloating ? 24 : 32}
              height={isFloating ? 24 : 32}
              className="transition-all duration-700 ease-out"
              priority
            />
            <span className={`font-sans font-medium tracking-tight text-foreground transition-all duration-500 ease-out ${isFloating ? 'text-small' : 'text-lg'}`}>
              Orizenn
            </span>
          </Link>
        </div>

        {/* Center: Main Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/product" className={`font-sans text-muted transition-colors hover:text-foreground ${isFloating ? 'text-[13px]' : 'text-small'}`}>Product</Link>
          <Link href="/how-it-works" className={`font-sans text-muted transition-colors hover:text-foreground ${isFloating ? 'text-[13px]' : 'text-small'}`}>How It Works</Link>
          <Link href="/institutions" className={`font-sans text-muted transition-colors hover:text-foreground ${isFloating ? 'text-[13px]' : 'text-small'}`}>For Institutions</Link>
          <Link href="/evidence" className={`font-sans text-muted transition-colors hover:text-foreground ${isFloating ? 'text-[13px]' : 'text-small'}`}>Evidence</Link>
          <Link href="/about" className={`font-sans text-muted transition-colors hover:text-foreground ${isFloating ? 'text-[13px]' : 'text-small'}`}>About</Link>
        </nav>

        {/* Right: CTA */}
        <div className="flex items-center">
          <a
            href="https://app.orizenn.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-mono font-medium text-foreground border border-border rounded transition-all duration-700 ease-out hover:bg-surface hover:border-white/20 ${isFloating ? 'text-[11px] px-3 py-1.5' : 'text-micro px-4 py-2'
              }`}
          >
            Open App ↗
          </a>
        </div>
      </div>
    </header>
  );
}
