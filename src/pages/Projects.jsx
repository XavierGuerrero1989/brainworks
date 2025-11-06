import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ExternalLink, Brain, Cog, Rocket } from "lucide-react";

const projects = [
  {
    name: "Ferti App",
    desc: "Gestión de pacientes con seguimiento de tratamientos críticos.",
    tech: ["React", "React Native", "Firebase", "Cloud Functions"],
    link: "#fertiapp",
    gradient: "from-brand-violet/20 to-transparent",
    featured: true,
  },
  {
    name: "Stock Counter IoT",
    desc: "Control de activos con RFID y dashboard en tiempo real.",
    tech: ["RFID", "APIs", "Dashboards", "Node"],
    link: "#stockcounteriot",
    gradient: "from-sky-400/20 to-transparent",
  },
  {
    name: "GineTurnos",
    desc: "Turnos web, notificaciones por mail y manejo de pagos.",
    tech: ["React", "Node", "Payments"],
    link: "#gineturnos",
    gradient: "from-emerald-400/20 to-transparent",
  },
];

const cases = {
  fertiapp: {
    title: "Ferti App",
    context:
      "Necesidad de organizar tratamientos y recordatorios médicos para pacientes en seguimiento.",
    solution: [
      "App móvil (React Native) y backend en Firebase (Auth, Firestore, Functions)",
      "Notificaciones programadas y calendario con citas",
      "Panel básico para profesionales con carga de estudios",
    ],
    stack: ["React Native", "Firebase Auth", "Firestore", "Cloud Functions"],
    results: [
      "Mejora de adherencia al tratamiento",
      "Reducción de olvidos de medicación",
    ],
  },
  stockcounteriot: {
    title: "Stock Counter IoT",
    context:
      "Trazabilidad de insumos y equipos clínicos con lecturas rápidas y dashboard centralizado.",
    solution: [
      "Lectura RFID (hardware Zebra) + servicio Node",
      "Dashboard web con estado en tiempo real",
      "Alertas por eventos y registros de inventario",
    ],
    stack: ["Node", "React", "Firestore", "RFID (Zebra FX7500)"],
    results: ["Inventario en tiempo real", "Menos pérdidas y faltantes"],
  },
  gineturnos: {
    title: "GineTurnos",
    context:
      "Gestión de turnos y comunicación con pacientes para una práctica médica especializada.",
    solution: [
      "Portal web con agenda y estados",
      "Emails automáticos para confirmaciones y recordatorios",
      "Integración de pagos y dashboard básico",
    ],
    stack: ["React", "Node", "Mercado Pago", "Mail"],
    results: ["Menor ausentismo", "Cobranza más ordenada"],
  },
};

export default function Proyectos() {
  const fadeIn = {
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.55 },
  };

  return (
    <main
      className="relative min-h-screen w-full overflow-hidden bg-black text-zinc-100 scroll-smooth"
    >
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-12%] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[28rem] w-[28rem] rounded-full bg-sky-500/10 blur-[120px]" />
      </div>

      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-8 pt-24 md:pt-28">
        <motion.div
          {...fadeIn}
          className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between"
        >
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Proyectos
            </h1>
            <p className="mt-3 text-base leading-relaxed text-zinc-300 md:text-lg">
              Casos reales diseñados y construidos end-to-end. Base en Buenos
              Aires, pero 100%{" "}
              <span className="text-violet-300">sin fronteras</span>.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-zinc-800/60 bg-zinc-900/40 px-3 py-1 text-sm text-zinc-400">
              <MapPin className="h-4 w-4 text-violet-400" /> Buenos Aires{" "}
              <span className="text-zinc-600">•</span>{" "}
              <span className="text-violet-300">sin fronteras</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured */}
      <section className="mx-auto w-full max-w-6xl px-6">
        {projects
          .filter((p) => p.featured)
          .map((p) => (
            <motion.div
              key={p.name}
              {...fadeIn}
              className="relative mb-8 overflow-hidden rounded-2xl border border-violet-600/50 bg-gradient-to-br from-zinc-900/60 to-zinc-950/60 p-6 shadow-[0_0_40px_-18px_rgba(139,92,246,0.5)]"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-violet-300">
                    Destacado
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold text-zinc-100">
                    {p.name}
                  </h2>
                  <p className="mt-1 max-w-2xl text-zinc-300">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-400">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-zinc-800/60 bg-zinc-950/50 px-3 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={p.link}
                  className="inline-flex items-center gap-2 rounded-xl bg-violet-600/90 px-4 py-2 text-sm font-medium text-white shadow hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-400/60"
                >
                  Ver caso <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
      </section>

      {/* Grid */}
      <section className="mx-auto w-full max-w-6xl px-6 py-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.05 * i }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800/70 bg-gradient-to-b from-zinc-900/60 to-zinc-950/60 p-5"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-violet-600/10 to-sky-500/10 blur-2xl" />
              </div>
              <div className="relative flex h-full flex-col">
                <h3 className="text-lg font-medium text-zinc-100">{p.name}</h3>
                <p className="mt-1 text-sm text-zinc-300">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-400">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-zinc-800/60 bg-zinc-950/50 px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex-1" />
                <a
                  href={p.link}
                  className="mt-4 inline-flex items-center gap-2 text-sm text-violet-300 hover:text-violet-200"
                >
                  Ver más <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Secciones ancladas */}
      <section
        id="fertiapp"
        className="mx-auto w-full max-w-6xl scroll-mt-28 px-6 py-10"
      >
        <CaseBlock data={cases.fertiapp} />
      </section>

      <section
        id="stockcounteriot"
        className="mx-auto w-full max-w-6xl scroll-mt-28 px-6 py-10"
      >
        <CaseBlock data={cases.stockcounteriot} />
      </section>

      <section
        id="gineturnos"
        className="mx-auto w-full max-w-6xl scroll-mt-28 px-6 py-10"
      >
        <CaseBlock data={cases.gineturnos} />
      </section>

      {/* Otros trabajos */}
      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <motion.div
          {...fadeIn}
          className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6"
        >
          <h2 className="text-2xl font-semibold tracking-tight">
            Otros trabajos
          </h2>
          <p className="mt-2 max-w-3xl text-zinc-300">
            Además de los casos principales, también desarrollé:
          </p>
          <ul className="mt-4 grid grid-cols-1 gap-2 text-zinc-300 md:grid-cols-2">
            <li>
              • <strong>3</strong> webs de invitaciones digitales dinámicas para
              eventos (casamiento y cumpleaños)
            </li>
            <li>• <strong>5</strong> webs de presentación</li>
            <li>• <strong>1</strong> web para un complejo turístico</li>
            <li>
              • <strong>2</strong> aplicaciones móviles: una de{" "}
              <em>cambio de monedas al instante</em> y otra{" "}
              <em>companion</em> para Ferti App
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Proceso breve */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-12">
        <motion.div
          {...fadeIn}
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {[
            {
              t: "Pensar",
              Icon: Brain,
              d: "Contexto, usuario y objetivo. Roadmap claro.",
            },
            { t: "Construir", Icon: Cog, d: "Dev iterativo con demos semanales." },
            {
              t: "Optimizar",
              Icon: Rocket,
              d: "Métricas, performance y mejoras.",
            },
          ].map(({ t, Icon, d }, i) => (
            <div
              key={t}
              className="rounded-2xl border border-zinc-800/70 bg-zinc-900/50 p-5"
            >
              <div className="mb-2 inline-grid h-10 w-10 place-items-center rounded-lg bg-zinc-800/50 ring-1 ring-inset ring-zinc-700/50">
                <Icon className="h-5 w-5 text-violet-300" />
              </div>
              <h3 className="text-lg font-medium text-zinc-100">{t}</h3>
              <p className="mt-1 text-sm text-zinc-300">{d}</p>
            </div>
          ))}
        </motion.div>
        <div className="mt-4 text-sm text-zinc-400">
          Ver proceso completo en{" "}
          <Link
            to="/servicios#proceso"
            className="text-violet-300 hover:text-violet-200"
          >
            /servicios#proceso
          </Link>
          .
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <motion.div
          {...fadeIn}
          className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-zinc-800/70 bg-gradient-to-br from-zinc-900/60 to-zinc-950/60 px-6 py-8 text-center md:flex-row md:text-left"
        >
          <div>
            <h3 className="text-xl font-semibold text-zinc-100">
              ¿Te gusta lo que ves?
            </h3>
            <p className="mt-1 max-w-2xl text-zinc-300">
              Hablemos de tu proyecto y lo llevamos a producción.
            </p>
          </div>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 rounded-xl bg-violet-600/90 px-5 py-2.5 font-medium text-white shadow hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-400/60"
          >
            Contacto
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

function CaseBlock({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
      className="rounded-2xl border border-zinc-800/70 bg-gradient-to-b from-zinc-900/60 to-zinc-950/60 p-6"
    >
      <h2 className="text-2xl font-semibold text-zinc-100">{data.title}</h2>
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-3">
        <div className="md:col-span-1">
          <h3 className="text-sm uppercase tracking-widest text-zinc-500">
            Contexto
          </h3>
          <p className="mt-1 text-zinc-300">{data.context}</p>
        </div>
        <div className="md:col-span-1">
          <h3 className="text-sm uppercase tracking-widest text-zinc-500">
            Solución
          </h3>
          <ul className="mt-1 space-y-1 text-zinc-300">
            {data.solution.map((s) => (
              <li key={s}>• {s}</li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-1">
          <h3 className="text-sm uppercase tracking-widest text-zinc-500">
            Stack
          </h3>
          <div className="mt-1 flex flex-wrap gap-2 text-xs text-zinc-400">
            {data.stack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-zinc-800/60 bg-zinc-950/50 px-3 py-1"
              >
                {t}
              </span>
            ))}
          </div>
          {data.results?.length ? (
            <>
              <h3 className="mt-4 text-sm uppercase tracking-widest text-zinc-500">
                Resultados
              </h3>
              <ul className="mt-1 space-y-1 text-zinc-300">
                {data.results.map((r) => (
                  <li key={r}>• {r}</li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}
