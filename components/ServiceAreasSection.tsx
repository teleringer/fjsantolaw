
export default function ServiceAreasSection() {
  const counties = [
    'Lackawanna County',
    'Bradford County',
    'Luzerne County', 
    'Monroe County',
    'Susquehanna County',
    'Wayne County',
    'Wyoming County'
  ];

  return (
    <section id="service-areas" className="py-16 bg-gray-900" style={{scrollMarginTop: '100px'}}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Service Areas</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Serving clients across Northeastern Pennsylvania with convenient access to legal representation in multiple counties.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-white mb-6">Counties We Serve</h3>
            <div className="grid grid-cols-1 gap-3">
              {counties.map((county, index) => (
                <div key={index} className="flex items-center justify-center md:justify-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-gray-300 font-medium">{county}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-blue-800 rounded-lg">
              <p className="text-blue-200 font-medium">Primary Practice Location:</p>
              <p className="text-gray-300">142 South Main Avenue, Scranton, PA 18504</p>
            </div>
          </div>
          
          <div className="text-center">
            <img 
              src="https://static.readdy.ai/image/34eddc7177ae71b8c76003a700ee36ff/6be5edffb40701473745728a49be46be.jfif" 
              alt="Law Office Building" 
              className="rounded-lg shadow-lg mx-auto max-w-full"
            />
            <p className="text-gray-400 text-sm mt-4">Our office is located at 142 South Main Ave., Scranton, PA 18504</p>
          </div>
        </div>
      </div>
    </section>
  );
}
