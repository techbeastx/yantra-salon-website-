import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { Services } from "@/components/sections/Services";
import { SignatureExperience } from "@/components/sections/SignatureExperience";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Testimonials } from "@/components/sections/Testimonials";
import { InstagramShowcase } from "@/components/sections/InstagramShowcase";
import { Location } from "@/components/sections/Location";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Story />
      <Services />
      <SignatureExperience />
      <BeforeAfter />
      <Testimonials />
      <InstagramShowcase />
      <Location />
    </div>
  );
}
