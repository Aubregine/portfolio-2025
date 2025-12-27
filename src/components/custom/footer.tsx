import {Button} from "@/components/ui/button.tsx";

export default function Footer() {
    return <footer className="border-t py-4 bg-muted/50 flex items-center px-4">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} - Aurore Kerlero
        </div>
        <div className="absolute left-2">
            <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/aurore-kerlero/" target="_blank" rel="noreferrer">
                    <img src="src/assets/linkedin.png" alt="LinkedIn"/>
                    <div className="sr-only">LinkedIn</div>
                </a>
            </Button>
        </div>
    </footer>
}