import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Server, Cpu, Cloud, Zap, Thermometer, 
  Battery, Shield, ArrowRight, Settings
} from "lucide-react";
import ArchitectureModal, { ArchitectureType } from "@/components/ArchitectureModal";

const services: {
  icon: typeof Server;
  title: string;
  subtitle: string;
  idealFor: string;
  specs: string;
  benefits: string[];
  industries: string;
  color: string;
  architectureType: ArchitectureType;
  buttonLabel: string;
}[] = [
  {
    icon: Server,
    title: "Private AI Compute Nodes",
    subtitle: "Department-scale AI deployments",
    idealFor: "Department-scale AI deployments, regulated workloads requiring data isolation",
    specs: "Single-node AI servers with 4-8 GPUs (NVIDIA H100, L40S, L4), optimized for training and inference",
    benefits: [
      "Fast approval cycles (lower CapEx than clusters)",
      "Deploy in weeks, not months",
      "Natural expansion path to clusters"
    ],
    industries: "Healthcare systems, financial services, insurance",
    color: "from-blue-500 to-blue-600",
    architectureType: "node",
    buttonLabel: "View Node Architecture"
  },
  {
    icon: Cpu,
    title: "Edge AI & Operations Nodes",
    subtitle: "On-site AI inference",
    idealFor: "On-site AI inference, manufacturing floor, construction sites, retail locations",
    specs: "Ruggedized edge servers with inference-optimized GPUs, operates in low-connectivity environments",
    benefits: [
      "Sub-50ms inference latency",
      "Works offline or intermittent connectivity",
      "Video analytics, computer vision, predictive maintenance"
    ],
    industries: "Construction, logistics, warehousing, real estate operations",
    color: "from-amber-500 to-amber-600",
    architectureType: "edge",
    buttonLabel: "View Edge Architecture"
  },
  {
    icon: Zap,
    title: "Scalable AI Clusters",
    subtitle: "Multi-tenant AI platforms",
    idealFor: "Multi-tenant AI platforms, large-scale training, AI-native product companies",
    specs: "Multi-node GPU clusters with high-speed networking (InfiniBand/RoCE), shared storage, GPU scheduling",
    benefits: [
      "Elastic capacity for multiple teams",
      "Cost-per-inference predictability",
      "Enterprise-grade GPU utilization (>80%)"
    ],
    industries: "AI startups, SaaS platforms, research institutions",
    color: "from-purple-500 to-purple-600",
    architectureType: "cluster",
    buttonLabel: "View Cluster Architecture"
  },
  {
    icon: Cloud,
    title: "Hybrid AI Deployments",
    subtitle: "Balanced architecture",
    idealFor: "Enterprises balancing compliance, cost optimization, and cloud flexibility",
    specs: "Orchestrated workload placement across private nodes and cloud, unified management plane",
    benefits: [
      "Regulated workloads on-prem, dev/test in cloud",
      "Cost optimization through intelligent placement",
      "Gradual cloud exit or cloud burst capability"
    ],
    industries: "Multi-site operators, enterprises with mixed workload types",
    color: "from-emerald-500 to-emerald-600",
    architectureType: "hybrid",
    buttonLabel: "View Hybrid Architecture"
  }
];

const advancedCapabilities = [
  {
    icon: Settings,
    title: "GPU Scheduling & Utilization Optimization",
    description: "Most enterprises achieve only 30-40% GPU utilization. We implement Run.ai, Kubernetes GPU Operator, or Slurm configurations that push utilization above 80%.",
    technologies: "Run.ai, NVIDIA GPU Operator, Slurm AI configs",
    outcome: "2-3x improvement in GPU efficiency",
    whoNeeds: "Anyone running multi-tenant AI or shared GPU infrastructure"
  },
  {
    icon: Thermometer,
    title: "Liquid Cooling & Thermal Management",
    description: "High-density GPU deployments generate extreme heat. We design liquid and hybrid cooling solutions that prevent thermal throttling.",
    technologies: "Motivair, CoolIT Systems, ZutaCore, LiquidStack",
    outcome: "40% lower cooling costs, 3x rack density improvement",
    whoNeeds: "Clusters with 8+ GPUs per node, data center deployments"
  },
  {
    icon: Battery,
    title: "Power & Energy Optimization",
    description: "Power constraints kill more AI projects than GPU availability. We map your facility power capacity and design redundant power architectures.",
    technologies: "Schneider Electric, Vertiv, Eaton",
    outcome: "Avoid $500K+ electrical infrastructure upgrades",
    whoNeeds: "Anyone deploying 100kW+ AI infrastructure"
  },
  {
    icon: Shield,
    title: "AI Security & Isolation",
    description: "Regulated industries need confidential AI, multi-tenant isolation, and audit trails. We implement secure container runtimes that satisfy auditors.",
    technologies: "vCluster, NVIDIA Confidential AI, Kata Containers",
    outcome: "Pass compliance audits, enable multi-department AI sharing",
    whoNeeds: "Healthcare, finance, insurance, any regulated workload"
  }
];


const Services = () => {
  const [activeModal, setActiveModal] = useState<ArchitectureType | null>(null);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              From Strategy to Deployment: Complete AI Infrastructure Services
            </h1>
            <p className="text-xl text-white/70">
              We don't just sell hardware—we architect solutions that align with your business goals, compliance requirements, and growth trajectory.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Infrastructure Solutions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Infrastructure Solutions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Right-Sized for Every Need</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-card border border-border hover:border-accent/30 transition-colors"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">{service.title}</h3>
                    <p className="text-sm text-accent">{service.subtitle}</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-semibold text-primary">Ideal For: </span>
                    <span className="text-muted-foreground">{service.idealFor}</span>
                  </div>
                  
                  <div>
                    <span className="font-semibold text-primary">Technical Specs: </span>
                    <span className="text-muted-foreground font-mono text-xs">{service.specs}</span>
                  </div>
                  
                  <div>
                    <span className="font-semibold text-primary block mb-2">Key Benefits:</span>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">Best For: {service.industries}</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-6 group"
                  onClick={() => setActiveModal(service.architectureType)}
                >
                  {service.buttonLabel}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Capabilities */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Advanced Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Beyond Basic Deployment</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {advancedCapabilities.map((cap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <cap.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">{cap.title}</h3>
                    <p className="text-white/60 text-sm mb-4">{cap.description}</p>
                    
                    <div className="space-y-2 text-xs">
                      <div className="flex gap-2">
                        <span className="text-white/40">Technologies:</span>
                        <span className="text-accent font-mono">{cap.technologies}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-white/40">Outcome:</span>
                        <span className="text-success">{cap.outcome}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-white/40">Who needs this:</span>
                        <span className="text-white/70">{cap.whoNeeds}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Architecture Modal */}
      {activeModal && (
        <ArchitectureModal
          isOpen={!!activeModal}
          onClose={() => setActiveModal(null)}
          type={activeModal}
        />
      )}
    </main>
  );
};

export default Services;
