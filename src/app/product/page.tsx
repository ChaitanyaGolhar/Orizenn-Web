import React from 'react';
import { ProductHero } from '@/components/product/ProductHero';
import { StartWithWork } from '@/components/product/StartWithWork';
import { DiscoverArtifacts } from '@/components/product/DiscoverArtifacts';
import { SurfaceEvidence } from '@/components/product/SurfaceEvidence';
import { EvidenceInContext } from '@/components/product/EvidenceInContext';
import { CompletePicture } from '@/components/product/CompletePicture';
import { AudienceBridge } from '@/components/product/AudienceBridge';
import { ProductCTA } from '@/components/product/ProductCTA';

export default function ProductPage() {
  return (
    <main className="bg-[#070709] min-h-screen text-foreground overflow-x-hidden">
      
      {/* ACT I: Open the Work */}
      <ProductHero />
      <StartWithWork />
      <DiscoverArtifacts />
      
      {/* ACT II: Understand the Evidence */}
      <SurfaceEvidence />
      <EvidenceInContext />

      {/* ACT III: Resolve the Picture */}
      <CompletePicture />
      <AudienceBridge />
      <ProductCTA />

    </main>
  );
}
