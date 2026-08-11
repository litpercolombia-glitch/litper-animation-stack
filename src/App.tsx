import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { AuroraBackground } from "./components/AuroraBackground";
import { InteractiveButton } from "./components/InteractiveButton";
import { PageTransition } from "./components/PageTransition";
import { ProductScene3D } from "./components/ProductScene3D";
import { useSmoothScroll } from "./lib/useSmoothScroll";

const TABS = ["Landing (todas las capas)", "Dashboard (solo Motion)"] as const;

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <p className="mb-2 text-sm font-medium uppercase tracking-wider text-violet-400">
        {eyebrow}
      </p>
      <h2 className="mb-6 text-2xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}

function LandingDemo() {
  // Scroll suave SOLO activo en esta vista (landing), no en toda la app.
  useSmoothScroll(true);

  return (
    <div>
      <div className="relative flex h-[70vh] items-center justify-center overflow-hidden">
        <AuroraBackground />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold md:text-6xl">Litper Animation Stack</h1>
          <p className="mt-4 text-lg text-white/70">
            Motion . Lenis . react-three-fiber . OGL - todo instalado y listo para usar
          </p>
        </div>
      </div>

      <Section eyebrow="Capa 1" title="Fondo animado (OGL)">
        <p className="text-white/70">
          Shader WebGL minimalista para heroes de landing. Livianisimo comparado con three.js
          completo. Ver <code>src/components/AuroraBackground.tsx</code>.
        </p>
      </Section>

      <Section eyebrow="Capa 2" title="Clicks, hover y loading (Motion)">
        <p className="mb-6 text-white/70">
          El motor base que corre en TODA la app, landing o dashboard.
        </p>
        <InteractiveButton />
      </Section>

      <Section eyebrow="Capa 3" title="3D real (react-three-fiber + drei)">
        <p className="mb-4 text-white/70">
          Solo para la landing insignia del producto (ej. Cobija Trenzada). Reemplaza esta caja
          por un modelo .glb real del producto.
        </p>
        <ProductScene3D />
      </Section>

      <Section eyebrow="Capa 4" title="Scroll suave (Lenis)">
        <p className="text-white/70">
          Ya esta activo en toda esta pagina - haz scroll y siente la inercia. Se desactiva en
          vistas de dashboard (ver el segundo tab arriba).
        </p>
      </Section>
    </div>
  );
}

function DashboardDemo() {
  // Sin useSmoothScroll aqui a proposito: en tablas/CRM el scroll debe ser directo.
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-bold">Vista tipo CRM / Tracker</h1>
      <p className="mb-8 text-white/70">
        Aqui solo corre Motion (clicks, hover, loading, transicion de fila). Sin fondo animado,
        sin scroll suave, sin 3D - para no castigar el performance de una app de uso diario.
      </p>
      <div className="divide-y divide-white/10 rounded-xl border border-white/10">
        {["Pedido #4821", "Pedido #4822", "Pedido #4823"].map((row) => (
          <motion.div
            key={row}
            whileHover={{ backgroundColor: "rgba(168,85,247,0.08)" }}
            className="flex items-center justify-between px-5 py-4"
          >
            <span>{row}</span>
            <InteractiveButton label="Confirmar" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState<(typeof TABS)[number]>(TABS[0]);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <nav className="sticky top-0 z-20 flex justify-center gap-2 border-b border-white/10 bg-[#0a0a0f]/80 p-4 backdrop-blur">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded-full px-4 py-2 text-sm transition-colors ${
              tab === t ? "bg-violet-600 text-white" : "text-white/60 hover:text-white"
            }`}
          >
            {t}
          </button>
        ))}
      </nav>

      <AnimatePresence mode="wait">
        <PageTransition key={tab}>
          {tab === TABS[0] ? <LandingDemo /> : <DashboardDemo />}
        </PageTransition>
      </AnimatePresence>
    </div>
  );
}
