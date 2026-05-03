import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Halfyat Kiumbe & Company - Construction & Fine Art Siaya</title>
        <meta name="description" content="Professional Building, Construction & Fine Art Services in Siaya, Kenya" />
      </Head>

      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Halfyat Kiumbe</h1>
            <div className="hidden md:flex gap-8">
              <a href="#home" className="text-gray-700 hover:text-green-600">Home</a>
              <a href="#services" className="text-gray-700 hover:text-green-600">Services</a>
              <a href="#projects" className="text-gray-700 hover:text-green-600">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600">Contact</a>
            </div>
            <a href="tel:07XXXXXXXX" className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold">
              Call Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-6">
            Building Dreams in <span className="text-green-400">Siaya</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto">
            Professional Construction, Building & Fine Art Services. Quality workmanship you can trust.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:07XXXXXXXX"
