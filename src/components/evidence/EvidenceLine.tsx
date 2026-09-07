import styles from './EvidenceLine.module.css';

interface EvidenceLineProps {
  isActive?: boolean;
  direction?: 'horizontal' | 'vertical';
  className?: string;
}

export function EvidenceLine({ isActive = false, direction = 'vertical', className = '' }: EvidenceLineProps) {
  return (
    <div className={`${styles.lineWrapper} ${styles[direction]} ${className}`}>
      <div className={`${styles.line} ${isActive ? styles.active : ''}`} />
    </div>
  );
}
