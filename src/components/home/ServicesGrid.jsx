import React from "react";
import { Settings, Cpu, Smartphone, Network } from "lucide-react";

const items = [
  {
    title: "Digitalización de procesos",
    desc: "Convertimos tareas manuales en flujos digitales eficientes.",
    Icon: Settings,
  },
  {
    title: "Conectividad e IoT",
    desc: "Datos en tiempo real: hardware + software + dashboards.",
    Icon: Cpu,
  },
  {
    title: "Desarrollo web y apps",
    desc: "Plataformas funcionales, escalables y seguras.",
    Icon: Smartphone,
  },
  {
    title: "Integraciones & APIs",
    desc: "Conectamos sistemas para multiplicar valor.",
    Icon: Network,
  },
];

export default function ServicesGrid() {
  return (
    <section className="w-full px-6 sm:px-8 lg:px-12 py-16">
      <h2 className="text-2xl md:text-3xl font-bold">Qué hacemos</h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
        {items.map(({ title, desc, Icon }) => (
          <div
            key={title}
            className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 overflow-hidden
                       transition-transform hover:scale-[1.02]"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition
                            bg-[radial-gradient(40%_60%_at_50%_0%,rgba(179,37,235,0.15),transparent)]" />
            <Icon className="h-6 w-6 text-white/80" />
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-white/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
