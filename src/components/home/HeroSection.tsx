import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Flow Lines SVG */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(43, 70%, 47%)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(175, 78%, 17%)" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {/* Flowing curves */}
          <path
            d="M0,400 Q300,200 600,400 T1200,400"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            className="flow-line"
          />
          <path
            d="M0,500 Q400,300 800,500 T1200,450"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            className="flow-line"
            style={{ animationDelay: "0.5s" }}
          />
          <path
            d="M0,300 Q200,100 500,300 T1000,250"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            className="flow-line"
            style={{ animationDelay: "1s" }}
          />
        </svg>

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full border border-accent/30 mb-8 animate-fade-up">
          <Sparkles className="h-4 w-4 text-accent" />
          <span className="text-sm text-primary-foreground/90">Organisation's Vein</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
          We Build{" "}
          <span className="text-accent">Structured</span>,<br />
          <span className="text-accent">Scalable</span> Organisations
        </h1>

        {/* Sub-headline */}
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/80 mb-8 animate-fade-up opacity-0" style={{ animationDelay: "0.4s" }}>
          Orgvein helps organisations bring <span className="text-accent font-semibold">clarity</span>, <span className="text-accent font-semibold">structure</span>, and <span className="text-accent font-semibold">seamless flow</span> across people, processes, finance, and technology.
        </p>

        {/* Tagline */}
        <p className="text-2xl md:text-3xl font-display font-semibold text-accent mb-12 animate-fade-up opacity-0" style={{ animationDelay: "0.6s" }}>
          Clarity. Structure. Flow.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0" style={{ animationDelay: "0.8s" }}>
          <Link to="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover-glow group">
              Talk to an Expert
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link to="/services">
            <Button size="lg" variant="outline" className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg px-8 py-6 rounded-full">
              Explore Services
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
