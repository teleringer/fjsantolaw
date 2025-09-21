
'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function AboutSection() {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the homepage, navigate there first
    if (pathname !== '/') {
      router.push(`/#${sectionId}`);
    } else {
      // If we're on homepage, scroll directly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:block mb-6">
            <img 
              src="https://static.readdy.ai/image/34eddc7177ae71b8c76003a700ee36ff/4cb8de939c289a06f4bf22b6415c1ac6.png" 
              alt="Frank J. Santomauro, Esquire" 
              className="float-left mr-6 mb-4 rounded-lg shadow-lg"
              style={{width: '240px', height: '271px', objectFit: 'cover'}}
            />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Frank J. Santomauro, Esq.
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 30 years of dedicated legal practice in Northeastern Pennsylvania, Frank J. Santomauro provides comprehensive legal services to individuals, families, and businesses throughout the region. Frank earned his Juris Doctor from the District of Columbia School of Law in 1992, following his undergraduate degree from Villanova University where he studied Political Science with a concentration in Criminal Justice and a minor in Business.
            </p>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Attorney Santomauro is admitted to practice in multiple jurisdictions, including the Lackawanna County Bar, and serves as a member and practitioner of the United States District Courts for both the Middle and Eastern Districts of Pennsylvania. He has been the Owner and Managing Member of the Law Offices of Frank J. Santomauro, L.L.C. since 1996, building his practice on a foundation of experience gained through his early career as an associate with prominent local law firms.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Attorney Santomauro practices primarily in Lackawanna County but extends his services to clients in Luzerne, Wayne, Monroe, Bradford, Susquehanna, and Wyoming counties, ensuring accessible legal representation across Northeastern Pennsylvania. His commitment to client service and thorough understanding of Pennsylvania law makes him a trusted advocate for his clients throughout the region.
            </p>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Frank J. Santomauro, Esq.
            </h2>
            <div className="text-center mb-6">
              <img 
                src="https://static.readdy.ai/image/34eddc7177ae71b8c76003a700ee36ff/4cb8de939c289a06f4bf22b6415c1ac6.png" 
                alt="Frank J. Santomauro, Esquire" 
                className="rounded-lg shadow-lg mx-auto"
                style={{width: '240px', height: '271px', objectFit: 'cover'}}
              />
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 30 years of dedicated legal practice in Northeastern Pennsylvania, Frank J. Santomauro provides comprehensive legal services to individuals, families, and businesses throughout the region. Frank earned his Juris Doctor from the District of Columbia School of Law in 1992, following his undergraduate degree from Villanova University where he studied Political Science with a concentration in Criminal Justice and a minor in Business.
            </p>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Attorney Santomauro is admitted to practice in multiple jurisdictions, including the Lackawanna County Bar, and serves as a member and practitioner of the United States District Courts for both the Middle and Eastern Districts of Pennsylvania. He has been the Owner and Managing Member of the Law Offices of Frank J. Santomauro, L.L.C. since 1996, building his practice on a foundation of experience gained through his early career as an associate with prominent local law firms.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Attorney Santomauro practices primarily in Lackawanna County but extends his services to clients in Luzerne, Wayne, Monroe, Bradford, Susquehanna, and Wyoming counties, ensuring accessible legal representation across Northeastern Pennsylvania. His commitment to client service and thorough understanding of Pennsylvania law makes him a trusted advocate for his clients throughout the region.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
