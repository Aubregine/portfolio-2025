import {createContext, type ReactNode, useContext, useEffect, useState} from "react";
import type {BlogMetadata, BlogPost} from "@/lib/types.ts";
import fm from "front-matter";

interface BlogService {
  blogPosts: Omit<BlogPost, "content">[];
  isLoading: boolean;
  error?: Error;
}

// TODO: this is Alice in wonderland error handling right there
async function getAllPosts(): Promise<BlogPost[]> {
  const url = `${import.meta.env.BASE_URL}blog/index.json`;
  return await fetch(url).then((res) => res.json());
}

const BlogContext = createContext<BlogService | undefined>(undefined);

export function BlogProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>();
  const [posts, setPosts] = useState<BlogPost[]>([]);

  // fetch the project data from a db or something
  useEffect(() => {
    getAllPosts()
      .then((posts) => {
        setPosts(posts);
        setIsLoading(false);
      })
      .catch(setError);
  }, []);
  return (
    <BlogContext.Provider
      value={{
        blogPosts: posts,
        isLoading,
        error,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}
export const useBlogService = () => {
  const context = useContext(BlogContext);
  if (!context) throw new Error("useBlog must be used within a BlogProvider");
  return context;
};

export const useBlogSlugs = (): string[] => {
  const { blogPosts } = useBlogService();
  return blogPosts.map((post) => post.slug);
};

export const useBlogTags = (): string[] => {
  const { blogPosts } = useBlogService();
  return Array.from(new Set(blogPosts.map((post) => post.metadata.tags).flat())).sort();
};

export const useBlogPost = (
  slug: string
): { post?: BlogPost; error?: Error; isLoading: boolean } => {
  const [post, setPost] = useState<BlogPost | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>();

  useEffect(() => {
    const url = `${import.meta.env.BASE_URL}blog/${slug}.md`;
    fetch(url)
      .then((res) => res.text())
      .then((raw) => {
        const { attributes, body } = fm<BlogMetadata>(raw);
        setPost({ metadata: attributes, content: body, slug });
        setIsLoading(false);
      })
      .catch(setError);
  }, []);

  return { isLoading, error, post };
};
