import { Container } from '../ui/Container';
import styles from './Problem.module.css';

export function Problem() {
  return (
    <section className={styles.problemSection}>
      <Container>
        <div className={styles.content}>
          <div className={styles.label}>01 / THE PROBLEM</div>
          <h2 className={styles.headline}>
            The work is there.<br />
            We just don't see enough of it.
          </h2>
          <p className={styles.body}>
            People build real technical work across code, notebooks, experiments, documentation, data, and projects. But much of that work gets reduced to a grade, a resume, a certificate, or a portfolio — signals that rarely show the full picture.
          </p>
          <div className={styles.closing}>
            The evidence exists. It is just fragmented, difficult to interpret, and easy to overlook.
          </div>
        </div>
      </Container>
    </section>
  );
}
