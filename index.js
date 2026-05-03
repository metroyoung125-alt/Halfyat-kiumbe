import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("products") || "[]");
    setProducts(data);
  }, []);

  const whatsapp = "https://wa.me/254726319803";

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Halfyat Kiumbe and Company</h1>
      <p className="mb-6">Building, Construction & Fine Art</p>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((item, i) => (
          <div key={i} className="border p-4 rounded-xl shadow">
            <img src={item.image} className="h-48 w-full object-cover rounded"/>
            <h2 className="text-xl mt-2">{item.title}</h2>
            <p>{item.description}</p>

            <a
              href={`${whatsapp}?text=Hello I'm interested in ${item.title}`}
              target="_blank"
              className="block mt-3 bg-green-500 text-white text-center p-2 rounded"
            >
              Chat on WhatsApp
            </a>
          </div>
        ))}
      </div>

      <footer className="mt-10">
        <p>Email: owner@example.com</p>
      </footer>
    </div>
  );
}