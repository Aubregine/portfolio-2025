import { MainLayout } from "@/components/custom/main-layout";
import { MetadataProvider } from "@/lib/providers/metadata-provider.tsx";
import type { ComponentType, ReactNode } from "react";
import { ThemeProvider } from "@/lib/providers/theme-provider.tsx";
import { Homepage } from "@/components/custom/homepage/homepage.tsx";
import { PortfolioProvider } from "@/lib/providers/portfolio-provider.tsx";

const compose = (providers: ComponentType<{ children: ReactNode }>[]) =>
  providers.reduce((Prev, Curr) => ({ children }) => (
    <Prev>
      <Curr>{children}</Curr>
    </Prev>
  ));

const Providers = compose([MetadataProvider, ThemeProvider, PortfolioProvider]);

function App() {
  return (
    <Providers>
      <MainLayout>
        <Homepage />
      </MainLayout>
    </Providers>
  );
}

export default App;
