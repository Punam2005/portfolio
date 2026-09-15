import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { ProjectCard } from "@/components/ui/ProjectCard";

const projects = [
  {
    name: "ManageIT",
    slug: "manageit",
    description: "Full-stack resource management web app built for managing resources, support tickets, and activity logs.",
    stack: ["Java", "Spring Boot", "Angular", "PostgreSQL"],
    impact: "Integrated frontend and backend modules for seamless data exchange",
  },
  {
    name: "QuickURL",
    slug: "quickurl",
    description: "URL shortening service with custom aliases, expiry settings, and a React analytics dashboard.",
    stack: ["Node.js", "Express.js", "React", "MongoDB"],
    impact: "60% redirect latency reduction under load",
  },
  {
    name: "Smart Expense Tracker",
    slug: "smart-expense-tracker",
    description: "Cross-platform app for real-time income and expense tracking with category summaries and cloud sync.",
    stack: ["React Native", "Node.js", "Express.js", "MongoDB", "JWT"],
    impact: "40% improvement in tracking efficiency",
  },
];

export default function Work() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          {/* Page Header */}
          <div className="max-w-2xl mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Work
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              A selection of full-stack and backend projects built with JavaScript, Java, React, Spring Boot, and modern data technologies.
            </p>
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-1">
            <CodeDivider label="Projects" />
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.name}
                className={`opacity-0 animate-fade-in-up stagger-${Math.min(index + 2, 4)}`}
              >
                <ProjectCard {...project} className="hover-lift" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
