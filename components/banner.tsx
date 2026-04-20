"use client";

import { Button } from "@/components/ui/button";

export function Banner() {
  return (
    <div className="w-full rounded-xl bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 p-4 flex items-center justify-between">
      <div className="text-white">
        <p className="text-xs font-semibold uppercase tracking-wide opacity-80 mb-0.5">
          Siempre a tu lado
        </p>
        <p className="text-base font-bold leading-tight">
          ¿Cómo te ves el próximo semestre?
        </p>
        <p className="text-xs opacity-80 mt-0.5">
          Cuéntanos en 1 minuto
        </p>
      </div>
      <Button
        variant="outline"
        size="sm"
        className="bg-white/20 border-white/40 text-white hover:bg-white/35 hover:text-white text-xs font-semibold whitespace-nowrap ml-4"
      >
        ¡Responde aquí!
      </Button>
    </div>
  );
}
