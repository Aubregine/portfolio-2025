import { type ReactNode } from "react";
import Header from "@/components/custom/header/header.tsx";
import Footer from "@/components/custom/footer.tsx";

interface MainLayoutProps {
    children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            {/* Body */}
            <main className="flex-1 container mx-auto px-4 py-8">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default MainLayout;