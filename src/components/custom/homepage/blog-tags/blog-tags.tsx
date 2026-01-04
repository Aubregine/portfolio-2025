import { useBlogTags } from "@/lib/providers/blog-provider.tsx";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";

interface BlogTagsProps {}

function BlogTags({}: BlogTagsProps) {
  const tags = useBlogTags();
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Button
            key={tag}
            variant="secondary"
            size="sm"
            className="cursor-pointer rounded-full px-3 py-1 text-sm font-medium"
            onClick={() => navigate(`/blog?tag=${encodeURIComponent(tag.toLowerCase())}`)}
          >
            {tag}
          </Button>
          // <span
          //   key={skill}
          //   className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm font-medium"
          // >
          //   {skill}
          // </span>
        ))}
      </div>
    </div>
  );
}

export default BlogTags;
