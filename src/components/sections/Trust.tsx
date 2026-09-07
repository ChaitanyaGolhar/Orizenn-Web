import { Container } from '../ui/Container';
import styles from './Trust.module.css';

export function Trust() {
  return (
    <section className={styles.trustSection}>
      <Container>
        <div className={styles.content}>
          <div className={styles.label}>OUR PRINCIPLE</div>
          <h2 className={styles.headline}>Evidence should be visible.</h2>
          
          <div className={styles.intro}>
            <p>The goal isn't to produce another score that asks people to trust the system.</p>
            <p>The goal is to make the work, the evidence behind it, and the reasoning around its evaluation easier to see.</p>
          </div>

          <div className={styles.principles}>
            <div className={styles.principle}>
              <h3>Grounded in the work.</h3>
              <p>Start with observable project artifacts.</p>
            </div>
            
            <div className={styles.principle}>
              <h3>Clear about the evidence.</h3>
              <p>Show the signals that support an evaluation.</p>
            </div>
            
            <div className={styles.principle}>
              <h3>Honest about the limits.</h3>
              <p>Evidence can improve judgment without pretending to replace it.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
