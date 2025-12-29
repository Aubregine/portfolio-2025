import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import React, { type JSX, useEffect, useState } from "react";
import type { BlogFrontMatter, BlogPost as BlogPostType } from "@/lib/types.ts";
import fm from "front-matter";
import Markdown from "react-markdown";
import { cn } from "@/lib/utils.ts";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Terminal } from "@/components/custom/generic/terminal.tsx";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Typewriter } from "@/components/custom/generic/typewriter.tsx";
import { useTheme } from "@/lib/providers/theme-provider.tsx";

const modules = import.meta.glob("/src/blog-posts/*.md", { query: "?raw" });

const customDarkTheme = {
  ...oneDark,
  // override the underlying <pre style={inline style}> of the <SyntaxHighlighter>
  'pre[class*="language-"]': {
    ...oneDark['pre[class*="language-"]'],
    borderRadius: "0",
    margin: "0",
  },
};
const customLightTheme = {
  ...oneLight,
  // override the underlying <pre style={inline style}> of the <SyntaxHighlighter>
  'pre[class*="language-"]': {
    ...oneLight['pre[class*="language-"]'],
    borderRadius: "0",
    margin: "0",
  },
};

const languageNames: { [key: string]: string } = {
  rust: "Rust",
  ts: "TypeScript",
  tsx: "React (TypeScript)",
  js: "JavaScript",
  html: "HTML",
  css: "CSS",
};

const widgets: {
  [key: string]: (args: { args: string[]; children: React.ReactNode }) => JSX.Element;
} = {
  typewriter: ({ args, children }) => (
    <Typewriter
      reverse={args.includes("reverse")}
      loop={args.includes("loop")}
      lines={children as string[]}
    />
  ),
};

async function loadPost(slug: string): Promise<BlogPostType | null> {
  const loader = modules[`/src/blog-posts/${slug}.md`];
  if (!loader) return null;

  const raw = (await loader()) as { default: string };
  const { attributes, body } = fm<BlogFrontMatter>(raw.default);
  return { data: attributes, content: body, slug } as BlogPostType;
}

export function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    if (!slug) return; // something went terribly wrong
    loadPost(slug)
      .then((post) => setPost(post))
      .then(() => setIsLoading(false));
  }, [slug]);

  // TODO return a skeleton
  if (isLoading) return <div className="py-20 text-center">Loading post...</div>;
  // TODO redirect to 404 page instead
  if (!post) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link to="/blog" className="text-primary hover:underline">
          Return to blog
        </Link>
      </div>
    );
  }

  const { data, content } = post;

  return (
    <article className="mx-auto max-w-2/3 py-12">
      <Button variant="ghost" asChild className="mb-8 -ml-4">
        <Link to="/blog">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to all posts
        </Link>
      </Button>

      <header className="mb-8">
        {data.tags.map((tag) => (
          <span key={tag} className="text-primary mb-2 text-sm font-medium">
            {tag}
          </span>
        ))}
        <h1 className="mb-2 text-4xl font-extrabold tracking-tight">{data.title}</h1>
        <time className="text-muted-foreground text-sm">{data.date}</time>
      </header>

      <div className="space-y-2">
        <Markdown
          components={{
            code({ node, inline, children, className, ...rest }) {
              const match = /language-(\w+)/.exec(className || "");
              const lang = match?.[1];
              const args = node?.data?.meta?.split(" ") ?? [];
              if (inline || !lang) {
                return (
                  <code
                    {...rest}
                    className={cn("mx-0.5 rounded-xs bg-teal-700/50 font-bold", className)}
                  >
                    {String(children).replace(/\n$/, "")}
                  </code>
                );
              }
              if (widgets[lang]) {
                return widgets[lang]({ args, children: String(children).trim().split("\n") });
              }
              switch (lang) {
                case "typewriter":
                  return (
                    <Typewriter
                      reverse={args.includes("reverse")}
                      loop={args.includes("loop")}
                      lines={String(children).trim().split("\n")}
                    />
                  );
                // add custom widgets here
                default:
                  return (
                    <Terminal title={languageNames[lang] ?? "Code"} className="my-2">
                      {/* @ts-ignore*/}
                      <SyntaxHighlighter
                        {...rest}
                        style={theme === "light" ? customLightTheme : customDarkTheme}
                        children={String(children).replace(/\n$/, "")}
                        language={lang}
                      />
                    </Terminal>
                  );
              }
            },
            h1({ children, className, ...rest }) {
              return (
                <h1 {...rest} className={cn(className, "text-5xl")}>
                  {children}
                </h1>
              );
            },
            h2({ children, className, ...rest }) {
              return (
                <h2 {...rest} className={cn(className, "text-3xl")}>
                  {children}
                </h2>
              );
            },
            h3({ children, className, ...rest }) {
              return (
                <h3 {...rest} className={cn(className, "text-xl")}>
                  {children}
                </h3>
              );
            },
            ul({ children, className, ...rest }) {
              return (
                <ul {...rest} className={cn("ml-3 list-inside list-disc", className)}>
                  {children}
                </ul>
              );
            },
            img({ className, alt, ...rest }) {
              return <img {...rest} alt={alt} className={cn("justify-self-center", className)} />;
            },
          }}
        >
          {content}
        </Markdown>
      </div>
    </article>
  );
}
