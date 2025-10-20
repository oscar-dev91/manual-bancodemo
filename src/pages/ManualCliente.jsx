import React from "react";

export default function ManualCliente() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Manual del Cliente</h2>

      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg">Acceso al sistema</h3>
          <p>El cliente ingresa mediante su usuario y contraseña asignados en el portal.</p>
          <p className="text-sm text-gray-500 mt-2">📸 <img src="/screenshots/login-cliente.png" alt="pantalla de login" /> pantalla de login.</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Realizar transferencias</h3>
          <p>El usuario puede transferir fondos entre cuentas registradas, validando el saldo disponible.</p>
          <p className="text-sm text-gray-500 mt-2">📸 <img src="/screenshots/transferencia-cliente.png" alt="formulario de transferencia" /> formulario de transferencia y confirmación.</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Consultar historial</h3>
          <p>Permite visualizar movimientos recientes, con filtros por fecha y tipo de transacción.</p>
          <p className="text-sm text-gray-500 mt-2">📸 <img src="/screenshots/historial-cliente.png" alt="lista de transacciones" /> lista de transacciones con scroll.</p>
        </div>
      </div>
    </section>
  );
}
