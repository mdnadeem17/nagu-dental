import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { AdvancedSpecialities } from "@/components/site/AdvancedSpecialities";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Booking } from "@/components/site/Booking";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nagu Nagu Dental Clinic — Best Dental Clinic in Bengaluru" },
      { name: "description", content: "Nagu Nagu Dental Clinic in Bengaluru — implants, root canal, whitening, braces & cosmetic dentistry. Rated 5.0 ★ by 69+ patients." },
      { property: "og:title", content: "Nagu Nagu Dental Clinic — Expert Dental Care in Bengaluru" },
      { property: "og:description", content: "Trusted dental clinic in Bengaluru. Advanced treatments, gentle care, 5.0★ rated." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Dentist",
        name: "Nagu Nagu Dental Clinic",
        image: "/og.jpg",
        telephone: "+91-88619-32535",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "229/E, Sri Sumuka Driving School, Doddanna Circle, Muddinapalya Main Rd, Muddayanapalya, Annapurneshwari Nagar",
          addressLocality: "Bengaluru",
          addressRegion: "KA",
          postalCode: "560091",
          addressCountry: "IN",
        },
        openingHours: "Mo-Su 09:00-21:00",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "69" },
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <AdvancedSpecialities />
      <WhyChoose />
      <Gallery />
      <Testimonials />
      <Booking />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  );
}
