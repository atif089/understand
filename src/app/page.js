import { siteConfig } from "@/config/siteConfig";

import ConsultationPromoBlock from "@/features/ConsultationPromoBlock";
import TrustFeatureBlock from "@/features/TrustFeatureBlock";
import VideoGuidesBlock from "@/features/VideoGuidesBlock";
import Footer from "@/features/Footer";
import MastHead from "@/features/MastHead";
import Testimonials from "@/features/Testimonials";

export default function Home() {
  // Example props for the CTA
  const heading = "Ready to Book Your First Consultation?";
  const subheading =
    "Take the first step toward a pain-free life. Schedule your free consultation today - I'm here to help.";
  const buttonText = "Contact Doctor";

  return (
    <main>
      <MastHead
        doctorImage={"/donald-w-hofman.png"}
        doctorTitle={`${siteConfig.title} ${siteConfig.name}, ${siteConfig.qualification}`}
        doctorSubTitle="Board-certified orthopedic surgeon with over 20 years of experience."
        doctorDescription="Dr. Donald W. Hohman brings world-class expertise to hip and knee replacements. His minimally invasive approach is designed for less pain, faster recovery, and lasting results."
        backgroundImage={"/masthead.jpg"}
      />

      <Testimonials />
      <TrustFeatureBlock />
      {/* TODO: In the future, if needed, we can also get this via Tanstack Query / fetch etc. */}
      <VideoGuidesBlock
        blockTitle="Understanding Joint Replacement Surgery"
        videoGuides={siteConfig.videoGuides}
      />
      {/* TODO: Figure out lazy loading and image optimization */}
      <ConsultationPromoBlock
        heading={heading}
        subheading={subheading}
        buttonText={buttonText}
        imageSrc={"/senior-couple-together-1.webp"}
      />
      <Footer />
    </main>
  );
}
