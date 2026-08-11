import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial, RoundedBox } from "@react-three/drei";

/**
 * CAPA: 3D REAL (react-three-fiber + drei)
 * -----------------------------------------------------------------------
 * Usalo en: UNA landing insignia (ej. lanzamiento Cobija Trenzada,
 * Combo Pack Hogar), nunca en varias pantallas a la vez ni en apps de uso
 * diario - es lo mas pesado de todo el stack.
 * Este ejemplo es un placeholder generico (caja flotante con distorsion);
 * en produccion se reemplaza por un modelo .glb real del producto
 * (exportado desde Blender o generado con Spline).
 */
export function ProductScene3D() {
  return (
    <div className="h-[420px] w-full">
    <Canvas camera={{ position: [0, 0, 4.5], fov: 40 }}>
    <ambientLight intensity={0.6} />
    <directionalLight position={[3, 3, 3]} intensity={1.2} />
    <Suspense fallback={null}>
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.8}>
    <RoundedBox args={[1.6, 1.6, 1.6]} radius={0.15} smoothness={4}>
    <MeshDistortMaterial
      color="#a855f7"
      distort={0.25}
      speed={2}
      roughness={0.15}
      metalness={0.3}
      />
    </RoundedBox>
    </Float>
    <Environment preset="city" />
    </Suspense>
    </Canvas></div>
    );
}
