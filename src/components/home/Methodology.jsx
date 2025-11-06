import React from "react";
import { Ear, Search, Puzzle, Wrench } from "lucide-react";

const steps = [
  { title: "Escuchamos la idea", desc: "Entendemos el contexto y la necesidad real.", Icon: Ear },
  { title: "Analizamos el problema", desc: "Definimos alcance, riesgos y métricas.", Icon: Search },
  { title: "Diseñamos la solución", desc: "Elegimos el camino más eficiente.", Icon: Puzzle },
  { title: "Construimos y lanzamos", desc: "Implementación, pruebas y puesta en marcha.", Icon: Wrench },
];

export default function Methodology() {
  return (
    <section className="w-full px-6 sm:px-8 lg:px-12 py-16">
      <h2 className="text-2xl md:text-3xl font-bold">Cómo pensamos</h2>

      <div className="relative mt-10">
        {/* línea neón */}
        <div className="hidden md:block absolute left-0 right-0 top-8 h-[2px] bg-gradient-to-r from-brand-violet/50 via-white/20 to-brand-violet/50" />
        <div className="grid md:grid-cols-4 gap-8 relative">
          {steps.map(({ title, desc, Icon }, i) => (
            <div key={title} className="relative">
              <div className="flex items-center gap-3">
                <div className="shrink-0 rounded-full border border-white/15 bg-white/5 p-3">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-sm text-white/60">Paso {i + 1}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-8 text-white/70">
        No seguimos fórmulas. <span className="text-white">Diseñamos las que funcionan.</span>
      </p>
    </section>
  );
}
