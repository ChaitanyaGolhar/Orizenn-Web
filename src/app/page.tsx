import { Hero } from '@/components/sections/Hero';
import { StorySection } from '@/components/story/StorySection';
import { ProductReveal } from '@/components/sections/ProductReveal';
import { Audience } from '@/components/sections/Audience';
import { Institutions } from '@/components/sections/Institutions';
import { Trust } from '@/components/sections/Trust';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <StorySection />
      <ProductReveal />
      <Audience />
      <Institutions />
      <Trust />
      <FinalCTA />
    </main>
  );
}
