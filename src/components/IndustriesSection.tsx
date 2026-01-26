import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, MapPin, Rocket, Network, ArrowRight } from "lucide-react";
import IndustryModal, { IndustryType } from "./IndustryModal";

const industries: {
  icon: typeof Shield;
  title: string;
  subtitle: string;
  pain: string;
  description: string;
  color: string;
  type: IndustryType;
}[] = [
  {
    icon: Shield,
    title: "Regulated Enterprises",
    subtitle: "Healthcare, Finance, Insurance",
    pain: "Data residency & compliance failures with cloud AI",
    description: "Deploy HIPAA, PCI-DSS, and SOC2 compliant AI infrastructure with complete data sovereignty.",
    color: "from-blue-500 to-blue-600",
    type: "regulated"
  },
  {
    icon: MapPin,
    title: "Physical Operations",
    subtitle: "Construction, Logistics, Real Estate",
    pain: "Cloud latency killing real-time AI applications",
    description: "Edge AI nodes for job sites and facilities with offline-capable, sub-50ms inference.",
    color: "from-amber-500 to-amber-600",
    type: "physical"
  },
  {
    icon: Rocket,
    title: "AI-Forward Companies",
    subtitle: "SaaS, AI Startups, Tech Vendors",
    pain: "GPU scarcity and inference margin collapse",
    description: "Private compute infrastructure for predictable performance and sustainable unit economics.",
    color: "from-purple-500 to-purple-600",
    type: "aiforward"
  },
  {
    icon: Network,
    title: "Multi-Site Operators",
    subtitle: "Hospital Networks, Retail Chains",
    pain: "Fragmented AI deployments across locations",
    description: "Standardized infrastructure playbooks that scale from 5 to 500 sites.",
    color: "from-emerald-500 to-emerald-600",
    type: "multisite"
  }
];

const IndustriesSection = () => {
  const [activeModal, setActiveModal] = useState<IndustryType | null>(null);

  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Purpose-Built for High-Stakes AI
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            We focus on four high-intent niches where AI is operational, budgets exist, and cloud-only solutions fail.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-300 h-full flex flex-col">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-4`}>
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-1">{industry.title}</h3>
                <p className="text-sm text-accent mb-4">{industry.subtitle}</p>
                
                <p className="text-sm text-white/50 mb-4">
                  <span className="font-medium text-white/70">#1 Pain:</span> {industry.pain}
                </p>
                
                <p className="text-white/60 text-sm mb-6 flex-grow">
                  {industry.description}
                </p>
                
                <button 
                  onClick={() => setActiveModal(industry.type)}
                  className="flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Industry Modal */}
      {activeModal && (
        <IndustryModal
          isOpen={!!activeModal}
          onClose={() => setActiveModal(null)}
          type={activeModal}
        />
      )}
    </section>
  );
};

export default IndustriesSection;
