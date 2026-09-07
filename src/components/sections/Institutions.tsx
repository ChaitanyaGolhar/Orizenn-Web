import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import styles from './Institutions.module.css';

export function Institutions() {
  return (
    <section className={styles.institutionsSection}>
      <Container>
        <div className={styles.content}>
          <div className={styles.label}>FOR INSTITUTIONS</div>
          <h2 className={styles.headline}>See the work behind the outcomes.</h2>
          
          <div className={styles.body}>
            <p>
              Technical learning doesn't happen only in grades and submissions. Students build through projects, experiments, code, documentation, and iteration.
            </p>
            <p>
              Orizenn helps institutions bring more of that work into view — creating a richer basis for understanding technical learning and evaluating what students actually demonstrate.
            </p>
          </div>

          <div className={styles.actions}>
            <Button href="/contact" variant="primary">Talk to Orizenn →</Button>
            <Button href="/how-it-works" variant="secondary">See How It Works →</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
