import type { ReactNode } from "react";
import { motion } from "motion/react";

/**
 * CAPA: TRANSICION DE PAGINA / VISTA (Motion)
 * -----------------------------------------------------------------------
 * Usalo en: cambios de ruta en apps React Router / Next.js, cambio de tab
 * en un dashboard, apertura de un modal grande. Envuelve el contenido de
 * cada pagina con esto y combinalo con AnimatePresence en el router.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
    );
}
