import { MainLayout } from "@/components/custom/main-layout";
import { MetadataProvider, useMetadata } from "@/lib/providers/app-metadata";
import type {ComponentType, ReactNode} from "react";
import {ThemeProvider} from "@/lib/providers/theme-provider.tsx";

// Testing injection
function WelcomeMessage() {
    const metadata = useMetadata(); // hopefully returns something
    return (
        <div className="space-y-4 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight">
                Project name: {metadata.name}
            </h1>
            <p className="text-muted-foreground">
                Version: {metadata.version}
            </p>
        </div>
    );
}

const compose = (providers: ComponentType<{ children: ReactNode }>[]) => providers.reduce((Prev, Curr) => ({ children }) => (
    <Prev>
        <Curr>{ children }</Curr>
    </Prev>
));

const Providers = compose([
    MetadataProvider,
    ThemeProvider,
]);

function App() {
    return (
        <Providers>
            <MainLayout>
                <WelcomeMessage />
                Add things here!
            </MainLayout>
        </Providers>
    );
}

export default App;