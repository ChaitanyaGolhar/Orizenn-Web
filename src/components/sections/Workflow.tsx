'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '../ui/Container';
import { EvidenceNode } from '../evidence/EvidenceNode';
import { EvidenceLine } from '../evidence/EvidenceLine';
import { EvidenceStage } from '../evidence/EvidenceStage';
import styles from './Workflow.module.css';

gsap.registerPlugin(ScrollTrigger);

export function Workflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setActiveStage(3); // Show all active
      return;
    }

    if (containerRef.current) {
      const stages = 4;
      
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 30%',
        end: 'bottom 70%',
        scrub: true,
        onUpdate: (self) => {
          // Calculate which stage should be active based on scroll progress
          const progress = self.progress;
          const currentStage = Math.min(Math.floor(progress * stages), stages - 1);
          setActiveStage(currentStage);
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className={styles.workflowSection}>
      <Container>
        <div className={styles.label}>03 / HOW IT WORKS</div>
        <h2 className={styles.headline}>From project to evidence.</h2>
        <p className={styles.intro}>
          A technical project contains more information than its final submission usually reveals. Orizenn helps bring that information into view.
        </p>

        <div className={styles.systemContainer}>
          {/* Stage 0: WORK */}
          <div className={styles.stageRow}>
            <div className={styles.visualColumn}>
              <EvidenceNode label="Work" isActive={activeStage >= 0} />
            </div>
            <div className={styles.contentColumn}>
              <EvidenceStage 
                title="Find the work." 
                description="Connect the project and identify the artifacts that make up the work." 
                isActive={activeStage >= 0} 
              />
            </div>
          </div>

          <div className={styles.lineRow}>
            <div className={styles.visualColumn}>
              <EvidenceLine isActive={activeStage >= 1} />
            </div>
            <div className={styles.contentColumn} />
          </div>

          {/* Stage 1: EVIDENCE */}
          <div className={styles.stageRow}>
            <div className={styles.visualColumn}>
              <EvidenceNode label="Evidence" isActive={activeStage >= 1} />
            </div>
            <div className={styles.contentColumn}>
              <EvidenceStage 
                title="Understand the evidence." 
                description="Bring project artifacts into context." 
                isActive={activeStage >= 1} 
              />
            </div>
          </div>

          <div className={styles.lineRow}>
            <div className={styles.visualColumn}>
              <EvidenceLine isActive={activeStage >= 2} />
            </div>
            <div className={styles.contentColumn} />
          </div>

          {/* Stage 2: EVALUATION */}
          <div className={styles.stageRow}>
            <div className={styles.visualColumn}>
              <EvidenceNode label="Evaluation" isActive={activeStage >= 2} />
            </div>
            <div className={styles.contentColumn}>
              <EvidenceStage 
                title="Examine what it demonstrates." 
                description="Analyze the work and surface evidence that can inform evaluation." 
                isActive={activeStage >= 2} 
              />
            </div>
          </div>

          <div className={styles.lineRow}>
            <div className={styles.visualColumn}>
              <EvidenceLine isActive={activeStage >= 3} />
            </div>
            <div className={styles.contentColumn} />
          </div>

          {/* Stage 3: UNDERSTANDING */}
          <div className={styles.stageRow}>
            <div className={styles.visualColumn}>
              <EvidenceNode label="Understanding" isActive={activeStage >= 3} />
            </div>
            <div className={styles.contentColumn}>
              <EvidenceStage 
                title="Make the picture clearer." 
                description="Bring evidence, evaluation, and findings together." 
                isActive={activeStage >= 3} 
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
