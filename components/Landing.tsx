import { Pricing } from "@/components/Pricing.tsx";
import { Testimonial } from "@/components/Testimonial.tsx";
import { Faq } from "@/components/Faq.tsx";
import { CallToAction } from "@/components/CallToAction.tsx";
import { DarkFooter } from "@/components/DarkFooter.tsx";
import { HeroSection } from "@/components/HeroSection.tsx";

export function Landing() {
  return (
    <>
      <main>
        {/* <!-- hero section --> */}
        <HeroSection />

        <div>
          {/* <!-- Features Section --> */}

          {/* <!-- How It Works Section --> */}

          {/* <!-- Integrations Section --> */}

          <Pricing />

          <Testimonial />

          {/* <!-- FAQ section --> */}
          <Faq />

          {/* <!-- CTA Section --> */}
          <CallToAction />
        </div>

        {/* <!-- footer section --> */}
        <DarkFooter />
      </main>
    </>
  );
}
