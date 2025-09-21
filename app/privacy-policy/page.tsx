
import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: "Privacy Policy - Law Offices of Frank J. Santomauro, L.L.C.",
  description: "Privacy Policy for Law Offices of Frank J. Santomauro, L.L.C. Learn how we protect your personal information and maintain client confidentiality.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Effective Date:</strong> January 1, 2024
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                Law Offices of Frank J. Santomauro, L.L.C. collects information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Contact us through our website contact form</li>
                <li>Call or email our office</li>
                <li>Schedule a consultation</li>
                <li>Become a client and provide case-related information</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide legal services and representation</li>
                <li>Respond to your inquiries and communications</li>
                <li>Schedule appointments and consultations</li>
                <li>Maintain client records as required by law</li>
                <li>Improve our website and services</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Attorney-Client Privilege</h2>
              <p className="text-gray-700 mb-4">
                All communications between you and our law firm are protected by attorney-client privilege and will be kept strictly confidential. We do not share client information with third parties except as required by law or with your explicit consent.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies and Website Analytics</h2>
              <p className="text-gray-700 mb-4">
                Our website may use cookies and similar technologies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Third-Party Links</h2>
              <p className="text-gray-700 mb-4">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Changes to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page with an updated effective date.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Law Offices of Frank J. Santomauro, L.L.C.</strong><br/>
                  142 South Main Avenue<br/>
                  Scranton, PA 18504<br/>
                  Phone: <a href="tel:570-342-7787" className="text-blue-900 hover:underline cursor-pointer">(570) 342-7787</a><br/>
                  Email: <a href="mailto:frank@fjsantolaw.com" className="text-blue-900 hover:underline cursor-pointer">frank@fjsantolaw.com</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
