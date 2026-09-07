import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import styles from './ProductReveal.module.css';

export function ProductReveal() {
  return (
    <section className={styles.productSection}>
      <Container>
        <div className={styles.header}>
          <div className={styles.label}>SEE IT IN ACTION</div>
          <h2 className={styles.headline}>
            A real project.<br />
            A clearer picture.
          </h2>
          <p className={styles.body}>
            Explore how Orizenn moves from the work itself to evidence, evaluation, and findings — giving the project more context than a final submission alone can provide.
          </p>
          <Button href="/project" variant="primary" className={styles.cta}>View Example Project →</Button>
        </div>

        <div className={styles.mediaSlot}>
          {/* Temporary placeholder for real Orizenn product UI */}
          <div className={styles.placeholder}>
            <div className={styles.placeholderLabel}>
              [REAL ORIZENN UI: PRODUCT MEDIA SLOT]
            </div>
            <div className={styles.placeholderSequence}>
              ARTIFACTS → EVIDENCE → EVALUATION → FINDINGS
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
