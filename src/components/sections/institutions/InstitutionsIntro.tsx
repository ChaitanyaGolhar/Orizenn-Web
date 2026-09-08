import { Button } from '@/components/ui/Button';

export function InstitutionsIntro() {
  return (
    <div className="flex flex-col items-start text-left gap-3 max-w-[800px] mb-12 relative z-10 institutions-intro">
      <div className="font-sans text-sm text-muted tracking-wide">
        For Institutions
      </div>
      <h2 className="font-sans text-3xl md:text-4xl lg:text-[48px] font-normal tracking-[-0.02em] leading-[1.1] text-foreground m-0 max-w-[800px]">
        See the work behind <br /> the outcomes.
      </h2>

      <div className="text-base text-muted leading-relaxed max-w-[700px] mt-1">
        <p className="m-0">
          Orizenn helps institutions bring technical work <br />into view beyond just grades and submissions.
        </p>
      </div>
    </div>
  );
}
