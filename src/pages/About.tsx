import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, CheckCircle, Search, Server, TrendingUp,
  Cpu, Settings, Users, Award, Target, Zap
} from "lucide-react";

const philosophy = [
  "Most companies approach AI infrastructure backwards: they buy hardware first, then figure out the strategy. We do the opposite.",
  "We start every engagement with strategy—a deep assessment of your AI workloads, compliance requirements, performance targets, and 3-year growth trajectory. Only then do we recommend specific infrastructure.",
  "This isn't a sales pitch. It's how we filter serious buyers, establish advisory relationships, and ensure you're not over-buying (or under-buying) infrastructure that determines your AI success for years."
];

const phases = [
  {
    icon: Search,
    phase: "Phase 1",
    title: "Assessment & Strategy",
    duration: "2-3 weeks",
    items: [
      "AI workload characterization",
      "Infrastructure sizing and architecture design",
      "3-year TCO modeling (cloud vs. private vs. hybrid)",
      "Compliance and security requirements mapping"
    ],
    investment: "$0-15K (credited toward deployment)",
    output: "Complete infrastructure roadmap and business case"
  },
  {
    icon: Server,
    phase: "Phase 2",
    title: "Right-Sized Entry",
    duration: "4-8 weeks",
    items: [
      "We never pitch clusters on day one",
      "Start with single Private AI Compute Node or Edge AI Node",
      "Easy to approve, fast to deploy, low political friction",
      "Proves value before large commitments"
    ],
    investment: "Based on assessment",
    output: "Production AI infrastructure delivering value"
  },
  {
    icon: TrendingUp,
    phase: "Phase 3",
    title: "Natural Expansion",
    duration: "6-24 months",
    items: [
      "Add GPUs to existing nodes",
      "Deploy second or third node",
      "Convert to small cluster with GPU scheduling",
      "Introduce liquid cooling for higher density",
      "Expand to additional sites or departments"
    ],
    investment: "Incremental as needed",
    output: "Feels inevitable, not forced"
  }
];

const partners = {
  compute: ["Supermicro", "Dell Technologies", "HPE", "ASUS Server", "Lenovo ISG"],
  accelerators: ["NVIDIA (H100, L40S, L4, AI Enterprise)", "Intel Habana Gaudi2", "AMD Instinct MI300"],
  software: ["Run.ai", "NVIDIA AI Enterprise", "Weights & Biases", "MLflow"],
  cooling: ["Motivair", "CoolIT Systems", "ZutaCore", "LiquidStack"],
  power: ["Schneider Electric", "Vertiv", "Eaton"]
};

const differentiators = [
  {
    icon: Target,
    title: "We Think Like CFOs, Not Engineers",
    description: "We lead with economics: TCO models, payback periods, CapEx vs. OpEx, depreciation schedules. We justify AI infrastructure as a strategic investment, not an IT expense."
  },
  {
    icon: Users,
    title: "We Filter Buyers, Not Chase Everyone",
    description: "Our assessment model ensures we only work with serious buyers who value strategy. This protects our time and ensures you get advisory-level attention, not sales pressure."
  },
  {
    icon: Zap,
    title: "We Design for 3-5 Years, Not 3-6 Months",
    description: "AI infrastructure decisions have long consequences. We plan for your growth trajectory, technology evolution, and compliance changes—not just today's workload."
  },
  {
    icon: Award,
    title: "We Have Zero Vendor Lock-In",
    description: "You own your infrastructure. We don't require proprietary software, exclusive partnerships, or long-term contracts. If you want to change course, you can."
  }
];

const About = () => {
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
              We're AI Infrastructure Strategists, Not Hardware Resellers
            </h1>
            <p className="text-xl text-white/70">
              Strategy first. Right-sized deployments. Long-term partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-surface-elevated">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">Our Philosophy</h2>
            <div className="space-y-6">
              {philosophy.map((para, i) => (
                <p key={i} className="text-lg text-muted-foreground leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">How We Work</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-card border border-border relative"
              >
                <div className="absolute -top-3 left-6 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                  {phase.phase}
                </div>
                
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 mt-2">
                  <phase.icon className="w-6 h-6 text-accent" />
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-1">{phase.title}</h3>
                <p className="text-sm text-accent mb-4">{phase.duration}</p>
                
                <ul className="space-y-2 mb-6">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-border space-y-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Investment: </span>
                    <span className="text-primary font-medium">{phase.investment}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Output: </span>
                    <span className="text-primary font-medium">{phase.output}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Ecosystem */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Ecosystem</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Our Partner Ecosystem</h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              We don't manufacture hardware. We orchestrate the best-in-class ecosystem to solve your specific needs.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {Object.entries(partners).map(([category, items], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 rounded-xl p-5 border border-white/10"
              >
                <h3 className="text-accent font-semibold mb-4 capitalize">
                  {category === "compute" ? "Compute & Servers" : 
                   category === "accelerators" ? "AI Accelerators" :
                   category === "software" ? "Infrastructure Software" :
                   category === "cooling" ? "Cooling" : "Power"}
                </h3>
                <ul className="space-y-2">
                  {items.map((item, i) => (
                    <li key={i} className="text-white/70 text-sm">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-white/50 mt-8 text-sm"
          >
            "We design and you own. We can coordinate deployment through your preferred partners, or manage it directly. You're never locked into our ecosystem."
          </motion.p>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Differentiators</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">What Makes Us Different</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {differentiators.map((diff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <diff.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">{diff.title}</h3>
                  <p className="text-muted-foreground text-sm">{diff.description}</p>
                </div>
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
              Start With Strategy
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
