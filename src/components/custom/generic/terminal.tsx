import React from "react";
import { cn } from "@/lib/utils.ts";

interface TerminalProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function Terminal({ children, title = "Code", className }: TerminalProps) {
  return (
    <div
      className={cn(
        "border-border bg-background w-full overflow-hidden rounded-lg border shadow-xl",
        className
      )}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between border-b bg-zinc-700/30 px-4 py-2">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <div className="font-mono">{title}</div>
        <div className="w-12" />
      </div>
      {children}
    </div>
  );
}
