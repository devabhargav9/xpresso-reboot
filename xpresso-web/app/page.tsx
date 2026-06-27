import { Hero } from "@/components/home/Hero";
import { Pillars } from "@/components/home/Pillars";
import { WhyXpresso } from "@/components/home/WhyXpresso";
import { HowItFlows } from "@/components/home/HowItFlows";
import { Compliance } from "@/components/home/Compliance";
import { Stakeholders } from "@/components/home/Stakeholders";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <WhyXpresso />
      <HowItFlows />
      <Compliance />
      <Stakeholders />
      <FAQ />
      <CTA />
    </>
  );
}
