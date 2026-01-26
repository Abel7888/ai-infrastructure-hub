import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, CheckCircle, XCircle, ArrowRight, Server, Cpu, Zap, Cloud } from "lucide-react";
import { useState } from "react";
import AssessmentWizard from "./AssessmentWizard";

export type ArchitectureType = "node" | "edge" | "cluster" | "hybrid";

interface ArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: ArchitectureType;
}

const architectureContent = {
  node: {
    icon: Server,
    title: "Private AI Compute Nodes",
    subtitle: "Department-Scale AI",
    buttonLabel: "View Node Architecture",
    color: "from-blue-500 to-blue-600",
    ctaButton: "Assess My Node Sizing",
    sections: {
      solves: {
        title: "What This Architecture Solves",
        content: "Private AI Compute Nodes are designed for organizations that need predictable performance, data isolation, and fast approvals without committing to a full AI cluster.",
        highlight: "This is the safest way to move AI from pilot to production."
      },
      built: {
        title: "How It's Built",
        items: [
          "Single AI server",
          "4–8 GPUs (H100, L40S, or L4 depending on workload)",
          "Local NVMe storage for models and data",
          "Secure runtime (containerized AI workloads)",
          "Optional GPU scheduling for multi-team use"
        ],
        note: "Runs in your data center or colocation. No cloud dependency required."
      },
      wrongFit: {
        title: "When This Is Not the Right Fit",
        items: [
          "Massive model training across dozens of GPUs",
          "Highly spiky workloads with no baseline usage",
          "Teams that don't yet have production AI use cases"
        ]
      },
      firstDeployment: {
        title: "Typical First Deployment",
        items: ["1 node", "1–2 AI workloads", "1 department", "Live in weeks"],
        note: "This keeps approvals simple and risk contained."
      },
      expansion: {
        title: "Expansion Path",
        items: [
          "Add GPUs",
          "Add a second node",
          "Convert into a small cluster",
          "Introduce GPU scheduling when utilization increases"
        ]
      }
    }
  },
  edge: {
    icon: Cpu,
    title: "Edge AI & Operations Nodes",
    subtitle: "On-Site Inference",
    buttonLabel: "View Edge Architecture",
    color: "from-amber-500 to-amber-600",
    ctaButton: "See If Edge AI Makes Sense for My Site",
    sections: {
      solves: {
        title: "What This Architecture Solves",
        content: "Edge AI Nodes are built for environments where latency, connectivity, or reliability make cloud AI impractical.",
        highlight: "AI runs where the data is created."
      },
      built: {
        title: "How It's Built",
        items: [
          "Ruggedized edge server",
          "Inference-optimized GPUs",
          "Local model execution",
          "Optional sync with central systems",
          "Designed for intermittent or offline operation"
        ],
        note: "AI continues running even if connectivity drops."
      },
      wrongFit: {
        title: "When This Is Not the Right Fit",
        items: [
          "Heavy model training",
          "Cloud-only digital businesses",
          "Teams without physical operations"
        ]
      },
      firstDeployment: {
        title: "Typical First Deployment",
        items: ["1 site", "1 workload (vision, video, anomaly detection)", "Immediate operational ROI"],
        note: ""
      },
      expansion: {
        title: "Expansion Path",
        items: [
          "Replicate node across sites",
          "Centralize monitoring",
          "Introduce hybrid orchestration later"
        ]
      }
    }
  },
  cluster: {
    icon: Zap,
    title: "Scalable AI Clusters",
    subtitle: "Multi-Tenant Platforms",
    buttonLabel: "View Cluster Architecture",
    color: "from-purple-500 to-purple-600",
    ctaButton: "Evaluate Cluster Readiness",
    sections: {
      solves: {
        title: "What This Architecture Solves",
        content: "AI clusters are designed for multiple teams, multiple models, and sustained AI demand where efficiency matters as much as performance.",
        highlight: ""
      },
      built: {
        title: "How It's Built",
        items: [
          "Multiple GPU nodes",
          "High-speed networking (InfiniBand / RoCE)",
          "Shared storage layer",
          "GPU scheduling and isolation",
          "Centralized AI ops tooling"
        ],
        note: ""
      },
      wrongFit: {
        title: "When This Is Not the Right Fit",
        items: [
          "First-time AI deployments",
          "Single-team workloads",
          "Organizations without steady GPU demand"
        ]
      },
      firstDeployment: {
        title: "Typical First Deployment",
        items: [
          "Starts from validated node deployments",
          "Expands only when utilization justifies it"
        ],
        note: "Clusters are earned, not sold upfront."
      },
      expansion: {
        title: "Expansion Path",
        items: [
          "Add nodes as demand grows",
          "Increase GPU density",
          "Optimize cost-per-inference"
        ]
      }
    }
  },
  hybrid: {
    icon: Cloud,
    title: "Hybrid AI Deployments",
    subtitle: "Balanced Architecture",
    buttonLabel: "View Hybrid Architecture",
    color: "from-emerald-500 to-emerald-600",
    ctaButton: "Map My Hybrid Strategy",
    sections: {
      solves: {
        title: "What This Architecture Solves",
        content: "Hybrid AI deployments allow organizations to run sensitive workloads privately while retaining cloud flexibility for development and burst demand.",
        highlight: ""
      },
      built: {
        title: "How It's Built",
        items: [
          "Private AI nodes on-prem or at edge",
          "Cloud-based dev/test and burst",
          "Unified orchestration layer",
          "Policy-driven workload placement"
        ],
        note: ""
      },
      wrongFit: {
        title: "When This Is Not the Right Fit",
        items: [
          "Teams with no compliance or latency constraints",
          "Very early AI experimentation"
        ]
      },
      firstDeployment: {
        title: "Typical First Deployment",
        items: [
          "One private node",
          "Cloud remains as safety net",
          "Gradual workload migration"
        ],
        note: ""
      },
      expansion: {
        title: "Expansion Path",
        items: [
          "Shift steady workloads on-prem",
          "Keep cloud for burst",
          "Optimize costs without lock-in"
        ]
      }
    }
  }
};

const ArchitectureModal = ({ isOpen, onClose, type }: ArchitectureModalProps) => {
  const [showAssessment, setShowAssessment] = useState(false);
  const content = architectureContent[type];
  const IconComponent = content.icon;

  const handleCTAClick = () => {
    setShowAssessment(true);
  };

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

            {/* Slide-over Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-full max-w-2xl bg-background z-50 shadow-2xl overflow-y-auto"
            >
              {/* Header */}
              <div className={`bg-gradient-to-br ${content.color} p-8 sticky top-0 z-10`}>
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm font-medium">{content.subtitle}</p>
                    <h2 className="text-2xl font-bold text-white">{content.title}</h2>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-8">
                {/* Section 1: What This Solves */}
                <section>
                  <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center text-xs font-bold text-accent">1</span>
                    {content.sections.solves.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {content.sections.solves.content}
                  </p>
                  {content.sections.solves.highlight && (
                    <p className="mt-3 text-accent font-semibold">
                      {content.sections.solves.highlight}
                    </p>
                  )}
                </section>

                {/* Section 2: How It's Built */}
                <section>
                  <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center text-xs font-bold text-accent">2</span>
                    {content.sections.built.title}
                  </h3>
                  <div className="bg-surface-elevated rounded-xl p-5 border border-border">
                    <ul className="space-y-2">
                      {content.sections.built.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {content.sections.built.note && (
                      <p className="mt-4 pt-4 border-t border-border text-sm text-accent font-medium">
                        {content.sections.built.note}
                      </p>
                    )}
                  </div>
                </section>

                {/* Section 3: When It's Wrong */}
                <section>
                  <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-red-500/10 rounded-full flex items-center justify-center text-xs font-bold text-red-500">3</span>
                    {content.sections.wrongFit.title}
                  </h3>
                  <div className="bg-red-500/5 rounded-xl p-5 border border-red-500/20">
                    <ul className="space-y-2">
                      {content.sections.wrongFit.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                {/* Section 4: First Deployment */}
                <section>
                  <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center text-xs font-bold text-accent">4</span>
                    {content.sections.firstDeployment.title}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {content.sections.firstDeployment.items.map((item, i) => (
                      <div key={i} className="bg-surface-elevated rounded-lg p-4 text-center border border-border">
                        <span className="text-sm font-medium text-primary">{item}</span>
                      </div>
                    ))}
                  </div>
                  {content.sections.firstDeployment.note && (
                    <p className="mt-3 text-sm text-accent font-medium">
                      {content.sections.firstDeployment.note}
                    </p>
                  )}
                </section>

                {/* Section 5: Expansion Path */}
                <section>
                  <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center text-xs font-bold text-accent">5</span>
                    {content.sections.expansion.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {content.sections.expansion.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="bg-accent/10 text-accent px-3 py-1.5 rounded-full text-sm font-medium">
                          {item}
                        </span>
                        {i < content.sections.expansion.items.length - 1 && (
                          <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        )}
                      </div>
                    ))}
                  </div>
                </section>

                {/* CTA */}
                <section className="pt-6 border-t border-border">
                  <Button 
                    variant="hero" 
                    size="xl" 
                    className="w-full group"
                    onClick={handleCTAClick}
                  >
                    {content.ctaButton}
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <p className="text-center text-xs text-muted-foreground mt-3">
                    Architecture references are vendor-neutral and strategy-led.
                  </p>
                </section>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Assessment Wizard */}
      <AssessmentWizard 
        isOpen={showAssessment} 
        onClose={() => setShowAssessment(false)} 
      />
    </>
  );
};

export { architectureContent };
export default ArchitectureModal;
