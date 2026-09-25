import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { TechTag } from "@/components/ui/TechTag";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectsData: Record<string, {
  name: string;
  description: string;
  fullDescription: string;
  stack: string[];
  impact: string;
  challenges: string[];
  features: string[];
}> = {
  manageit: {
    name: "ManageIT",
    description: "Resource management web app for resources, support tickets, and activity logs.",
    fullDescription: "Built a full-stack resource management web app for Argusoft India Ltd. using Java Spring Boot APIs and an Angular frontend. The application brings resource details, support tickets, and activity logs into one workflow.",
    stack: ["Java", "Spring Boot", "Angular", "PostgreSQL"],
    impact: "Integrated frontend and backend modules for seamless data exchange",
    challenges: [
      "Designing a PostgreSQL schema for resources, tickets, and system logs",
      "Connecting Angular workflows with Spring Boot APIs",
      "Supporting development, testing, debugging, and Git-based integration",
      "Collaborating effectively within an Agile team"
    ],
    features: [
      "Resource detail management",
      "Support ticket workflows",
      "Activity and system log tracking",
      "PostgreSQL-backed data exchange"
    ]
  },
  quickurl: {
    name: "QuickURL",
    description: "URL shortener with custom aliases, expiry settings, and usage analytics.",
    fullDescription: "Designed and built a URL shortening service with custom aliases and expiry controls. The project also includes a React analytics dashboard that surfaces click trends, geographic distribution, and device breakdown.",
    stack: ["Node.js", "Express.js", "React", "MongoDB"],
    impact: "60% redirect latency reduction under load",
    challenges: [
      "Creating predictable short links with custom aliases",
      "Handling expiry rules without disrupting valid redirects",
      "Presenting analytics clearly across multiple dimensions",
      "Reducing redirect latency under load"
    ],
    features: [
      "Custom URL aliases",
      "Link expiry controls",
      "Click trend analytics",
      "Geographic and device breakdowns"
    ]
  },
  "smart-expense-tracker": {
    name: "Smart Expense Tracker",
    description: "Cross-platform app for real-time income and expense tracking.",
    fullDescription: "Built a cross-platform expense tracker with React Native, Node.js, Express, and MongoDB. The app supports real-time income and expense tracking, category-wise summaries, cloud data sync, and interactive monthly insight charts.",
    stack: ["React Native", "Node.js", "Express.js", "MongoDB", "JWT"],
    impact: "40% improvement in tracking efficiency",
    challenges: [
      "Keeping income and expense data synchronized across platforms",
      "Securing the REST API with JWT authentication",
      "Turning transaction data into useful category summaries",
      "Designing monthly charts that support quick decisions"
    ],
    features: [
      "Real-time income and expense entry",
      "Category-wise summaries",
      "JWT-secured REST API",
      "Cloud sync and monthly insight charts"
    ]
  },
  "ai-resume-builder": {
    name: "AI-Powered Resume Builder & Skill Gap Analyzer",
    description: "AI-powered resume platform for parsing skills, detecting gaps, and generating ATS-optimized PDFs.",
    fullDescription: "Architected a full-stack web application with a React.js frontend and a Node.js/Express.js backend. Gemini API integrations power the resume workflow, from structured skill extraction to role-specific gap analysis and ATS-optimized resume generation.",
    stack: ["React.js", "Node.js", "Express.js", "JWT", "Gemini API", "Puppeteer"],
    impact: "AI-powered resume generation and skill-gap analysis pipeline",
    challenges: [
      "Designing a scalable React.js and Node.js/Express.js full-stack architecture",
      "Securing authentication with JWT token blacklisting for reliable logout and session invalidation",
      "Parsing uploaded resumes into structured skill data",
      "Comparing extracted skills against target roles to detect actionable gaps",
      "Rendering polished ATS-optimized PDF resumes dynamically with Puppeteer"
    ],
    features: [
      "Gemini API-powered resume workflow",
      "Resume parsing and structured skill extraction",
      "AI-based skill gap detection for target roles",
      "JWT authentication with token blacklisting",
      "Dynamic ATS-optimized PDF resume generation",
      "Production-style conventions for maintainability and scale"
    ]
  }
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground mb-4">Project Not Found</h1>
              <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
              <Button asChild>
                <Link to="/work">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Work
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20">
        <div className="container max-w-4xl">
          {/* Back Link */}
          <Link 
            to="/work" 
            className="inline-flex items-center font-mono text-sm text-muted-foreground hover:text-primary transition-colors mb-8 opacity-0 animate-fade-in-up"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Work
          </Link>

          {/* Project Header */}
          <div className="mb-12 opacity-0 animate-fade-in-up stagger-1">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {project.name}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {project.fullDescription}
            </p>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </div>

            {/* Impact */}
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <span className="font-mono text-sm text-primary">
                <span className="text-muted-foreground">{"//"}</span> Impact: {project.impact}
              </span>
            </div>
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-2">
            <CodeDivider label="Challenges" />
          </div>

          {/* Challenges */}
          <div className="mb-12 opacity-0 animate-fade-in-up stagger-3">
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="font-mono text-primary mt-1">→</span>
                  <span className="text-muted-foreground">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-3">
            <CodeDivider label="Features" />
          </div>

          {/* Features */}
          <div className="mb-12 opacity-0 animate-fade-in-up stagger-4">
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="font-mono text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </Layout>
  );
}
