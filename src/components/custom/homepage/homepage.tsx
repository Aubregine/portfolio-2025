import { ProjectsCarousel } from "@/components/custom/homepage/project-carousel/project-carousel.tsx";
import { AboutMe } from "@/components/custom/homepage/about-me/about-me.tsx";

export function Homepage() {
  return (
    <div className="flex flex-col gap-12">
      <AboutMe />
      <div className="justify-items-center">
        <ProjectsCarousel />
      </div>
    </div>
  );
}
