## Litper Animation Stack — Plan de uso

Repo de referencia con TODAS las librerias de animacion que investigamos, ya instaladas,
compiladas y funcionando juntas. Esta pensado para copiar piezas sueltas a cualquier proyecto
Litper en Vercel: landings, funnels, o software interno (Litper Connect, ASDA3EEEE, trackers).

No es "instala todo en cada proyecto". Es un catalogo: cada capa vive en su propio archivo,
con un comentario arriba que dice para que sirve y cuando NO usarla. Copias el archivo que
necesitas al proyecto real y listo.

## Las 5 capas

| # | Capa | Libreria | Archivo | Usala en | NO la actives en |
|---|------|----------|---------|----------|-------------------|
| 1 | Clicks / hover / loading / transicion de pagina | Motion (33k stars) | `src/components/InteractiveButton.tsx`, `PageTransition.tsx` | Siempre, en todo. Es el motor base. | Nunca la desactives, es la unica capa universal. |
| 2 | Scroll suave | Lenis (15k stars) | `src/lib/useSmoothScroll.ts` | Landings largas, funnels, paginas de producto | Dashboards/CRM con tablas, la inercia estorba al hacer click rapido |
| 3 | Fondo animado liviano | OGL (4.6k stars) | `src/components/AuroraBackground.tsx` | Hero de landing, seccion de impacto | Pantallas de trabajo diario (consume GPU sin aportar nada) |
| 4 | 3D real | react-three-fiber + drei (31k / 9.8k stars) | `src/components/ProductScene3D.tsx` | UNA landing insignia a la vez (ej. lanzamiento Cobija Trenzada) | Varias pantallas a la vez, o cualquier app de uso diario, es lo mas pesado del stack |
| 5 | Componentes pre-armados | react-bits (45k stars, catalogo) | (se copian bajo demanda desde reactbits.dev) | Cuando necesitas un efecto puntual (texto animado, card 3D, particulas) sin escribirlo desde cero | - |

## Regla de oro por tipo de proyecto

Landing / Funnel 400 / pagina de producto (ej. Cobija Trenzada, Pack Hogar):
Capa 1 (Motion) + Capa 2 (Lenis) siempre. Capa 3 (fondo OGL) en el hero. Capa 4 (3D) solo si es
la landing insignia del sprint, no lo pongas en todas.

Software interno / dashboard (Litper Connect, ASDA3EEEE, trackers):
Solo Capa 1 (Motion) para clicks, hover, loading y transicion entre vistas. Nada de scroll
suave, fondo animado ni 3D, el usuario esta ahi 8 horas, la prioridad es performance y
precision, no espectaculo visual.

Landing con presupuesto de performance ajustado (trafico de Meta Ads, mobile-first COD):
Capa 1 + Capa 2 nada mas. El fondo OGL y el 3D pesan, solo justificados en la pagina de
lanzamiento estrella del mes, no en cada producto.

## Como usarlo

```bash
# Ver el demo con las 4 capas corriendo juntas
npm install
npm run dev
```

Abre el navegador: arriba hay dos tabs, "Landing (todas las capas)" muestra fondo animado,
scroll suave y la escena 3D; "Dashboard (solo Motion)" muestra como se ve una vista de trabajo
sin nada de eso encima, solo el motor de interaccion.
## Copiar una capa a un proyecto real

Copia el archivo de la capa que necesitas (ej. `src/components/InteractiveButton.tsx`) al proyecto destino, e instala solo esa dependencia: Capa 1 con `npm install motion`, Capa 2 con `npm install lenis`, Capa 3 con `npm install ogl`, Capa 4 con `npm install @react-three/fiber @react-three/drei three`.

Para Capa 4 (3D), importala siempre con `React.lazy()` / dynamic import, three.js pesa ~380kB gzip y no debe ir en el bundle principal de una vista que no lo necesita. En produccion real, reemplaza la caja placeholder por un modelo .glb real del producto (exportado de Blender, o generado con Spline y convertido a glTF).

## Despliegue en Vercel

Este repo es un proyecto Vite estandar, se conecta directo a Vercel sin configuracion adicional (`npm run build` genera la carpeta `dist/`). Usalo como sandbox para probar combinaciones antes de llevarlas a un proyecto real, o clonalo como punto de partida de una landing nueva.

## Stack instalado (versiones exactas al momento de crear este repo)

Motion ^13, Lenis ^1.3, @react-three/fiber ^9.7, @react-three/drei ^10.7, three ^0.185, ogl ^1.0, sobre Vite 8 + React 19 + TypeScript + Tailwind CSS v4.

## Fuentes / investigacion

react-bits: https://github.com/DavidHDev/react-bits (45.2k stars).
Motion: https://github.com/motiondivision/motion (33.2k stars).
react-three-fiber: https://github.com/pmndrs/react-three-fiber (31.7k stars).
Magic UI: https://github.com/magicuidesign/magicui (21.9k stars).
Lenis: https://github.com/darkroomengineering/lenis (15.4k stars).
drei: https://github.com/pmndrs/drei (9.8k stars).
21st.dev: https://github.com/serafimcloud/21st (5.4k stars).
canvas-ui: https://github.com/DavidHDev/canvas-ui (3.7k stars).
OGL: https://github.com/oframe/ogl (4.6k stars).
curtains.js: https://github.com/martinlaxenaire/curtainsjs (1.8k stars).
satus (starter darkroom.engineering): https://github.com/darkroomengineering/satus (980 stars).
