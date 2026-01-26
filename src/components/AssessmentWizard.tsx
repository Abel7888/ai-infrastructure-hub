import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  X, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Building2, 
  Users, 
  Cloud, 
  AlertTriangle,
  Cpu,
  DollarSign,
  Settings,
  CheckCircle2,
  Loader2
} from "lucide-react";

interface AssessmentWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormData = {
  organization: string;
  companySize: string;
  aiInProduction: string;
  currentInfrastructure: string;
  challenges: string[];
  primaryWorkload: string;
  workloadLocation: string;
  monthlySpend: string;
  scalingConcern: string;
  operationPreference: string;
  name: string;
  email: string;
  company: string;
  role: string;
};

const initialFormData: FormData = {
  organization: "",
  companySize: "",
  aiInProduction: "",
  currentInfrastructure: "",
  challenges: [],
  primaryWorkload: "",
  workloadLocation: "",
  monthlySpend: "",
  scalingConcern: "",
  operationPreference: "",
  name: "",
  email: "",
  company: "",
  role: ""
};

const AssessmentWizard = ({ isOpen, onClose }: AssessmentWizardProps) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 8;

  const updateField = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleChallenge = (challenge: string) => {
    setFormData(prev => ({
      ...prev,
      challenges: prev.challenges.includes(challenge)
        ? prev.challenges.filter(c => c !== challenge)
        : [...prev.challenges, challenge]
    }));
  };

  const canProceed = () => {
    switch (step) {
      case 1: return formData.organization && formData.companySize;
      case 2: return formData.aiInProduction && formData.currentInfrastructure;
      case 3: return formData.challenges.length > 0;
      case 4: return formData.primaryWorkload && formData.workloadLocation;
      case 5: return formData.monthlySpend && formData.scalingConcern;
      case 6: return formData.operationPreference;
      case 7: return formData.name && formData.email && formData.company && formData.role;
      default: return true;
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xdaavdbv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          challenges: formData.challenges.join(", "),
          submittedAt: new Date().toISOString()
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setStep(0);
    setFormData(initialFormData);
    setIsSubmitted(false);
    onClose();
  };

  const SelectOption = ({ 
    selected, 
    onClick, 
    children 
  }: { 
    selected: boolean; 
    onClick: () => void; 
    children: React.ReactNode 
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
        selected 
          ? "border-accent bg-accent/10 text-primary" 
          : "border-border bg-card hover:border-accent/50 text-muted-foreground hover:text-primary"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
          selected ? "border-accent bg-accent" : "border-muted-foreground"
        }`}>
          {selected && <Check className="w-3 h-3 text-white" />}
        </div>
        <span className="font-medium">{children}</span>
      </div>
    </button>
  );

  const CheckboxOption = ({ 
    selected, 
    onClick, 
    children 
  }: { 
    selected: boolean; 
    onClick: () => void; 
    children: React.ReactNode 
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
        selected 
          ? "border-accent bg-accent/10 text-primary" 
          : "border-border bg-card hover:border-accent/50 text-muted-foreground hover:text-primary"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
          selected ? "border-accent bg-accent" : "border-muted-foreground"
        }`}>
          {selected && <Check className="w-3 h-3 text-white" />}
        </div>
        <span className="text-sm font-medium">{children}</span>
      </div>
    </button>
  );

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cpu className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-primary mb-3">
              Free AI Infrastructure Readiness Assessment
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Answer a few quick questions so we can understand your AI workload, constraints, and growth plans.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              This helps us determine whether on-prem, edge, hybrid, or cloud-first makes sense — or if you should not change anything yet.
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-accent bg-accent/10 px-4 py-2 rounded-full">
              <span>⏱️</span>
              <span>Takes ~2–3 minutes</span>
            </div>
          </div>
        );

      case 1:
        return (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                <Building2 className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-primary">Who You Are</h3>
                <p className="text-sm text-muted-foreground">Help us understand your organization</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-primary mb-3">
                  Which best describes your organization?
                </label>
                <div className="space-y-2">
                  {[
                    "Healthcare / Life Sciences",
                    "Financial Services / Insurance",
                    "Construction / Real Estate",
                    "Manufacturing / Logistics / Transportation",
                    "SaaS / AI-Native Software Company",
                    "Other"
                  ].map(option => (
                    <SelectOption
                      key={option}
                      selected={formData.organization === option}
                      onClick={() => updateField("organization", option)}
                    >
                      {option}
                    </SelectOption>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-3">
                  Company size (employees)?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {["1–20", "21–40", "41–100", "101–500", "500+"].map(option => (
                    <SelectOption
                      key={option}
                      selected={formData.companySize === option}
                      onClick={() => updateField("companySize", option)}
                    >
                      {option}
                    </SelectOption>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                <Cloud className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-primary">AI Reality Check</h3>
                <p className="text-sm text-muted-foreground">Current state of AI at your company</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-primary mb-3">
                  Is AI currently running in production at your company?
                </label>
                <div className="space-y-2">
                  {[
                    "Yes — customer-facing or revenue-impacting",
                    "Yes — internal operations",
                    "Pilots / proofs of concept only",
                    "Not yet, still exploring"
                  ].map(option => (
                    <SelectOption
                      key={option}
                      selected={formData.aiInProduction === option}
                      onClick={() => updateField("aiInProduction", option)}
                    >
                      {option}
                    </SelectOption>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-3">
                  What best describes your current AI infrastructure?
                </label>
                <div className="space-y-2">
                  {[
                    "Cloud-only (AWS / GCP / Azure)",
                    "Cloud + limited on-prem or edge",
                    "On-prem or edge-heavy",
                    "Not sure"
                  ].map(option => (
                    <SelectOption
                      key={option}
                      selected={formData.currentInfrastructure === option}
                      onClick={() => updateField("currentInfrastructure", option)}
                    >
                      {option}
                    </SelectOption>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-primary">Pain Signals</h3>
                <p className="text-sm text-muted-foreground">Select all challenges that apply</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary mb-3">
                Which challenges are you experiencing today?
              </label>
              <div className="space-y-2">
                {[
                  "Cloud AI costs are rising unpredictably",
                  "Inference latency is inconsistent",
                  "Data residency / compliance concerns",
                  "Video or sensor data is expensive to move to the cloud",
                  "GPU access or scheduling is a bottleneck",
                  "AI performance varies by site or team",
                  "None of the above"
                ].map(option => (
                  <CheckboxOption
                    key={option}
                    selected={formData.challenges.includes(option)}
                    onClick={() => toggleChallenge(option)}
                  >
                    {option}
                  </CheckboxOption>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                <Cpu className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-primary">Workload Clarity</h3>
                <p className="text-sm text-muted-foreground">Tell us about your AI workloads</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-primary mb-3">
                  What is your primary AI workload today?
                </label>
                <div className="space-y-2">
                  {[
                    "LLM / GenAI inference",
                    "Computer vision / video analytics",
                    "Forecasting, risk, or optimization models",
                    "Recommendation or personalization systems",
                    "Multiple workloads",
                    "Not clearly defined yet"
                  ].map(option => (
                    <SelectOption
                      key={option}
                      selected={formData.primaryWorkload === option}
                      onClick={() => updateField("primaryWorkload", option)}
                    >
                      {option}
                    </SelectOption>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-3">
                  Where does this workload need to run?
                </label>
                <div className="space-y-2">
                  {[
                    "Centralized (data center or cloud)",
                    "On-site / edge (job site, building, facility)",
                    "Both (hybrid)",
                    "Not sure"
                  ].map(option => (
                    <SelectOption
                      key={option}
                      selected={formData.workloadLocation === option}
                      onClick={() => updateField("workloadLocation", option)}
                    >
                      {option}
                    </SelectOption>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-primary">Cost & Scale</h3>
                <p className="text-sm text-muted-foreground">Understanding your investment</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-primary mb-3">
                  Roughly how much are you spending today on AI compute (monthly)?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["<$3K", "$3K–$10K", "$10K–$25K", "$25K+", "Not sure"].map(option => (
                    <SelectOption
                      key={option}
                      selected={formData.monthlySpend === option}
                      onClick={() => updateField("monthlySpend", option)}
                    >
                      {option}
                    </SelectOption>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-3">
                  If AI usage doubled in 6–12 months, would cost or performance become a problem?
                </label>
                <div className="space-y-2">
                  {[
                    "Yes — cost",
                    "Yes — performance / latency",
                    "Yes — compliance / risk",
                    "No",
                    "Unsure"
                  ].map(option => (
                    <SelectOption
                      key={option}
                      selected={formData.scalingConcern === option}
                      onClick={() => updateField("scalingConcern", option)}
                    >
                      {option}
                    </SelectOption>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                <Settings className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-primary">Ownership & Operations</h3>
                <p className="text-sm text-muted-foreground">How you prefer to operate</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary mb-3">
                How do you prefer AI infrastructure to be operated?
              </label>
              <div className="space-y-2">
                {[
                  "Fully managed (no new hires)",
                  "Light internal ownership + external support",
                  "Fully in-house",
                  "Not sure yet"
                ].map(option => (
                  <SelectOption
                    key={option}
                    selected={formData.operationPreference === option}
                    onClick={() => updateField("operationPreference", option)}
                  >
                    {option}
                  </SelectOption>
                ))}
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-primary">Get Your Assessment</h3>
                <p className="text-sm text-muted-foreground">Where should we send your results?</p>
              </div>
            </div>

            <div className="bg-accent/5 rounded-xl p-4 mb-6 border border-accent/20">
              <p className="text-sm text-muted-foreground">
                Based on your answers, we'll review:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-primary">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Whether node-first, edge, hybrid, or cloud-first makes sense</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>What a low-risk starting point would look like</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Where cost, latency, or compliance issues may emerge next</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Work Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => updateField("company", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Company name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Role / Title</label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => updateField("role", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your role"
                />
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-4 text-center">
              We don't sell hardware on this call.<br />
              This is a strategy and sizing conversation.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-lg max-h-[90vh] bg-background rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-muted transition-colors"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>

        {/* Progress Bar */}
        {step > 0 && !isSubmitted && (
          <div className="h-1 bg-muted">
            <div 
              className="h-full bg-accent transition-all duration-300"
              style={{ width: `${(step / (totalSteps - 1)) * 100}%` }}
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-primary mb-3">
                  Assessment Submitted!
                </h2>
                <p className="text-muted-foreground mb-6">
                  Thank you for completing the assessment. We'll review your responses and send you a personalized infrastructure recommendation within 24-48 hours.
                </p>
                <Button variant="hero" onClick={handleClose}>
                  Close
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {renderStep()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        {!isSubmitted && (
          <div className="p-4 border-t border-border bg-surface-elevated">
            <div className="flex items-center justify-between gap-3">
              {step > 0 ? (
                <Button 
                  variant="outline" 
                  onClick={() => setStep(s => s - 1)}
                  className="gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>
              ) : (
                <div />
              )}

              {step === 0 ? (
                <Button variant="hero" onClick={() => setStep(1)} className="gap-2">
                  Start Assessment
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : step < 7 ? (
                <Button 
                  variant="hero" 
                  onClick={() => setStep(s => s + 1)}
                  disabled={!canProceed()}
                  className="gap-2"
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button 
                  variant="hero" 
                  onClick={handleSubmit}
                  disabled={!canProceed() || isSubmitting}
                  className="gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Get My Assessment Summary
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>
              )}
            </div>

            {/* Step Indicator */}
            {step > 0 && (
              <div className="flex justify-center gap-1.5 mt-4">
                {Array.from({ length: totalSteps - 1 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i + 1 <= step ? "bg-accent" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default AssessmentWizard;
