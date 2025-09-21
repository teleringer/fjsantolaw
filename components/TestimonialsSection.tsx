
export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "I have been in a custody battle for eight years. For the first three years other highly recommended lawyers did not live up to the promises or fees for services. I was highly discouraged and worried for the safety of my child. Five years ago, I was referred to Frank and from the first day, he made me feel at ease. He understood that my child was the most important part of the whole process. Frank treats his clients like family and protects them and cares for them as though they were his own. He is brutally honest and will not charge you just to charge you. I highly recommend Frank and his team if you have a legal situation that needs attention. You will not regret having Frank and his team on your side.",
      author: "Joseph Petro",
      case: "Client"
    },
    {
      text: "I went to Attorney Santomauro after reaching out to several other lawyers who did not want to take on my case. I am extremely grateful I went to him. Frank never gave up and fought in court with positive results for me. I recommend Attorney Santomauro without reservation because I know he cared about me as a person and strategically and meticulously battled in court for me. I am sure he does this for all of his clients.",
      author: "Martin Stivala",
      case: "Client"
    },
    {
      text: "Not long ago, personal things arose and I needed an attorney. I heard about Frank through a friend who told me he fights for his clients. I took a chance and have not regretted it. Frank had my back in everything. He will fight for you. He explains everything he is going to do. He is reliable and dependable.",
      author: "B. B.",
      case: "Client"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read what our clients have to say about their experience with our legal services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400"></i>
                ))}
              </div>
              <blockquote className="text-gray-700 mb-4 italic">
                "{testimonial.text}"
              </blockquote>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.case}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-6">See Our Outstanding Ratings</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-2xl mx-auto">
              <div>
                <div className="space-y-6">
                  <div className="text-center">
                    <a href="https://g.page/r/CVcWI8F4Kjl7EAE/review" target="_blank" rel="noopener noreferrer" className="cursor-pointer block">
                      <div className="text-3xl font-bold text-yellow-600 mb-2">★★★★☆</div>
                      <h4 className="text-lg font-semibold text-gray-900">Google Reviews</h4>
                      <p className="text-gray-600">4.5/5 Rating</p>
                    </a>
                  </div>
                  <div className="text-center">
                    <a rel="me" target="_blank" href="https://www.avvo.com/attorneys/18504-pa-frank-santomauro-544326.html" className="cursor-pointer block">
                      <div className="text-3xl font-bold text-yellow-600 mb-2">★★★★★</div>
                      <h4 className="text-lg font-semibold text-gray-900">Avvo Rating</h4>
                      <p className="text-gray-600">4.8/5 Rating</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <img 
                  src="https://static.readdy.ai/image/34eddc7177ae71b8c76003a700ee36ff/3d1f0ca99b14c36c4bfefc4f4f66eff2.png" 
                  alt="Happy Clients" 
                  className="rounded-lg shadow-md mx-auto object-cover max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
