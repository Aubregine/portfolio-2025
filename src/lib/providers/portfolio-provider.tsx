import { createContext, type ReactNode, useContext, useEffect, useState } from "react";

interface Project {
  id: number;
  name: string;
  description: string;
  link?: string;
  github?: string;
  image?: string;
}

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
    link: "http://localhost:5173",
    github: "https://github.com/Aubregine/portfolio-2025",
  },
  {
    name: "Scryfall clone",
    description:
      "A simple clone of one of my favorite website of all times! Written in Rust, it's blazingly fast!\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    github: "https://github.com/Aubregine/portfolio-2025",
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
        await new Promise((resolve) => setTimeout(resolve, 5000));
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
