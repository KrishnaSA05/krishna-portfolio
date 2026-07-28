import { useParams, Link } from "wouter";
import {
  ArrowLeft,
  Calendar,
  User,
  Target,
  Lightbulb,
  Zap,
  TrendingUp,
  Github,
  ExternalLink,
  Building,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLayoutEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/data/portfolio";
import { Navigation } from "@/components/navigation";

export default function ProjectDetail() {
  const params = useParams();
  const projectId = params.id;

  const project = portfolioData.projects.find((p) => p.id === projectId);

  useLayoutEffect(() => {
    // Run synchronously before paint to avoid showing the wrong scroll position
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background" id="top">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden neural-bg">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <Link href="/#projects">
            <Button
              variant="ghost"
              className="mb-8 group"
              data-testid="back-to-projects"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Button>
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
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
              <Badge variant="secondary">{project.category}</Badge>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 gradient-text"
              data-testid="project-title"
            >
              {project.title}
            </h1>

            <p
              className="text-xl text-muted-foreground mb-8 max-w-3xl"
              data-testid="project-description"
            >
              {project.description}
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-500" />
                <span className="text-muted-foreground">
                  Duration: <strong>{project.duration}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-purple-500" />
                <span className="text-muted-foreground">
                  Role: <strong>{project.role}</strong>
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.githubUrl && (
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  data-testid="github-button"
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View Source Code
                  </a>
                </Button>
              )}
              {project.demoUrl && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  data-testid="demo-button"
                >
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="px-4 sm:px-6 lg:px-8 -mt-8 mb-16">
        <div className="max-w-6xl mx-auto">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            data-testid="project-image"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              Overview
            </h2>
            <p
              className="text-lg text-muted-foreground leading-relaxed"
              data-testid="project-long-description"
            >
              {project.longDescription}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <Badge
                  key={index}
                  className="px-4 py-2 text-base bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border-blue-200/50 dark:border-blue-800/50 text-blue-700 dark:text-blue-300"
                  data-testid={`tech-${index}`}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Objectives */}
            <Card className="glass-card border-0" data-testid="objectives-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Target className="w-6 h-6 text-blue-500" />
                  Objectives
                </h3>
                <ul className="space-y-3">
                  {project.objectives?.map((objective, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3"
                      data-testid={`objective-${index}`}
                    >
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      </div>
                      <span className="text-muted-foreground">{objective}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Challenges */}
            <Card className="glass-card border-0" data-testid="challenges-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-yellow-500" />
                  Challenges
                </h3>
                <ul className="space-y-3">
                  {project.challenges?.map((challenge, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3"
                      data-testid={`challenge-${index}`}
                    >
                      <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Zap className="w-3 h-3 text-yellow-500" />
                      </div>
                      <span className="text-muted-foreground">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features?.map((feature, index) => (
                <Card
                  key={index}
                  className="glass-card border-0 card-hover"
                  data-testid={`feature-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-muted-foreground">{feature}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Results */}
          <Card
            className="glass-card border-0 bg-gradient-to-br from-green-50/50 to-emerald-50/30 dark:from-green-950/20 dark:to-emerald-950/10"
            data-testid="results-card"
          >
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                Results & Impact
              </h2>
              <ul className="space-y-4">
                {project.results?.map((result, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4"
                    data-testid={`result-${index}`}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-medium">{result}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Interested in learning more?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'd love to discuss this project in detail and explore how similar
              solutions could benefit your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Get In Touch
                </Button>
              </Link>
              <Link href="/#projects">
                <Button variant="outline" size="lg">
                  View More Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
