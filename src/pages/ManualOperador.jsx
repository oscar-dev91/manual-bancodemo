import React from "react";

export default function ManualOperador() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Manual del Operador</h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg">Acceso al panel</h3>
          <p>Los operadores acceden a un panel administrativo con autenticación segura.</p>
          <p className="text-sm text-gray-500 mt-2">📸 <img src="/screenshots/dashboard-operador.png" alt="pantalla principal del panel" /> pantalla principal del panel.</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Gestión de clientes</h3>
          <p>Permite realizar depósitos o retiros de las cuentas de los clientes.</p>
          <p className="text-sm text-gray-500 mt-2">📸 <img src="/screenshots/deposito-operador.png" alt="Formulario de depósito a cuenta de cliente" /> Formulario de depósito a cuenta de cliente.</p>
          <p className="text-sm text-gray-500 mt-2">📸 <img src="/screenshots/retiro-operador.png" alt="Formulario de retiro a cuenta de cliente" /> Formulario de retiro a cuenta de cliente.</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Revisión de logs</h3>
          <p>Se pueden revisar los registros de acciones del sistema para auditoría.</p>
          <p className="text-sm text-gray-500 mt-2">📸 <img src="/screenshots/logs-operador.png" alt="vista del log con filtros" /> vista del log con filtros.</p>
        </div>
      </div>
    </section>
  );
}
