import React from "react";
import useScrollToTop from "../hooks/useScrollToTop";
import Button from "../components/ui/Button";

export default function Contact() {
  useScrollToTop();
  return (
    <section className="w-full px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Contacto</h1>
      <form className="mt-8 space-y-4">
        <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3" placeholder="Nombre" />
        <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3" placeholder="Email" />
        <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3" placeholder="Empresa / Proyecto" />
        <textarea rows="5" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3" placeholder="Contanos tu idea o problema..." />
        <Button type="submit">Enviar mensaje</Button>
      </form>
    </section>
  );
}
