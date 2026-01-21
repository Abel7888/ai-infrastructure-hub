import { motion } from "framer-motion";
import { DollarSign, Shield, Gauge } from "lucide-react";

const problems = [
  {
    icon: DollarSign,
    title: "Cloud Cost Collapse",
    description: "AI inference costs exceeding $100K/month with no ceiling in sight. Budgets spiral out of control as workloads scale.",
    stat: "$47K",
    statLabel: "avg. monthly overspend"
  },
  {
    icon: Shield,
    title: "Compliance Gridlock",
    description: "Data residency, HIPAA, PCI requirements impossible to guarantee in multi-tenant cloud environments.",
    stat: "89%",
    statLabel: "of audits find violations"
  },
  {
    icon: Gauge,
    title: "Performance Unpredictability",
    description: "GPU unavailability and inference latency killing production AI applications when you need them most.",
    stat: "200ms+",
    statLabel: "added cloud latency"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const ProblemSection = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Companies Choose Private AI Infrastructure
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cloud AI promises flexibility but delivers unpredictable costs, compliance risks, and performance bottlenecks.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-accent/30"
            >
              <div className="w-14 h-14 bg-destructive/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-3">
                {problem.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {problem.description}
              </p>
              
              <div className="pt-6 border-t border-border">
                <div className="text-3xl font-bold text-destructive">{problem.stat}</div>
                <div className="text-sm text-muted-foreground">{problem.statLabel}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
