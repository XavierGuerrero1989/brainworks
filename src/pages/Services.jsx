import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Hammer, Smartphone, Server, CircuitBoard, BarChart3, Palette, PlugZap, Wrench, Mail, Workflow } from "lucide-react";

export default function Servicios() {
  const fadeIn = {
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.55 },
  };

  const tiles = [
    {
      icon: Smartphone,
      title: "Web & Mobile",
      desc: "Sitios y apps con React / React Native. UI moderna, performance y accesibilidad.",
      bullets: ["Landing / Web corporativa", "Dashboards e interfaces", "Apps móviles (Expo / RN CLI)"]
    },
    {
      icon: Server,
      title: "Backend & Cloud",
      desc: "Arquitectura en Firebase / Node.js. Autenticación, Firestore, Functions y Storage.",
      bullets: ["APIs y microservicios", "Auth (email, Google)", "Realtime & colas (Cloud Tasks)"]
    },
    {
      icon: CircuitBoard,
      title: "IoT",
      desc: "Prototipos y tableros IoT. RFID para cualquier ambito.",
      bullets: ["RFID (Zebra FX7500)", "Tableros IoT"]
    },
    {
      icon: BarChart3,
      title: "Data & Dashboards",
      desc: "Visualización y analítica de negocio. KPIs accionables y reportes.",
      bullets: ["Gráficos interactivos", "Exportables (PDF/CSV)", "Trazabilidad de eventos"]
    },
  ];

  const plans = [
    {
      tag: "Sprint MVP",
      title: "Valida tu idea en 2–4 semanas",
      desc: "Prototipo funcional + landing + analítica básica para validar con usuarios.",
      points: [
        "Alcance preciso y entregas semanales",
        "UI base con tu branding",
        "Deploy y medición (GA4/LogRocket)",
      ],
      cta: "Quiero un MVP",
      anchor: "#mvp",
    },
    {
      tag: "Producto Completo",
      title: "De cero a producción",
      desc: "App web/móvil + backend + integración de pagos y notificaciones.",
      points: [
        "Arquitectura en Firebase / Node",
        "Autenticación, roles y permisos",
        "Mercado Pago / PayPal / Emails",
      ],
      featured: true,
      cta: "Construyamos",
      anchor: "#producto",
    },
    {
      tag: "Soporte & Evolución",
      title: "Retainer mensual",
      desc: "Mantenimiento, optimizaciones y features priorizados por roadmap.",
      points: [
        "Sprints mensuales",
        "Monitoreo y métricas",
        "Atención prioritaria",
      ],
      cta: "Empezar soporte",
      anchor: "#soporte",
    },
  ];

  const addons = [
    { icon: Palette, title: "Branding básico", desc: "Paleta, tipografías y componentes UI base." },
    { icon: PlugZap, title: "Integraciones", desc: "Google, Mercado Pago, PayPal, Maps, correo." },
    { icon: Workflow, title: "Automatizaciones", desc: "Workflows con Functions, Webhooks y Cloud Tasks." },
  ];

  const steps = [
    { title: "Descubrir", desc: "Brief + objetivos + criterios de éxito." },
    { title: "Prototipar", desc: "Wireframes + prueba rápida con usuarios." },
    { title: "Construir", desc: "Dev iterativo con demos semanales." },
    { title: "Lanzar", desc: "Deploy, monitoreo y hardening." },
    { title: "Optimizar", desc: "Métricas, mejoras y roadmap continuo." },
  ];

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-zinc-100">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-12%] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[28rem] w-[28rem] rounded-full bg-sky-500/10 blur-[120px]" />
      </div>

      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-10 pt-24 md:pt-28">
        <motion.div {...fadeIn} className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Servicios</h1>
            <p className="mt-3 text-base leading-relaxed text-zinc-300 md:text-lg">
              Diseño y desarrollo end‑to‑end: de la idea al producto en producción. Base en Buenos Aires, pero 100% <span className="text-violet-300">sin fronteras</span>.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-zinc-800/60 bg-zinc-900/40 px-3 py-1 text-sm text-zinc-400">
              <MapPin className="h-4 w-4 text-violet-400" /> Buenos Aires <span className="text-zinc-600">•</span> <span className="text-violet-300">sin fronteras</span>
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-800/70 bg-gradient-to-br from-zinc-900/60 to-zinc-950/60 p-5">
            <div className="flex items-start gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-violet-600/15 ring-1 ring-inset ring-violet-500/20">
                <Hammer className="h-5 w-5 text-violet-300" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-zinc-500">Formato</p>
                <p className="mt-1 text-zinc-200">Proyecto cerrado o retainer mensual, con sprints y demos periódicas.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Áreas de servicio */}
      <section id="areas" className="mx-auto w-full max-w-6xl px-6 py-8">
        <h2 className="text-2xl font-semibold tracking-tight">¿Qué construyo?</h2>
        <p className="mt-2 max-w-3xl text-zinc-300">Cuatro frentes para cubrir el ciclo completo de producto.</p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {tiles.map((t, i) => (
            <motion.div
              key={t.title}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.06 * i }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800/70 bg-gradient-to-b from-zinc-900/60 to-zinc-950/60 p-5"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-violet-600/10 to-sky-500/10 blur-2xl" />
              </div>
              <div className="relative flex items-start gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-zinc-800/50 ring-1 ring-inset ring-zinc-700/50">
                  <t.icon className="h-5 w-5 text-violet-300" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-zinc-100">{t.title}</h3>
                  <p className="mt-1 text-sm text-zinc-300">{t.desc}</p>
                  <ul className="mt-3 space-y-1 text-sm text-zinc-400">
                    {t.bullets.map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Planes / Paquetes */}
      <section id="planes" className="mx-auto w-full max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-semibold tracking-tight">Planes</h2>
        <p className="mt-2 max-w-3xl text-zinc-300">Elegí el formato que mejor se adapta a tu etapa.</p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.06 * i }}
              className={`relative overflow-hidden rounded-2xl border ${p.featured ? "border-violet-600/50 shadow-[0_0_40px_-18px_rgba(139,92,246,0.5)]" : "border-zinc-800/70"} bg-gradient-to-b from-zinc-900/60 to-zinc-950/60 p-5`}
            >
              {p.featured && (
                <span className="absolute right-3 top-3 rounded-full bg-violet-600/90 px-2 py-0.5 text-xs font-medium text-white">Recomendado</span>
              )}
              <p className="text-xs uppercase tracking-widest text-zinc-500">{p.tag}</p>
              <h3 className="mt-1 text-lg font-medium text-zinc-100">{p.title}</h3>
              <p className="mt-1 text-sm text-zinc-300">{p.desc}</p>
              <ul className="mt-3 space-y-1 text-sm text-zinc-400">
                {p.points.map((pt) => (
                  <li key={pt}>• {pt}</li>
                ))}
              </ul>
              <Link
                to={`/contacto${p.anchor}`}
                className="mt-5 inline-flex items-center justify-center rounded-xl bg-violet-600/90 px-4 py-2 text-sm font-medium text-white shadow hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-400/60"
              >
                {p.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Proceso */}
      <section id="proceso" className="mx-auto w-full max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-semibold tracking-tight">Proceso</h2>
        <p className="mt-2 max-w-3xl text-zinc-300">Transparente, iterativo y con demos semanales.</p>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.05 * i }}
              className="rounded-2xl border border-zinc-800/70 bg-zinc-900/50 p-4"
            >
              <h3 className="text-base font-medium text-zinc-100">{i + 1}. {s.title}</h3>
              <p className="mt-1 text-sm text-zinc-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section id="addons" className="mx-auto w-full max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-semibold tracking-tight">Add‑ons</h2>
        <p className="mt-2 max-w-3xl text-zinc-300">Extras que aceleran el valor desde el día uno.</p>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {addons.map((a, i) => (
            <motion.div
              key={a.title}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.06 * i }}
              className="relative overflow-hidden rounded-2xl border border-zinc-800/70 bg-gradient-to-b from-zinc-900/60 to-zinc-950/60 p-5"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-violet-600/10 to-sky-500/10 blur-2xl" />
              </div>
              <div className="relative flex items-start gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-zinc-800/50 ring-1 ring-inset ring-zinc-700/50">
                  <a.icon className="h-5 w-5 text-violet-300" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-zinc-100">{a.title}</h3>
                  <p className="mt-1 text-sm text-zinc-300">{a.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto w-full max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-semibold tracking-tight">Preguntas frecuentes</h2>
        <div className="mt-4 space-y-3">
          {[ 
            {
              q: "¿Trabajás solo o con equipo?",
              a: "Bräinworks es un estudio unipersonal. Según el proyecto, colaboro con diseño, clínica, datos o infraestructura.",
            },
            {
              q: "¿Cómo presupuestás?",
              a: "Proyecto cerrado por alcance o retainer mensual por sprints. Siempre con hitos y entregas claras.",
            },
            {
              q: "¿Dónde estás?",
              a: "Base en Buenos Aires, pero trabajo 100% sin fronteras (LatAm y global).",
            },
            {
              q: "¿Qué stack preferís?",
              a: "React, React Native, Firebase y Node.js. Integro pagos, auth y notificaciones push.",
            },
          ].map((f, i) => (
            <motion.details
              key={f.q}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.05 * i }}
              className="group rounded-2xl border border-zinc-800/70 bg-zinc-900/50 p-4 [&_summary]:cursor-pointer"
            >
              <summary className="text-zinc-100">{f.q}</summary>
              <p className="mt-2 text-sm text-zinc-300">{f.a}</p>
            </motion.details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <motion.div
          {...fadeIn}
          className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-zinc-800/70 bg-gradient-to-br from-zinc-900/60 to-zinc-950/60 px-6 py-8 text-center md:flex-row md:text-left"
        >
          <div>
            <h3 className="text-xl font-semibold text-zinc-100">¿Listo para empezar?</h3>
            <p className="mt-1 max-w-2xl text-zinc-300">Contame tu idea y te propongo el mejor plan para llegar a producción.</p>
          </div>
          <Link to="/contacto" className="inline-flex items-center gap-2 rounded-xl bg-violet-600/90 px-5 py-2.5 font-medium text-white shadow hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-400/60">
            <Mail className="h-5 w-5" /> Hablemos
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
