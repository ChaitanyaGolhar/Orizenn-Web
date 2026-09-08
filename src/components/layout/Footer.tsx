'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '../ui/Container';
import { FooterTop } from './footer/FooterTop';
import { FooterMeta } from './footer/FooterMeta';
import { FooterWordmark } from './footer/FooterWordmark';

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray('.footer-anim-element');
      
      gsap.set(elements, { opacity: 0, y: 20 });

      ScrollTrigger.create({
        trigger: footerRef.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(elements, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            overwrite: 'auto'
          });
        },
        once: true
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer 
      ref={footerRef} 
      className="bg-[#050608] pt-24 md:pt-40 overflow-hidden"
    >
      <Container className="flex flex-col relative z-10">
        
        {/* Top Region: Brand & Navigation */}
        <div className="mb-24 md:mb-32">
          <FooterTop />
        </div>

        {/* Bottom Region: Divider & Legal */}
        <FooterMeta />

      </Container>

      {/* Hero Wordmark (Edge to edge, spans below container) */}
      <FooterWordmark />
      
    </footer>
  );
}
