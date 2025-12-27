import { createContext, useContext, type ReactNode } from "react";

interface MetadataService {
    name: string;
    version: string;
}

const MetadataContext = createContext<MetadataService | undefined>(undefined);

export function MetadataProvider({ children }: { children: ReactNode }) {
    const service: MetadataService = {
        name: "Portfolio.ts",
        version: "0.0.1",
    };

    return (
        <MetadataContext.Provider value={service}>
            {children}
        </MetadataContext.Provider>
    );
}

export const useMetadata = () => {
    const context = useContext(MetadataContext);
    if (!context) throw new Error("usePortfolio must be used within a PortfolioProvider");
    return context;
};