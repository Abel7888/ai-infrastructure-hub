import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Shield, MapPin, Rocket, Network, ArrowRight, 
  CheckCircle, XCircle, Server, Cpu, Cloud, Zap
} from "lucide-react";

const industries = [
  {
    id: "regulated",
    icon: Shield,
    title: "Regulated Enterprises",
    subtitle: "Healthcare, Finance, Insurance",
    color: "from-blue-500 to-blue-600",
    whoWeServe: [
      "Healthcare systems and hospital networks",
      "Banks, credit unions, wealth management firms",
      "Insurance carriers and brokerages",
      "Life sciences and pharmaceutical companies"
    ],
    problems: [
      { title: "Cloud Cost Explosion", desc: "AI inference and training costs hitting $100K-$500K/month with no predictability" },
      { title: "Compliance Nightmares", desc: "Data residency requirements, HIPAA violations, PCI-DSS audit failures in multi-tenant cloud" },
      { title: "Inference Latency", desc: "Clinical decision support and fraud detection require <100ms response times" },
      { title: "Vendor Lock-In", desc: "Proprietary cloud AI services making exit impossible" }
    ],
    scenario: {
      situation: "A 12-hospital health system was spending $340K/month on cloud AI for radiology image analysis and patient risk scoring. Their HIPAA auditor flagged data residency violations.",
      solution: "We deployed 4 Private AI Compute Nodes (one per data center) with on-prem GPU clusters.",
      result: "68% cost reduction, full compliance, 40% faster inference."
    },
    deployments: [
      { icon: Server, title: "Private AI Compute Nodes", desc: "Department-scale deployments with data isolation" },
      { icon: Zap, title: "Scalable AI Clusters", desc: "Enterprise-wide AI platforms with multi-tenant security" },
      { icon: Cloud, title: "Hybrid Architectures", desc: "Regulated workloads on-prem, non-sensitive in cloud" }
    ],
    whyWeWin: [
      "We understand compliance frameworks (HIPAA, PCI-DSS, SOC2, GDPR)",
      "We're trusted advisors, not box movers",
      "We speak CFO language: TCO models, CapEx vs. OpEx, depreciation schedules"
    ],
    ctaLabel: "Get Your Healthcare AI Infrastructure Assessment"
  },
  {
    id: "operations",
    icon: MapPin,
    title: "Physical Operations",
    subtitle: "Construction, Logistics, Real Estate",
    color: "from-amber-500 to-amber-600",
    whoWeServe: [
      "Construction firms and general contractors",
      "Logistics companies, warehousing operations, 3PLs",
      "Transportation and fleet management",
      "Commercial real estate operators and property management"
    ],
    problems: [
      { title: "Latency Kills Use Cases", desc: "Video analytics for safety monitoring needs <50ms, cloud adds 200-500ms" },
      { title: "Connectivity Constraints", desc: "Job sites, warehouses, and remote facilities have poor or intermittent internet" },
      { title: "Edge Inference Costs", desc: "Sending video streams to cloud for processing costs $5K-$20K per site/month" },
      { title: "Operational Complexity", desc: "IT teams don't understand operational environments" }
    ],
    scenario: {
      situation: "A national construction firm wanted AI-powered safety monitoring across 120 active job sites. Cloud latency made real-time alerts impossible, and connectivity was spotty.",
      solution: "We deployed Edge AI Nodes at each site with offline-capable computer vision.",
      result: "Real-time safety alerts, 90% cost reduction vs. cloud, works in zero-connectivity scenarios."
    },
    deployments: [
      { icon: Cpu, title: "Edge AI & Operations Nodes", desc: "Ruggedized on-site inference servers" },
      { icon: Server, title: "Department-Scale AI Servers", desc: "Regional hub deployments for logistics networks" },
      { icon: Cloud, title: "Hybrid Edge-Cloud", desc: "Local inference, cloud training and model updates" }
    ],
    whyWeWin: [
      "We understand operational constraints, not just IT requirements",
      "Few competitors bridge AI + physical operations",
      "We design for real-world conditions (dust, temperature, limited power)"
    ],
    ctaLabel: "Explore Edge AI for Operations"
  },
  {
    id: "ai-forward",
    icon: Rocket,
    title: "AI-Forward Companies",
    subtitle: "SaaS, AI Startups, Tech Vendors",
    color: "from-purple-500 to-purple-600",
    whoWeServe: [
      "SaaS companies embedding AI into products",
      "AI-native startups building vertical solutions",
      "Vertical AI vendors (legal tech, HR tech, sales AI)",
      "Tech companies pivoting to AI-first products"
    ],
    problems: [
      { title: "GPU Scarcity", desc: "Can't get H100 or A100 cloud access, roadmap blocked for months" },
      { title: "Inference Margin Collapse", desc: "Cloud inference costs exceeding revenue per customer" },
      { title: "Unpredictable Performance", desc: "Noisy neighbor problems, throttling, inconsistent latency" },
      { title: "Lock-In Risk", desc: "Building on proprietary cloud AI services, can't switch or negotiate" }
    ],
    scenario: {
      situation: "An AI-powered legal research SaaS company was spending $18 per user/month on cloud inference, but charging $49/user. Growth was killing margins.",
      solution: "We deployed a Private AI Compute Node with L40S GPUs optimized for inference.",
      result: "$3.20 per user cost, 82% margin improvement, 18-month payback period."
    },
    deployments: [
      { icon: Server, title: "Private AI Compute Nodes", desc: "Fast deployment, predictable performance" },
      { icon: Zap, title: "Scalable AI Clusters", desc: "Multi-tenant infrastructure for platform companies" },
      { icon: Cloud, title: "Hybrid Deployments", desc: "Inference on-prem, training in cloud (or vice versa)" }
    ],
    whyWeWin: [
      "Fast sales cycles (founder/CTO can decide in weeks)",
      "Strong expansion paths (node → cluster → multi-region)",
      "We speak product economics: cost-per-inference, margin analysis, payback periods"
    ],
    ctaLabel: "Calculate Your AI Infrastructure ROI"
  },
  {
    id: "multi-site",
    icon: Network,
    title: "Multi-Site Operators",
    subtitle: "Hospital Networks, Retail Chains",
    color: "from-emerald-500 to-emerald-600",
    whoWeServe: [
      "Hospital and clinic networks (5-50+ locations)",
      "Retail chains and franchise operations",
      "Distributed logistics networks",
      "Multi-facility manufacturing groups"
    ],
    problems: [
      { title: "Fragmented Deployments", desc: "Every site doing AI differently, no standardization" },
      { title: "Inconsistent Performance", desc: "Some sites overpowered, others under-resourced" },
      { title: "Operational Chaos", desc: "Can't manage, update, or monitor AI infrastructure centrally" },
      { title: "No Expansion Playbook", desc: "Every new site is a custom project" }
    ],
    scenario: {
      situation: "A 40-location retail chain wanted AI-powered inventory optimization and customer analytics. Each store had different hardware, software, and configurations—impossible to scale or support.",
      solution: "We deployed standardized Edge AI Nodes across all locations with centralized management.",
      result: "Consistent performance, 75% reduction in support tickets, repeatable rollout playbook for new stores."
    },
    deployments: [
      { icon: Cpu, title: "Standardized AI Nodes", desc: "Cookie-cutter edge deployments across all sites" },
      { icon: Zap, title: "Cluster + Edge Combinations", desc: "Regional hubs with edge inference at each location" },
      { icon: Server, title: "Centralized Management", desc: "Unified monitoring, updates, and orchestration" }
    ],
    whyWeWin: [
      "Repeatable rollouts (deploy site 2-50 in days, not months)",
      "Account expansion is built-in (land 3 sites, expand to 30)",
      "We design for operational teams, not just IT"
    ],
    ctaLabel: "Design Your Multi-Site AI Rollout"
  }
];

const Industries = () => {
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
              Industries We Serve
            </h1>
            <p className="text-xl text-white/70">
              We don't serve everyone. We focus on four high-intent niches where AI is operational, budgets exist, cloud-only is failing, and compliance, latency, or cost constraints demand private infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Sections */}
      {industries.map((industry, idx) => (
        <section 
          key={industry.id} 
          id={industry.id}
          className={idx % 2 === 0 ? "py-20 bg-background" : "py-20 bg-surface-elevated"}
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center`}>
                  <industry.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary">{industry.title}</h2>
                  <p className="text-accent">{industry.subtitle}</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Who We Serve */}
                <div className="lg:col-span-1">
                  <h3 className="font-semibold text-primary mb-4">Who We Serve</h3>
                  <ul className="space-y-2">
                    {industry.whoWeServe.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What's Breaking */}
                <div className="lg:col-span-2">
                  <h3 className="font-semibold text-primary mb-4">What's Breaking</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {industry.problems.map((problem, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-medium text-primary text-sm">{problem.title}</div>
                          <div className="text-muted-foreground text-xs">{problem.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Scenario */}
              <div className="mt-8 bg-accent/5 rounded-xl p-6 border border-accent/20">
                <h3 className="font-semibold text-accent mb-4">Real Scenario</h3>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <span className="text-muted-foreground font-medium">Situation:</span>
                    <p className="text-primary mt-1">{industry.scenario.situation}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground font-medium">Solution:</span>
                    <p className="text-primary mt-1">{industry.scenario.solution}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground font-medium">Result:</span>
                    <p className="text-success font-semibold mt-1">{industry.scenario.result}</p>
                  </div>
                </div>
              </div>

              {/* What We Deploy */}
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                {industry.deployments.map((dep, i) => (
                  <div key={i} className="bg-card rounded-xl p-5 border border-border">
                    <dep.icon className="w-8 h-8 text-accent mb-3" />
                    <h4 className="font-semibold text-primary mb-1">{dep.title}</h4>
                    <p className="text-muted-foreground text-sm">{dep.desc}</p>
                  </div>
                ))}
              </div>

              {/* Why We Win */}
              <div className="mt-8 flex flex-wrap gap-4">
                {industry.whyWeWin.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full text-sm text-success">
                    <CheckCircle className="w-4 h-4" />
                    {item}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Button variant="hero" size="lg" className="group">
                  {industry.ctaLabel}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      <Footer />
    </main>
  );
};

export default Industries;
