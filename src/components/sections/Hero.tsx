'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { EvidenceNode } from '../evidence/EvidenceNode';
import styles from './Hero.module.css';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const visualsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion && containerRef.current && visualsRef.current) {
      const nodes = visualsRef.current.querySelectorAll(`.${styles.scatterNode}`);
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom center',
          scrub: 1,
        }
      });

      // Scatter effect initially, then organizes
      tl.to(nodes, {
        y: (i) => (i % 2 === 0 ? -50 : 50),
        opacity: 0.5,
        stagger: 0.1,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className={styles.heroSection}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>FROM TECHNICAL WORK TO EVIDENCE</div>
          <h1 className={styles.headline}>Let the work speak.</h1>
          <p className={styles.body}>
            Orizenn turns technical work into structured evidence — making it easier to understand what was built, what it demonstrates, and how it should be evaluated.
          </p>
          
          <div className={styles.actions}>
            <Button href="/explore" variant="primary">Explore Orizenn →</Button>
            <Button href="/institutions" variant="secondary">For Institutions →</Button>
          </div>
          
          <div className={styles.supportLine}>Real work. Real evidence. Better context.</div>
        </div>

        <div className={styles.visuals} ref={visualsRef}>
          {/* Abstract Evidence Visualization */}
          <div className={styles.nodesContainer}>
            <EvidenceNode label="Code" className={`${styles.scatterNode} ${styles.n1}`} />
            <EvidenceNode label="Experiments" className={`${styles.scatterNode} ${styles.n2}`} />
            <EvidenceNode label="Documentation" className={`${styles.scatterNode} ${styles.n3}`} />
            <EvidenceNode label="Data" className={`${styles.scatterNode} ${styles.n4}`} />
            <EvidenceNode label="Notebooks" className={`${styles.scatterNode} ${styles.n5}`} />
          </div>
          
          <div className={styles.flowSystem}>
            {/* Abstract flow to represent artifacts -> evidence -> evaluation -> understanding */}
            <div className={styles.glowOrb} />
            <div className={styles.centralNode}>
              <EvidenceNode label="Evidence" isActive={true} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
