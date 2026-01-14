import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, ArrowRight } from "lucide-react";

const packages = [
  {
    name: "Foundation Flow",
    subtitle: "SME Package",
    description: "Perfect for small and medium enterprises establishing strong operational foundations.",
    popular: false,
    features: [
      "Business Process Assessment",
      "Basic HR Policy Framework",
      "Accounting System Setup",
      "SOP Development",
      "Basic CRM Implementation",
      "Team Training (8 Hours)",
    ],
  },
  {
    name: "Growth Engine",
    subtitle: "Mid-Market Package",
    description: "Comprehensive solution for growing businesses ready to scale.",
    popular: true,
    features: [
      "Strategic Business Consulting",
      "Complete HR Solutions",
      "Financial Systems & MIS",
      "Operations Optimization",
      "Sales Process & CRM",
      "ERP Lite Implementation",
      "Training & Development",
      "Quarterly Reviews",
    ],
  },
  {
    name: "Enterprise Transformation",
    subtitle: "Enterprise Package",
    description: "Full-scale transformation for organisations seeking end-to-end change.",
    popular: false,
    features: [
      "CXO Advisory Services",
      "Complete Workforce Solutions",
      "Advanced Finance & Compliance",
      "End-to-End Operations Setup",
      "Sales & Marketing Enablement",
      "Full Odoo ERP Implementation",
      "AI & Automation Solutions",
      "Leadership Development",
      "Dedicated Success Manager",
      "Monthly Strategic Reviews",
    ],
  },
];

const Packages = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6 animate-fade-up">
              Our Packages
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.1s" }}>
              Choose Your <span className="text-accent">Growth Path</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
              Tailored packages designed for different stages of organisational growth.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`relative bg-card rounded-3xl border-2 p-8 transition-all duration-300 hover:shadow-2xl ${
                  pkg.popular
                    ? "border-accent shadow-lg scale-105"
                    : "border-border hover:border-accent/50"
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1.5 px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-semibold shadow-lg">
                      <Star className="h-4 w-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-8 pt-4">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{pkg.name}</h3>
                  <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-4">
                    {pkg.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm">{pkg.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link to="/contact" className="block">
                  <Button
                    className={`w-full font-semibold group ${
                      pkg.popular
                        ? "bg-accent text-accent-foreground hover:bg-accent/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    Request Proposal
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every organisation is unique. We can create a tailored package that addresses your specific challenges and goals.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold group">
              Discuss Custom Package
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Packages;
