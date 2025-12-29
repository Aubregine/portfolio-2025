import { type ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import type { BlogFrontMatter, BlogPost as BlogPostType } from "@/lib/types.ts";
import fm from "front-matter";

/*
Should look like this:
{
  default: " // yes this is a string, not an object, cuz it's raw
    my-first-post: {
      data: {
        title: "My first post",
        date: "30-12-2025",
        tags: ["react", "typescript"],
        excerpt: "this is my first post"
      },
      content: "...",
    },
    my-second-post: { ... },
  "
}
 */
const postModule = import.meta.glob("/src/blog-posts/*.md", { query: "?raw" });

async function getAllPosts(): Promise<BlogPostType[]> {
  return await Promise.all(
    Object.entries(postModule).map(async ([path, postLoader]) => {
      // With ?raw, postLoader() returns a object with default: string = rawData
      const raw = (await postLoader()) as { default: string };
      const { attributes, body } = fm<BlogFrontMatter>(raw.default);
      const slug = path.split("/").pop()?.replace(".md", "") || "";
      return { data: attributes, content: body, slug } as BlogPostType;
    })
  );
}

export function Blog() {
  const [filter, setFilter] = useState("");
  const [posts, setPosts] = useState<BlogPostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllPosts().then((posts) => {
      setPosts(posts);
      setIsLoading(false);
    });
  }, []);

  const filteredPosts = posts.filter(
    (post) =>
      post.data.title.toLowerCase().includes(filter.toLowerCase()) ||
      post.data.tags.some((t) => t.toLowerCase().includes(filter.toLowerCase()))
  );

  // TODO return a skeleton
  if (isLoading) return <div className="py-20 text-center">Loading posts...</div>;

  return (
    <div className="mx-auto max-w-2/3 px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Blog Posts</h1>

      <div className="mb-8">
        <Input
          placeholder="Filter by title or tags..."
          value={filter}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setFilter(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <div className="grid gap-6">
        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="hover:border-primary block rounded-lg border p-6 transition-colors"
          >
            <span className="text-muted-foreground text-sm tracking-wider uppercase">
              {post.data.tags.map((tag) => (
                <span key={tag} className="mr-2">
                  {tag}
                </span>
              ))}
            </span>
            <h2 className="mt-1 text-2xl font-semibold">{post.data.title}</h2>
            <p className="text-muted-foreground mt-2">{post.data.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
