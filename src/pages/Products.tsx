import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import AssessmentWizard from "@/components/AssessmentWizard";
import { 
  Server, Cpu, Layers, Radio, Copy, 
  ArrowRight, CheckCircle, Stethoscope, DollarSign, 
  Building2, Truck, Factory, ShoppingBag
} from "lucide-react";

const products = [
  {
    id: "private-ai-compute-node",
    icon: Server,
    title: "Private AI Compute Node",
    tagline: "Entry point for production AI",
    bestFor: "Regulated enterprises, AI SMBs",
    description: "Your dedicated AI powerhouse. A single, secure compute node designed for enterprises that need production-ready AI without data center complexity.",
    includes: [
      "1–4 GPUs (NVIDIA H100 / L40S / L4 class)",
      "Enterprise AI server (Supermicro / Dell / HPE reference)",
      "On-prem or private colocation deployment",
      "Secure, isolated AI runtime"
    ],
    useCases: [
      { icon: Stethoscope, label: "Clinical AI inference" },
      { icon: DollarSign, label: "Financial risk models" },
      { icon: Cpu, label: "Internal copilots" },
      { icon: Server, label: "Proprietary LLM hosting" }
    ],
    color: "from-blue-500 to-blue-600",
    isHero: true
  },
  {
    id: "department-scale-ai-server",
    icon: Layers,
    title: "Department-Scale AI Server",
    tagline: "AI without full data-center complexity",
    bestFor: "Healthcare departments, finance teams, ops groups",
    description: "Higher-density GPU server designed for teams that need shared AI resources with predictable performance across multiple workloads.",
    includes: [
      "Higher-density GPU server configuration",
      "Shared across teams or workloads",
      "Designed for predictable performance",
      "Enterprise management and monitoring"
    ],
    useCases: [
      { icon: Stethoscope, label: "Radiology / imaging AI" },
      { icon: DollarSign, label: "Fraud & compliance models" },
      { icon: Layers, label: "Forecasting & simulation" }
    ],
    color: "from-emerald-500 to-emerald-600",
    isHero: false
  },
  {
    id: "scalable-ai-cluster",
    icon: Cpu,
    title: "Scalable AI Cluster",
    tagline: "Growth path after first node",
    bestFor: "Enterprises, scaleups, multi-team AI",
    description: "Multi-node GPU clusters with orchestration built-in. Start small and expand as your AI ambitions grow—designed for phased expansion.",
    includes: [
      "Multi-node GPU clusters",
      "GPU scheduling & orchestration",
      "Designed for phased expansion",
      "High-speed networking (InfiniBand/RoCE)"
    ],
    useCases: [
      { icon: Cpu, label: "Model training + inference" },
      { icon: Layers, label: "Multi-team AI platforms" },
      { icon: Server, label: "Production LLM pipelines" }
    ],
    color: "from-purple-500 to-purple-600",
    isHero: false
  },
  {
    id: "edge-ai-operations-node",
    icon: Radio,
    title: "Edge AI Operations Node",
    tagline: "AI where the work happens",
    bestFor: "Construction, logistics, real estate, transportation",
    description: "Ruggedized AI servers built for the field. Bring inference to job sites, warehouses, and vehicles—even with intermittent connectivity.",
    includes: [
      "Ruggedized or compact AI servers",
      "On-site inference capabilities",
      "Intermittent connectivity support",
      "Environmental hardening"
    ],
    useCases: [
      { icon: Radio, label: "Video analytics" },
      { icon: Building2, label: "Safety monitoring" },
      { icon: Truck, label: "Asset tracking" },
      { icon: Factory, label: "Smart buildings & job sites" }
    ],
    color: "from-amber-500 to-amber-600",
    isHero: false
  },
  {
    id: "standardized-ai-node",
    icon: Copy,
    title: "Standardized AI Node",
    tagline: "Repeatable AI at scale",
    bestFor: "Healthcare networks, retail, logistics, manufacturing",
    description: "Pre-defined node specifications for multi-site rollouts. Deploy consistent AI infrastructure across your entire network with centralized management.",
    includes: [
      "Pre-defined node specification",
      "Centralized management console",
      "Consistent performance across sites",
      "Standardized deployment playbooks"
    ],
    useCases: [
      { icon: ShoppingBag, label: "Chain-wide AI deployments" },
      { icon: Stethoscope, label: "Networked healthcare systems" },
      { icon: Factory, label: "Distributed operations" }
    ],
    color: "from-rose-500 to-rose-600",
    isHero: false
  }
];

const Products = () => {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const heroProduct = products.find(p => p.isHero);
  const otherProducts = products.filter(p => !p.isHero);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">AI-Native Infrastructure</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 mt-2">
              Production-Ready AI Infrastructure Products
            </h1>
            <p className="text-xl text-white/70">
              Strategy-led, non-reseller infrastructure solutions. Each product is designed for your node-first AI deployment journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Product - Private AI Compute Node */}
      {heroProduct && (
        <section className="py-20 bg-surface-elevated">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">HERO PRODUCT</span>
                <span className="text-sm text-muted-foreground">Most Popular Entry Point</span>
              </div>
              
              <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${heroProduct.color} flex items-center justify-center flex-shrink-0`}>
                        <heroProduct.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-primary">{heroProduct.title}</h2>
                        <p className="text-accent font-medium">{heroProduct.tagline}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">{heroProduct.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-sm font-semibold text-primary">Best For:</span>
                      <p className="text-muted-foreground">{heroProduct.bestFor}</p>
                    </div>
                    
                    <a href="https://calendly.com/abelassefa19/schedule-your-assessment" target="_blank" rel="noopener noreferrer">
                      <Button variant="hero" size="lg" className="group">
                        Request Architecture Consultation
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </a>
                  </div>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-semibold text-primary mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        What It Includes
                      </h3>
                      <ul className="space-y-3">
                        {heroProduct.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-primary mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        Use Cases
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {heroProduct.useCases.map((useCase, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground bg-surface-elevated rounded-lg p-3">
                            <useCase.icon className="w-4 h-4 text-accent" />
                            {useCase.label}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Other Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Core Infrastructure Offerings</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Scale Your AI Journey</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              From department-level deployments to enterprise-wide rollouts, we have the right infrastructure for every stage of your AI evolution.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {otherProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-card border border-border hover:border-accent/30 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center flex-shrink-0`}>
                    <product.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">{product.title}</h3>
                    <p className="text-sm text-accent">{product.tagline}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                
                <div className="mb-4">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">Best For:</span>
                  <p className="text-sm text-muted-foreground">{product.bestFor}</p>
                </div>
                
                <div className="mb-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-3">What It Includes:</span>
                  <ul className="space-y-2">
                    {product.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-3">Use Cases:</span>
                  <div className="flex flex-wrap gap-2">
                    {product.useCases.map((useCase, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground bg-surface-elevated rounded-full px-3 py-1.5">
                        <useCase.icon className="w-3 h-3 text-accent" />
                        {useCase.label}
                      </div>
                    ))}
                  </div>
                </div>
                
                <a href="https://calendly.com/abelassefa19/schedule-your-assessment" target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="outline" size="sm" className="group w-full">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Not Sure Which Product Fits?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Our AI Infrastructure Assessment will analyze your workloads, compliance requirements, and growth trajectory to recommend the right starting point.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="xl" 
                className="group"
                onClick={() => setIsAssessmentOpen(true)}
              >
                Get Your Free Assessment
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <a href="https://calendly.com/abelassefa19/schedule-your-assessment" target="_blank" rel="noopener noreferrer">
                <Button variant="heroSecondary" size="xl">
                  Talk to an Expert
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Assessment Wizard Popup */}
      <AssessmentWizard 
        isOpen={isAssessmentOpen} 
        onClose={() => setIsAssessmentOpen(false)} 
      />
    </main>
  );
};

export default Products;
