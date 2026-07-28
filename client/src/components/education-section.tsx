import { GraduationCap, Award, Brain, BarChart, Zap, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";

export function EducationSection() {
  const { education, certifications } = portfolioData;

  const certificationIcons = {
    brain: Brain,
    "bar-chart": BarChart,
    zap: Zap,
    code: Code,
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="education-title">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6 flex items-center" data-testid="education-section-title">
              <GraduationCap className="w-6 h-6 text-primary mr-3" />
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu) => (
                <Card key={edu.id} data-testid={`education-${edu.id}`}>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2" data-testid={`edu-degree-${edu.id}`}>
                      {edu.degree}
                    </h4>
                    <p className="text-primary font-medium mb-1" data-testid={`edu-institution-${edu.id}`}>
                      {edu.institution}
                    </p>
                    <p className="text-muted-foreground text-sm mb-2" data-testid={`edu-period-${edu.id}`}>
                      {edu.period}
                      {edu.gpa && ` | GPA: ${edu.gpa}`}
                    </p>
                    {edu.note && (
                      <p className="text-sm" data-testid={`edu-note-${edu.id}`}>
                        {edu.note}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6 flex items-center" data-testid="certifications-section-title">
              <Award className="w-6 h-6 text-primary mr-3" />
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert) => {
                const IconComponent = certificationIcons[cert.icon as keyof typeof certificationIcons];
                
                return (
                  <Card key={cert.id} data-testid={`certification-${cert.id}`}>
                    <CardContent className="p-4 flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold" data-testid={`cert-title-${cert.id}`}>
                          {cert.title}
                        </h4>
                        <p className="text-muted-foreground text-sm" data-testid={`cert-issuer-${cert.id}`}>
                          {cert.issuer}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
