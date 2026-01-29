import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-2xl mx-auto">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 32 32" className="w-6 h-6">
                  <path d="M8 10 L16 6 L24 10 L24 22 L16 26 L8 22 Z" fill="none" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M16 6 L16 26" stroke="white" strokeWidth="1.5"/>
                  <circle cx="16" cy="16" r="2.5" fill="white"/>
                </svg>
              </div>
              <span className="font-bold text-xl">Cypress AI</span>
            </div>
            <p className="text-white/60 mb-6 text-sm leading-relaxed">
              AI infrastructure strategists helping regulated enterprises and operations-heavy companies deploy private AI with predictable costs and guaranteed compliance.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/cypress-ai-deploy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/cypress788"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-white/60">Email</div>
                  <a href="mailto:info@cypressai.xyz" className="text-sm hover:text-accent transition-colors">
                    info@cypressai.xyz
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-white/60">Phone</div>
                  <a href="tel:+1-571-251-2195" className="text-sm hover:text-accent transition-colors">
                    (571) 251-2195
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-white/60">Office</div>
                  <span className="text-sm">4901 Seminary Rd, Alexandria, VA</span>
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
              © {currentYear} Cypress AI. All rights reserved.
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
