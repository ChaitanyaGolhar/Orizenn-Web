import { Container } from '../ui/Container';
import styles from './Approach.module.css';

export function Approach() {
  return (
    <section className={styles.approachSection}>
      <Container>
        <div className={styles.content}>
          <div className={styles.label}>02 / A DIFFERENT APPROACH</div>
          <h2 className={styles.headline}>Start with the work.</h2>
          <p className={styles.body}>
            Orizenn begins with the technical work itself — not only the claim made about it. It discovers the artifacts inside a project, organizes the evidence they contain, and brings that evidence into a clearer view.
          </p>
        </div>
      </Container>
    </section>
  );
}
