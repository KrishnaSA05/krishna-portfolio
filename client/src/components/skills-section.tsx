import { Brain, Code, Layers, Cloud, Star, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { portfolioData } from "@/data/portfolio";
import { useState, useEffect } from "react";

export function SkillsSection() {
  const { skills } = portfolioData;
  const [visibleBars, setVisibleBars] = useState<{ [key: string]: boolean }>(
    {}
  );

  const skillIcons = {
    "AI/ML Technologies": Brain,
    Programming: Code,
    Frameworks: Layers,
    "Tools & Cloud": Cloud,
    Languages: Globe,
  };

  const skillLevels = {
    "AI/ML Technologies": [95, 90, 88, 85, 92, 87, 85, 90],
    Programming: [95, 90],
    Frameworks: [92, 88, 85, 82, 80, 75, 70, 88],
    "Tools & Cloud": [90, 85, 88, 85, 82, 80, 85, 78],
    Languages: [95, 75],
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      Object.keys(skills).forEach((category, index) => {
        setTimeout(() => {
          setVisibleBars((prev) => ({ ...prev, [category]: true }));
        }, index * 300);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [skills]);

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-cyan-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-cyan-950/20"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-slide-up">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-6 gradient-text"
            data-testid="skills-title"
          >
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technologies powering the next generation of AI
            solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {Object.entries(skills).map(
            ([category, skillList], categoryIndex) => {
              const IconComponent =
                skillIcons[category as keyof typeof skillIcons] || Star;
              const levels =
                skillLevels[category as keyof typeof skillLevels] || [];

              return (
                <Card
                  key={category}
                  className="glass-card card-hover animate-slide-up border-0 overflow-hidden"
                  style={{ animationDelay: `${categoryIndex * 100}ms` }}
                  data-testid={`skills-category-${category
                    .toLowerCase()
                    .replace(/[^a-z0-9]/g, "-")}`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mr-4 shadow-lg">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3
                          className="text-2xl font-bold mb-1"
                          data-testid={`skills-category-title-${category
                            .toLowerCase()
                            .replace(/[^a-z0-9]/g, "-")}`}
                        >
                          {category}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {skillList.length} Technologies
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {skillList.map((skill, index) => {
                        const level = levels[index] || 75;
                        return (
                          <div key={index} className="group">
                            <div className="flex justify-between items-center mb-2">
                              <span
                                className="font-medium text-sm group-hover:text-primary transition-colors"
                                data-testid={`skill-${category
                                  .toLowerCase()
                                  .replace(/[^a-z0-9]/g, "-")}-${index}`}
                              >
                                {skill}
                              </span>
                              <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, starIndex) => (
                                  <Star
                                    key={starIndex}
                                    className={`w-3 h-3 ${
                                      starIndex < Math.round(level / 20)
                                        ? "text-yellow-400 fill-current"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                                <span className="text-xs text-muted-foreground ml-2">
                                  {level}%
                                </span>
                              </div>
                            </div>
                            <div className="relative">
                              <Progress
                                value={visibleBars[category] ? level : 0}
                                className="h-2 skill-bar"
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              );
            }
          )}
        </div>

        {/* Skill highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-200/20">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold mb-2">AI & Machine Learning</h4>
            <p className="text-sm text-muted-foreground">
              Expert in LLMs, Computer Vision, and Deep Learning architectures
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-200/20">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold mb-2">
              AgenticAI Workflows Development
            </h4>
            <p className="text-sm text-muted-foreground">
              Proficient in Developing Multiagent AI Systems
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-200/20">
            <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cloud className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold mb-2">Cloud & MLOps</h4>
            <p className="text-sm text-muted-foreground">
              Experienced with Azure Cloud services and scalable AI deployment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
