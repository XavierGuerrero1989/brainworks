import React from "react";

const sectors = ["Salud", "Marítimo", "Retail", "Educación", "Emprendimientos"];

export default function Sectors() {
  return (
    <section className="w-full px-6 sm:px-8 lg:px-12 py-16">
      <h2 className="text-2xl md:text-3xl font-bold">Sectores</h2>
      <p className="mt-2 text-white/70 max-w-2xl">
        Desde clínicas hasta barcos. Nos enfocamos en el problema y diseñamos la solución.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {sectors.map((s) => (
          <span
            key={s}
            className="rounded-xl border border-white/12 bg-white/[0.03] px-4 py-2 text-sm text-white/85 hover:bg-white/[0.06] transition"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
