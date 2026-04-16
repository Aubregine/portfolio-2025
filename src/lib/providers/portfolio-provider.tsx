import { createContext, type ReactNode, useContext, useEffect, useState } from "react";
import type { Project } from "@/lib/types.ts";

interface PortfolioService {
  isLoading: boolean;
  error?: Error;
  projects: Project[];
}

const PortfolioContext = createContext<PortfolioService | undefined>(undefined);

// any here to simulate a db response, therefore no type
const MOCK_PROJECTS: any[] = [
  {
    name: "Portfolio Website",
    description: "My portfolio website :) You'll find my other projects there too",
    link: "https://aubregine.github.io/portfolio-2025/",
    github: "https://github.com/Aubregine/portfolio-2025",
    image: "portfolio/portfolio-2025-preview.png",
  },
  {
    name: "Rust Mandelbrot Viewer",
    description: "A very basic Mandelbrot viewer made in Rust. Zoom up to 10^-15",
    github: "https://github.com/Aubregine/mandelbrot",
    image: "portfolio/mandelbrot-viewer-preview.png",
  },
];

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>();
  const [projects, setProjects] = useState<Project[]>([]);

  // fetch the project data from a db or something
  useEffect(() => {
    async function loadPortfolios() {
      try {
        // mock database for now
        // const response = await fetch("database url");
        // const data = await response.json();
        // setProjects(data);

        // simulate a 5s delay for testing purpose
        // await new Promise((resolve) => setTimeout(resolve, 5000));
        const dbProjects = MOCK_PROJECTS.map((p, i) => {
          return { ...(p as Project), id: i };
        });

        setProjects(dbProjects);
      } catch (e) {
        setError(e as Error);
      } finally {
        setIsLoading(false);
      }
    }
    loadPortfolios().then();
  }, []);

  return (
    <PortfolioContext.Provider
      value={{
        isLoading,
        error,
        projects: projects,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) throw new Error("usePortfolio must be used within a PortfolioProvider");
  return context;
};
