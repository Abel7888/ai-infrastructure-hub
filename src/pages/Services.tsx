import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Search, Server, Cpu, Cloud, Zap, Thermometer, 
  Battery, Shield, ArrowRight, CheckCircle, Palette, Settings, Users
} from "lucide-react";

const services = [
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
    color: "from-blue-500 to-blue-600"
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
    color: "from-amber-500 to-amber-600"
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
    color: "from-purple-500 to-purple-600"
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
    color: "from-emerald-500 to-emerald-600"
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

const deliveryModel = [
  {
    icon: Palette,
    title: "We Design & Strategize",
    items: ["Infrastructure architecture", "Vendor selection and negotiation", "Compliance framework", "3-year capacity planning"]
  },
  {
    icon: Users,
    title: "Partners Deploy",
    items: ["Coordinate with your preferred integrators", "Or we manage deployment directly", "Focus on outcomes, not headcount"]
  },
  {
    icon: CheckCircle,
    title: "You Own & Operate",
    items: ["Full documentation and runbooks", "Training for your team", "Ongoing advisory as needed", "No vendor lock-in"]
  }
];

const Services = () => {
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

      {/* Strategic Foundation */}
      <section className="py-20 bg-surface-elevated">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                <Search className="w-7 h-7 text-accent" />
              </div>
              <div>
                <span className="text-sm font-semibold text-accent uppercase tracking-wider">Strategic Foundation</span>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">AI Infrastructure Readiness Assessment</h2>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-primary mb-4">What It Is</h3>
                  <p className="text-muted-foreground mb-6">
                    2-3 week engagement analyzing your AI workload requirements, compliance constraints, performance targets, and growth trajectory.
                  </p>
                  
                  <h3 className="font-semibold text-primary mb-4">What You Get</h3>
                  <ul className="space-y-2">
                    {[
                      "AI workload characterization and sizing model",
                      "Infrastructure architecture recommendations",
                      "3-year TCO comparison (cloud vs. private vs. hybrid)",
                      "Compliance and security framework",
                      "GPU utilization and scheduling strategy"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-accent/5 rounded-xl p-6 border border-accent/20">
                  <div className="text-4xl font-bold text-accent mb-2">$0-15K</div>
                  <div className="text-sm text-muted-foreground mb-6">(credited toward deployment)</div>
                  
                  <h3 className="font-semibold text-primary mb-4">Why It Matters</h3>
                  <p className="text-muted-foreground text-sm">
                    "This isn't a sales pitch disguised as consulting. It's how we filter serious buyers, establish advisory authority, and ensure every deployment is right-sized from day one."
                  </p>
                  
                  <Button variant="hero" size="lg" className="w-full mt-6 group">
                    Request Assessment Scope
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
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
                
                <Button variant="outline" size="sm" className="mt-6 group">
                  See Architecture Reference
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

      {/* Delivery Model */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Delivery Model</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">How We Work With You</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {deliveryModel.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <model.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{model.title}</h3>
                <ul className="space-y-2">
                  {model.items.map((item, i) => (
                    <li key={i} className="text-muted-foreground text-sm">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="hero" size="xl" className="group">
              Let's Design Your AI Infrastructure
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
