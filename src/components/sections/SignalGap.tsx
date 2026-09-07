'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '../ui/Container';
import styles from './SignalGap.module.css';

gsap.registerPlugin(ScrollTrigger);

export function SignalGap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion && containerRef.current && leftRef.current && rightRef.current) {
      const leftItems = leftRef.current.querySelectorAll(`.${styles.item}`);
      const rightItems = rightRef.current.querySelectorAll(`.${styles.item}`);
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        }
      });

      // Left items lose spacing, group, reduce prominence
      tl.to(leftItems, {
        opacity: 0.2,
        y: (i) => (i - 2.5) * -10, // converge towards center
        stagger: 0.05,
      }, 0);

      // Right items become visually dominant
      tl.fromTo(rightItems, 
        { opacity: 0.1, x: 20 },
        { opacity: 1, x: 0, stagger: 0.1 },
        0.2
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className={styles.signalGapSection}>
      <Container>
        <div className={styles.grid}>
          
          {/* Left Column */}
          <div className={styles.column} ref={leftRef}>
            <h3 className={styles.columnTitle}>WHAT THE WORK CONTAINS</h3>
            <div className={styles.list}>
              {['Code', 'Decisions', 'Experiments', 'Results', 'Iteration', 'Documentation'].map((item) => (
                <div key={item} className={`${styles.item} ${styles.leftItem}`}>{item}</div>
              ))}
            </div>
          </div>

          {/* Center Divider / Flow */}
          <div className={styles.divider}>
            <div className={styles.line} />
          </div>

          {/* Right Column */}
          <div className={styles.column} ref={rightRef}>
            <h3 className={styles.columnTitle}>WHAT OFTEN GETS SEEN</h3>
            <div className={styles.list}>
              {['Grade', 'Resume', 'Certificate', 'Portfolio'].map((item) => (
                <div key={item} className={`${styles.item} ${styles.rightItem}`}>{item}</div>
              ))}
            </div>
          </div>

        </div>

        <div className={styles.statementArea}>
          <h2 className={styles.headline}>A richer body of work can become a thinner signal.</h2>
          <p className={styles.supporting}>
            The problem isn't that the work doesn't exist. It's that too much of its context disappears between the work itself and the way it is understood.
          </p>
        </div>
      </Container>
    </section>
  );
}
