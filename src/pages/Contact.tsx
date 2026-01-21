import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  ArrowRight, CheckCircle, Mail, Phone, MapPin, 
  Calendar, Clock, FileText
} from "lucide-react";

const challenges = [
  { id: "costs", label: "Cloud AI costs are unpredictable or too high" },
  { id: "compliance", label: "Compliance or data residency requirements" },
  { id: "latency", label: "Inference latency is too slow" },
  { id: "gpu", label: "GPU availability / scarcity issues" },
  { id: "multisite", label: "Need to deploy AI across multiple sites" },
  { id: "performance", label: "Performance inconsistency or noisy neighbor problems" },
  { id: "lockin", label: "Vendor lock-in concerns" }
];

const deliverables = [
  "AI workload characterization and performance requirements",
  "Infrastructure architecture recommendations (cloud, private, hybrid)",
  "3-year total cost of ownership (TCO) model with payback analysis",
  "GPU sizing, scheduling, and utilization strategy",
  "Compliance and security framework (HIPAA, PCI-DSS, SOC2, etc.)",
  "Vendor recommendations and procurement roadmap",
  "Deployment timeline and risk mitigation plan"
];

const Contact = () => {
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);

  const toggleChallenge = (id: string) => {
    setSelectedChallenges(prev => 
      prev.includes(id) 
        ? prev.filter(c => c !== id)
        : [...prev, id]
    );
  };

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
              Start With Strategy: AI Infrastructure Readiness Assessment
            </h1>
            <p className="text-xl text-white/70">
              A 2-3 week engagement that maps your AI workloads, sizes your infrastructure requirements, and designs your path forward.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border"
            >
              <h2 className="text-2xl font-bold text-primary mb-6">Request Your Assessment</h2>
              
              <form className="space-y-6">
                {/* Company Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-primary text-lg">Company Information</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input id="company" placeholder="Your company" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="finance">Financial Services</SelectItem>
                          <SelectItem value="insurance">Insurance</SelectItem>
                          <SelectItem value="construction">Construction</SelectItem>
                          <SelectItem value="logistics">Logistics</SelectItem>
                          <SelectItem value="saas">SaaS/AI Startup</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Number of Locations</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">Single site</SelectItem>
                        <SelectItem value="2-5">2-5 sites</SelectItem>
                        <SelectItem value="6-20">6-20 sites</SelectItem>
                        <SelectItem value="20+">20+ sites</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Current AI Infrastructure */}
                <div className="space-y-4 pt-6 border-t border-border">
                  <h3 className="font-semibold text-primary text-lg">Current AI Infrastructure</h3>
                  
                  <div className="space-y-2">
                    <Label>Where do you currently run AI workloads? *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cloud">Cloud only</SelectItem>
                        <SelectItem value="onprem">On-premises only</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                        <SelectItem value="planning">Planning first deployment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Approximate monthly cloud AI spend</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">$0</SelectItem>
                        <SelectItem value="<10k">Less than $10K</SelectItem>
                        <SelectItem value="10-50k">$10K - $50K</SelectItem>
                        <SelectItem value="50-100k">$50K - $100K</SelectItem>
                        <SelectItem value="100-250k">$100K - $250K</SelectItem>
                        <SelectItem value="250k+">$250K+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="usecases">Primary AI use cases *</Label>
                    <Textarea 
                      id="usecases" 
                      placeholder="e.g., Medical image analysis, patient risk scoring, fraud detection..."
                      rows={3}
                    />
                  </div>
                </div>

                {/* Key Challenges */}
                <div className="space-y-4 pt-6 border-t border-border">
                  <h3 className="font-semibold text-primary text-lg">Key Challenges (select all that apply)</h3>
                  
                  <div className="grid sm:grid-cols-2 gap-3">
                    {challenges.map((challenge) => (
                      <div 
                        key={challenge.id}
                        className="flex items-start gap-3 p-3 rounded-lg border border-border hover:border-accent/30 transition-colors cursor-pointer"
                        onClick={() => toggleChallenge(challenge.id)}
                      >
                        <Checkbox 
                          id={challenge.id} 
                          checked={selectedChallenges.includes(challenge.id)}
                          onCheckedChange={() => toggleChallenge(challenge.id)}
                        />
                        <Label htmlFor={challenge.id} className="text-sm cursor-pointer">
                          {challenge.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div className="space-y-4 pt-6 border-t border-border">
                  <h3 className="font-semibold text-primary text-lg">Project Timeline</h3>
                  
                  <div className="space-y-2">
                    <Label>When do you need infrastructure operational? *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="exploring">Exploring options</SelectItem>
                        <SelectItem value="1-3">1-3 months</SelectItem>
                        <SelectItem value="3-6">3-6 months</SelectItem>
                        <SelectItem value="6-12">6-12 months</SelectItem>
                        <SelectItem value="12+">12+ months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4 pt-6 border-t border-border">
                  <h3 className="font-semibold text-primary text-lg">Contact Information</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input id="name" placeholder="Full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title">Title *</Label>
                      <Input id="title" placeholder="Your role" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="work@company.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>
                </div>

                {/* Additional Context */}
                <div className="space-y-2 pt-6 border-t border-border">
                  <Label htmlFor="context">Additional Context (optional)</Label>
                  <Textarea 
                    id="context" 
                    placeholder="Anything else we should know about your AI infrastructure needs or constraints?"
                    rows={4}
                  />
                </div>

                <p className="text-xs text-muted-foreground">
                  We respect your privacy. Your information will only be used to contact you about your assessment request and will not be shared with third parties.
                </p>

                <Button variant="hero" size="xl" className="w-full group">
                  Request My Assessment
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            {/* What You Get */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-accent/5 rounded-2xl p-6 border border-accent/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">$0-15K</div>
                  <div className="text-xs text-muted-foreground">(credited toward deployment)</div>
                </div>
              </div>
              
              <h3 className="font-semibold text-primary mb-4">What You Get</h3>
              <ul className="space-y-2">
                {deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-4 border-t border-accent/20 flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">Timeline: 2-3 weeks</span>
              </div>
            </motion.div>

            {/* What Happens Next */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border"
            >
              <h3 className="font-semibold text-primary mb-4">What Happens Next</h3>
              <div className="space-y-4">
                {[
                  { time: "Within 24 hours", action: "We'll email you to confirm receipt and ask any clarifying questions" },
                  { time: "Within 48 hours", action: "We'll send you a proposed assessment scope, timeline, and investment level" },
                  { time: "Week 1-2", action: "Discovery interviews, current state analysis, and technical requirements gathering" },
                  { time: "Week 2-3", action: "Architecture design, cost modeling, and recommendations preparation" },
                  { time: "Week 3", action: "Findings presentation and next steps discussion" }
                ].map((step, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-accent text-xs font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-primary">{step.time}</div>
                      <div className="text-sm text-muted-foreground">{step.action}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Alternative Contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border"
            >
              <h3 className="font-semibold text-primary mb-4">Prefer to Talk First?</h3>
              
              <div className="space-y-4">
                <a href="mailto:hello@infrastrategy.ai" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">hello@infrastrategy.ai</span>
                </a>
                <a href="tel:+1-555-123-4567" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                  <Phone className="w-5 h-5" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>
              
              <Button variant="outline" size="lg" className="w-full mt-6 group">
                <Calendar className="w-4 h-4" />
                Schedule a 20-Minute Intro Call
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Contact;
