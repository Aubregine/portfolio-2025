import {Button} from "@/components/ui/button.tsx";
import {useTheme} from "@/lib/providers/theme-provider.tsx";
import {Moon, Sun} from "lucide-react";


export default function ToggleTheme() {
    const themeContext = useTheme();
    return <Button
        variant="ghost"
        size="icon"
        onClick={() => themeContext.setTheme(themeContext.theme === "dark" ? "light" : "dark")}
    >
        {themeContext.theme === "dark" ? (
            <Sun />
        ) : (
            <Moon />
        )}
        <span className="sr-only">Toggle dark mode</span>
    </Button>
}