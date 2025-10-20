import React from "react";

export default function Navbar({ section, setSection }) {
  return (
    <header className="bg-blue-600 dark:bg-blue-800 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-lg font-bold">BancoDemo - Manual de Usuario</h1>

        <nav className="flex gap-4 items-center">
          {["cliente", "operador", "scripts"].map((key) => (
            <button
              key={key}
              onClick={() => setSection(key)}
              className={`capitalize font-medium ${
                section === key ? "underline underline-offset-4" : "opacity-80 hover:opacity-100"
              }`}
            >
              {key}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
