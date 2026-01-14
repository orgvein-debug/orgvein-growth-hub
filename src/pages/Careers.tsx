import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  GraduationCap, 
  TrendingUp, 
  Users,
  Mail,
  ArrowRight,
  Sparkles
} from "lucide-react";

const openRoles = [
  {
    title: "Business Consultant",
    type: "Full-time",
    location: "Calicut, Kerala",
  },
  {
    title: "HR Executive",
    type: "Full-time",
    location: "Calicut, Kerala",
  },
  {
    title: "ERP Implementation Specialist",
    type: "Full-time",
    location: "Calicut, Kerala",
  },
  {
    title: "Digital Marketing Executive",
    type: "Full-time",
    location: "Calicut, Kerala / Remote",
  },
];

const benefits = [
  {
    icon: Briefcase,
    title: "Real Projects",
    description: "Work on actual consulting, HR, finance, ERP, and transformation projects for diverse clients.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "Access to Orgvein Academy, certifications, and mentorship from industry experts.",
  },
  {
    icon: TrendingUp,
    title: "Growth Path",
    description: "Clear career progression with opportunities to lead teams and projects.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with passionate professionals who value clarity, ownership, and excellence.",
  },
];

const Careers = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6 animate-fade-up">
              Careers at Orgvein
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.1s" }}>
              Build Organisations.<br />
              <span className="text-accent">Build Your Career.</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
              Work on real consulting, HR, finance, ERP, operations, and transformation projects. We value clarity, ownership, learning, and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
              Why Join Orgvein
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Learning & Growth Culture
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              At Orgvein, we believe in investing in our people as much as we invest in our clients.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group bg-card p-8 rounded-xl border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 hover-lift text-center"
              >
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <benefit.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
                Open Positions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Current Openings
              </h2>
            </div>

            <div className="space-y-4">
              {openRoles.map((role) => (
                <div
                  key={role.title}
                  className="group bg-card p-6 rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                      {role.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {role.type} • {role.location}
                    </p>
                  </div>
                  <a href="mailto:hr@orgvein.com?subject=Application for {role.title}">
                    <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground group">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internships */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 lg:p-12 text-primary-foreground">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="h-8 w-8 text-accent" />
                <h2 className="text-2xl md:text-3xl font-bold">Internships & Freshers</h2>
              </div>
              <p className="text-primary-foreground/80 mb-8 text-lg">
                Starting your career? Join our internship program to gain hands-on experience in business consulting, HR, finance, marketing, and technology. We offer structured learning paths with mentorship from industry experts.
              </p>
              <a href="mailto:hr@orgvein.com?subject=Internship Application">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold group">
                  Apply for Internship
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Mail className="h-8 w-8 text-accent" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Get in Touch
            </h2>
          </div>
          <p className="text-muted-foreground text-lg mb-8">
            Send your resume and cover letter to
          </p>
          <a href="mailto:hr@orgvein.com">
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg">
              hr@orgvein.com
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
