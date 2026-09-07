import Link from 'next/link';
import { Container } from '../ui/Container';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <div className={styles.logo}>orizenn</div>
            <p className={styles.tagline}>Let the work speak.</p>
          </div>
          
          <div className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>Product</h4>
            <Link href="/product" className={styles.link}>Product</Link>
            <Link href="/how-it-works" className={styles.link}>How It Works</Link>
            <Link href="/evidence" className={styles.link}>Evidence</Link>
            <a href="https://app.orizenn.com" className={styles.link}>Open App ↗</a>
          </div>

          <div className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>Company</h4>
            <Link href="/about" className={styles.link}>About</Link>
            <Link href="/institutions" className={styles.link}>For Institutions</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
          </div>

          <div className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>Resources</h4>
            <Link href="/insights" className={styles.link}>Insights</Link>
            <Link href="/docs" className={styles.link}>Documentation</Link>
            <Link href="/updates" className={styles.link}>Updates</Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 Orizenn. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
