import React from "react";

const stack = ["React", "Vite", "Tailwind", "Firebase", "Node.js", "Cloud Functions", "IoT", "APIs"];

export default function TechStack() {
  return (
    <section className="w-full px-6 sm:px-8 lg:px-12 py-16">
      <h2 className="text-2xl md:text-3xl font-bold">Tecnología que usamos</h2>
      <p className="mt-2 text-white/70 max-w-2xl">
        Elegimos herramientas modernas, estables y escalables. La base correcta hace que todo funcione mejor.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {stack.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-sm text-white/80"
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
