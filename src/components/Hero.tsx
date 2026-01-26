import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, Shield, Zap } from "lucide-react";
import AssessmentWizard from "./AssessmentWizard";

const Hero = () => {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full blur-[120px]" />
      
      <div className="container relative z-10 mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm text-white/80 mb-6"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              AI Infrastructure Strategists
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              AI Infrastructure That Works{" "}
              <span className="text-gradient">When Cloud Can't</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-xl">
              We help regulated enterprises and operations-heavy companies deploy private AI infrastructure with predictable costs, guaranteed compliance, and no vendor lock-in.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="hero" 
                size="xl" 
                className="group"
                onClick={() => setIsAssessmentOpen(true)}
              >
                Get Your Free AI Infrastructure Assessment
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Link to="/about">
                <Button variant="heroSecondary" size="xl">
                  Learn Our Approach
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-white/60">
              <Shield className="w-4 h-4" />
              <span>Trusted by healthcare systems, financial institutions, and AI-native companies</span>
            </div>
          </motion.div>
          
          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
              {/* Comparison Visual */}
              <div className="grid grid-cols-2 gap-6">
                {/* Cloud Chaos */}
                <div className="space-y-4">
                  <div className="text-center">
                    <span className="text-sm font-medium text-white/50 uppercase tracking-wider">Cloud</span>
                  </div>
                  <div className="bg-destructive/20 rounded-xl p-4 border border-destructive/30">
                    <div className="flex items-center gap-3 mb-3">
                      <DollarSign className="w-5 h-5 text-destructive" />
                      <span className="text-sm text-white/80">Unpredictable costs</span>
                    </div>
                    <div className="text-3xl font-bold text-destructive">$340K</div>
                    <div className="text-xs text-white/50">avg. monthly spend</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <span className="w-2 h-2 bg-destructive rounded-full" />
                      Compliance risks
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <span className="w-2 h-2 bg-destructive rounded-full" />
                      GPU scarcity
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <span className="w-2 h-2 bg-destructive rounded-full" />
                      Vendor lock-in
                    </div>
                  </div>
                </div>
                
                {/* Private Infrastructure */}
                <div className="space-y-4">
                  <div className="text-center">
                    <span className="text-sm font-medium text-accent uppercase tracking-wider">Private</span>
                  </div>
                  <div className="bg-accent/20 rounded-xl p-4 border border-accent/30 animate-glow">
                    <div className="flex items-center gap-3 mb-3">
                      <Zap className="w-5 h-5 text-accent" />
                      <span className="text-sm text-white/80">Predictable costs</span>
                    </div>
                    <div className="text-3xl font-bold text-accent">$109K</div>
                    <div className="text-xs text-white/50">fixed monthly cost</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      Full compliance
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      Guaranteed capacity
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      You own it
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Savings Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-6 py-2 rounded-full font-bold text-sm shadow-accent"
              >
                68% Cost Reduction
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-accent rounded-full"
          />
        </div>
      </motion.div>

      {/* Assessment Wizard Popup */}
      <AssessmentWizard 
        isOpen={isAssessmentOpen} 
        onClose={() => setIsAssessmentOpen(false)} 
      />
    </section>
  );
};

export default Hero;
