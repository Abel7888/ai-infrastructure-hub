import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "We cut AI inference costs 64% while improving compliance posture. Their assessment revealed we were over-provisioned in cloud and under-utilizing GPUs. They think like CFOs, not vendors.",
    author: "VP Infrastructure",
    company: "Regional Healthcare System",
    result: "64% cost reduction"
  },
  {
    quote: "Real-time safety monitoring on 120 job sites seemed impossible with cloud latency. Their edge deployment strategy gave us sub-50ms alerts even in zero-connectivity scenarios.",
    author: "Technology Director",
    company: "National Construction Firm",
    result: "90% cost reduction"
  },
  {
    quote: "Our inference margins were killing us—$18 per user cost on $49 revenue. After their assessment, we're at $3.20 with an 18-month payback. They changed our unit economics entirely.",
    author: "CTO",
    company: "AI Legal Research SaaS",
    result: "82% margin improvement"
  }
];

const SocialProofSection = () => {
  return (
    <section className="py-24 bg-surface-elevated">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Client Results
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Trusted by Industry Leaders
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-card rounded-2xl p-8 shadow-card border border-border"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center shadow-accent">
                  <Quote className="w-4 h-4 text-accent-foreground" />
                </div>
              </div>
              
              {/* Result Badge */}
              <div className="flex justify-end mb-4">
                <span className="inline-block px-3 py-1 bg-success/10 text-success text-sm font-semibold rounded-full">
                  {testimonial.result}
                </span>
              </div>
              
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="pt-6 border-t border-border">
                <div className="font-semibold text-primary">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="w-2 h-2 bg-success rounded-full" />
            <span className="text-sm font-medium">HIPAA Compliant</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="w-2 h-2 bg-success rounded-full" />
            <span className="text-sm font-medium">SOC 2 Certified</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="w-2 h-2 bg-success rounded-full" />
            <span className="text-sm font-medium">PCI-DSS Ready</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="w-2 h-2 bg-success rounded-full" />
            <span className="text-sm font-medium">GDPR Compliant</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
