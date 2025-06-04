import ConsultationPromoBlock from "@/features/ConsultationPromoBlock";
import TrustFeatureBlock from "@/features/TrustFeatureBlock";
import Footer from "@/features/Footer";
import CopyrightFooter from "@/components/CopyrightFooter";

export default function Home() {
  // Example props for the CTA
  const heading = "Ready to Book Your First Consultation?";
  const subheading =
    "Take the first step toward a pain-free life. Schedule your free consultation today - I'm here to help.";
  const buttonText = "Contact Doctor";

  return (
    <main>
      <TrustFeatureBlock />
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
