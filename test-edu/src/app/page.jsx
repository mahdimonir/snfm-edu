"use client";

import HomeHero from "@/components/HomePage/HomeHero";
import NoticeBoard from "@/components/HomePage/NoticeBoard";
import QuickLinks from "@/components/HomePage/QuickLinks";
import ServicesGrid from "@/components/HomePage/ServicesGrid";
import { useState } from "react";

import {
  notices,
  quickLinks,
  quickStats,
  services,
  upcomingEvents,
} from "@/data/homeData";
import Messages from "./components/HomePage/Messages";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0); // For future slider use if needed

  return (
    <div className="min-h-screen">
      <HomeHero />
      <QuickLinks links={quickLinks} />
      <NoticeBoard
        notices={notices}
        quickStats={quickStats}
        upcomingEvents={upcomingEvents}
      />
      <Messages />
      <ServicesGrid services={services} />
    </div>
  );
}
