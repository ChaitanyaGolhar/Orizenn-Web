import Link from 'next/link';

export function FooterNavigation() {
  return (
    <div className="flex flex-col sm:flex-row gap-12 sm:gap-16 lg:gap-24 w-full justify-start md:justify-end">
      
      {/* Explore Group */}
      <div className="flex flex-col gap-5">
        <h4 className="font-mono text-[10px] sm:text-xs font-medium text-muted/60 uppercase tracking-widest mb-1">Explore</h4>
        <div className="flex flex-col gap-3.5">
          <Link href="/product" className="font-sans text-sm text-muted transition-all duration-300 hover:text-foreground hover:translate-x-0.5">Product</Link>
          <Link href="/how-it-works" className="font-sans text-sm text-muted transition-all duration-300 hover:text-foreground hover:translate-x-0.5">How It Works</Link>
          <Link href="/about" className="font-sans text-sm text-muted transition-all duration-300 hover:text-foreground hover:translate-x-0.5">About</Link>
        </div>
      </div>

      {/* For Builders Group */}
      <div className="flex flex-col gap-5">
        <h4 className="font-mono text-[10px] sm:text-xs font-medium text-muted/60 uppercase tracking-widest mb-1">For Builders</h4>
        <div className="flex flex-col gap-3.5">
          <a href="https://app.orizenn.com" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-muted transition-all duration-300 hover:text-foreground hover:translate-x-0.5 group flex items-center gap-1">
            Open App 
            <span className="opacity-50 group-hover:opacity-100 transition-opacity">↗</span>
          </a>
        </div>
      </div>

      {/* For Institutions Group */}
      <div className="flex flex-col gap-5">
        <h4 className="font-mono text-[10px] sm:text-xs font-medium text-muted/60 uppercase tracking-widest mb-1">For Institutions</h4>
        <div className="flex flex-col gap-3.5">
          <Link href="/institutions" className="font-sans text-sm text-muted transition-all duration-300 hover:text-foreground hover:translate-x-0.5">Institutions</Link>
          <Link href="/how-it-works" className="font-sans text-sm text-muted transition-all duration-300 hover:text-foreground hover:translate-x-0.5">How It Works</Link>
        </div>
      </div>

    </div>
  );
}
