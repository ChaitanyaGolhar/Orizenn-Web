export function Container({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full max-w-[1400px] mx-auto px-8 md:px-16 ${className}`}>
      {children}
    </div>
  );
}
