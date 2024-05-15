"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function ClientThemeWrapper({ children }: any) {
  const { theme } = useContext(ThemeContext);
  return (
    <div data-theme={theme} className="min-h-screen">
      {children}
    </div>
  );
}
