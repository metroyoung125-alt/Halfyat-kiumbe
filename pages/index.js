import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Halfyat Kiumbe & Company | Construction & Fine Art Siaya</title>
        <meta name="description" content="Top Construction and Fine Art Company in Siaya, Kenya. House Building, Renovations, Murals." />
      </Head>

      {/* Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Halfyat Kiumbe</h2>
          <a href="tel:0712345678" className="bg-green-600 text-white px-5 py-2 rounded-lg font-semibold">
            Call 0712 345 678
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            We Build <span className="text-green-400">Siaya</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto">
            From foundation to finishing. Professional construction and stunning fine art for homes and businesses.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:0712345678" className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-bold text-lg">
              Get Free Quote
            </a>
            <a href="https://wa.me/254712345678" className="bg-white text-gray-900 hover:bg-gray-200 px-8 py-4 rounded-lg font-bold text-lg">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">What We Do Best</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold mb-3">House Construction</h3>
              <p className="text-gray-600">Complete homes from scratch. Modern designs, quality materials, on-time delivery.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-3">Fine Art & Murals</h3>
              <p className="text-gray-600">Custom wall paintings, sculptures, sign writing. Make your space unique.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-6xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold mb-3">Renovations</h3>
              <p className="text-gray-600">Kitchen, bathroom, full house remodels. Tiling, plumbing, electrical, painting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Why Choose Halfyat Kiumbe?</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="flex gap-4">
              <div className="text-green-600 text-3xl">✓</div>
              <div>
                <h4 className="text-xl font-bold mb-2">10+ Years Experience</h4>
                <p className="text-gray-600">Trusted by families and businesses across Siaya County.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-green-600 text-3xl">✓</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Quality Guaranteed</h4>
                <p className="text-gray-600">We use the best materials and skilled fundis only.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-green-600 text-3xl">✓</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Fair Pricing</h4>
                <p className="text-gray-600">No hidden costs. Free quotes for all projects.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-green-600 text-3xl">✓</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Siaya Local</h4>
                <p className="text-gray-600">We understand local needs. We're your neighbors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-green-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8">Call or WhatsApp us today for a free site visit and quote.</p>
          <div className="bg-white text-gray-900 p-8 rounded-2xl inline-block">
            <p className="text-2xl font-bold mb-4">📱 0712 345 678</p>
            <p className="text-lg mb-6">📧 halfyatkiumbe@gmail.com</p>
            <p className="text-lg">📍 Siaya Town, Kenya</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center">
        <p>© 2026 Halfyat Kiumbe & Company. Proudly built in Siaya.</p>
      </footer>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/254712345678" className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.
