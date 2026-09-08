import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { ProductRevealDemo } from '../product-ui/ProductRevealDemo';

export function ProductReveal() {
  return (
    <section className="pt-16 pb-16 bg-white relative z-20 rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.05)] -mt-12 mx-4 md:mx-8 mb-12">
      <Container>
        <div className="flex flex-col items-center text-center gap-4 max-w-[800px] mx-auto mb-6 relative z-10">
          <h2 className="font-sans text-5xl md:text-[72px] font-semibold tracking-tight leading-[1.05] text-black m-0">
            A real project.<br />
            A clearer picture.
          </h2>
        </div>

        {/* Interactive Product Demonstration */}
        <div className="relative z-10">
          <ProductRevealDemo />
        </div>
      </Container>
    </section>
  );
}
