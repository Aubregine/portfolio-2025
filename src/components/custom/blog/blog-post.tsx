import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import React, { type JSX, useEffect, useState } from "react";
import type { BlogMetadata, BlogPost as BlogPostType } from "@/lib/types.ts";
import fm from "front-matter";
import Markdown from "react-markdown";
import { cn } from "@/lib/utils.ts";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Terminal } from "@/components/custom/generic/terminal.tsx";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Typewriter } from "@/components/custom/generic/typewriter.tsx";
import { useTheme } from "@/lib/providers/theme-provider.tsx";

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
function resolveImageUrl(src: string, markdownUrl: string): string {
  try {
    const url = new URL(src);
    // If src is already absolute (starts with http(s):// or /), return as-is
    return url.href;
  } catch {
    // If src is relative, resolve against markdownUrl
    return new URL(src, markdownUrl).toString();
  }
}

async function loadPost(slug: string): Promise<BlogPostType | null> {
  const url = `${import.meta.env.BASE_URL}blog-posts/${slug}.md`;
  const res = await fetch(url);

  const raw = await res.text();
  const { attributes, body } = fm<BlogMetadata>(raw);

  if (!attributes.title || !body) return null;

  return { metadata: attributes, content: body, slug };
}

export function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>();
  const { theme } = useTheme();

  useEffect(() => {
    if (!slug) return; // something went terribly wrong
    loadPost(slug)
      .then((post) => setPost(post))
      .catch(setError)
      .then(() => setIsLoading(false));
  }, [slug]);

  const markdownUrl = new URL(
    `blog-posts/${slug}.md`,
    window.location.origin + import.meta.env.BASE_URL
  ).toString();

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
            img({ className, alt, src, ...rest }) {
              return (
                <img
                  src={resolveImageUrl(src ?? "", markdownUrl)}
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
