import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
  <div className="w-full px-8 py-16 sm:px-8 lg:px-12 py-6 text-sm text-white/60 flex items-center justify-between">
    <p>© {new Date().getFullYear()} Bräinworks — El cerebro detrás de tus soluciones.</p>
    <p className="text-white/40">Hecho con React + Vite</p>
  </div>
</footer>

  );
}
