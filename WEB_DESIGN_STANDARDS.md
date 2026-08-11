# Web Design Standards — Litper Group

Estándares de diseño web de alta conversión para cualquier landing, sitio o
dashboard de Litper. Destilados de investigación sobre qué diferencia a
sitios como Linear, Stripe, Vercel y Mercury del 99% de páginas genéricas,
más benchmarks de conversión con datos reales.

## Cuándo aplica cada parte

- **Los 4 principios base y el checklist "AI slop"** — siempre, sin excepción,
  en cualquier página web de Litper.
- **Paleta dark-mode / verde-ámbar y tono "developer tool"** — específico de
  proyectos de software/SaaS: LASTMILE OS, ZYNEX / Litper Desk, dashboards
  internos. No forzar dark mode en landings de producto físico COD
  (protectores, sábanas, cortinas, cobijas) — esas siguen Funnel 400 /
  StoryBrand con la paleta cálida Litper, vía `litper-landing-builder`.
- **Benchmarks de conversión con datos** — siempre que se defina estructura
  de formulario, cantidad de CTAs, o se justifique una decisión de UX.

## 1. Los 4 principios que separan lo top del resto

Comparten Stripe, Linear y Vercel, y se refuerzan entre sí:

1. **Contraste agresivo.** Negro sobre blanco, blanco sobre negro, nada
   intermedio y turbio.
2. **Whitespace generoso al extremo.** Toma el espaciado que se sienta
   suficiente, y duplícalo.
3. **Monocromo + un solo acento.** Base en negro/blanco/gris; un solo color
   hace todo el trabajo de énfasis.
4. **Tipografía afilada, no amigable.** Geométrica, apretada, "ligeramente
   fría" — comunica precisión sin explicarlo.

## 2. Checklist obligatorio antes de dar cualquier landing/web por terminada

- [ ] Un solo CTA dominante por pantalla (múltiples CTAs compitiendo bajan
      conversión ~29%)
- [ ] Formulario de máximo 3-4 campos si hay uno (11→4 campos = +160%
      conversión; 3 campos ≈ 25%, 7+ campos <15%)
- [ ] Hero con producto/resultado real, no promesa abstracta
- [ ] Carga bajo 2 segundos (1s vs 5s = 3x mejor conversión; cada segundo
      extra cuesta ~4.42%)
- [ ] Prueba social integrada en el flujo (sube conversión hasta 34%,
      reseñas reales hasta 270%)
- [ ] Headline específico y corto (<8 palabras idealmente)
- [ ] Copy con datos/números concretos, no superlativos genéricos
- [ ] Contraste de texto verificado con herramienta real (WCAG AA = 4.5:1
      mínimo)

## 3. Micro-interacciones premium (no decorativas)

- Un solo sistema de motion por proyecto: 3-4 duraciones, 2-3 curvas de
  easing, documentadas y reutilizadas en todo el sitio.
- Hover states sutiles: shift sub-pixel, opacidad o color — nunca ruidoso.
- Botones con feedback en capas: hover → pressed → loading/success.
- Formularios como conversación: feedback inline, errores en contexto.
- Scroll motion con propósito, no como espectáculo constante.

## 4. Red flags de "AI slop" / plantilla genérica

- Fuente Inter por defecto sin personalidad tipográfica adicional
- Degradados morado-a-azul decorativos, no semánticos
- Border-radius y padding uniformes en absolutamente todo
- Cards de altura idéntica sin asimetría (usar bento grid)
- Fotos de stock genéricas, ilustraciones IA "demasiado suaves"
- Headlines vagos que no dicen nada del producto real
- Superlativos genéricos y lenguaje evasivo
- Hover states sin feedback, botones que "saltan" en vez de hacer easing

## 5. Dark mode B2B / SaaS

Solo para proyectos de software (LASTMILE OS, ZYNEX, dashboards internos):

- Fondo casi negro (`#07080A`), nunca negro puro (`#000000`)
- Contraste WCAG AA: 4.5:1 mínimo, verificado con herramienta real
- Acentos saturados (verde `#00FF88`) solo en detalles pequeños — glow,
  badges, íconos. Para superficies grandes, usar la variante desaturada
  (`rgba(0,255,136,0.1)`)
- Cubrir TODOS los estados: campos, botones deshabilitados, sombras
- Un dark mode roto es peor que no tenerlo

## 6. Referencias rápidas

| Objetivo | Referencia | Técnica |
|---|---|---|
| Hero que vende sin explicar | Linear | Screenshot real + headline <8 palabras |
| Sensación cinematográfica | Arc Browser | Homepage como trailer |
| Densidad de info elegante | Raycast | Cards uniformes, bento grid |
| Romper cliché de categoría | Mercury | Minimalismo que no se ve "del montón" |
| Credibilidad técnica | Datadog | Specifics verificables, no lenguaje vago |
| Calma en medio del ruido | Anthropic | Estética académica, sin gritar |
| Demo sin fricción | Loom | Producto funcionando en el hero |

## Cuándo no forzar estas reglas

Si hay una razón de negocio válida para romper una regla (ej. Funnel 400
necesita tono cálido colombiano y varios CTAs a lo largo del scroll porque
así está probado que convierte para COD), esa razón manda. La regla de oro:
cualquier desviación debe tener un motivo, no ser "porque así salió".

---
*Fuentes: investigación propia (agosto 2026) sobre principios de diseño de
Stripe/Linear/Vercel, benchmarks de conversión B2B SaaS, y patrones de
dark mode. Ver también `PLAN.md` en este mismo repo para las capas de
animación (Motion, Lenis, OGL, 3D) y cuándo usar cada una.*
