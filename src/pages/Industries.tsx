import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Rocket, 
  Building2, 
  Factory, 
  ShoppingCart, 
  Home, 
  GraduationCap, 
  Heart, 
  Briefcase,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const industries = [
  {
    icon: Rocket,
    name: "Startups",
    description: "Early-stage companies building for scale",
    challenges: [
      "Structuring for growth",
      "Fundraising readiness",
      "Building core teams",
      "Process establishment",
    ],
    solutions: [
      "Business strategy & roadmaps",
      "Founder advisory",
      "Initial HR framework",
      "Technology foundation",
    ],
  },
  {
    icon: Building2,
    name: "SMEs",
    description: "Small and medium enterprises seeking structure",
    challenges: [
      "Operational inefficiencies",
      "Talent management",
      "Financial controls",
      "Scaling challenges",
    ],
    solutions: [
      "SOP development",
      "HR systems setup",
      "Financial governance",
      "ERP implementation",
    ],
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Production and industrial businesses",
    challenges: [
      "Production optimization",
      "Supply chain management",
      "Quality control",
      "Workforce management",
    ],
    solutions: [
      "Operations consulting",
      "Inventory systems",
      "Process automation",
      "Compliance management",
    ],
  },
  {
    icon: ShoppingCart,
    name: "Retail & E-commerce",
    description: "Physical and online retail businesses",
    challenges: [
      "Omnichannel presence",
      "Inventory management",
      "Customer experience",
      "Digital marketing",
    ],
    solutions: [
      "E-commerce strategy",
      "POS & ERP integration",
      "Digital marketing",
      "CRM implementation",
    ],
  },
  {
    icon: Home,
    name: "Real Estate",
    description: "Property development and management",
    challenges: [
      "Project management",
      "Sales pipeline",
      "Compliance & legal",
      "Customer relations",
    ],
    solutions: [
      "Project tracking systems",
      "Sales enablement",
      "Document management",
      "Lead management",
    ],
  },
  {
    icon: GraduationCap,
    name: "Education",
    description: "Schools, colleges, and ed-tech companies",
    challenges: [
      "Student management",
      "Faculty development",
      "Digital transformation",
      "Enrollment growth",
    ],
    solutions: [
      "ERP for education",
      "Training programs",
      "Marketing strategy",
      "Process automation",
    ],
  },
  {
    icon: Heart,
    name: "Healthcare",
    description: "Hospitals, clinics, and health-tech",
    challenges: [
      "Patient management",
      "Compliance & accreditation",
      "Staff management",
      "Operational efficiency",
    ],
    solutions: [
      "Hospital management systems",
      "HR & payroll",
      "Process optimization",
      "Quality frameworks",
    ],
  },
  {
    icon: Briefcase,
    name: "Service Businesses",
    description: "Professional and business services",
    challenges: [
      "Client management",
      "Project delivery",
      "Team productivity",
      "Business development",
    ],
    solutions: [
      "CRM systems",
      "Project management",
      "Performance systems",
      "Sales enablement",
    ],
  },
];

const Industries = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6 animate-fade-up">
              Industries We Serve
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.1s" }}>
              Expertise Across <span className="text-accent">Sectors</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
              From early-stage startups to established enterprises, we understand the unique challenges and opportunities in each industry.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="group bg-card rounded-2xl border border-border p-8 hover:border-accent/50 hover:shadow-xl transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <industry.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                      {industry.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">{industry.description}</p>
                  </div>
                </div>

                {/* Challenges & Solutions */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                      Challenges
                    </h4>
                    <ul className="space-y-2">
                      {industry.challenges.map((challenge) => (
                        <li key={challenge} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-1.5 flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-accent mb-3 uppercase tracking-wide">
                      Our Solutions
                    </h4>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution) => (
                        <li key={solution} className="text-muted-foreground text-sm flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Don't See Your Industry?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our frameworks are adaptable. Let's discuss how we can help your specific industry.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold group">
              Let's Talk
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
