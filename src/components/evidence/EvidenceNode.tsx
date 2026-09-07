import styles from './EvidenceNode.module.css';

interface EvidenceNodeProps {
  label: string;
  isActive?: boolean;
  className?: string;
  id?: string;
}

export function EvidenceNode({ label, isActive = false, className = '', id }: EvidenceNodeProps) {
  return (
    <div 
      id={id}
      className={`${styles.node} ${isActive ? styles.active : ''} ${className}`}
    >
      <div className={styles.dot} />
      <span className={styles.label}>{label}</span>
    </div>
  );
}
