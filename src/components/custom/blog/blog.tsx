import { type ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import type { BlogMetadata } from "@/lib/types.ts";

type BlogPostNoContent = {
  metadata: BlogMetadata;
  slug: string;
};

// TODO: this is Alice in wonderland error handling right there
async function getAllPosts(): Promise<BlogPostNoContent[]> {
  const url = `${import.meta.env.BASE_URL}blog-posts/index.json`;
  return await fetch(url).then((res) => res.json());
}

export function Blog() {
  const [filter, setFilter] = useState("");
  const [posts, setPosts] = useState<BlogPostNoContent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllPosts().then((posts) => {
      setPosts(posts);
      setIsLoading(false);
    });
  }, []);

  const filteredPosts = posts.filter(
    (post) =>
      post.metadata.title.toLowerCase().includes(filter.toLowerCase()) ||
      post.metadata.tags.some((t) => t.toLowerCase().includes(filter.toLowerCase()))
  );

  // TODO return a skeleton
  if (isLoading) return <div className="py-20 text-center">Loading posts...</div>;

  return (
    <div className="mx-auto px-4 lg:max-w-2/3 lg:py-12">
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
              {post.metadata.tags.map((tag) => (
                <span key={tag} className="mr-2">
                  {tag}
                </span>
              ))}
            </span>
            <h2 className="mt-1 text-2xl font-semibold">{post.metadata.title}</h2>
            <p className="text-muted-foreground mt-2">{post.metadata.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
