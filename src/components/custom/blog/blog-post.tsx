import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import React, { type JSX } from "react";
import Markdown from "react-markdown";
import { cn } from "@/lib/utils.ts";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Terminal } from "@/components/custom/generic/terminal.tsx";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Typewriter } from "@/components/custom/generic/typewriter.tsx";
import { useTheme } from "@/lib/providers/theme-provider.tsx";
import { useBlogPost } from "@/lib/providers/blog-provider.tsx";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

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

const customWidgets: {
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

/*
Resolves an image URL if it is relative to the md file.
If it is already absolute, it returns it as-is.

The img and the md files need to be in the same folder.
 */
function resolveUrl(url: string): string {
  const currentUrl = new URL("blog/", window.location.origin + import.meta.env.BASE_URL);
  // this will return url if it's absolute, or currentUrl/url if it's relative
  return new URL(url, currentUrl).toString();
}

export function BlogPost() {
  const { slug } = useParams();
  const { theme } = useTheme();
  const { post, isLoading, error } = useBlogPost(slug ?? "");

  // TODO return a skeleton
  if (isLoading) return <div className="py-20 text-center">Loading post...</div>;
  if (error) return <div className="py-20 text-center">Error loading post :(</div>;

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

  const { metadata, content } = post;

  return (
    <article className="mx-auto lg:max-w-2/3 lg:py-12">
      <Button variant="ghost" asChild className="mb-8 -ml-4">
        <Link to="/blog">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to all posts
        </Link>
      </Button>

      <header className="mb-8">
        <div className="flex flex-row gap-2">
          {metadata.tags.map((tag) => (
            <span key={tag} className="text-primary mb-2 text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight">{metadata.title}</h1>
        <time className="text-muted-foreground text-sm">{metadata.date}</time>
      </header>

      <div className="space-y-2">
        <Markdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex]}
          components={{
            code({ node, children, className, ...rest }) {
              const match = /language-(\w+)/.exec(className || "");
              const lang = match?.[1];
              const args = node?.data?.meta?.split(" ") ?? [];
              if (!lang) {
                return (
                  <code
                    {...rest}
                    className={cn("mx-0.5 rounded-xs bg-teal-700/50 font-bold", className)}
                  >
                    {String(children).replace(/\n$/, "")}
                  </code>
                );
              }
              if (customWidgets[lang]) {
                return customWidgets[lang]({ args, children: String(children).trim().split("\n") });
              }
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
            a({ className, href, children }) {
              return (
                <Link
                  to={resolveUrl(href ?? "")}
                  className={cn("text-primary underline", className)}
                  target="_blank"
                  rel="noreferrer"
                >
                  {children}
                </Link>
              );
            },
            img({ className, alt, src, ...rest }) {
              return (
                <img
                  src={resolveUrl(src ?? "")}
                  {...rest}
                  alt={alt}
                  className={cn("justify-self-center rounded-lg", className)}
                />
              );
            },
          }}
        >
          {content}
        </Markdown>
      </div>
    </article>
  );
}
