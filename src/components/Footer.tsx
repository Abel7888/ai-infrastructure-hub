import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">AI</span>
              </div>
              <span className="font-bold text-xl">InfraStrategy</span>
            </div>
            <p className="text-white/60 mb-6 text-sm leading-relaxed">
              AI infrastructure strategists helping regulated enterprises and operations-heavy companies deploy private AI with predictable costs and guaranteed compliance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" /> AI Infrastructure Assessment
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" /> Private AI Compute Nodes
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" /> Edge AI Deployments
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" /> Scalable AI Clusters
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" /> Hybrid AI Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Industries</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" /> Healthcare & Life Sciences
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" /> Financial Services
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" /> Construction & Logistics
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" /> AI SaaS & Startups
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" /> Multi-Site Operators
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-white/60">Email</div>
                  <a href="mailto:hello@infrastrategy.ai" className="text-sm hover:text-accent transition-colors">
                    hello@infrastrategy.ai
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-white/60">Phone</div>
                  <a href="tel:+1-555-123-4567" className="text-sm hover:text-accent transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-white/60">Office</div>
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {currentYear} InfraStrategy. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
