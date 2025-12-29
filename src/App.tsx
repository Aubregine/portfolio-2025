import { MetadataProvider } from "@/lib/providers/metadata-provider.tsx";
import type { ComponentType, ReactNode } from "react";
import { ThemeProvider } from "@/lib/providers/theme-provider.tsx";
import { PortfolioProvider } from "@/lib/providers/portfolio-provider.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "@/components/custom/homepage/homepage.tsx";
import MainLayout from "@/components/custom/main-layout.tsx";
import { Blog } from "@/components/custom/blog/blog.tsx";
import { BlogPost } from "@/components/custom/blog/blog-post.tsx";

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
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Route>
        </Routes>
      </Router>
    </Providers>
  );
}

export default App;
