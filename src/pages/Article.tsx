import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar, Share2, BookmarkPlus, ChevronRight } from "lucide-react";
import { getArticleBySlug, getArticles } from "@/lib/articles";

const categories: Record<string, string> = {
  economics: "AI Infrastructure Economics",
  technical: "Technical Deep Dives",
  compliance: "Compliance & Security",
  playbooks: "Industry Playbooks"
};

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;
  const allArticles = getArticles();
  const relatedArticles = allArticles
    .filter(a => a.slug !== slug && a.category === article?.category)
    .slice(0, 3);

  if (!article) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-20">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold text-primary mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist or may have been moved.</p>
            <div className="flex items-center gap-3">
              <Link to="/resources">
                <Button variant="hero">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Resources
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline">
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            {/* Breadcrumb Navigation - Left aligned */}
            <nav className="flex items-center gap-2 text-sm text-white/50 mb-8">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/resources" className="hover:text-white transition-colors">Resources</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white/70">{categories[article.category]}</span>
            </nav>
            
            {/* Category Badge */}
            <span className="inline-block px-3 py-1 text-xs font-semibold text-accent bg-accent/10 rounded-full uppercase tracking-wider mb-4">
              {categories[article.category] || article.category}
            </span>
            
            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed max-w-3xl">
              {article.description}
            </p>
            
            {/* Meta Info & Actions - Left aligned button group */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-6 text-sm text-white/60">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {article.readTime}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(article.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              
              {/* Action Buttons - Right aligned, secondary actions */}
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="text-white/60 hover:text-white hover:bg-white/10">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button variant="ghost" size="sm" className="text-white/60 hover:text-white hover:bg-white/10">
                  <BookmarkPlus className="w-4 h-4 mr-2" />
                  Save
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Content - Optimized for readability */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-8 
                prose prose-lg max-w-none
                prose-headings:text-primary prose-headings:font-bold prose-headings:mt-12 prose-headings:mb-6
                prose-h1:text-3xl prose-h1:mt-0
                prose-h2:text-2xl prose-h2:border-b prose-h2:border-border prose-h2:pb-3
                prose-h3:text-xl prose-h3:text-primary/90
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-base prose-p:mb-6
                prose-a:text-accent prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                prose-strong:text-primary prose-strong:font-semibold
                prose-ul:text-muted-foreground prose-ul:my-6 prose-ul:space-y-2
                prose-ol:text-muted-foreground prose-ol:my-6 prose-ol:space-y-2
                prose-li:marker:text-accent prose-li:leading-relaxed
                prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:bg-accent/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:text-muted-foreground prose-blockquote:italic prose-blockquote:not-italic
                prose-code:bg-surface-elevated prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:text-accent prose-code:text-sm prose-code:font-mono
                prose-pre:bg-surface-dark prose-pre:text-white prose-pre:rounded-xl prose-pre:p-6"
            >
              <ReactMarkdown>{article.content}</ReactMarkdown>
              
              {/* Bottom CTA - Left aligned primary action */}
              <div className="mt-16 pt-8 border-t border-border not-prose">
                <h3 className="text-xl font-bold text-primary mb-3">Ready to get started?</h3>
                <p className="text-muted-foreground mb-6">
                  Get a personalized AI infrastructure assessment tailored to your organization's needs.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Link to="/contact">
                    <Button variant="hero" size="lg">
                      Request Assessment
                    </Button>
                  </Link>
                  <Link to="/resources">
                    <Button variant="outline" size="lg">
                      Browse More Resources
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.article>
            
            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-8">
                {/* Quick CTA Card */}
                <div className="bg-gradient-to-br from-accent/10 to-primary/5 rounded-2xl p-6 border border-accent/20">
                  <h3 className="font-bold text-primary text-lg mb-2">Need Expert Help?</h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    Get a personalized AI infrastructure assessment for your organization.
                  </p>
                  <Link to="/contact" className="block">
                    <Button variant="hero" size="sm" className="w-full justify-center">
                      Get Free Assessment
                    </Button>
                  </Link>
                </div>
                
                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                  <div className="bg-card rounded-2xl p-6 border border-border">
                    <h3 className="font-bold text-primary text-lg mb-5">Related Articles</h3>
                    <div className="space-y-5">
                      {relatedArticles.map((related) => (
                        <Link 
                          key={related.slug}
                          to={`/resources/${related.slug}`}
                          className="block group"
                        >
                          <span className="text-xs font-medium text-accent uppercase tracking-wider">
                            {categories[related.category]}
                          </span>
                          <h4 className="text-sm font-semibold text-primary group-hover:text-accent transition-colors mt-1 mb-1 line-clamp-2 leading-snug">
                            {related.title}
                          </h4>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {related.readTime}
                          </span>
                        </Link>
                      ))}
                    </div>
                    
                    {/* View All - Left aligned */}
                    <div className="mt-6 pt-5 border-t border-border">
                      <Link to="/resources" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline">
                        View all resources
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                )}
                
                {/* Back to Top - Tertiary action */}
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="w-full text-center text-sm text-muted-foreground hover:text-primary transition-colors py-3"
                >
                  ↑ Back to top
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Article;
