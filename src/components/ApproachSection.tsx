import { motion } from "framer-motion";
import { Search, Server, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Strategy & Sizing",
    subtitle: "AI Infrastructure Readiness Assessment",
    description: "We don't sell you boxes. We start with a $0-15K assessment (credited toward deployment) that maps your AI workloads, compliance requirements, and growth trajectory.",
    features: ["Complete workload analysis", "3-year cost projection", "Compliance roadmap"],
    highlight: "$0-15K (credited)"
  },
  {
    number: "02",
    icon: Server,
    title: "Right-Sized Entry",
    subtitle: "Single Node Deployment",
    description: "We deploy a single Private AI Compute Node or Edge AI Node first—easy to approve, fast to deploy, low political friction. No cluster pitches on day one.",
    features: ["4-8 week deployment", "Immediate value delivery", "Minimal risk"],
    highlight: "Start small"
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Natural Expansion",
    subtitle: "Organic Growth Path",
    description: "Once AI is live and delivering value, expansion happens organically: add GPUs, add nodes, introduce liquid cooling, convert to clusters. It feels inevitable, not forced.",
    features: ["Add GPUs on demand", "Multi-node clusters", "Multi-site rollouts"],
    highlight: "Scale when ready"
  }
];

const ApproachSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Strategy First, Hardware Second
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Most companies buy hardware first, then figure out strategy. We do the opposite—ensuring every deployment is right-sized from day one.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/20 via-accent to-accent/20 -translate-y-1/2 z-0" />
          
          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Card */}
                <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-accent/30 h-full">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-5xl font-bold text-accent/20">{step.number}</span>
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-1">{step.title}</h3>
                  <p className="text-sm text-accent font-medium mb-4">{step.subtitle}</p>
                  
                  <p className="text-muted-foreground mb-6">{step.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {step.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-sm font-semibold text-accent">
                    {step.highlight}
                  </div>
                </div>
                
                {/* Arrow (except last) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 z-20">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-accent">
                      <ArrowRight className="w-4 h-4 text-accent-foreground" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Visual Progression */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-4 text-sm font-medium"
        >
          <span className="px-4 py-2 bg-muted rounded-full text-muted-foreground">Single Node</span>
          <ArrowRight className="w-4 h-4 text-accent" />
          <span className="px-4 py-2 bg-muted rounded-full text-muted-foreground">Add GPUs</span>
          <ArrowRight className="w-4 h-4 text-accent" />
          <span className="px-4 py-2 bg-muted rounded-full text-muted-foreground">Small Cluster</span>
          <ArrowRight className="w-4 h-4 text-accent" />
          <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full">Multi-Site Deployment</span>
        </motion.div>
      </div>
    </section>
  );
};

export default ApproachSection;
