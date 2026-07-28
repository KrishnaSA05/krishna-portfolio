import {
  Github,
  ExternalLink,
  Building,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/data/portfolio";
import { Link } from "wouter";

export function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-950/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-slide-up">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-6 gradient-text"
            data-testid="projects-title"
          >
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative AI solutions that push the boundaries of technology
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={`/project/${project.id}`}
              onClick={() => {
                // ensure immediate top position before navigation
                window.scrollTo(0, 0);
              }}
            >
              <Card
                className="group relative overflow-hidden project-card border-0 card-hover animate-slide-up cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`project-${project.id}`}
              >
                {/* Project image with overlay */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    data-testid={`project-image-${project.id}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Project type indicator */}
                  <div className="absolute top-4 right-4">
                    {project.type === "work" ? (
                      <Badge className="bg-blue-500/90 text-white border-0">
                        <Building className="w-3 h-3 mr-1" />
                        Enterprise
                      </Badge>
                    ) : (
                      <Badge className="bg-green-500/90 text-white border-0">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Personal
                      </Badge>
                    )}
                  </div>

                  {/* Hover overlay with view details */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center">
                      <Button
                        size="lg"
                        className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
                      >
                        <ArrowUpRight className="w-5 h-5 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3
                      className="text-2xl font-bold group-hover:gradient-text transition-all duration-300"
                      data-testid={`project-title-${project.id}`}
                    >
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300 opacity-0 group-hover:opacity-100" />
                  </div>

                  <p
                    className="text-muted-foreground mb-6 leading-relaxed"
                    data-testid={`project-description-${project.id}`}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border-blue-200/50 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 hover:from-blue-100 hover:to-purple-100 transition-colors duration-200"
                        data-testid={`project-tech-${project.id}-${techIndex}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {project.type === "work" && (
                    <div className="flex items-center text-sm text-muted-foreground bg-blue-50/50 dark:bg-blue-950/20 rounded-lg p-3 border border-blue-200/30">
                      <Building className="w-4 h-4 mr-2 text-blue-500" />
                      <span
                        data-testid={`project-work-indicator-${project.id}`}
                      >
                        Professional / Enterprise Project
                      </span>
                    </div>
                  )}

                  {project.type === "personal" && (
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        {project.githubUrl && (
                          <span
                            className="flex items-center"
                            data-testid={`project-github-${project.id}`}
                          >
                            <Github className="w-4 h-4 mr-1" />
                            GitHub
                          </span>
                        )}
                        {project.githubUrl && project.demoUrl && <span>•</span>}
                        {project.demoUrl && (
                          <span
                            className="flex items-center"
                            data-testid={`project-demo-${project.id}`}
                          >
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Live Demo
                          </span>
                        )}
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-slide-up">
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more projects or collaborate on something amazing?
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <ArrowUpRight className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
