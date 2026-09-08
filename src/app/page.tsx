import { Hero } from '@/components/sections/Hero';
import { StorySection } from '@/components/story/StorySection';
import { ProductReveal } from '@/components/sections/ProductReveal';
import { WhyItMatters } from '@/components/sections/why-it-matters/WhyItMatters';
import { Institutions } from '@/components/sections/Institutions';
import { Trust } from '@/components/sections/Trust';
import { ClearerWay } from '@/components/sections/ClearerWay';

export default function Home() {
  return (
    <main>
      <Hero />
      <StorySection />
      <ProductReveal />
      <WhyItMatters />
      <Institutions />
      <Trust />
      <ClearerWay />
    </main>
  );
}
