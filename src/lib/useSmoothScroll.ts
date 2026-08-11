import { useEffect } from "react";
import Lenis from "lenis";

/**
* CAPA: SCROLL SUAVE (Lenis)
* -----------------------------------------------------------------------
* Usalo en: landings largas, paginas de producto, cualquier vista con
* scroll narrativo (Funnel 400, Ruta de Escape).
* NO lo actives en: dashboards internos con tablas largas (Litper Connect,
* ASDA3EEEE) - el scroll "inercial" estorba cuando el usuario necesita
* precision para hacer click rapido en filas de una tabla.
*
* Uso: llama a useSmoothScroll() una sola vez en el componente raiz de la
* pagina que si lo necesite (no en el layout global de toda la app).
*/
export function useSmoothScroll(enabled = true) {
  useEffect(() => {
    if (!enabled) return;

            const lenis = new Lenis({
              duration: 1.1,
              easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
              smoothWheel: true,
            });
    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }
    let frame = requestAnimationFrame(raf);

            return () => {
              cancelAnimationFrame(frame);
              lenis.destroy();
            };

  }, [enabled]);
}
