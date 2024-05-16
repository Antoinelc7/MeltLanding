"use client";

import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

import ContactForm from "@/components/FormSpree/FormSpree";

// export const metadata: Metadata = {
//   title: "MELT",
//   description: "Site vitrine restaurant MELT",
//   // other metadata
// };

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      {/* <Video /> */}
      {/* <Brands /> */}
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      <Testimonials />
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <ContactForm />
      {/* <Contact /> */}
    </>
  );
}
