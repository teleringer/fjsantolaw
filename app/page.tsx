
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PracticeAreasSection from '../components/PracticeAreasSection';
import ServiceAreasSection from '../components/ServiceAreasSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import ScrollToTop from '../components/ScrollToTop';

export const metadata: Metadata = {
  title: "Law Offices of Frank J. Santomauro, L.L.C. - Experienced Attorney in Scranton, PA",
  description: "Experienced legal representation in Scranton, PA. Specializing in Civil Law, Criminal Defense, Family Law, Real Estate, and more. Call (570) 342-7787 for consultation.",
  keywords: "attorney Scranton PA, lawyer Pennsylvania, legal services, civil law, criminal defense, family law, real estate law, Frank Santomauro",
  openGraph: {
    title: "Law Offices of Frank J. Santomauro, L.L.C.",
    description: "Experienced legal representation in Scranton, PA. Call (570) 342-7787 for consultation.",
    type: "website",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}`,
  },
};

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Law Offices of Frank J. Santomauro, L.L.C.",
    "description": "Experienced legal representation in Scranton, PA specializing in Civil Law, Criminal Defense, Family Law, Real Estate, and more.",
    "url": siteUrl,
    "telephone": "(570) 342-7787",
    "email": "frank@fjsantolaw.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "142 South Main Avenue",
      "addressLocality": "Scranton",
      "addressRegion": "PA",
      "postalCode": "18504",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.4085",
      "longitude": "-75.6647"
    },
    "openingHours": [
      "Mo-Fr 08:30-16:30",
      "Sa by appointment"
    ],
    "priceRange": "$$",
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Lackawanna County, PA"
      },
      {
        "@type": "AdministrativeArea", 
        "name": "Luzerne County, PA"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Wayne County, PA"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Monroe County, PA"
      }
    ],
    "serviceType": [
      "Civil Law",
      "Criminal Defense", 
      "Family Law",
      "Real Estate Law",
      "Business Law",
      "Estate Planning",
      "Contract Law",
      "Personal Injury"
    ],
    "founder": {
      "@type": "Person",
      "name": "Frank J. Santomauro",
      "jobTitle": "Attorney",
      "telephone": "(570) 342-7787",
      "email": "frank@fjsantolaw.com"
    }
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PracticeAreasSection />
        <ServiceAreasSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
