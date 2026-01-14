import { CheckCircle, Target, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Strategic Focus",
    description: "We align every initiative with your business goals for measurable outcomes.",
  },
  {
    icon: Shield,
    title: "Trusted Partner",
    description: "India's most trusted growth partner for startups to enterprises.",
  },
  {
    icon: Zap,
    title: "Rapid Execution",
    description: "From diagnosis to implementation, we move fast without compromising quality.",
  },
  {
    icon: CheckCircle,
    title: "Proven Results",
    description: "Our structured approach delivers sustainable, scalable growth.",
  },
];

const WhyOrgvein = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Building{" "}
              <span className="text-accent">Tomorrow's</span>{" "}
              Organisations Today
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Orgvein is a business transformation and organisational enablement company. We integrate consulting, workforce solutions, financial governance, operations, and ERP systems to enable sustainable, scalable growth.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 lg:p-12">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <p className="text-5xl lg:text-6xl font-bold text-accent mb-2">8+</p>
                  <p className="text-primary-foreground/80 text-sm">Service Verticals</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl lg:text-6xl font-bold text-accent mb-2">50+</p>
                  <p className="text-primary-foreground/80 text-sm">Expert Solutions</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl lg:text-6xl font-bold text-accent mb-2">8</p>
                  <p className="text-primary-foreground/80 text-sm">Industries Served</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl lg:text-6xl font-bold text-accent mb-2">100%</p>
                  <p className="text-primary-foreground/80 text-sm">Commitment</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/30 rounded-full blur-2xl" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-xl">
              <p className="text-accent font-bold text-lg">Vision</p>
              <p className="text-muted-foreground text-sm">India's most trusted growth partner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOrgvein;
