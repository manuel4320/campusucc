"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const NAV_ITEMS = [
  { label: "Progreso de la clase", hasDropdown: false },
  { label: "Recursos educativos", hasDropdown: true },
  { label: "Cursos Libres", hasDropdown: false },
  { label: "Ayuda", hasDropdown: true },
];

export function SecondaryNav() {
  const [active, setActive] = useState("Progreso de la clase");

  return (
    <nav className="bg-teal-600 h-9 flex items-center px-4 gap-1">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.label}
          onClick={() => setActive(item.label)}
          className={cn(
            "flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-colors",
            active === item.label
              ? "bg-white/20 text-white"
              : "text-white/80 hover:bg-white/15 hover:text-white"
          )}
        >
          {item.label}
          {item.hasDropdown && <ChevronDown className="h-3 w-3" />}
        </button>
      ))}
    </nav>
  );
}
