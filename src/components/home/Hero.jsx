import React, { useRef } from "react";
import { motion } from "framer-motion";
import Button from "../../components/ui/Button";
// Colocá tu imagen en: src/assets/hero-bg.jpg  (o .png)
// Si no existe, se verá el gradiente de fallback.
import bg from "../../assets/hero-bg.jpg";

export default function Hero() {
  const sectionRef = useRef(null);

  // Parallax suave con el mouse
  const handleMouseMove = (e) => {
    const el = sectionRef.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    // rango leve: -8px a 8px
    const tx = (x - 0.5) * 16;
    const ty = (y - 0.5) * 16;

    el.style.setProperty("--parallax-x", `${tx}px`);
    el.style.setProperty("--parallax-y", `${ty}px`);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[88vh] overflow-hidden"
      style={{
        // parallax del fondo
        backgroundImage: bg ? `url(${bg})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: "translate3d(var(--parallax-x, 0), var(--parallax-y, 0), 0)",
        willChange: "transform",
      }}
    >
      {/* Fallback si no hay imagen: gradiente tech */}
      {!bg && (
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,rgba(179,37,235,0.25),transparent),linear-gradient(180deg,rgba(0,0,0,0.2),rgba(0,0,0,0.7))]" />
      )}

      {/* Overlay para contraste del texto */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/70" />

      {/* Glow sutil detrás del título */}
      <div className="pointer-events-none absolute -z-0 inset-0">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full
                        bg-[radial-gradient(circle,rgba(179,37,235,0.22),transparent_60%)] blur-3xl" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 py-28 md:py-36">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-[13ch] text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight"
        >
          El cerebro detrás de tus soluciones.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.7 }}
          className="mt-4 max-w-xl text-lg md:text-xl text-white/80"
        >
          Transformamos ideas y problemas en sistemas reales: web, apps e IoT listos para operar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Button as="a" href="/proyectos">Ver proyectos</Button>
          <Button as="a" href="/contacto" className="bg-white/10 hover:bg-white/15 shadow-none">
            Iniciar proyecto
          </Button>
        </motion.div>

        {/* Chips de confianza (opcionales) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-2 text-xs text-white/70"
        >
          <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1">React</span>
          <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1">Firebase</span>
          <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1">IoT</span>
          <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1">Integraciones & APIs</span>
        </motion.div>
      </div>
    </section>
  );
}
