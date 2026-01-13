import React, { useState } from "react";

export default function LabTwForm() {
  const [base, setBase] = useState("")
  const [altura, setAltura] = useState("")
 

  const submit = (e: any) => {
    e.preventDefault();
    const resultado = (Number(base)*Number(altura)/2)
    alert(`Area triangulo: ${resultado}`);;
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h2 className="text-xl font-extrabold">Area Triangulo</h2>

        <form onSubmit={submit} className="mt-5 max-w-xl space-y-3">
          <label className="block text-sm font-semibold text-white/80">Area triangulo</label>

          <input
            className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-blue-600/50"
            type="number"
            placeholder="base"
            value={base}
            onChange={(e) => setBase(e.target.value)}
            required
          />
 

          <input
            type="number"
            placeholder="altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            required
          />

          <button className="h-11 rounded-xl bg-blue-600 px-5 font-semibold hover:bg-blue-500 transition" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </main>
  );
}