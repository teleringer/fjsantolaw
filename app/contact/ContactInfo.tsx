export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="w-6 h-6 flex items-center justify-center bg-blue-900 rounded-full mr-4 mt-1">
              <i className="ri-phone-line text-white text-sm"></i>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Phone</h3>
              <p className="text-gray-600">
                <a href="tel:570-342-7787" className="hover:text-blue-900 cursor-pointer">(570) 342-7787</a>
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-6 h-6 flex items-center justify-center bg-blue-900 rounded-full mr-4 mt-1">
              <i className="ri-printer-line text-white text-sm"></i>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Fax</h3>
              <p className="text-gray-600">(570) 342-7786</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-6 h-6 flex items-center justify-center bg-blue-900 rounded-full mr-4 mt-1">
              <i className="ri-mail-line text-white text-sm"></i>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:frank@fjsantolaw.com" className="hover:text-blue-900 cursor-pointer">frank@fjsantolaw.com</a>
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-6 h-6 flex items-center justify-center bg-blue-900 rounded-full mr-4 mt-1">
              <i className="ri-map-pin-line text-white text-sm"></i>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Address</h3>
              <p className="text-gray-600">
                142 South Main Avenue<br/>
                Scranton, PA 18504
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-6 h-6 flex items-center justify-center bg-blue-900 rounded-full mr-4 mt-1">
              <i className="ri-global-line text-white text-sm"></i>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Website</h3>
              <p className="text-gray-600">
                <a href="https://www.fjsantolaw.com" className="hover:text-blue-900 cursor-pointer">www.fjsantolaw.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Office Hours</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Monday - Friday</span>
            <span className="font-medium">8:30 AM - 4:30 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Saturday</span>
            <span className="font-medium">By Appointment</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Sunday</span>
            <span className="font-medium">Closed</span>
          </div>
        </div>
        <div className="mt-4 p-3 bg-blue-100 rounded text-sm text-blue-800">
          <strong>Note:</strong> Emergency consultations available by appointment.
        </div>
      </div>
      
      <div className="bg-white border border-gray-200 rounded-lg p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Office Location</h3>
        <div className="aspect-video w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.8344567!2d-75.6647!3d41.4085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c5a4b9b9b9b9b9%3A0x9b9b9b9b9b9b9b9b!2s142%20S%20Main%20Ave%2C%20Scranton%2C%20PA%2018504!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
}