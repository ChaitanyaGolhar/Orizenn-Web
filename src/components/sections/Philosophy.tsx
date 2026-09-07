import { Container } from '../ui/Container';
import styles from './Philosophy.module.css';

export function Philosophy() {
  return (
    <section className={styles.philosophySection}>
      <Container>
        <div className={styles.content}>
          <div className={styles.label}>THE ORIZENN APPROACH</div>
          <h2 className={styles.headline}>Evidence before assumption.</h2>
          <p className={styles.body}>
            Orizenn is built around a simple idea: technical work should be understood through the evidence inside the work itself.
          </p>
          <div className={styles.featured}>
            It does not replace judgment. It gives judgment more context.
          </div>
        </div>
      </Container>
    </section>
  );
}
