import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ManualCliente from "./pages/ManualCliente";
import ManualOperador from "./pages/ManualOperador";
import Scripts from "./pages/Scripts";

export default function App() {
  const [section, setSection] = useState("cliente");

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Navbar section={section} setSection={setSection} />
      <main className="max-w-4xl mx-auto px-6 py-10">
        {section === "cliente" && <ManualCliente />}
        {section === "operador" && <ManualOperador />}
        {section === "scripts" && <Scripts />}
      </main>
    </div>
  );
}
