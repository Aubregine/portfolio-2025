import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Menu } from "lucide-react";

export default function OpenMenu() {
  return (
    <>
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div>
            <DrawerHeader>
              <DrawerTitle>Drawer</DrawerTitle>
            </DrawerHeader>
            <nav className="flex flex-col gap-2 p-4">
              <Button variant="ghost" className="justify-start">
                Accueil
              </Button>
              <Button variant="ghost" className="justify-start">
                Projets
              </Button>
              <Button variant="ghost" className="justify-start">
                Contact
              </Button>
            </nav>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
