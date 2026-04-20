"use client";

import { ChevronDown } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const COURSES = [
  {
    code: "Sistemas Transaccionales y BD",
    id: "2610_10278",
    deadline: "jun 30, 2026",
    progress: 62,
    colorClass: "from-teal-600 to-blue-600",
    label: "Bases de Datos",
  },
  {
    code: "Arquitecturas de Software",
    id: "2610_9941",
    deadline: "jun 30, 2026",
    progress: 45,
    colorClass: "from-purple-600 to-pink-500",
    label: "Arquitectura",
  },
  {
    code: "Diseño de Interfaces Software",
    id: "2610_10087",
    deadline: "jun 30, 2026",
    progress: 30,
    colorClass: "from-amber-500 to-teal-600",
    label: "Interfaces",
  },
  {
    code: "Electiva II",
    id: "2610_10068",
    deadline: "jun 30, 2026",
    progress: 15,
    colorClass: "from-blue-600 to-purple-600",
    label: "Electiva",
  },
];

export function CourseSidebar() {
  return (
    <aside>
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
          Mis cursos
        </span>
        <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
      </div>

      <div className="space-y-2.5">
        {COURSES.map((course) => (
          <div
            key={course.id}
            className="bg-background border border-border rounded-lg overflow-hidden cursor-pointer hover:border-teal-500 hover:-translate-y-0.5 transition-all duration-150 group"
          >
            <div
              className={cn(
                "h-14 bg-gradient-to-br relative",
                course.colorClass
              )}
            >
              <span className="absolute bottom-1.5 left-2 text-[9px] font-bold text-white/90 uppercase tracking-wide">
                {course.label}
              </span>
            </div>
            <div className="px-2.5 py-2">
              <p className="text-[11px] font-semibold text-foreground leading-tight mb-1">
                {course.code}
              </p>
              <p className="text-[10px] text-muted-foreground mb-1.5">
                Finaliza {course.deadline}
              </p>
              <Progress value={course.progress} className="h-1" />
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-3 text-[11px] font-medium text-teal-700 hover:text-teal-900 transition-colors text-center">
        Ver todos los cursos →
      </button>
    </aside>
  );
}
