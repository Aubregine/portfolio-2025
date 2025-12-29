import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "@/components/custom/homepage/project-carousel/project-card.tsx";
import { usePortfolio } from "@/lib/providers/portfolio-provider.tsx";
import { ProjectCardSkeleton } from "@/components/custom/homepage/project-carousel/project-card-skeleton.tsx";
import Autoplay from "embla-carousel-autoplay";

export function ProjectsCarousel() {
  const portfolio = usePortfolio();

  return (
    <Carousel
      className="w-full max-w-6xl"
      opts={{ loop: true, duration: 45 }}
      plugins={[Autoplay({ delay: 10000 })]}
    >
      <CarouselContent>
        {!portfolio.isLoading &&
          portfolio.projects.map((project) => (
            <CarouselItem key={project.id}>
              <div className="p-1">
                <ProjectCard
                  name={project.name}
                  description={project.description}
                  link={project.link}
                  github={project.github}
                  image={project.image}
                />
              </div>
            </CarouselItem>
          ))}
        {portfolio.isLoading && (
          <CarouselItem>
            <div className="p-1">
              <ProjectCardSkeleton />
            </div>
          </CarouselItem>
        )}
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
}
