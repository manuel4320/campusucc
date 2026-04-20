"use client";

import { ChevronDown, Clock, Megaphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const ANNOUNCEMENTS = [
  {
    id: 1,
    title: "¿Cómo votar por tu representante estudiantil? Aquí un paso a paso",
    author: "Camilo Toscano Rojas",
    date: "9 oct 2025",
    tag: "Institucional",
    tagVariant: "secondary" as const,
  },
  {
    id: 2,
    title: "Grabación Encuentro Sincrónico Momento 3",
    author: "V_Institucional_II",
    date: "16 abr",
    tag: "Nuevo",
    tagVariant: "default" as const,
  },
  {
    id: 3,
    title: "Semana Académica 11 — Video mensaje del director",
    author: "V_Institucional_I",
    date: "Ayer 19:48",
    tag: null,
    tagVariant: "default" as const,
  },
  {
    id: 4,
    title: "Asesoría Académica Momento 3 — Inscripción disponible",
    author: "V_Institucional_I",
    date: "Ayer 19:10",
    tag: null,
    tagVariant: "default" as const,
  },
  {
    id: 5,
    title: "Prácticas Solidarias y Consumo Responsable",
    author: "V_Institucional_II",
    date: "16 abr 15:46",
    tag: "Evaluación",
    tagVariant: "destructive" as const,
  },
];

export function AnnouncementsPanel() {
  return (
    <div>
      <Card className="border-border">
        <CardHeader className="pb-3 pt-4 px-4">
          <CardTitle className="flex items-center gap-2 text-sm font-semibold">
            <Megaphone className="h-4 w-4 text-teal-600" />
            Anuncios recientes
            <ChevronDown className="h-3.5 w-3.5 text-muted-foreground ml-auto" />
          </CardTitle>
        </CardHeader>
        <CardContent className="px-4 pb-4">
          <div className="divide-y divide-border">
            {ANNOUNCEMENTS.map((item) => (
              <div
                key={item.id}
                className="py-3 cursor-pointer group hover:bg-muted/30 -mx-2 px-2 rounded-md transition-colors"
              >
                <p className="text-sm font-semibold text-teal-800 leading-snug mb-1 group-hover:text-teal-900 transition-colors">
                  {item.title}
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[11px] text-muted-foreground">
                    {item.author}
                  </span>
                  <span className="text-muted-foreground/40 text-xs">·</span>
                  <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                    <Clock className="h-2.5 w-2.5" />
                    {item.date}
                  </span>
                  {item.tag && (
                    <Badge
                      variant={item.tagVariant}
                      className={cn(
                        "text-[9px] px-1.5 py-0 h-4 font-semibold",
                        item.tagVariant === "default" &&
                          "bg-teal-100 text-teal-800 hover:bg-teal-100",
                        item.tagVariant === "secondary" &&
                          "bg-slate-100 text-slate-700"
                      )}
                    >
                      {item.tag}
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
