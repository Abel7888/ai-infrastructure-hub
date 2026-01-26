import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AssessmentWizard from "./AssessmentWizard";

export type IndustryType = "regulated" | "physical" | "aiforward" | "multisite";

interface IndustryModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: IndustryType;
}

const industryContent: Record<IndustryType, {
  title: string;
  subtitle: string;
  painPoints: { title: string; description: string }[];
  solutions: { title: string; description: string }[];
  cta: string;
}> = {
  regulated: {
    title: "Regulated Enterprises",
    subtitle: "Healthcare, Finance, Insurance",
    painPoints: [
      {
        title: "Data Residency Violations",
        description: "Cloud AI providers store and process data across regions, creating HIPAA, PCI-DSS, and GDPR compliance nightmares. Auditors are increasingly flagging cloud AI as a risk."
      },
      {
        title: "Unpredictable AI Costs",
        description: "GPU pricing in cloud is volatile and unpredictable. A single model training run can blow through quarterly budgets, making financial planning impossible."
      },
      {
        title: "Audit Trail Gaps",
        description: "Cloud providers offer limited visibility into where your data moves, who accesses it, and how models are versioned—critical gaps for regulatory audits."
      },
      {
        title: "Vendor Lock-In Risk",
        description: "Proprietary AI services create dependency. When you need to switch providers or bring AI in-house, migration costs can exceed original implementation."
      }
    ],
    solutions: [
      {
        title: "Complete Data Sovereignty",
        description: "Your data never leaves your premises. Full control over storage, processing, and model training with air-gapped options for the most sensitive workloads."
      },
      {
        title: "Predictable Fixed Costs",
        description: "One-time CapEx with known operational costs. No surprise bills, no usage spikes, no budget overruns. CFOs love the predictability."
      },
      {
        title: "Audit-Ready Infrastructure",
        description: "Built-in logging, access controls, and documentation that satisfies HIPAA, SOC 2, PCI-DSS, and GDPR requirements out of the box."
      },
      {
        title: "Zero Vendor Lock-In",
        description: "You own the hardware, the software stack is open, and we provide full documentation. Switch providers or self-manage anytime."
      }
    ],
    cta: "Assess My Compliance Requirements"
  },
  physical: {
    title: "Physical Operations",
    subtitle: "Construction, Logistics, Real Estate",
    painPoints: [
      {
        title: "Cloud Latency Kills Real-Time AI",
        description: "Round-trip to cloud adds 200-500ms latency. For safety monitoring, equipment alerts, or real-time video analytics, that delay can mean missed incidents."
      },
      {
        title: "Connectivity Dead Zones",
        description: "Job sites, warehouses, and remote facilities often have poor or no internet. Cloud-dependent AI simply doesn't work where you need it most."
      },
      {
        title: "Bandwidth Costs Explode",
        description: "Streaming video feeds to cloud for analysis costs $0.09/GB. A single 4K camera generates 15GB/day. Multiply by 100 cameras and do the math."
      },
      {
        title: "Fragmented Point Solutions",
        description: "Different vendors for safety, equipment monitoring, and operations creates integration nightmares and data silos across your sites."
      }
    ],
    solutions: [
      {
        title: "Sub-50ms Edge Inference",
        description: "Process AI at the source. Our edge nodes deliver real-time alerts for safety violations, equipment anomalies, and operational events as they happen."
      },
      {
        title: "Offline-Capable AI",
        description: "Full AI functionality even with zero connectivity. Sync when connected, operate independently when not. Your AI never goes down."
      },
      {
        title: "Local Processing, Zero Bandwidth",
        description: "Process video and sensor data on-site. Only send alerts and summaries to cloud. Cut bandwidth costs by 95%+ while improving response time."
      },
      {
        title: "Unified Operations Platform",
        description: "Single infrastructure stack for all AI workloads—safety, equipment, operations, logistics—with standardized deployment across all sites."
      }
    ],
    cta: "Design My Edge AI Strategy"
  },
  aiforward: {
    title: "AI-Forward Companies",
    subtitle: "SaaS, AI Startups, Tech Vendors",
    painPoints: [
      {
        title: "GPU Scarcity & Allocation",
        description: "Cloud GPU availability is unpredictable. Capacity reservations require long commitments. Spot instances get terminated mid-training."
      },
      {
        title: "Inference Margin Collapse",
        description: "At scale, cloud inference costs destroy unit economics. $18/user cost on $49 revenue isn't a business model—it's a countdown to shutdown."
      },
      {
        title: "Performance Variability",
        description: "Shared cloud infrastructure means noisy neighbors. Your model latency varies based on what other tenants are doing. Customers notice."
      },
      {
        title: "Scaling Cost Curves",
        description: "Cloud costs scale linearly (or worse) with usage. Every new customer increases costs proportionally. There's no path to improving margins."
      }
    ],
    solutions: [
      {
        title: "Guaranteed GPU Capacity",
        description: "Your GPUs, dedicated to you, available 24/7. No reservations, no spot terminations, no capacity planning anxiety. Scale when you're ready."
      },
      {
        title: "Fixed Inference Costs",
        description: "Convert variable cloud spend to fixed infrastructure cost. Our clients typically see 70-85% cost reduction at scale with 18-month payback."
      },
      {
        title: "Consistent Performance SLAs",
        description: "Dedicated hardware means predictable latency. Guarantee your customers the same experience every time, not 'usually fast, sometimes slow.'"
      },
      {
        title: "Margin-Improving Scale",
        description: "Fixed infrastructure costs + growing revenue = improving margins. The more you grow, the better your unit economics get."
      }
    ],
    cta: "Model My Infrastructure Economics"
  },
  multisite: {
    title: "Multi-Site Operators",
    subtitle: "Hospital Networks, Retail Chains, Franchise Operations",
    painPoints: [
      {
        title: "Inconsistent AI Deployments",
        description: "Every site has different hardware, different configurations, different capabilities. What works at Site A fails at Site B. Support is a nightmare."
      },
      {
        title: "No Centralized Visibility",
        description: "You can't see what's running where, which models are deployed, or how infrastructure is performing across your network. Flying blind at scale."
      },
      {
        title: "Deployment Takes Months",
        description: "Each new site is a custom project. No playbooks, no standards, no repeatable process. Scaling from 10 to 100 sites seems impossible."
      },
      {
        title: "Local IT Burden",
        description: "Site-level IT staff aren't AI infrastructure experts. They can't troubleshoot, optimize, or maintain complex AI systems. Everything escalates to corporate."
      }
    ],
    solutions: [
      {
        title: "Standardized Node Specs",
        description: "Pre-defined, tested, documented infrastructure specifications. Every site gets identical capabilities. Support knows exactly what's deployed everywhere."
      },
      {
        title: "Centralized Management Console",
        description: "Single pane of glass for all sites. Monitor health, deploy models, manage updates, and track performance from corporate—no site visits required."
      },
      {
        title: "Repeatable Deployment Playbooks",
        description: "Site deployment drops from months to weeks. Standardized process, standardized training, standardized handoff. Scale to 500 sites with the same team."
      },
      {
        title: "Remote-First Operations",
        description: "Self-healing infrastructure with remote diagnostics. Local IT does physical tasks only. All intelligence and troubleshooting happens centrally."
      }
    ],
    cta: "Plan My Multi-Site Rollout"
  }
};

const IndustryModal = ({ isOpen, onClose, type }: IndustryModalProps) => {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const content = industryContent[type];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-2xl bg-background z-50 overflow-y-auto shadow-2xl"
            >
              {/* Header */}
              <div className="sticky top-0 bg-primary p-6 z-10">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
                <div>
                  <p className="text-accent text-sm font-medium mb-1">{content.subtitle}</p>
                  <h2 className="text-2xl font-bold text-white">{content.title}</h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-8">
                {/* Pain Points */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                    <h3 className="text-lg font-bold text-primary">The Pain Points</h3>
                  </div>
                  <div className="space-y-4">
                    {content.painPoints.map((pain, index) => (
                      <div
                        key={index}
                        className="bg-destructive/5 border border-destructive/20 rounded-xl p-4"
                      >
                        <h4 className="font-semibold text-primary mb-2 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 flex-shrink-0" />
                          {pain.title}
                        </h4>
                        <p className="text-muted-foreground text-sm pl-3.5">{pain.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solutions */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <h3 className="text-lg font-bold text-primary">Our Solutions</h3>
                  </div>
                  <div className="space-y-4">
                    {content.solutions.map((solution, index) => (
                      <div
                        key={index}
                        className="bg-accent/5 border border-accent/20 rounded-xl p-4"
                      >
                        <h4 className="font-semibold text-primary mb-2 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                          {solution.title}
                        </h4>
                        <p className="text-muted-foreground text-sm pl-3.5">{solution.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-surface-elevated rounded-xl p-6 text-center">
                  <p className="text-muted-foreground text-sm mb-4">
                    Ready to solve these challenges? Start with a free infrastructure assessment.
                  </p>
                  <Button
                    variant="hero"
                    size="lg"
                    className="group"
                    onClick={() => setIsAssessmentOpen(true)}
                  >
                    {content.cta}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <p className="text-xs text-muted-foreground mt-3">
                    No commitment required. Get clarity on your AI infrastructure needs.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Assessment Wizard */}
      <AssessmentWizard
        isOpen={isAssessmentOpen}
        onClose={() => setIsAssessmentOpen(false)}
      />
    </>
  );
};

export default IndustryModal;
