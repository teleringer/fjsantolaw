
import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: "Terms of Service - Law Offices of Frank J. Santomauro, L.L.C.",
  description: "Terms of Service for Law Offices of Frank J. Santomauro, L.L.C. Important legal information about using our website and services.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}/terms`,
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Effective Date:</strong> January 1, 2024
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using the website of Law Offices of Frank J. Santomauro, L.L.C., you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. No Attorney-Client Relationship</h2>
              <p className="text-gray-700 mb-4">
                Use of this website and the transmission of information via this website does not create an attorney-client relationship between you and Law Offices of Frank J. Santomauro, L.L.C. An attorney-client relationship is established only through a signed retainer agreement.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Confidentiality</h2>
              <p className="text-gray-700 mb-4">
                Do not include confidential or sensitive information in any communications through this website. Internet communications are not secure and confidentiality cannot be guaranteed until an attorney-client relationship is formally established.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Legal Advice Disclaimer</h2>
              <p className="text-gray-700 mb-4">
                The information on this website is for general informational purposes only and should not be construed as legal advice. Legal advice can only be provided through individual consultation with an attorney who is familiar with the specific facts of your case.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Jurisdictional Issues</h2>
              <p className="text-gray-700 mb-4">
                Frank J. Santomauro, Esquire is licensed to practice law in Pennsylvania. This website is intended for residents of Pennsylvania, particularly those in Lackawanna, Luzerne, Wayne, Monroe, Bradford, Susquehanna, and Wyoming counties.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Statute of Limitations</h2>
              <p className="text-gray-700 mb-4">
                Legal claims are subject to statutes of limitations. Delaying consultation with an attorney may result in the loss of your right to pursue legal remedies. If you believe you may have a legal claim, contact an attorney promptly.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Website Use and Access</h2>
              <p className="text-gray-700 mb-4">
                You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use and enjoyment of the website.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content on this website, including text, graphics, logos, and images, is the property of Law Offices of Frank J. Santomauro, L.L.C. and is protected by copyright and other intellectual property laws.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                Law Offices of Frank J. Santomauro, L.L.C. shall not be liable for any damages arising from the use of this website or reliance on information contained herein.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this website.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, please contact:
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
