import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import orgveinLogo from "@/assets/orgvein-logo.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "Packages", path: "/packages" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "Business Consulting",
  "HR & Workforce Solutions",
  "Financial Governance",
  "Operations Management",
  "Sales Enablement",
  "Marketing Services",
  "IT & Technology",
  "Training & Development",
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={orgveinLogo} 
                alt="Orgvein Logo" 
                className="h-14 w-14 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-wide">ORGVEIN</span>
                <span className="text-xs text-accent tracking-widest uppercase">
                  Organisation's Vein
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Enabling structured, scalable organisations with clarity, structure, and seamless flow across people, processes, finance, and technology.
            </p>
            <p className="text-accent font-semibold text-sm">
              Clarity. Structure. Flow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a 
                    href="tel:+918138856631" 
                    className="block text-primary-foreground/70 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    +91 81388 56631
                  </a>
                  <a 
                    href="tel:+918848504541" 
                    className="block text-primary-foreground/70 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    +91 88485 04541
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a 
                    href="mailto:info@orgvein.com" 
                    className="block text-primary-foreground/70 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    info@orgvein.com
                  </a>
                  <a 
                    href="mailto:hr@orgvein.com" 
                    className="block text-primary-foreground/70 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    hr@orgvein.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-primary-foreground/70 text-sm">
                  Calicut, Kerala, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Orgvein Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link 
                to="/privacy" 
                className="text-primary-foreground/60 hover:text-accent transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-primary-foreground/60 hover:text-accent transition-colors duration-300 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
