import React from "react";
import { cn } from "@/lib/utils.ts";

interface BlackboardProps {
  children: React.ReactNode;
  className?: string;
}

export function Blackboard({ children, className }: BlackboardProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl shadow-xl",
        "bg-[#142E23]",
        "before:pointer-events-none before:absolute before:inset-0.5 before:rounded-[0.9rem] before:border before:border-[#f4f0cf]/20 before:shadow-[0_0_0_1px_rgba(244,240,207,0.08),0_0_0_3px_rgba(244,240,207,0.03)]",
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]",
        className
      )}
    >
      <div
        className={cn(
          "min-h-16 p-4 leading-relaxed",
          "bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.08),transparent_20%)]",
          "text-[#f3f1d7]"
        )}
      >
        {children}
      </div>
    </div>
  );
}
