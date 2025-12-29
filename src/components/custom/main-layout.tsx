import Header from "@/components/custom/header/header.tsx";
import Footer from "@/components/custom/footer.tsx";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {/* Body */}
      <main className="container mx-auto flex-1 px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
