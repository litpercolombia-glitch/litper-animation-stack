import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

/**
* CAPA: CLICKS / HOVER / LOADING (Motion)
* -----------------------------------------------------------------------
* Usalo en: TODA la app, landing o software interno. Este es el motor
* base - no se "activa o desactiva" por tipo de proyecto, se instala una
* vez y se usa en cualquier boton, card, modal o fila que reaccione a la
* interaccion del usuario.
*/
export function InteractiveButton({
  label = "Confirmar pedido",
  onConfirm,
}: {
  label?: string;
  onConfirm?: () => Promise<void> | void;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

async function handleClick() {
  if (status !== "idle") return;
  setStatus("loading");
  await onConfirm?.();
  await new Promise((r) => setTimeout(r, 900));
  setStatus("done");
  setTimeout(() => setStatus("idle"), 1500);
}

return (
  <motion.button
    onClick={handleClick}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.96 }}
    className="relative flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-medium text-white shadow-lg shadow-violet-600/30 disabled:opacity-70"
    disabled={status !== "idle"}
    >
  <AnimatePresence mode="wait" initial={false}>
    {status === "idle" && (
      <motion.span
        key="idle"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        >
        {label}
               </motion.span>
      )}
    {status === "loading" && (
      <motion.span
        key="loading"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex items-center gap-2"
        >
      <motion.span
        className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white"
        animate={{ rotate: 360 }}
  transition={{ repeat: Infinity, duration: 0.7, ease: "linear" }}
        />
      Procesando...
      </motion.span>
      )}
    {status === "done" && (
      <motion.span
        key="done"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        >
      Listo ✓
      </motion.span>
      )}
  </AnimatePresence>
        </motion.button>
  );
}
