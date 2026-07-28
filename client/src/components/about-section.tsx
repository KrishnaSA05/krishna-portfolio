import { portfolioData } from "@/data/portfolio";

export function AboutSection() {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="about-title">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="animate-slide-up">
          <div className="prose prose-lg mx-auto text-center max-w-none">
            {about.split('\n\n').map((paragraph, index) => (
              <p
                key={index}
                className="text-lg leading-relaxed mb-6"
                data-testid={`about-paragraph-${index}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
