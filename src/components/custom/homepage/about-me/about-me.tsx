import { Typewriter } from "@/components/custom/generic/typewriter.tsx";

export function AboutMe() {
  return (
    <section className="grid max-w-6xl grid-cols-1 gap-8 self-center px-4 md:grid-cols-2">
      <div className="space-y-4">
        <Typewriter
          loop
          reverse
          lines={["About me.", "Aurre Kerle", "Aurore Krlero", "Aurore Kerlro", "Aubregine :)"]}
          className="text-3xl font-bold"
        />
        <p className="text-muted-foreground leading-relaxed">
          I’m a software engineer and problem solver with a love for <strong>clean</strong>,
          well-typed code. Having studied mathematics and computer science at IMT Atlantique, I
          enjoy <strong>functional programming</strong>, optimizing <strong>performance</strong>,
          and turning complex ideas into <strong>elegant</strong> solutions. <br />
          I’ve worked across <strong>full-stack</strong>, <strong>mobile</strong>, and{" "}
          <strong>cloud</strong> development, shipping projects like a Flutter video editor or a
          high performance <strong>database</strong> infrastructure.
          <br /> I thrive on languages and tools that reward precision and clarity. Rust, functional
          languages, and strict TypeScript are my favorites.
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {["React", "TypeScript", "Tailwind CSS", "Vite", "Node.js"].map((skill) => (
            <span
              key={skill}
              className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
