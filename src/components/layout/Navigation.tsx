import Link from 'next/link';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import styles from './Navigation.module.css';

export function Navigation() {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            {/* TODO: Replace with actual Orizenn SVG logo */}
            <span className={styles.logoText}>orizenn</span>
          </Link>
        </div>
        
        <nav className={styles.nav}>
          <Link href="/product" className={styles.navLink}>Product</Link>
          <Link href="/institutions" className={styles.navLink}>Institutions</Link>
        </nav>

        <div className={styles.actions}>
          <a href="https://app.orizenn.com" target="_blank" rel="noopener noreferrer" className={styles.appLink}>
            Open App ↗
          </a>
        </div>
      </Container>
    </header>
  );
}
