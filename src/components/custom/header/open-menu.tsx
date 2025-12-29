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
          <Button variant="ghost" size="icon" className="cursor-pointer">
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
                Home
              </Button>
              <Button variant="ghost" className="justify-start">
                Projects
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
