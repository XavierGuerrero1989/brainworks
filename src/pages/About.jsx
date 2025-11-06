import { motion } from "framer-motion";
import { Brain, Cog, Rocket, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Nosotros() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-zinc-100">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-10%] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[28rem] w-[28rem] rounded-full bg-sky-500/10 blur-[120px]" />
      </div>

      {/* Hero / Header */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-8 pt-24 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between"
        >
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Somos <span className="text-violet-400">Bräinworks</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-zinc-300 md:text-lg">
              Una mente inquieta, muchas soluciones. Bräinworks es un estudio unipersonal creado por
              <span className="font-medium text-zinc-100"> Xavier Guerrero</span>, donde tecnología, lógica y creatividad
              se combinan para resolver desafíos reales.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-zinc-400">
              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800/60 bg-zinc-900/40 px-3 py-1">
                <MapPin className="h-4 w-4 text-violet-400" />
                Buenos Aires <span className="text-zinc-600">•</span> <span className="text-violet-300">sin fronteras</span>
              </span>
              <span className="rounded-full border border-zinc-800/60 bg-zinc-900/40 px-3 py-1">React · React Native · Firebase · Node</span>
              <span className="rounded-full border border-zinc-800/60 bg-zinc-900/40 px-3 py-1">Salud · Marítimo · Retail · Tecnología</span>
            </div>
          </div>

          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mt-4 w-full max-w-sm rounded-2xl border border-zinc-800/70 bg-gradient-to-br from-zinc-900/60 to-zinc-950/60 p-5 shadow-[0_0_40px_-15px_rgba(139,92,246,0.35)] md:mt-0"
          >
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-violet-600/15 ring-1 ring-inset ring-violet-500/20">
                <Brain className="h-6 w-6 text-violet-300" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-zinc-500">Manifiesto</p>
                <p className="mt-1 text-balance text-zinc-200">
                  El cerebro detrás de tus soluciones: pensar, construir y optimizar, con foco en impacto real.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Quién soy */}
      <section className="mx-auto w-full max-w-6xl px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-12"
        >
          <div className="md:col-span-7">
            <h2 className="text-2xl font-semibold tracking-tight">Quién soy</h2>
            <p className="mt-3 text-zinc-300">
              Soy <span className="font-medium text-zinc-100">Xavier Guerrero</span>, desarrollador full‑stack y consultor tecnológico.
              Combino más de una década en <span className="text-zinc-100">ventas B2B</span>, <span className="text-zinc-100">conectividad marítima</span> e
              <span className="text-zinc-100"> innovación digital</span> para crear soluciones a medida.
            </p>
            <ul className="mt-4 space-y-2 text-zinc-300">
              <li>• <span className="text-zinc-100">Stack:</span> React, React Native, Firebase, Node.js, Tailwind, Vite, IoT</li>
              <li>• <span className="text-zinc-100">Sectores:</span> salud, marítimo, retail, tecnología</li>
              <li>• <span className="text-zinc-100">Modo de trabajo:</span> iterativo, data‑driven, con entregas rápidas</li>
            </ul>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-5">
              <p className="text-sm uppercase tracking-widest text-zinc-500">Disponibilidad</p>
              <p className="mt-2 text-zinc-200">
                Trabajo con clientes en <span className="text-violet-300">LatAm y el mundo</span>. Base en Buenos Aires, pero 100% <span className="text-violet-300">sin fronteras</span>.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-400">
                <span className="rounded-full border border-zinc-800/60 bg-zinc-950/50 px-3 py-1">Remoto / On‑site</span>
                <span className="rounded-full border border-zinc-800/60 bg-zinc-950/50 px-3 py-1">Proyectos fijos</span>
                <span className="rounded-full border border-zinc-800/60 bg-zinc-950/50 px-3 py-1">Soporte mensual</span>
              </div>
              <Link
                to="/contacto"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-violet-600/90 px-4 py-2 text-sm font-medium text-white shadow hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-400/60"
              >
                <Mail className="h-4 w-4" /> Contáctame
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Filosofía */}
      <section className="mx-auto w-full max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-semibold tracking-tight">Filosofía</h2>
        <p className="mt-3 max-w-3xl text-zinc-300">
          Cada proyecto debe resolver un <span className="text-zinc-100">problema real</span>. En Bräinworks, diseño y tecnología trabajan juntos para lograr
          resultados claros, medibles y sostenibles.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              title: "Pensar",
              Icon: Brain,
              desc: "Entender el contexto, el usuario y el objetivo. Roadmap claro y priorizado.",
            },
            {
              title: "Construir",
              Icon: Cog,
              desc: "Desarrollo iterativo, entregas rápidas y feedback continuo.",
            },
            {
              title: "Optimizar",
              Icon: Rocket,
              desc: "Medir, aprender y escalar. Performance, seguridad y UX.",
            },
          ].map(({ title, Icon, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.07 * i }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800/70 bg-gradient-to-b from-zinc-900/60 to-zinc-950/60 p-5"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-violet-600/10 to-sky-500/10 blur-2xl" />
              </div>
              <div className="relative flex items-start gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-zinc-800/50 ring-1 ring-inset ring-zinc-700/50">
                  <Icon className="h-5 w-5 text-violet-300" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-zinc-100">{title}</h3>
                  <p className="mt-1 text-sm text-zinc-300">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Colaboración */}
      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6"
        >
          <h2 className="text-2xl font-semibold tracking-tight">Visión y colaboración</h2>
          <p className="mt-3 max-w-3xl text-zinc-300">
            Aunque Bräinworks nace de una sola mente, cada proyecto se crea en colaboración con clientes y especialistas
            (diseño, clínica, ingeniería o datos) según el desafío. El objetivo es ser el <span className="text-zinc-100">puente</span> entre la idea y la ejecución.
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-zinc-800/70 bg-gradient-to-br from-zinc-900/60 to-zinc-950/60 px-6 py-8 text-center md:flex-row md:text-left"
        >
          <div>
            <h3 className="text-xl font-semibold text-zinc-100">¿Tenés una idea?</h3>
            <p className="mt-1 max-w-2xl text-zinc-300">Conectemos y la transformamos en una solución.</p>
          </div>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 rounded-xl bg-violet-600/90 px-5 py-2.5 font-medium text-white shadow hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-400/60"
          >
            <Mail className="h-5 w-5" /> Hablemos
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
