import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle } from "ogl";

/**
* CAPA: FONDO ANIMADO (OGL)
* -----------------------------------------------------------------------
* Usalo en: hero de landings, secciones de impacto (arriba del quiz,
* arriba del CTA final). Es un shader WebGL minimalista - mucho mas
* liviano que meter three.js completo solo para un fondo.
* NO lo actives en: pantallas internas donde el usuario pasa horas
* trabajando (CRM, tracker de pedidos) - consume GPU/bateria sin aportar
* nada al flujo de trabajo.
*/
const VERTEX = /* glsl */ `
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
vUv = uv;
gl_Position = vec4(position, 0, 1);
}
`;
const FRAGMENT = /* glsl */ `
precision highp float;
uniform float uTime;
uniform vec2 uResolution;
varying vec2 vUv;

vec3 palette(float t) {
vec3 a = vec3(0.06, 0.02, 0.12);
vec3 b = vec3(0.55, 0.25, 0.95);
vec3 c = vec3(1.0, 1.0, 1.0);
vec3 d = vec3(0.0, 0.33, 0.67);
return a + b * cos(6.28318 * (c * t + d));
}

void main() {
vec2 uv = (vUv - 0.5) * vec2(uResolution.x / uResolution.y, 1.0);
float t = uTime * 0.08;
float d = length(uv);
float wave = sin((uv.x + t) * 3.0) * cos((uv.y - t) * 2.5);
vec3 color = palette(d + wave * 0.15 + t * 0.2);
color *= smoothstep(1.1, 0.0, d);
gl_FragColor = vec4(color, 1.0);
}
`;

export function AuroraBackground({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const container = containerRef.current;
  if (!container) return;

          const renderer = new Renderer({ alpha: true, dpr: Math.min(window.devicePixelRatio, 2) });
  const gl = renderer.gl;
  container.appendChild(gl.canvas);

          const geometry = new Triangle(gl);
  const program = new Program(gl, {
    vertex: VERTEX,
    fragment: FRAGMENT,
    uniforms: {
      uTime: { value: 0 },
      uResolution: { value: [container.clientWidth, container.clientHeight] },
    },
  });
  const mesh = new Mesh(gl, { geometry, program });


          function resize() {
            if (!container) return;
            renderer.setSize(container.clientWidth, container.clientHeight);
            program.uniforms.uResolution.value = [container.clientWidth, container.clientHeight];
          }
  resize();
  window.addEventListener("resize", resize);

          let raf = 0;
  function update(t: number) {
    program.uniforms.uTime.value = t * 0.001;
    renderer.render({ scene: mesh });
    raf = requestAnimationFrame(update);
  }
  raf = requestAnimationFrame(update);

          return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", resize);
            container.removeChild(gl.canvas);
          };
}, []);


return <div ref={containerRef} className={`absolute inset-0 -z-10 ${className}`} />;
    }
