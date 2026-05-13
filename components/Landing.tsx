import { Pricing } from "@/components/Pricing.tsx";
import { Testimonial } from "@/components/Testimonial.tsx";
import { Faq } from "@/components/Faq.tsx";
import { CallToAction } from "@/components/CallToAction.tsx";
import { DarkFooter } from "@/components/DarkFooter.tsx";
import { HeroSection } from "@/components/HeroSection.tsx";
import { Features } from "@/components/Features.tsx";

export function Landing() {
  return (
    <>
      <main>
        <HeroSection />

        <div>
          <Features />

          {/* <!-- How It Works Section --> */}

          {/* <!-- Integrations Section --> */}

          <Pricing />

          <Testimonial />

          <Faq />

          <CallToAction />
        </div>

        <DarkFooter />
      </main>
    </>
  );
}
