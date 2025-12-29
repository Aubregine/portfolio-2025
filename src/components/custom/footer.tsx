import { Button } from "@/components/ui/button.tsx";

export default function Footer() {
  return (
    <footer className="bg-muted/50 flex items-center border-t px-4 py-4">
      <div className="text-muted-foreground container mx-auto px-4 text-center text-sm">
        © {new Date().getFullYear()} - Aurore Kerlero
      </div>
      <div className="absolute left-2">
        <Button variant="ghost" asChild>
          <a href="https://www.linkedin.com/in/aurore-kerlero/" target="_blank" rel="noreferrer">
            <img src="src/assets/linkedin.png" alt="LinkedIn" className="w-6" />
            <div className="sr-only">LinkedIn</div>
            My LinkedIn
          </a>
        </Button>
      </div>
    </footer>
  );
}
