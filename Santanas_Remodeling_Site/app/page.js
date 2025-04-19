
import Image from "next/image";

export default function SantanasRemodeling() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow p-6 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image src="/logo.png" alt="Santanas Remodeling Logo" width={50} height={50} />
            <h1 className="text-2xl font-bold">Santanas Remodeling</h1>
          </div>
          <div className="text-sm text-right">
            <p>📞 404-935-3675</p>
            <p>✉️ santanasremodeling.llc@gmail.com</p>
          </div>
        </div>
      </header>

      <section className="bg-cover bg-center h-72 flex items-center justify-center text-white" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581579185169-e5f0a2f9b40c?auto=format&fit=crop&w=1950&q=80)' }}>
        <h2 className="text-4xl font-bold bg-black bg-opacity-50 p-4 rounded">Expert Window & Door Installation</h2>
      </section>

      <main className="max-w-6xl mx-auto p-6 space-y-12">
        <section>
          <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <li className="bg-white p-4 rounded-xl shadow">✅ Window Installation</li>
            <li className="bg-white p-4 rounded-xl shadow">✅ Door Installation</li>
            <li className="bg-white p-4 rounded-xl shadow">✅ Residential & New Construction</li>
            <li className="bg-white p-4 rounded-xl shadow">✅ Custom Measurements & Fittings</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
          <p className="bg-white p-4 rounded-xl shadow">
            With years of hands-on experience, Santanas Remodeling delivers professional, reliable, and precise window and door installations. Whether it's a retrofit or part of new construction, we ensure quality craftsmanship and customer satisfaction.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4">Get a Free Estimate</h3>
          <form className="bg-white p-6 rounded-xl shadow space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
            <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
            <input type="tel" placeholder="Your Phone Number" className="w-full p-2 border rounded" />
            <textarea placeholder="Tell us about your project" className="w-full p-2 border rounded" rows="4"></textarea>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
          </form>
        </section>
      </main>

      <footer className="bg-white border-t p-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Santanas Remodeling. All rights reserved.
      </footer>
    </div>
  );
}
