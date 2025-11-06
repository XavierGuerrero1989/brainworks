import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Brain } from "lucide-react";

const linkCls = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition
   ${isActive ? "bg-white/10" : "hover:bg-white/5"}`;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-brand-dark/80 backdrop-blur border-b border-white/10">
        <div className="w-full px-8 py-16 sm:px-8 lg:px-12 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Brain className="h-6 w-6" />
          <span className="font-semibold tracking-wide">
            BR<span className="text-brand-violet">Ä</span>INWORKS
          </span>
        </Link>
        <nav className="flex items-center gap-1">
          <NavLink to="/" className={linkCls} end>Inicio</NavLink>
          <NavLink to="/nosotros" className={linkCls}>Nosotros</NavLink>
          <NavLink to="/servicios" className={linkCls}>Servicios</NavLink>
          <NavLink to="/proyectos" className={linkCls}>Proyectos</NavLink>
          <NavLink to="/contacto" className={linkCls}>Contacto</NavLink>
        </nav>
      </div>
    </header>
  );
}
