import { InstitutionsIntro } from './InstitutionsIntro';
import { CapabilityGallery } from './CapabilityGallery';
import { TechnicalGrid } from '@/components/ui/TechnicalGrid';

export function InstitutionsSection() {
  return (
    <section id="institutions" className="relative w-full bg-[#070709] pt-32 md:pt-48 pb-32 md:pb-48 overflow-hidden border-t border-border/10">
      
      {/* Background Environment */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#070709] via-transparent to-[#070709] z-10"></div>
        <TechnicalGrid className="opacity-20" />
      </div>
      
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 flex flex-col items-center">
        <div className="w-full max-w-[1200px]">
          <InstitutionsIntro />
          <CapabilityGallery />
        </div>
      </div>
    </section>
  );
}
