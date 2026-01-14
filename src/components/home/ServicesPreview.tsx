import { Link } from "react-router-dom";
import { 
  Briefcase, 
  Users, 
  PiggyBank, 
  Settings, 
  TrendingUp, 
  Megaphone, 
  Monitor, 
  GraduationCap,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Briefcase,
    title: "Business Consulting",
    description: "Strategic roadmaps, business diagnosis, and CXO-as-a-Service",
  },
  {
    icon: Users,
    title: "HR & Workforce",
    description: "Compliance, payroll, hiring, and workforce development",
  },
  {
    icon: PiggyBank,
    title: "Financial Governance",
    description: "Bookkeeping, tax, cash-flow, and financial modeling",
  },
  {
    icon: Settings,
    title: "Operations",
    description: "SOPs, workflow optimization, and project management",
  },
  {
    icon: TrendingUp,
    title: "Sales Enablement",
    description: "Pipeline design, CRM implementation, and sales training",
  },
  {
    icon: Megaphone,
    title: "Marketing",
    description: "Brand strategy, digital marketing, and content creation",
  },
  {
    icon: Monitor,
    title: "IT & Technology",
    description: "ERP implementation, AI integration, and web development",
  },
  {
    icon: GraduationCap,
    title: "Training Academy",
    description: "Role-based training, certifications, and coaching",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            End-to-End Business Solutions
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            From strategy to execution, we provide comprehensive services to transform and scale your organisation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card p-6 rounded-xl border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <service.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/services">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold group">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
