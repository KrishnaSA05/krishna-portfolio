import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";
import { portfolioData } from "@/data/portfolio";
import Chatbot from "@/components/portfolioChatbot";

export default function Home() {
  const { personal } = portfolioData;

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Chatbot />

      {/* Footer */}
      <footer
        className="bg-muted/50 border-t border-border py-8 px-4 sm:px-6 lg:px-8"
        data-testid="footer"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">
                  KA
                </span>
              </div>
              <span className="font-medium">{personal.name}</span>
            </div>

            <div className="flex items-center space-x-6">
              <p
                className="text-muted-foreground text-sm"
                data-testid="footer-copyright"
              >
                © 2026 {personal.name}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
