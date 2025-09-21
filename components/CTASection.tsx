export default function CTASection() {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Discuss Your Legal Matter?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Contact us today for a consultation. We're here to provide the experienced legal representation you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="tel:570-342-7787" 
            className="bg-white text-blue-900 px-8 py-3 rounded font-semibold hover:bg-gray-100 cursor-pointer whitespace-nowrap"
          >
            Call (570) 342-7787
          </a>
          <a 
            href="/contact" 
            className="border-2 border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-blue-900 cursor-pointer whitespace-nowrap"
          >
            Send Message
          </a>
        </div>
        <div className="mt-8 text-blue-200">
          <p>📧 frank@fjsantolaw.com</p>
          <p>📍 142 South Main Avenue, Scranton, PA 18504</p>
        </div>
      </div>
    </section>
  );
}