"use client";

import { Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const NOTIFS = [
  {
    title: "Estamos en la Evaluación en Vivo del Momento 3",
    source: "V_Institucional_II",
    time: "Hace 5 horas",
  },
  {
    title: "Semana Académica 11 (video mensaje)",
    source: "V_Institucional_I",
    time: "Ayer 19:48",
  },
  {
    title: "Asesoría Académica Momento 3",
    source: "V_Institucional_I",
    time: "Ayer 19:10",
  },
];

export function RightPanel() {
  return (
    <aside className="space-y-3">
      {/* Notifications */}
      <Card className="border-border">
        <CardHeader className="pb-2 pt-3 px-3">
          <CardTitle className="flex items-center gap-2 text-xs font-semibold">
            <Bell className="h-3.5 w-3.5 text-teal-600" />
            Notificaciones
          </CardTitle>
        </CardHeader>
        <CardContent className="px-3 pb-3">
          <div className="divide-y divide-border">
            {NOTIFS.map((n, i) => (
              <div key={i} className="py-2 cursor-pointer">
                <p className="text-[11px] font-medium text-foreground leading-tight mb-0.5">
                  {n.title}
                </p>
                <p className="text-[10px] text-muted-foreground">{n.source}</p>
                <p className="text-[10px] text-teal-700 font-medium mt-0.5">
                  {n.time}
                </p>
              </div>
            ))}
          </div>
          <button className="w-full mt-2 text-[11px] font-medium text-teal-700 hover:text-teal-900 text-center block">
            Cargar más
          </button>
        </CardContent>
      </Card>

      {/* Free Course */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
            Curso libre
          </span>
          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 text-[9px] px-1.5 h-4 font-bold">
            MOOC
          </Badge>
        </div>
        <div className="bg-background border border-border rounded-lg overflow-hidden cursor-pointer hover:border-teal-500 transition-colors">
          <div className="h-16 bg-gradient-to-br from-blue-600 to-teal-600 flex items-center justify-center p-2">
            <p className="text-[10px] font-bold text-white text-center leading-tight">
              Mi lugar en la Internacionalización de un Mundo Globalizado
            </p>
          </div>
          <div className="p-2">
            <p className="text-[11px] font-semibold text-foreground leading-tight mb-1">
              MOOC Internacionalización Global
            </p>
            <button className="text-[10px] font-bold text-teal-700 hover:text-teal-900">
              Ingresa al curso →
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
