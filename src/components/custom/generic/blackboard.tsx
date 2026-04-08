import React, { useState } from "react";
import { cn } from "@/lib/utils.ts";
import { Button } from "@/components/ui/button.tsx";
import { ChevronDown, ChevronUp } from "lucide-react";

interface BlackboardProps {
  children: React.ReactNode;
  className?: string;
}

export function Blackboard({ children, className }: BlackboardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        "relative flex w-full flex-row overflow-hidden rounded-xl shadow-xl",
        "bg-[#142E23]",
        "before:pointer-events-none before:absolute before:inset-0.5 before:rounded-[0.9rem] before:border before:border-[#f4f0cf]/20 before:shadow-[0_0_0_1px_rgba(244,240,207,0.08),0_0_0_3px_rgba(244,240,207,0.03)]",
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]",
        !isOpen && "cursor-pointer",
        className
      )}
      onClick={() => !isOpen && setIsOpen(true)}
    >
      <div className="absolute top-3 right-3 z-10">
        {isOpen ? (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="relative h-8 cursor-pointer rounded-full bg-[#f3f1d7]/10 px-3 text-[#f3f1d7] hover:bg-[#f3f1d7]/20"
            onClick={() => setIsOpen(false)}
          >
            <ChevronUp />
          </Button>
        ) : (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="relative h-8 cursor-pointer rounded-full bg-[#f3f1d7]/10 px-3 text-[#f3f1d7] hover:bg-[#f3f1d7]/20 hover:text-[#f3f1d7]"
            onClick={() => setIsOpen(true)}
          >
            <ChevronDown />
          </Button>
        )}
      </div>
      <div
        className={cn(
          "min-h-16 w-full p-4 pr-12 leading-loose",
          "bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.08),transparent_20%)]",
          "text-[#f3f1d7]"
        )}
      >
        {isOpen ? children : <div className="line-clamp-1">{children}</div>}
      </div>
    </div>
  );
}
