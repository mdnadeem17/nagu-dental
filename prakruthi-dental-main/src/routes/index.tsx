import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
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
      { title: "PRAKRUTHI DENTAL Specialities — Best Dental Clinic in Kamakshipalya, Bengaluru" },
      { name: "description", content: "PRAKRUTHI DENTAL Specialities in Kamakshipalya, Bengaluru — implants, root canal, whitening, braces & cosmetic dentistry. Rated 5.0 ★ by 192+ patients." },
      { property: "og:title", content: "PRAKRUTHI DENTAL Specialities — Premium Dental Care in Bengaluru" },
      { property: "og:description", content: "Trusted dental clinic in Kamakshipalya, Bengaluru. Advanced treatments, gentle care, 5.0★ rated." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Dentist",
        name: "PRAKRUTHI DENTAL Specialities",
        image: "/og.jpg",
        telephone: "+91-96320-00667",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "791, Guddanna Centre, Magadi Main Rd, Kamakshipalya",
          addressLocality: "Bengaluru",
          addressRegion: "KA",
          postalCode: "560079",
          addressCountry: "IN",
        },
        openingHours: "Mo-Sa 10:00-13:00, 17:30-21:00",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "192" },
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
      <About />
      <Services />
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
