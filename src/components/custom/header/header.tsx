import { Terminal } from "lucide-react";
import { useMetadata } from "@/lib/providers/app-metadata.tsx";
import ToggleTheme from "@/components/custom/header/toggle-theme.tsx";
import OpenMenu from "@/components/custom/header/open-menu.tsx";

export default function Header() {
  const metadata = useMetadata();

  return (
    <header className="bg-background/95 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="flex h-14 items-center justify-between px-4">
        {/* Website name + logo */}
        <div className="flex items-center gap-2">
          <Terminal className="w-5" />
          <span className="font-bold">{metadata.name}</span>
        </div>
        <div>
          <ToggleTheme />
          <OpenMenu />
        </div>
      </div>
    </header>
  );

}
