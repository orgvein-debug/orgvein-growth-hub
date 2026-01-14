import { Link } from "react-router-dom";
import { 
  Rocket, 
  Building2, 
  Factory, 
  ShoppingCart, 
  Home, 
  GraduationCap, 
  Heart, 
  Briefcase,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  { icon: Rocket, name: "Startups" },
  { icon: Building2, name: "SMEs" },
  { icon: Factory, name: "Manufacturing" },
  { icon: ShoppingCart, name: "Retail & E-commerce" },
  { icon: Home, name: "Real Estate" },
  { icon: GraduationCap, name: "Education" },
  { icon: Heart, name: "Healthcare" },
  { icon: Briefcase, name: "Service Businesses" },
];

const IndustriesPreview = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-4">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Expertise Across <span className="text-accent">Sectors</span>
          </h2>
          <p className="max-w-2xl mx-auto text-primary-foreground/80 text-lg">
            From early-stage startups to established enterprises, we understand the unique challenges of each industry.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              className="group bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 text-center hover:bg-primary-foreground/10 hover:border-accent/50 transition-all duration-300 hover-lift"
            >
              <div className="w-16 h-16 mx-auto bg-accent/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors duration-300">
                <industry.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-primary-foreground group-hover:text-accent transition-colors duration-300">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/industries">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold group">
              Explore Industries
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustriesPreview;
