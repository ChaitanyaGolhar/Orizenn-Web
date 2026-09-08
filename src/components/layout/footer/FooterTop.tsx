import { FooterBrand } from './FooterBrand';
import { FooterNavigation } from './FooterNavigation';

export function FooterTop() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-8 w-full">
      <div className="w-full lg:w-5/12 flex-shrink-0 footer-anim-element">
        <FooterBrand />
      </div>
      <div className="w-full lg:w-7/12 footer-anim-element">
        <FooterNavigation />
      </div>
    </div>
  );
}
