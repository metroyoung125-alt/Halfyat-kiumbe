import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Halfyat Kiumbe & Company | Construction & Fine Art Siaya</title>
        <meta name="description" content="Top Construction and Fine Art Company in Siaya, Kenya" />
      </Head>

      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Halfyat Kiumbe</h2>
          <a href="tel:0712345678" className="bg-green-600 text-white px-5 py-2 rounded-lg font-semibold">
            Call 0712 345 678
          </a>
        </div>
      </header>

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

      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center">
        <p>© 2026 Halfyat Kiumbe & Company. Proudly built in Siaya.</p>
      </footer>

      <a href="https://wa.me/254712345678" className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </>
  )
    }
