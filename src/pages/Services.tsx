import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  Users, 
  PiggyBank, 
  Settings, 
  TrendingUp, 
  Megaphone, 
  Monitor, 
  GraduationCap,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const services = [
  {
    id: "consulting",
    icon: Briefcase,
    title: "Consulting Services",
    description: "Strategic business transformation and advisory services",
    features: [
      "Business diagnosis & strategic roadmaps",
      "Market entry & expansion strategy",
      "Fundraising readiness",
      "Franchise & scaling strategy",
      "Org structure design",
      "JD & KRA engineering",
      "Governance frameworks",
      "Virtual CXO-as-a-Service",
    ],
  },
  {
    id: "hr",
    icon: Users,
    title: "HR & Workforce Solutions",
    description: "Complete human capital management",
    features: [
      "Statutory compliance",
      "Payroll & compensation",
      "HR policies",
      "Grievance systems",
      "RPO hiring",
      "Structured onboarding (30-60-90)",
      "Performance Management Systems",
      "Workforce capability development",
      "Culture & retention programs",
    ],
  },
  {
    id: "finance",
    icon: PiggyBank,
    title: "Accounts & Financial Governance",
    description: "Financial clarity and control",
    features: [
      "Bookkeeping",
      "GST & tax coordination",
      "Cash-flow management",
      "Vendor payment systems",
      "Costing & profitability analysis",
      "Financial modeling",
      "MIS & BI dashboards",
      "Audit readiness",
      "Business valuation",
    ],
  },
  {
    id: "operations",
    icon: Settings,
    title: "Operations Management",
    description: "Streamlined processes and workflows",
    features: [
      "SOP creation",
      "Workflow optimisation",
      "Risk & contingency planning",
      "Project management",
      "Internal task orchestration",
      "Daily ops frameworks",
      "Manufacturing & logistics",
      "Procurement",
      "Inventory & asset management",
    ],
  },
  {
    id: "sales",
    icon: TrendingUp,
    title: "Sales Systems & Enablement",
    description: "Revenue growth and pipeline optimization",
    features: [
      "Sales pipeline design",
      "Lead management (MQL/SQL)",
      "Channel partner systems",
      "Outsourced lead generation",
      "Pre-sales support",
      "Pitch & proposal assets",
      "Sales training",
      "Call monitoring",
      "Conversion optimisation",
      "CRM (Odoo / Zoho / HubSpot)",
      "Sales dashboards",
    ],
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Marketing Services",
    description: "Digital and offline marketing excellence",
    features: [
      "Brand strategy",
      "UI/UX & creative design",
      "Video production",
      "Content marketing",
      "Social media management",
      "Performance marketing",
      "SEO/SEM",
      "Events",
      "Outdoor advertising",
      "Corporate gifting",
    ],
  },
  {
    id: "technology",
    icon: Monitor,
    title: "IT & Technology Solutions",
    description: "Technology-driven transformation",
    features: [
      "End-to-end Odoo ERP implementation",
      "Custom modules",
      "ERP maintenance",
      "Legacy migration",
      "High-performance websites",
      "AI-integrated websites",
      "API integrations",
      "QA testing",
      "AI strategy audits",
      "BI dashboards",
    ],
  },
  {
    id: "training",
    icon: GraduationCap,
    title: "Training & Development",
    description: "Orgvein Academy for organisational excellence",
    features: [
      "Role-based training",
      "Sales & negotiation mastery",
      "HR & recruitment training",
      "Operations efficiency",
      "Consulting skills",
      "Finance literacy",
      "Marketing training",
      "ERP & AI adoption",
      "Leadership coaching",
      "Executive mentoring",
      "Certifications & placement support",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6 animate-fade-up">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.1s" }}>
              End-to-End <span className="text-accent">Business Solutions</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
              From strategy to execution, we provide comprehensive services across consulting, HR, finance, operations, sales, marketing, technology, and training.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Card */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="bg-gradient-to-br from-muted to-muted/50 rounded-3xl p-8 lg:p-12 border border-border">
                    <service.icon className="h-24 w-24 text-accent/20 mb-6" />
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {service.features.length}+ Solutions
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Comprehensive {service.title.toLowerCase()} tailored to your needs.
                    </p>
                    <Link to="/contact">
                      <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold group">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Organisation?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can bring clarity, structure, and flow to your business.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold group">
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
