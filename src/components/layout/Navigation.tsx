import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../ui/Container';

export function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <Container className="flex items-center justify-between h-[72px]">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/dark-logo.svg"
              alt="Orizenn Logo"
              width={32}
              height={32}
              className="w-8 h-8"
              priority
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/product" className="font-sans text-small text-muted transition-colors hover:text-foreground">Product</Link>
          <Link href="/how-it-works" className="font-sans text-small text-muted transition-colors hover:text-foreground">How It Works</Link>
          <Link href="/institutions" className="font-sans text-small text-muted transition-colors hover:text-foreground">For Institutions</Link>
          <Link href="/evidence" className="font-sans text-small text-muted transition-colors hover:text-foreground">Evidence</Link>
          <Link href="/about" className="font-sans text-small text-muted transition-colors hover:text-foreground">About</Link>
        </nav>

        <div className="flex items-center">
          <a
            href="https://app.orizenn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-micro font-medium text-foreground px-4 py-2 border border-border rounded transition-all hover:bg-surface hover:border-white/20"
          >
            Open App ↗
          </a>
        </div>
      </Container>
    </header>
  );
}
