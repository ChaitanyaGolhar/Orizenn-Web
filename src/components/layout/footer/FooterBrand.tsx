import Image from 'next/image';

export function FooterBrand() {
  return (
    <div className="flex flex-col gap-8 max-w-[420px]">
      <Image
        src="/dark-logo.svg"
        alt="Orizenn Logo"
        width={48}
        height={48}
        className="w-12 h-12"
      />
      <div className="flex flex-col gap-2">
        <h3 className="font-sans text-xl md:text-2xl text-foreground font-medium tracking-tight m-0">
          Let the work speak.
        </h3>
        <p className="font-sans text-sm md:text-base text-muted leading-relaxed m-0">
          Orizenn brings the evidence inside technical work into view.
        </p>
      </div>
    </div>
  );
}
