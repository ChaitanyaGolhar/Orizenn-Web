import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../ui/Container';

export function Footer() {
  return (
    <footer className="bg-background pt-32 pb-16 border-t border-border">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-16 mb-32">
          
          <div className="flex flex-col gap-6">
            <Image 
              src="/logo.svg" 
              alt="Orizenn Logo" 
              width={40} 
              height={40} 
              className="w-10 h-10"
            />
            <p className="font-sans text-muted">Let the work speak.</p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-micro font-medium text-foreground uppercase tracking-widest">Product</h4>
            <Link href="/product" className="font-sans text-small text-muted transition-colors hover:text-foreground">Product</Link>
            <Link href="/how-it-works" className="font-sans text-small text-muted transition-colors hover:text-foreground">How It Works</Link>
            <Link href="/evidence" className="font-sans text-small text-muted transition-colors hover:text-foreground">Evidence</Link>
            <a href="https://app.orizenn.com" className="font-sans text-small text-muted transition-colors hover:text-foreground">Open App ↗</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-micro font-medium text-foreground uppercase tracking-widest">Company</h4>
            <Link href="/about" className="font-sans text-small text-muted transition-colors hover:text-foreground">About</Link>
            <Link href="/institutions" className="font-sans text-small text-muted transition-colors hover:text-foreground">For Institutions</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-micro font-medium text-foreground uppercase tracking-widest">Resources</h4>
            <Link href="/insights" className="font-sans text-small text-muted transition-colors hover:text-foreground">Insights</Link>
            <Link href="/docs" className="font-sans text-small text-muted transition-colors hover:text-foreground">Documentation</Link>
            <Link href="/updates" className="font-sans text-small text-muted transition-colors hover:text-foreground">Updates</Link>
          </div>

        </div>

        <div className="pt-8 border-t border-border font-sans text-micro text-muted">
          <p>© 2026 Orizenn. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
