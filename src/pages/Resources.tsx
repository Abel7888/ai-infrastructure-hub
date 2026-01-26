import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, FileText, Download, BookOpen } from "lucide-react";
import { getArticles, getFeaturedArticles } from "@/lib/articles";

const categories = [
  { id: "economics", label: "AI Infrastructure Economics" },
  { id: "technical", label: "Technical Deep Dives" },
  { id: "compliance", label: "Compliance & Security" },
  { id: "playbooks", label: "Industry Playbooks" }
];


const leadMagnets = [
  {
    icon: FileText,
    title: "AI Infrastructure Sizing Calculator",
    description: "Excel tool to estimate your GPU and infrastructure requirements based on workload characteristics.",
    type: "Excel Template"
  },
  {
    icon: Download,
    title: "Cloud vs. Private AI Cost Comparison",
    description: "A comprehensive template for modeling 3-year TCO across cloud, private, and hybrid options.",
    type: "PDF + Spreadsheet"
  },
  {
    icon: BookOpen,
    title: "AI Infrastructure RFP Template",
    description: "A complete RFP template for regulated enterprises evaluating private AI infrastructure vendors.",
    type: "Word Document"
  }
];

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const allArticles = getArticles();
  const featuredArticles = getFeaturedArticles();
  const filteredArticles = activeCategory 
    ? allArticles.filter(a => a.category === activeCategory)
    : allArticles;

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
              AI Infrastructure Insights & Practical Guides
            </h1>
            <p className="text-xl text-white/70">
              Deep dives into AI infrastructure economics, technical architecture, compliance frameworks, and industry-specific playbooks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-surface-elevated border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            <Button 
              variant={activeCategory === null ? "hero" : "outline"} 
              size="sm"
              onClick={() => setActiveCategory(null)}
            >
              All Resources
            </Button>
            {categories.map((cat) => (
              <Button 
                key={cat.id} 
                variant={activeCategory === cat.id ? "hero" : "outline"} 
                size="sm"
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-primary">Featured Insights</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArticles.slice(0, 4).map((article, index) => (
              <Link key={article.slug} to={`/resources/${article.slug}`}>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-card rounded-xl overflow-hidden shadow-card border border-border hover:border-accent/30 transition-colors h-full"
                >
                  <div className="h-32 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                    <FileText className="w-12 h-12 text-accent/50" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">
                      {categories.find(c => c.id === article.category)?.label}
                    </span>
                    <h3 className="font-semibold text-primary mt-2 mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {article.readTime}
                      </span>
                      <ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 bg-surface-elevated">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-primary">All Resources</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <Link key={article.slug} to={`/resources/${article.slug}`}>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 6) * 0.05 }}
                  className="group bg-card rounded-xl p-6 shadow-card border border-border hover:border-accent/30 transition-colors cursor-pointer h-full"
                >
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">
                    {categories.find(c => c.id === article.category)?.label}
                  </span>
                  <h3 className="font-semibold text-primary mt-2 mb-2 group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {article.readTime}
                    </span>
                    <span className="text-accent text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Read more <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnets */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Free Tools</span>
            <h2 className="text-3xl font-bold text-white mt-2">Download Our Templates</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {leadMagnets.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <span className="text-xs text-accent font-medium">{item.type}</span>
                <h3 className="font-semibold text-white mt-2 mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm mb-4">{item.description}</p>
                <Button variant="heroSecondary" size="sm" className="w-full">
                  <Download className="w-4 h-4" /> Download Free
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Need Expert Help?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Our AI Infrastructure Readiness Assessment gives you personalized recommendations based on your specific workloads, compliance requirements, and growth trajectory.
            </p>
            <Button variant="hero" size="xl" className="group">
              Schedule an Assessment
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Resources;
