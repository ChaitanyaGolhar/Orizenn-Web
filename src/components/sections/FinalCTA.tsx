import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import styles from './FinalCTA.module.css';

export function FinalCTA() {
  return (
    <section className={styles.ctaSection}>
      <Container>
        <div className={styles.content}>
          <div className={styles.eyebrow}>A CLEARER WAY TO UNDERSTAND TECHNICAL WORK</div>
          <h2 className={styles.headline}>Let the work speak.</h2>
          <p className={styles.body}>
            Orizenn brings the evidence inside technical work into view — for the people building it, evaluating it, and trying to understand what it demonstrates.
          </p>
          <div className={styles.actions}>
            <Button href="/explore" variant="primary">Explore Orizenn →</Button>
            <Button href="/institutions" variant="secondary">For Institutions →</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
