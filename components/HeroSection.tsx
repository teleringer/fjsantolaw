
export default function HeroSection() {
  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat min-h-[600px] flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Professional%20law%20office%20building%20exterior%20with%20classic%20architecture%2C%20justice%20scales%20symbolism%2C%20elegant%20courthouse%20steps%2C%20warm%20lighting%2C%20dignified%20legal%20practice%20atmosphere%2C%20traditional%20columns%20and%20professional%20entrance%2C%20clean%20modern%20aesthetic%20with%20timeless%20design%20elements&width=1200&height=600&seq=hero1&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Experienced Legal Representation in Northeastern Pennsylvania
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Frank J. Santomauro, Esquire provides dedicated legal services across multiple practice areas with over 30 years of experience serving clients in Lackawanna County and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:570-342-7787" 
              className="bg-blue-600 text-white px-8 py-3 rounded font-semibold hover:bg-blue-700 text-center cursor-pointer whitespace-nowrap"
            >
              Call (570) 342-7787
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-blue-900 text-center cursor-pointer whitespace-nowrap"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
