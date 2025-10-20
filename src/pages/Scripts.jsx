import React from "react";
import { manual } from "../data/manual";

export default function Scripts() {
  const { scripts } = manual;

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    alert("Código copiado al portapapeles.");
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">{scripts.title}</h2>
      <div className="space-y-6">
        {scripts.items.map((s, i) => (
          <div key={i} className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl shadow">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">{s.name}</h3>
              <button
                onClick={() => copyCode(s.code)}
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm"
              >
                Copiar
              </button>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">{s.description}</p>
            <pre className="mt-2 p-3 bg-slate-900 text-slate-50 text-xs rounded overflow-auto">
              <code>{s.code}</code>
            </pre>
          </div>
        ))}
      </div>
    </section>
  );
}
