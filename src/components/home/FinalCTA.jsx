import React from "react";
import Button from "../ui/Button";

export default function FinalCTA() {
  return (
    <section className="relative w-full px-6 sm:px-8 lg:px-12 py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/20 via-transparent to-brand-violet/10" />
      <div className="relative">
        <h2 className="text-2xl md:text-3xl font-bold">¿Tenés una idea o un problema?</h2>
        <p className="mt-2 text-white/75 max-w-2xl">
          Contanos. Nosotros diseñamos y construimos la solución más eficiente para tu negocio.
        </p>
        <div className="mt-6">
          <Button as="a" href="/contacto">Iniciar proyecto</Button>
        </div>
      </div>
    </section>
  );
}
