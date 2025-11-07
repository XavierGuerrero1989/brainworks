import { useEffect, useMemo, useRef, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
  startAfter,
  onSnapshot,
  updateDoc,
  doc,
  getDocs,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
import { motion } from "framer-motion";
import { LogOut, Mail, Search, Inbox, Archive, CheckCircle2, Download } from "lucide-react";

/**
 * AdminContactos.jsx — Panel interno solo para vos
 * - Autenticación por email/contraseña (Firebase Auth)
 * - Lista en tiempo real de formularios guardados en Firestore (colección "contacto")
 * - Filtros básicos, paginación incremental, cambio de estado (nuevo, leido, archivado)
 * - Exportación a CSV
 *
 * Requisitos:
 * - Agregá tus credenciales de Firebase abajo (firebaseConfig)
 * - Protegé el acceso con reglas (ver snippet en el chat) permitiendo read solo a tu UID
 */

// TODO: reemplazar por tu config
const firebaseConfig = {
  apiKey: "AIzaSyBxm_awdtgx-ZxcXObGwq1nRcngtJ5y_4E",
  authDomain: "brainworks-c474d.firebaseapp.com",
  projectId: "brainworks-c474d",
  storageBucket: "brainworks-c474d.firebasestorage.app",
  messagingSenderId: "953384993473",
  appId: "1:953384993473:web:11718471148323f0fd0a40"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default function AdminContactos() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, (u) => setUser(u));
  }, []);

  if (!user) return <Login />;
  return <Dashboard user={user} />;
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(getAuth(), email.trim(), password);
    } catch (err) {
      setError("No se pudo iniciar sesión. Verificá tus datos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-zinc-100 grid place-items-center">
      <motion.form
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl border border-zinc-800/70 bg-zinc-900/50 p-6"
      >
        <h1 className="text-2xl font-semibold">Panel de Contactos</h1>
        <p className="mt-1 text-zinc-400 text-sm">Acceso privado</p>
        <div className="mt-5 space-y-3">
          <label className="block text-sm">
            Email
            <input
              type="email"
              className="mt-1 w-full rounded-lg border border-zinc-800 bg-black px-3 py-2 outline-none focus:ring-2 focus:ring-violet-500/50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="block text-sm">
            Contraseña
            <input
              type="password"
              className="mt-1 w-full rounded-lg border border-zinc-800 bg-black px-3 py-2 outline-none focus:ring-2 focus:ring-violet-500/50"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button
            disabled={loading}
            className="w-full rounded-xl bg-violet-600/90 px-4 py-2 font-medium text-white hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-400/60 disabled:opacity-50"
          >
            {loading ? "Ingresando..." : "Ingresar"}
          </button>
        </div>
      </motion.form>
    </main>
  );
}

function Dashboard({ user }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [qStr, setQStr] = useState("");
  const [status, setStatus] = useState("todos"); // todos | nuevo | leido | archivado
  const [lastDoc, setLastDoc] = useState(null);
  const unsubRef = useRef(null);

  // Suscripción en tiempo real a los primeros 30
  useEffect(() => {
    setLoading(true);
    if (unsubRef.current) unsubRef.current();

    const baseQ = query(
      collection(db, "contacto"),
      orderBy("createdAt", "desc"),
      limit(30)
    );

    unsubRef.current = onSnapshot(baseQ, (snap) => {
      const rows = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setItems(rows);
      setLastDoc(snap.docs[snap.docs.length - 1] || null);
      setLoading(false);
    });

    return () => unsubRef.current && unsubRef.current();
  }, []);

  const filtered = useMemo(() => {
    return items.filter((it) => {
      const matchesStatus = status === "todos" ? true : (it.estado || "nuevo") === status;
      const needle = qStr.trim().toLowerCase();
      const haystack = `${it.nombre || ""} ${it.email || ""} ${it.empresa || ""} ${it.mensaje || ""}`.toLowerCase();
      const matchesText = needle.length ? haystack.includes(needle) : true;
      return matchesStatus && matchesText;
    });
  }, [items, qStr, status]);

  const loadMore = async () => {
    if (!lastDoc) return;
    const q2 = query(
      collection(db, "contacto"),
      orderBy("createdAt", "desc"),
      startAfter(lastDoc),
      limit(30)
    );
    const snap = await getDocs(q2);
    const rows = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    setItems((prev) => [...prev, ...rows]);
    setLastDoc(snap.docs[snap.docs.length - 1] || null);
  };

  const setEstado = async (id, estado) => {
    await updateDoc(doc(db, "contacto", id), { estado });
  };

  const exportCSV = () => {
    const headers = ["fecha","nombre","email","empresa","mensaje","estado"];
    const lines = [headers.join(",")];
    filtered.forEach((it) => {
      const fecha = it.createdAt?.toDate ? it.createdAt.toDate().toISOString() : "";
      const row = [
        fecha,
        safeCsv(it.nombre),
        safeCsv(it.email),
        safeCsv(it.empresa),
        safeCsv((it.mensaje || "").replace(/\n/g, " ")),
        safeCsv(it.estado || "nuevo"),
      ].join(",");
      lines.push(row);
    });
    const blob = new Blob(["\uFEFF" + lines.join("\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `contactos_${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen bg-black text-zinc-100">
      {/* Header */}
      <div className="sticky top-0 z-10 border-b border-zinc-800/70 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div>
            <h1 className="text-xl font-semibold">Contactos</h1>
            <p className="text-xs text-zinc-500">Solo visible para tu cuenta</p>
          </div>
          <button
            onClick={() => signOut(getAuth())}
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-800/70 bg-zinc-900/50 px-3 py-2 text-sm hover:bg-zinc-900"
          >
            <LogOut className="h-4 w-4" /> Salir
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
              <input
                placeholder="Buscar (nombre, email, empresa, mensaje)"
                className="w-[22rem] rounded-xl border border-zinc-800/70 bg-black px-9 py-2 text-sm outline-none focus:ring-2 focus:ring-violet-500/40"
                value={qStr}
                onChange={(e) => setQStr(e.target.value)}
              />
            </div>
            <div className="flex gap-1">
              {[
                { k: "todos", label: "Todos" },
                { k: "nuevo", label: "Nuevos", Icon: Inbox },
                { k: "leido", label: "Leídos", Icon: CheckCircle2 },
                { k: "archivado", label: "Archivados", Icon: Archive },
              ].map((f) => (
                <button
                  key={f.k}
                  onClick={() => setStatus(f.k)}
                  className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-sm ${
                    status === f.k
                      ? "border-violet-600/50 bg-violet-600/15 text-violet-300"
                      : "border-zinc-800/70 bg-zinc-900/40 text-zinc-400"
                  }`}
                >
                  {f.Icon ? <f.Icon className="h-4 w-4" /> : null}
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={exportCSV}
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-800/70 bg-zinc-900/50 px-3 py-2 text-sm hover:bg-zinc-900"
            >
              <Download className="h-4 w-4" /> Exportar CSV
            </button>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="mx-auto max-w-6xl px-6 pb-16">
        <div className="overflow-hidden rounded-2xl border border-zinc-800/70">
          <table className="min-w-full text-sm">
            <thead className="bg-zinc-950/70 text-zinc-400">
              <tr className="text-left">
                <th className="px-4 py-2">Fecha</th>
                <th className="px-4 py-2">Nombre</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Empresa</th>
                <th className="px-4 py-2">Mensaje</th>
                <th className="px-4 py-2">Estado</th>
                <th className="px-4 py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={7} className="px-4 py-6 text-center text-zinc-500">
                    Cargando...
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-6 text-center text-zinc-500">
                    Sin resultados
                  </td>
                </tr>
              ) : (
                filtered.map((it) => (
                  <tr key={it.id} className="border-t border-zinc-800/70 align-top">
                    <td className="px-4 py-3 text-zinc-400">
                      {formatDate(it.createdAt)}
                    </td>
                    <td className="px-4 py-3">{it.nombre || "-"}</td>
                    <td className="px-4 py-3">
                      {it.email ? (
                        <a className="text-violet-300 hover:text-violet-200" href={`mailto:${it.email}`}>
                          {it.email}
                        </a>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="px-4 py-3">{it.empresa|| "-"}</td>
                    <td className="px-4 py-3 max-w-[28ch] text-zinc-300">
                      <span title={it.mensaje || ""}>
                        {(it.mensaje || "").slice(0, 120)}{(it.mensaje || "").length > 120 ? "…" : ""}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`rounded-full px-2 py-0.5 text-xs ${badgeColor(it.estado)}`}>
                        {it.estado || "nuevo"}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setEstado(it.id, "leido")}
                          className="rounded-lg border border-zinc-800/70 px-2 py-1 text-xs hover:bg-zinc-900"
                          title="Marcar leído"
                        >
                          Leer
                        </button>
                        <button
                          onClick={() => setEstado(it.id, "archivado")}
                          className="rounded-lg border border-zinc-800/70 px-2 py-1 text-xs hover:bg-zinc-900"
                          title="Archivar"
                        >
                          Archivar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {lastDoc && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={loadMore}
              className="rounded-xl border border-zinc-800/70 bg-zinc-900/50 px-4 py-2 text-sm hover:bg-zinc-900"
            >
              Cargar más
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

function formatDate(ts) {
  try {
    if (!ts) return "-";
    const d = ts.toDate ? ts.toDate() : new Date(ts);
    return new Intl.DateTimeFormat("es-AR", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(d);
  } catch (e) {
    return "-";
  }
}

function safeCsv(v) {
  if (v == null) return "";
  const s = String(v).replaceAll('"', '""');
  return `"${s}` + `"`;
}

function badgeColor(estado) {
  switch (estado) {
    case "nuevo":
      return "bg-violet-600/15 text-violet-300 border border-violet-600/30";
    case "leido":
      return "bg-emerald-600/15 text-emerald-300 border border-emerald-600/30";
    case "archivado":
      return "bg-zinc-700/20 text-zinc-300 border border-zinc-600/40";
    default:
      return "bg-zinc-700/20 text-zinc-300 border border-zinc-600/40";
  }
}

/**
 * (Opcional) Utilidad para crear un dummy rápido desde el panel (para pruebas)
 */
export async function crearDummy() {
  const db = getFirestore();
  await addDoc(collection(db, "contacto"), {
    nombre: "John Doe",
    email: "john@doe.com",
    empresa: "Demo sa",
    mensaje: "Hola, me gustaría saber más sobre un proyecto.",
    estado: "nuevo",
    createdAt: serverTimestamp(),
    page: "/contacto",
    userAgent: navigator.userAgent,
  });
}
