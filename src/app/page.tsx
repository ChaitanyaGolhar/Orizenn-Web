import { Hero } from '@/components/sections/Hero';
import { StorySection } from '@/components/story/StorySection';
import { ProductReveal } from '@/components/sections/ProductReveal';
import { WhyItMatters } from '@/components/sections/why-it-matters/WhyItMatters';
import { InstitutionsSection } from '@/components/sections/institutions/InstitutionsSection';

import { ClearerWay } from '@/components/sections/ClearerWay';

export default function Home() {
  return (
    <main>
      <Hero />
      <StorySection />
      <ProductReveal />
      <WhyItMatters />
      <InstitutionsSection />

      <ClearerWay />
    </main>
  );
}
