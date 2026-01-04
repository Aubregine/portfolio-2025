import { ProjectsCarousel } from "@/components/custom/homepage/project-carousel/project-carousel.tsx";
import { AboutMe } from "@/components/custom/homepage/about-me/about-me.tsx";
import BlogTags from "@/components/custom/homepage/blog-tags/blog-tags.tsx";

export function Homepage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="grid max-w-6xl grid-cols-1 gap-8 self-center px-4 md:grid-cols-2">
        <AboutMe />
        <BlogTags />
      </section>
      <div className="justify-items-center">
        <ProjectsCarousel />
      </div>
    </div>
  );
}
