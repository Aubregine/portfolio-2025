import { useEffect, useState } from "react";
import { cn } from "@/lib/utils.ts";

interface TypewriterProps {
  lines: string[];
  speed?: number;
  delay?: number;
  loop?: boolean;
  loopDelay?: number;
  className?: string;
}

export function Typewriter({
  lines,
  speed = 50,
  delay = 1,
  loop = false,
  loopDelay = 3,
  className,
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [line, setLine] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (displayedText.length < (lines[line] ?? "").length) {
      const timeout = setTimeout(() => {
        setDisplayedText((lines[line] ?? "").slice(0, displayedText.length + 1));
      }, speed);

      return () => clearTimeout(timeout);
    }

    // we reached the end of the current line
    if (displayedText.length === (lines[line] ?? "").length) {
      // we reached the end of all the text provided
      if (line === lines.length - 1) {
        if (loop) {
          const timeout = setTimeout(() => {
            setLine(0);
            setDisplayedText("");
          }, loopDelay * 1000);

          return () => clearTimeout(timeout);
        } else {
          const timeout = setTimeout(() => {
            setDone(true);
          }, delay * 1000);
          return () => clearTimeout(timeout);
        }
      }
      // we still have lines to display, start the next one
      const timeout = setTimeout(() => {
        setLine((line + 1) % lines.length);
        setDisplayedText("");
      }, delay * 1000);

      return () => clearTimeout(timeout);
    }
    // we did nothing, return nothing
    return;
  }, [displayedText, lines, line, speed, delay, loop]);

  return (
    <span className={className}>
      {displayedText}
      <span
        className={cn("border-primary animate-pulse border-r-2", done ? "invisible" : "visible")}
      />
    </span>
  );
}
