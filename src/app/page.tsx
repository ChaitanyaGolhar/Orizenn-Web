import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { SignalGap } from '@/components/sections/SignalGap';
import { Approach } from '@/components/sections/Approach';
import { Workflow } from '@/components/sections/Workflow';
import { Philosophy } from '@/components/sections/Philosophy';
import { ProductReveal } from '@/components/sections/ProductReveal';
import { Audience } from '@/components/sections/Audience';
import { Institutions } from '@/components/sections/Institutions';
import { Trust } from '@/components/sections/Trust';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <SignalGap />
      <Approach />
      <Workflow />
      <Philosophy />
      <ProductReveal />
      <Audience />
      <Institutions />
      <Trust />
      <FinalCTA />
    </main>
  );
}
