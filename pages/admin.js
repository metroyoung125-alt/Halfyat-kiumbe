import { useState } from "react";

export default function Admin() {
  const [pass, setPass] = useState("");
  const [ok, setOk] = useState(false);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");

  const login = () => {
    if (pass === "KIUMBE254") setOk(true);
    else alert("Wrong password");
  };

  const add = () => {
    const old = JSON.parse(localStorage.getItem("products") || "[]");
    const updated = [...old, { title, image, description: desc }];
    localStorage.setItem("products", JSON.stringify(updated));
    alert("Added!");
  };

  if (!ok) {
    return (
      <div className="p-6">
        <h1>Admin Login</h1>
        <input
          type="password"
          onChange={(e) => setPass(e.target.value)}
          className="border p-2"
        />
        <button onClick={login} className="block mt-3 bg-black text-white p-2">
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1>Admin Panel</h1>

      <input placeholder="Title" onChange={(e)=>setTitle(e.target.value)} className="border p-2 block mb-2"/>
      <input placeholder="Image URL" onChange={(e)=>setImage(e.target.value)} className="border p-2 block mb-2"/>
      <textarea placeholder="Description" onChange={(e)=>setDesc(e.target.value)} className="border p-2 block mb-2"/>

      <button onClick={add} className="bg-green-600 text-white p-2">
        Add Product
      </button>
    </div>
  );
}
