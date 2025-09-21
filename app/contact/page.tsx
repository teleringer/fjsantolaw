import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export const metadata: Metadata = {
  title: "Contact Us - Law Offices of Frank J. Santomauro, L.L.C.",
  description: "Contact our law office in Scranton, PA for legal consultation. Call (570) 342-7787 or use our contact form to schedule an appointment.",
  keywords: "contact attorney Scranton PA, legal consultation, law office contact, Frank Santomauro contact",
  openGraph: {
    title: "Contact Us - Law Offices of Frank J. Santomauro, L.L.C.",
    description: "Contact our law office in Scranton, PA for legal consultation. Call (570) 342-7787 or use our contact form.",
    type: "website",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}/contact`,
  },
};

export default function ContactPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us - Law Offices of Frank J. Santomauro, L.L.C.",
    "description": "Contact our law office in Scranton, PA for legal consultation.",
    "url": `${siteUrl}/contact`,
    "mainEntity": {
      "@type": "LegalService",
      "name": "Law Offices of Frank J. Santomauro, L.L.C.",
      "telephone": "(570) 342-7787",
      "email": "frank@fjsantolaw.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "142 South Main Avenue",
        "addressLocality": "Scranton",
        "addressRegion": "PA",
        "postalCode": "18504",
        "addressCountry": "US"
      }
    }
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />
      <Header />
      <main className="pt-1">
        <div className="bg-blue-900 py-12 mb-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Get in touch with our office to schedule a consultation or discuss your legal matter. We're here to help.
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
