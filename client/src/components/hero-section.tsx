import { Button } from "@/components/ui/button";
import {
  //Download,
  Mail,
  Github,
  Linkedin,
  Brain,
  Cpu,
  Zap,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function HeroSection() {
  const { personal } = portfolioData;
  /*
  const handleDownloadResume = () => {
    // The path to your resume file in the public folder (served at the site root)
    // Make sure the PDF file is copied to `client/public` with this filename.
    const resumeUrl = "../../public/CV_Krishna_Ambekar.pdf";

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = resumeUrl;

    // Set the download attribute with a desired filename
    link.setAttribute("download", "CV_Krishna_Ambekar.pdf");

    // Append the link to the body
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Some browsers may ignore the download attribute for certain mime-types or cross-origin.
    // As a fallback, open the file in a new tab if the download didn't start.
    setTimeout(() => {
      // If the document is still visible and filename not downloaded, open in new tab
      // This is a best-effort fallback and will open the PDF in the browser.
      window.open(resumeUrl, "_blank", "noopener");
    }, 500);

    // Clean up and remove the link
    document.body.removeChild(link);

    console.log("Downloading resume...");
  };
  */
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden neural-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center animate-fade-in">
          {/* Profile Image with AI-themed effects */}
          <div className="relative mb-8 inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-lg opacity-75 animate-pulse-slow"></div>
            <img
              src={personal.profileImage}
              alt={`${personal.name} - AI Engineer`}
              className="relative w-40 h-40 rounded-full shadow-2xl border-4 border-white/30 backdrop-blur-sm"
              data-testid="profile-image"
            />

            {/* Floating AI icons */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center animate-float">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <div
              className="absolute -bottom-2 -left-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center animate-float"
              style={{ animationDelay: "1s" }}
            >
              <Cpu className="w-4 h-4 text-white" />
            </div>
            <div
              className="absolute top-1/2 -right-6 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center animate-float"
              style={{ animationDelay: "2s" }}
            >
              <Zap className="w-3 h-3 text-white" />
            </div>
          </div>

          {/* Main heading with enhanced gradient */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block mb-2">Hello, I'm</span>
            <span className="gradient-text block" data-testid="hero-name">
              {personal.name}
            </span>
          </h1>

          {/* Dynamic title with typing effect */}
          <div className="relative mb-8">
            <p
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent"
              data-testid="hero-title"
            >
              AI/ML Engineer & Data Scientist
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Building the future with{" "}
              <span className="text-blue-500 font-semibold">Generative AI</span>
              ,
              <span className="text-purple-500 font-semibold">
                {" "}
                Machine Learning
              </span>
              ,
              <span className="text-cyan-500 font-semibold">
                {" "}
                Computer Vision
              </span>
              , and
              <span className="text-green-500 font-semibold">
                {" "}
                Large Language Models
              </span>
            </p>
          </div>

          <p
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto flex items-center justify-center"
            data-testid="hero-location"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            {personal.location}
          </p>

          {/* CTA Buttons with enhanced styling */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {/*
            <Button
              onClick={handleDownloadResume}
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              data-testid="download-resume-btn"
            >
              <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
              Download Resume
            </Button>
              */}
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="group glass-card border-2 border-white/30 text-foreground px-8 py-4 text-lg font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
              data-testid="contact-me-btn"
            >
              <Mail className="w-5 h-5 mr-3 group-hover:animate-pulse" />
              Let's Collaborate
            </Button>
          </div>

          {/* Social Links with enhanced design */}
          <div className="flex justify-center space-x-6">
            <Button
              variant="ghost"
              size="lg"
              asChild
              className="group w-14 h-14 rounded-full glass-card hover:bg-blue-500/20 transition-all duration-300"
              data-testid="linkedin-link"
            >
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
              </a>
            </Button>

            <Button
              variant="ghost"
              size="lg"
              asChild
              className="group w-14 h-14 rounded-full glass-card hover:bg-gray-500/20 transition-all duration-300"
              data-testid="github-link"
            >
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
              </a>
            </Button>

            <Button
              variant="ghost"
              size="lg"
              asChild
              className="group w-14 h-14 rounded-full glass-card hover:bg-red-500/20 transition-all duration-300"
              data-testid="email-link"
            >
              <a href={`mailto:${personal.email}`}>
                <Mail className="w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
