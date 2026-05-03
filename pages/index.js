import Head from 'next/head';
import useSWR from 'swr';
import { useState, useEffect } from 'react';

const fetcher = url => fetch(url).then(res => res.json());

export default function Home() {
  const { data, mutate } = useSWR('/api/projects', fetcher);
  const projects = data?.projects || [];
  const [menuOpen, setMenuOpen] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [pass, setPass] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window!== 'undefined') {
      setIsLoggedIn(localStorage.getItem('admin') === 'true');
    }
  }, [admin]);

  const login = () => {
    if(pass === 'KIUMBE254') {
      setAdmin(true);
      localStorage.setItem('admin', 'true');
      setIsLoggedIn(true);
    }
    else alert('Password si sahihi');
  };

  const upload = async (e) => {
    const file = e.target.files[0];
    if(!file) return;
    const res = await fetch('/api/upload', {
      method: 'POST',
      headers: { 'x-vercel-filename': file.name },
      body: file
    });
    if(res.ok) { alert('Picha imepakiwa!'); mutate(); }
    else alert('Imeshindwa kupakia');
  };

  const logout = () => {
    localStorage.clear();
    setAdmin(false);
    setIsLoggedIn(false);
  }

  return (
    <>
      <Head>
        <title>KIUMBE OMAR | Premium Construction & Fine Art Siaya</title>
        <meta name="description" content="Premium architectural construction and fine art curation across Siaya. We build legacies." />
      </Head>

      <header className="bg-white sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">
            <span className="text-orange-500">KIUMBE</span> OMAR
          </h2>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#work" className="text-gray-700 hover:text-orange-500">Work</a>
            <a href="#about" className="text-gray-700 hover:text-orange-500">About</a>
            <a href="https://wa.me/254712345678" className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-semibold">Contact</a>
          </nav>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-4">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <button onClick={() => setAdmin(!admin)} className="text-left text-sm text-gray-600">Admin</button>
          </div>
        )}
      </header>

      {admin && (
        <div className="bg-yellow-100 border-y border-yellow-300 p-4">
          <div className="max-w-7xl mx-auto flex gap-4 items-center">
            {isLoggedIn? (
              <>
                <span className="font-bold">Admin:</span>
                <input type="file" accept="image/*" onChange={upload} className="text-sm" />
                <button onClick={logout} className="text-sm text-red-600">Logout</button>
              </>
            ) : (
              <>
                <input type="password" placeholder="Password" className="border p-1 rounded" onChange={e => setPass(e.target.value)} />
                <button onClick={login} className="bg-gray-900 text-white px-3 py-1 rounded text-sm">Ingia</button>
              </>
            )}
          </div>
        </div>
      )}

      <section
        className="relative h-[600px] flex items-center text-white"
        style={{
          backgroundImage: projects[0]? `url(${projects[0]})` : "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            <p className="text-lg mb-6 text-gray-200">
              Premium architectural construction and fine art curation across Siaya County. We build legacies from Siaya to Bondo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#work" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2">
                Explore Our Work <span>→</span>
              </a>
              <a href="https://wa.me/254712345678" className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2">
                ▶ Watch Story
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-orange-500 font-semibold mb-2">SIAYA EXCELLENCE</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Building the Future of<br/>Siaya & Bondo
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-3">🏠 Modern Homes</h3>
              <p className="text-gray-600">Bungalows, Maisonettes, Flats. Design za kisasa zinazodumu.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">🎨 Fine Art</h3>
              <p className="text-gray-600">Murals, signage, sculptures. Pamba biashara na nyumba yako.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">🔧 Renovations</h3>
              <p className="text-gray-600">Jikoni, bafu, tiles, rangi. Tunabadilisha za zamani ziwe mpya.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Work</h2>
          {projects.length === 0? (
            <div className="text-center py-16 bg-white rounded-xl border-2 border-dashed">
              <p className="text-gray-500 mb-4">Hakuna projects bado</p>
              <p className="text-sm text-gray-400">Admin ingia juu a-upload picha</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((url, i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl shadow-lg">
                  <img src={url} alt={`Project ${i+1}`} className="w-full h-80 object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Legacy?</h2>
          <p className="text-xl mb-10 text-gray-300">Free site visit. Free quote. Fundi wazuri Siaya.</p>
          <a href="tel:0712345678" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-xl font-bold text-lg inline-block">
            📞 Call 0712 345 678
          </a>
        </div>
      </section>

      <footer className="bg-white border-t py-8 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-gray-600">© 2026 KIUMBE OMAR</p>
          <button onClick={() => setAdmin(!admin)} className="text-sm text-gray-400">Admin</button>
        </div>
      </footer>

      <a href="https://wa.me/
