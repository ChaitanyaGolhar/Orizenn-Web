import styles from './EvidenceStage.module.css';

interface EvidenceStageProps {
  title: string;
  description: string;
  isActive?: boolean;
  className?: string;
  id?: string;
}

export function EvidenceStage({ title, description, isActive = false, className = '', id }: EvidenceStageProps) {
  return (
    <div id={id} className={`${styles.stage} ${isActive ? styles.active : ''} ${className}`}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
