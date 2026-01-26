import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, FileText } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Start With Strategy, Not Servers
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Our AI Infrastructure Readiness Assessment takes 2-3 weeks and costs $0-15,000 (credited toward deployment). Get complete clarity before committing.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10"
          >
            <div className="flex items-center gap-3 text-white/80 text-left">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
              <span>AI workload characterization</span>
            </div>
            <div className="flex items-center gap-3 text-white/80 text-left">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
              <span>Infrastructure sizing model</span>
            </div>
            <div className="flex items-center gap-3 text-white/80 text-left">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
              <span>3-year cost projection</span>
            </div>
            <div className="flex items-center gap-3 text-white/80 text-left">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
              <span>Compliance roadmap</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Schedule Your Assessment
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button variant="heroSecondary" size="xl">
              <FileText className="w-5 h-5" />
              Download Assessment Overview
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
