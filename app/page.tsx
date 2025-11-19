import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/home/Hero";
import { SocialProof } from "@/components/sections/home/SocialProof";

// Lazy load below-the-fold components for better performance
const Features = dynamic(
  () => import("@/components/sections/home/Features").then((mod) => ({ default: mod.Features })),
  {
    loading: () => <div className="h-96 bg-secondary/30" />,
  }
);

const PainPoints = dynamic(
  () => import("@/components/sections/home/PainPoints").then((mod) => ({ default: mod.PainPoints }))
);

const HowItWorks = dynamic(
  () => import("@/components/sections/home/HowItWorks").then((mod) => ({ default: mod.HowItWorks }))
);

const ComparisonTable = dynamic(
  () => import("@/components/sections/home/ComparisonTable").then((mod) => ({ default: mod.ComparisonTable }))
);

const Testimonials = dynamic(
  () => import("@/components/sections/home/Testimonials").then((mod) => ({ default: mod.Testimonials }))
);

const Guarantees = dynamic(
  () => import("@/components/sections/home/Guarantees").then((mod) => ({ default: mod.Guarantees }))
);

const FAQ = dynamic(
  () => import("@/components/sections/home/FAQ").then((mod) => ({ default: mod.FAQ }))
);

const StickyCTA = dynamic(
  () => import("@/components/ui/sticky-cta").then((mod) => ({ default: mod.StickyCTA }))
);

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <SocialProof />
      <Features />
      <PainPoints />
      <HowItWorks />
      <ComparisonTable />
      <Testimonials />
      <Guarantees />
      <FAQ />
      <StickyCTA />
    </div>
  );
}
