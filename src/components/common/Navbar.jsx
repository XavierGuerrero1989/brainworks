import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Brain, Menu, X } from "lucide-react";

const linkCls = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition
   ${isActive ? "bg-white/10" : "hover:bg-white/5"}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-dark/80 backdrop-blur border-b border-white/10">
      <div className="w-full h-14 px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
          <Brain className="h-6 w-6" />
          <span className="font-semibold tracking-wide">
            BR<span className="text-brand-violet">Ä</span>INWORKS
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={linkCls} end>Inicio</NavLink>
          <NavLink to="/nosotros" className={linkCls}>Nosotros</NavLink>
          <NavLink to="/servicios" className={linkCls}>Servicios</NavLink>
          <NavLink to="/proyectos" className={linkCls}>Proyectos</NavLink>
          <NavLink to="/contacto" className={linkCls}>Contacto</NavLink>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          aria-label="Abrir menú"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="px-4 sm:px-6 lg:px-12 pb-3 pt-1 bg-brand-dark/80 backdrop-blur border-t border-white/5">
          <ul className="flex flex-col gap-1">
            <li>
              <NavLink to="/" end className={linkCls} onClick={closeMenu}>Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/nosotros" className={linkCls} onClick={closeMenu}>Nosotros</NavLink>
            </li>
            <li>
              <NavLink to="/servicios" className={linkCls} onClick={closeMenu}>Servicios</NavLink>
            </li>
            <li>
              <NavLink to="/proyectos" className={linkCls} onClick={closeMenu}>Proyectos</NavLink>
            </li>
            <li>
              <NavLink to="/contacto" className={linkCls} onClick={closeMenu}>Contacto</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
