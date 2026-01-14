import Layout from "@/components/layout/Layout";
import { Target, Eye, Users, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Clarity",
    description: "We bring crystal-clear understanding to complex business challenges.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "We see beyond the immediate to build sustainable futures.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work alongside you, not just for you.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards in everything we do.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6 animate-fade-up">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.1s" }}>
              Building <span className="text-accent">India's Most Trusted</span> Growth Partner
            </h1>
            <p className="text-xl text-primary-foreground/80 animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
              Orgvein is a business transformation and organisational enablement company.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Enabling Structured, Scalable Growth
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  Orgvein is a business transformation and organisational enablement company. We integrate consulting, workforce solutions, financial governance, operations, and ERP systems to enable sustainable, scalable growth.
                </p>
                <p>
                  Our approach is rooted in bringing clarity to complex challenges, structure to chaotic processes, and seamless flow across all organisational functions.
                </p>
                <p>
                  We partner with startups, SMEs, mid-market companies, and enterprises across India, helping them build organisations that are ready for tomorrow's challenges.
                </p>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-muted to-muted/50 rounded-3xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <p className="text-4xl font-bold text-accent">8+</p>
                    <p className="text-muted-foreground text-sm">Service Verticals</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-4xl font-bold text-accent">50+</p>
                    <p className="text-muted-foreground text-sm">Expert Solutions</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-4xl font-bold text-accent">8</p>
                    <p className="text-muted-foreground text-sm">Industries</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-4xl font-bold text-accent">Pan</p>
                    <p className="text-muted-foreground text-sm">India Presence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-card rounded-3xl p-8 lg:p-12 border border-border hover:border-accent/50 transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-lg">
                To become <span className="text-accent font-semibold">India's most trusted growth partner</span> for organisations seeking structured, sustainable transformation.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-card rounded-3xl p-8 lg:p-12 border border-border hover:border-accent/50 transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-lg">
                Enable structured, technology-driven organisations with <span className="text-accent font-semibold">clear accountability and flow</span> across all functions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Drives Us
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              Our core values shape every interaction, every solution, and every partnership.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group bg-card p-8 rounded-xl border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 hover-lift text-center"
              >
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <p className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-accent">
            Clarity. Structure. Flow.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
