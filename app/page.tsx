"use client";
import { useState } from "react";
import ModeToggle from "./components/ModeToggle";
import ProSite from "./components/ProSite";
import PersonalSite from "./components/PersonalSite";

export default function Home() {
  const [mode, setMode] = useState<"pro" | "personal">("pro");

  return (
    <>
      <ModeToggle
        mode={mode}
        onToggle={() => setMode(mode === "pro" ? "personal" : "pro")}
      />
      {mode === "pro" ? <ProSite /> : <PersonalSite />}
    </>
  );
}
