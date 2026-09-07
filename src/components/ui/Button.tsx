import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
}: ButtonProps) {
  const baseClassName = `${styles.button} ${styles[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('//');
    if (isExternal) {
      return (
        <a
          href={href}
          className={baseClassName}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClassName} onClick={onClick}>
      {children}
    </button>
  );
}
