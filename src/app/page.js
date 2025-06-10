import ConsultationPromoBlock from "@/features/ConsultationPromoBlock";
import TrustFeatureBlock from "@/features/TrustFeatureBlock";
import VideoGuidesBlock from "@/features/VideoGuidesBlock";
import Footer from "@/features/Footer";
import MastHead from "@/features/MastHead";
import { siteConfig } from "@/config/siteConfig";

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
      <TrustFeatureBlock />
      <VideoGuidesBlock
        blockTitle="Understanding Joint Replacement Surgery"
        videoGuides={[
          {
            image: "/hip-replacement-1.png",
            title: "Hip Replacement",
            text: "Experience renewed mobility and relief with our advanced, minimally invasive hip replacement approach.",
          },
          {
            image: "/knee-replacement-2.png",
            title: "Knee Replacement",
            text: "Regain your stride and comfort through precise, patient-focused knee replacement surgery.",
          },
          {
            image: "/shoulder-replacement-3.png",
            title: "Total Shoulder Replacement",
            text: "Restore strength and ease of movement with expert shoulder joint replacement tailored to your needs.",
          },
        ]}
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
