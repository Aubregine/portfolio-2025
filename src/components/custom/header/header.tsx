import { Terminal } from "lucide-react";
import { useMetadata } from "@/lib/providers/metadata-provider.tsx";
import ToggleTheme from "@/components/custom/header/toggle-theme.tsx";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";

export default function Header() {
  const metadata = useMetadata();

  return (
    <header className="sticky top-0 z-50 flex h-14 w-full items-center justify-between border-b px-4 backdrop-blur">
      {/* Website name + logo */}
      <Link to="/" className="flex items-center gap-2">
        <Terminal className="w-5" />
        <span className="font-bold">{metadata.name}</span>
      </Link>
      <div className="flex gap-4">
        <Button variant="ghost" asChild>
          <Link to="/blog">
            <span className="hover:text-primary transition-colors">Blog</span>
            <span className="sr-only">Blog</span>
          </Link>
        </Button>
        <ToggleTheme />
        {/*<OpenMenu />*/}
      </div>
    </header>
  );
}
