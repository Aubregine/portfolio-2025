import { type ReactNode } from "react";
import Header from "@/components/custom/header/header.tsx";
import Footer from "@/components/custom/footer.tsx";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {/* Body */}
      <main className="container mx-auto flex-1 px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
