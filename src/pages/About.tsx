import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { TechTag } from "@/components/ui/TechTag";
import profilePhoto from "@/assets/punam-linkedin.jpg.asset.json";

const skills = [
  "Backend Development",
  "Full-Stack Development",
  "RESTful API Design",
  "Data Structures & Algorithms",
  "Database Design",
  "Agile Collaboration",
];

const stack = [
  "Java",
  "Python",
  "JavaScript",
  "C",
  "Spring Boot",
  "TypeScript",
  "React",
  "React Native",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Redis",
  "Socket.io",
  "JWT",
];

const certifications = [
  "Data Structures & Algorithms in Java — Physics Wallah",
  "Programming in Java — NPTEL",
  "SAP ABAP Certification",
  "SAP IBP Certification",
];

export default function About() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          {/* Page Header */}
          <div className="max-w-3xl mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About
            </h1>
          </div>

          <div className="grid gap-16 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex flex-col md:flex-row gap-6 items-start opacity-0 animate-fade-in-up stagger-1">
                <div className="shrink-0">
                  <img
                    src={profilePhoto.url}
                    alt="Punam Agrawal"
                    className="w-40 h-48 md:w-48 md:h-56 object-cover rounded-2xl border border-border shadow-sm"
                  />
                </div>
                <div className="space-y-6">
                  <p className="text-lg text-foreground leading-relaxed">
                    I'm <span className="text-primary font-medium">Punam Agrawal</span>, a Computer Science &amp; Engineering student at Silicon Institute of Technology. I enjoy building reliable backend services and full-stack applications that solve practical problems.
                  </p>
                </div>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-2">
                <p className="text-muted-foreground leading-relaxed">
                  With years of experience in the industry, I've worked on everything from 
                  My experience includes developing RESTful APIs, implementing JWT authentication, designing MongoDB schemas, and collaborating with frontend teams to deliver useful features for real users.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-3">
                <p className="text-muted-foreground leading-relaxed">
                  I care about clear code, thoughtful database design, and continuous learning across backend engineering, frontend development, and core computer science.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-4">
                <CodeDivider label="Philosophy" />
              </div>

              <div className="space-y-4 font-mono text-sm opacity-0 animate-fade-in-up stagger-4">
                <p className="text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-primary">{"//"}</span> Learn by building practical solutions
                </p>
                <p className="text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-primary">{"//"}</span> Keep systems clear and maintainable
                </p>
                <p className="text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-primary">{"//"}</span> Collaborate across the full stack
                </p>
                <p className="text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-primary">{"//"}</span> Keep improving through fundamentals
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Skills */}
              <div className="opacity-0 animate-fade-in-up stagger-2">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Skills <span className="text-muted-foreground">*/</span>
                </h2>
                <ul className="space-y-2">
                  {skills.map((skill) => (
                    <li key={skill} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      <span className="text-primary mr-2">→</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="opacity-0 animate-fade-in-up stagger-3">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Stack <span className="text-muted-foreground">*/</span>
                </h2>
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="opacity-0 animate-fade-in-up stagger-4">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Experience <span className="text-muted-foreground">*/</span>
                </h2>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p className="text-foreground">Software Development Intern — Backend</p>
                  <p>Technocrat Software · Sambalpur</p>
                  <p>August 2025 — November 2025</p>
                  <p>REST APIs, JWT authentication, MongoDB, and frontend collaboration</p>
                </div>
              </div>

              {/* Education */}
              <div className="opacity-0 animate-fade-in-up stagger-4">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Education <span className="text-muted-foreground">*/</span>
                </h2>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p className="text-foreground">B.Tech in Computer Science &amp; Engineering</p>
                  <p>Silicon Institute of Technology · CGPA 8.7</p>
                  <p>October 2022 — May 2026</p>
                </div>
              </div>

              {/* Certifications */}
              <div className="opacity-0 animate-fade-in-up stagger-4">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Certifications <span className="text-muted-foreground">*/</span>
                </h2>
                <div className="space-y-3 text-sm text-muted-foreground">
                  {certifications.map((certification) => (
                    <p key={certification}>{certification}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
