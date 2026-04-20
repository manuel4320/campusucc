"use client";

import { useState } from "react";
import {
  Bell,
  Mail,
  MessageSquare,
  Grid3X3,
  Settings,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function Topbar() {
  return (
    <header className="h-14 bg-background border-b border-border flex items-center px-4 gap-3 sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2 mr-4">
        <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white font-bold text-sm">
          UC
        </div>
        <div className="leading-tight">
          <p className="font-bold text-sm text-foreground">EduPlataforma</p>
          <p className="text-[10px] text-muted-foreground uppercase tracking-wide">
            Campus Virtual
          </p>
        </div>
      </div>

      {/* Primary Nav */}
      <nav className="hidden md:flex items-center gap-1">
        {["Inicio", "Progreso", "Calendario", "E-Portafolio"].map((item) => (
          <Button
            key={item}
            variant={item === "Inicio" ? "secondary" : "ghost"}
            size="sm"
            className="text-xs h-7"
          >
            {item}
          </Button>
        ))}
      </nav>

      {/* Right Actions */}
      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Grid3X3 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Mail className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MessageSquare className="h-4 w-4" />
        </Button>

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 relative">
              <Bell className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full border-2 border-background" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-72">
            <div className="px-3 py-2 font-semibold text-sm border-b">
              Notificaciones
            </div>
            {NOTIFICATIONS.map((n, i) => (
              <DropdownMenuItem key={i} className="flex-col items-start gap-0.5 py-2.5">
                <span className="text-xs font-medium leading-tight">{n.title}</span>
                <span className="text-[11px] text-muted-foreground">{n.source}</span>
                <span className="text-[11px] text-teal-700 font-medium">{n.time}</span>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-center text-xs text-teal-700 font-medium justify-center">
              Cargar más
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-8 px-2 gap-2">
              <Avatar className="h-5 w-5">
                <AvatarFallback className="text-[9px] bg-teal-600 text-white font-bold">
                  MV
                </AvatarFallback>
              </Avatar>
              <span className="text-xs font-medium hidden sm:block">Manuel Viveros</span>
              <ChevronDown className="h-3 w-3 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuItem>Perfil</DropdownMenuItem>
            <DropdownMenuItem>Notificaciones</DropdownMenuItem>
            <DropdownMenuItem>Preferencias</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Progreso</DropdownMenuItem>
            <DropdownMenuItem>Español (Latinoamérica)</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              Cerrar sesión
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}

const NOTIFICATIONS = [
  {
    title: "Estamos en la Evaluación en Vivo del Momento 3",
    source: "V_Institucional_II_2610_1842",
    time: "Hace 5 horas",
  },
  {
    title: "Semana Académica 11 (video mensaje)",
    source: "V_Institucional_I_2610_1599",
    time: "Ayer a las 19:48",
  },
  {
    title: "Asesoría Académica Momento 3",
    source: "V_Institucional_I_2610_1599",
    time: "Ayer a las 19:10",
  },
  {
    title: "Grabación Encuentro Sincrónico Momento 3",
    source: "V_Institucional_II_2610_1842",
    time: "16 de abril a 17:03",
  },
];
