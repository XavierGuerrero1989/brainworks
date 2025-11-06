import React from "react";

const projects = [
  {
    name: "Ferti App",
    desc: "Gestión de pacientes. Recordatorio de turnos y seguimiento de tratamientos criticos.",
    tech: ["React", "Firebase", "Cloud Functions", "React Native"],
    link: "/proyectos#fertiapp",
    gradient: "from-brand-violet/20 to-transparent",
  },
  {
    name: "Stock Counter IoT",
    desc: "Control de activos IoT, con tecnologia RFID.",
    tech: ["IoT", "APIs", "Dashboards", "RFID"],
    link: "/proyectos#stockcounteriot",
    gradient: "from-sky-400/20 to-transparent",
  },
  {
    name: "GineTurnos",
    desc: "Portal de turnos web, con notificaciones por mail, dashboard, historia clinica y manejo de pagos.",
    tech: ["React", "Node", "Payments"],
    link: "/proyectos#gineturnos",
    gradient: "from-emerald-400/20 to-transparent",
  },
];

export default function ProjectsFeatured() {
  return (
    <section className="w-full px-6 sm:px-8 lg:px-12 py-16">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-bold">Proyectos destacados</h2>
        <a href="/proyectos" className="text-sm text-white/70 hover:text-white">Ver todos →</a>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.link}
            className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 overflow-hidden
                       hover:scale-[1.01] transition-transform"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`} />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mt-2 text-white/75">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/80">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full border border-white/15 bg-black/30 px-3 py-1">{t}</span>
                ))}
              </div>
              <div className="mt-6 text-sm text-white/70 group-hover:text-white">Ver caso →</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
