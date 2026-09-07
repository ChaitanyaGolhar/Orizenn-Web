import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import styles from './Audience.module.css';

export function Audience() {
  return (
    <section className={styles.audienceSection}>
      <Container>
        <div className={styles.label}>WHY IT MATTERS</div>
        <h2 className={styles.headline}>More visibility into the work that matters.</h2>

        <div className={styles.grid}>
          {/* Students */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Let your work speak for itself.</h3>
            <p className={styles.cardBody}>
              Turn the work you build into a clearer record of what you actually did, learned, and demonstrated.
            </p>
            <Button href="/students" variant="secondary" className={styles.cta}>For Students →</Button>
          </div>

          {/* Educators */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Evaluate with more context.</h3>
            <p className={styles.cardBody}>
              See beyond the final submission and understand more of the work behind it.
            </p>
            <Button href="/educators" variant="secondary" className={styles.cta}>For Educators →</Button>
          </div>

          {/* Institutions */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>See more of what is actually being built.</h3>
            <p className={styles.cardBody}>
              Gain deeper visibility into technical work across students, projects, and programs.
            </p>
            <Button href="/institutions" variant="secondary" className={styles.cta}>For Institutions →</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
