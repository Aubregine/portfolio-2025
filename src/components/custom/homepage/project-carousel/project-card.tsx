import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import githubLogo from "@/assets/github.svg";

interface ProjectCardProps {
  name: string;
  description: string;
  link?: string;
  github?: string;
  image?: string;
}

export default function ProjectCard({ name, description, link, github, image }: ProjectCardProps) {
  return (
    <Card className="flex flex-col text-center">
      <CardHeader>
        <CardTitle className="line-clamp-1">{name}</CardTitle>
        <CardDescription className="line-clamp-3 h-15 max-w-2/3 justify-self-center whitespace-break-spaces">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {image ? (
          <img
            src={new URL(
              image || "/assets/placeholder.png",
              window.location.origin + import.meta.env.BASE_URL
            ).toString()}
            alt={name}
            className="aspect-video w-full rounded-md object-cover"
          />
        ) : (
          <div className="bg-muted flex aspect-3/1 items-center justify-center rounded-md border border-dashed">
            <span className="text-muted-foreground text-sm">No preview available :(</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex gap-2">
        {link && (
          <Button asChild variant="default" size="sm" className="flex-3">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
        {github && (
          <Button asChild variant="secondary" className="flex-1">
            <a href={github} target="_blank" rel="noopener noreferrer">
              <span>Source</span>
              <img src={githubLogo} alt="Github" className="w-6" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
