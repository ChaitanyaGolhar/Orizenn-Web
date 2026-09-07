import Link from 'next/link';

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
  const baseClasses = "inline-flex items-center justify-center transition-all duration-200 cursor-pointer font-sans text-small";
  
  const variantClasses = variant === 'primary'
    ? "px-6 py-3 font-medium text-foreground bg-transparent border border-border rounded-md hover:border-signal hover:text-signal hover:bg-signal/5"
    : "px-0 py-3 font-medium text-muted border-none hover:text-foreground bg-transparent";

  const fullClassName = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('//');
    if (isExternal) {
      return (
        <a href={href} className={fullClassName} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={fullClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={fullClassName} onClick={onClick}>
      {children}
    </button>
  );
}
