import { Typewriter } from "@/components/custom/generic/typewriter.tsx";
import { ProjectsCarousel } from "@/components/custom/homepage/project-carousel/project-carousel.tsx";

export function Homepage() {
  return (
    <div className="flex flex-col gap-12">
      <Typewriter
        loop
        lines={[
          "Hello, I'm Aurore :)",
          "Welcome to my website!",
          "It's still a bit empty huh?",
          "It will come.. in time!",
          "But until then, you can.. I don't know",
          "Enjoy the.. mmh. empty. background",
          "Yeah well.. maybe not the best",
          "It's ok though, come back in a few days",
          ":)",
        ]}
        className="text-5xl font-bold"
      />
      <div className="justify-items-center">
        <ProjectsCarousel />
      </div>
    </div>
  );
}
