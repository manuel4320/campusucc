"use client";

import { useState } from "react";
import { Topbar } from "@/components/topbar";
import { SecondaryNav } from "@/components/secondary-nav";
import { CourseSidebar } from "@/components/course-sidebar";
import { AnnouncementsPanel } from "@/components/announcements-panel";
import { RightPanel } from "@/components/right-panel";
import { Banner } from "@/components/banner";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <Topbar />
      <SecondaryNav />
      <main className="container mx-auto max-w-7xl px-4 py-4">
        <Banner />
        <div className="grid grid-cols-[220px_1fr_200px] gap-4 mt-4">
          <CourseSidebar />
          <AnnouncementsPanel />
          <RightPanel />
        </div>
      </main>
    </div>
  );
}
