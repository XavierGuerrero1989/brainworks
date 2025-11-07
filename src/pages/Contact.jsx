import React, { useRef, useState } from "react";
import useScrollToTop from "../hooks/useScrollToTop";
import Button from "../components/ui/Button";

import { db } from "../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Swal from "sweetalert2";

export default function Contact() {
  useScrollToTop();
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  async function onSubmit(e) {
    e.preventDefault();
    if (loading) return;

    // Guardamos una referencia estable al form
    const formEl = formRef.current;
    if (!formEl) return;

    const fd = new FormData(formEl);
    const nombre = (fd.get("nombre") || "").toString().trim();
    const email = (fd.get("email") || "").toString().trim();
    const empresa = (fd.get("empresa") || "").toString().trim();
    const mensaje = (fd.get("mensaje") || "").toString().trim();

    if (!nombre || !email || !mensaje) {
      Swal.fire({
        icon: "warning",
        title: "Faltan datos",
        text: "Completá al menos Nombre, Email y Mensaje.",
        confirmButtonText: "Entendido",
      });
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "contacto"), {
        nombre,
        email,
        empresa,
        mensaje,
        estado: "nuevo",
        page: window.location?.pathname || "/contacto",
        userAgent: navigator.userAgent,
        createdAt: serverTimestamp(),
      });

      formEl.reset();

      await Swal.fire({
        icon: "success",
        title: "¡Mensaje enviado!",
        text: "Gracias por escribirnos. Te contactaremos a la brevedad.",
        confirmButtonText: "Cerrar",
      });
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Ups, algo salió mal",
        text: "No pudimos enviar tu mensaje. Probá nuevamente en unos minutos.",
        confirmButtonText: "Entendido",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="w-full px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Contacto</h1>

      <form ref={formRef} onSubmit={onSubmit} className="mt-8 space-y-4">
        <input
          name="nombre"
          placeholder="Nombre"
          autoComplete="name"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="email"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3"
          required
        />
        <input
          name="empresa"
          placeholder="Empresa / Proyecto"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3"
        />
        <textarea
          rows={5}
          name="mensaje"
          placeholder="Contanos tu idea o problema..."
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3"
          required
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar mensaje"}
        </Button>
      </form>
    </section>
  );
}
