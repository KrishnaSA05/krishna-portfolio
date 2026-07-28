import { CheckCircle, Building, Calendar, MapPin, Briefcase, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/data/portfolio";

export function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/20"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text" data-testid="experience-title">
            Professional Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building innovative AI solutions across enterprise environments
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="relative">
          {/* Enhanced Timeline line with gradient */}
          <div className="absolute left-12 top-0 bottom-0 w-1 timeline-line rounded-full shadow-lg"></div>

          {/* Timeline dots */}
          <div className="absolute left-8 top-8">
            {experience.map((exp, index) => (
              <div 
                key={`dot-${exp.id}`}
                className="absolute"
                style={{ top: `${index * 320}px` }}
              >
                <div className={`w-8 h-8 rounded-full border-4 border-background shadow-lg flex items-center justify-center ${
                  exp.current 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse-slow' 
                    : 'bg-gradient-to-r from-gray-400 to-gray-500'
                }`}>
                  {exp.current ? (
                    <Rocket className="w-4 h-4 text-white" />
                  ) : (
                    <Briefcase className="w-4 h-4 text-white" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Experience Items */}
          <div className="space-y-16 ml-24">
            {experience.map((exp, index) => (
              <div key={exp.id} className="relative animate-slide-in-left" style={{ animationDelay: `${index * 200}ms` }}>
                <Card className="glass-card card-hover border-0 overflow-hidden" data-testid={`experience-${exp.id}`}>
                  <CardContent className="p-8">
                    {/* Header section */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold" data-testid={`exp-title-${exp.id}`}>
                            {exp.title}
                          </h3>
                          {exp.current && (
                            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 animate-pulse" data-testid={`exp-current-${exp.id}`}>
                              <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                              Current Role
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold mb-2" data-testid={`exp-company-${exp.id}`}>
                          <Building className="w-4 h-4 mr-2" />
                          {exp.company}
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center" data-testid={`exp-period-${exp.id}`}>
                            <Calendar className="w-4 h-4 mr-2" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Achievements section */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-muted-foreground mb-4 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                        Key Achievements
                      </h4>
                      
                      <div className="grid gap-4">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <div 
                            key={achievementIndex}
                            className="group flex items-start space-x-3 p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-purple-50/30 dark:from-blue-950/20 dark:to-purple-950/10 border border-blue-100/50 dark:border-blue-800/30 hover:from-blue-100/70 hover:to-purple-100/50 transition-all duration-300"
                            data-testid={`exp-achievement-${exp.id}-${achievementIndex}`}
                          >
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200">
                              <CheckCircle className="w-3 h-3 text-white" />
                            </div>
                            <p className="text-sm leading-relaxed font-medium group-hover:text-foreground transition-colors duration-200">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Experience duration indicator */}
                    <div className="mt-6 pt-4 border-t border-border/50">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-2"></div>
                          Experience Level: {index === 0 ? 'Senior' : index === 1 ? 'Mid-Level' : 'Entry-Level'}
                        </span>
                        <span>
                          {exp.achievements.length} Major Achievements
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Experience summary */}
        <div className="mt-20 text-center animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-3xl font-bold gradient-text mb-2">2+</div>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold gradient-text mb-2">10+</div>
              <p className="text-muted-foreground">AI Projects Delivered</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold gradient-text mb-2">95%</div>
              <p className="text-muted-foreground">Efficiency Improvement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
