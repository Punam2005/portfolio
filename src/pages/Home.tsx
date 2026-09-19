import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { CodeLabel } from "@/components/ui/CodeLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { TypingCursor } from "@/components/ui/TypingCursor";
import { ArrowRight } from "lucide-react";

const featuredProjects = [
  {
    name: "ManageIT",
    slug: "manageit",
    description: "Full-stack resource management web app for resources, support tickets, and activity logs.",
    stack: ["Java", "Spring Boot", "Angular", "PostgreSQL"],
    impact: "Integrated resource, ticket, and activity workflows",
  },
  {
    name: "QuickURL",
    slug: "quickurl",
    description: "URL shortening service with custom aliases, expiry controls, and an analytics dashboard.",
    stack: ["Node.js", "Express.js", "React", "MongoDB"],
    impact: "60% redirect latency reduction under load",
  },
  {
    name: "Smart Expense Tracker",
    slug: "smart-expense-tracker",
    description: "Cross-platform app for real-time income and expense tracking with monthly insight charts.",
    stack: ["React Native", "Node.js", "Express.js", "MongoDB"],
    impact: "40% improvement in tracking efficiency",
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-grid">
        <div className="container">
          <div className="max-w-3xl opacity-0 animate-fade-in-up">
            {/* Code-style label */}
            <CodeLabel className="mb-6">Backend Developer · CSE Student</CodeLabel>

            {/* Headline with typing cursor */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Hi, I'm Punam Agrawal.
              <br />
              <span className="text-muted-foreground">I build, break & improve software</span>
              <TypingCursor />
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed opacity-0 animate-fade-in-up stagger-1">
              Computer Science &amp; Engineering student at Silicon Institute of Technology with backend internship experience and a focus on full-stack applications, APIs, and problem solving.
            </p>
            <p className="text-base text-foreground mb-8 max-w-xl leading-relaxed opacity-0 animate-fade-in-up stagger-1">
              Currently exploring: Backend development, APIs, system design &amp; SAP ABAP.
            </p>

            {/* CTA */}
            <div className="opacity-0 animate-fade-in-up stagger-2">
              <Button asChild size="lg" className="font-mono transition-transform hover:scale-105">
                <Link to="/work">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container">
          <div className="opacity-0 animate-fade-in-up">
            <CodeDivider label="Featured Work" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.name} 
                className={`opacity-0 animate-fade-in-up stagger-${index + 1}`}
              >
                <ProjectCard {...project} className="hover-lift" />
              </div>
            ))}
          </div>

          {/* View All Link */}
          <div className="mt-12 text-center opacity-0 animate-fade-in-up stagger-4">
            <Link 
              to="/work" 
              className="inline-flex items-center font-mono text-sm text-muted-foreground hover:text-primary transition-colors link-underline"
            >
              <span className="text-primary mr-2">{"//"}</span>
              View all projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
