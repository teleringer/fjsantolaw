
export default function PracticeAreasSection() {
  const practiceAreas = [
    {
      title: 'Civil Law',
      description: 'Comprehensive civil litigation and dispute resolution services.',
      icon: 'ri-scales-3-line'
    },
    {
      title: 'Criminal Defense',
      description: 'Aggressive defense representation for criminal charges.',
      icon: 'ri-shield-user-line'
    },
    {
      title: 'Family Law',
      description: 'Custody, divorce, domestic relations, and family matters.',
      icon: 'ri-hearts-line'
    },
    {
      title: 'Landlord/Tenant',
      description: 'Property disputes and landlord-tenant legal issues.',
      icon: 'ri-home-4-line'
    },
    {
      title: 'Business Law',
      description: 'Corporate legal services and business representation.',
      icon: 'ri-briefcase-line'
    },
    {
      title: 'Real Estate',
      description: 'Property transactions and real estate legal services.',
      icon: 'ri-building-line'
    },
    {
      title: 'Estate Planning',
      description: 'Wills, trusts, and power of attorney documents.',
      icon: 'ri-file-text-line'
    },
    {
      title: 'Contract Law',
      description: 'Contract drafting, review, and dispute resolution.',
      icon: 'ri-file-edit-line'
    },
    {
      title: 'Personal Injury',
      description: 'Compensation for accident and injury claims.',
      icon: 'ri-first-aid-kit-line'
    }
  ];

  return (
    <section id="practice-areas" className="py-16 bg-gradient-to-br from-yellow-50 to-yellow-100" style={{scrollMarginTop: '100px'}}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Practice Areas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive legal services across multiple practice areas to serve your diverse legal needs throughout Northeastern Pennsylvania.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${area.icon} text-3xl text-blue-900`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
