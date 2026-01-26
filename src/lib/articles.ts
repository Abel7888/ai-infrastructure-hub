export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  featured: boolean;
  date: string;
  image?: string;
  content: string;
}

// Simple frontmatter parser (browser-compatible)
function parseFrontmatter(raw: string): { data: Record<string, any>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    return { data: {}, content: raw };
  }
  
  const frontmatter = match[1];
  const content = match[2];
  const data: Record<string, any> = {};
  
  frontmatter.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      let value: any = line.slice(colonIndex + 1).trim();
      
      // Remove quotes
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      // Parse booleans
      if (value === 'true') value = true;
      if (value === 'false') value = false;
      
      data[key] = value;
    }
  });
  
  return { data, content };
}

// Import all markdown files from content/articles at build time
const articleFiles = import.meta.glob('/content/articles/*.md', { 
  query: '?raw',
  import: 'default',
  eager: true 
});

export function getArticles(): Article[] {
  const articles: Article[] = [];
  
  for (const path in articleFiles) {
    const rawContent = articleFiles[path] as string;
    const { data, content } = parseFrontmatter(rawContent);
    const slug = path.replace('/content/articles/', '').replace('.md', '');
    
    articles.push({
      slug,
      title: data.title || '',
      description: data.description || '',
      category: data.category || 'technical',
      readTime: data.readTime || '5 min read',
      featured: data.featured === true,
      date: data.date || new Date().toISOString(),
      image: data.image,
      content
    });
  }
  
  // Sort by date, newest first
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getArticles().find(article => article.slug === slug);
}

export function getFeaturedArticles(): Article[] {
  return getArticles().filter(article => article.featured);
}

export function getArticlesByCategory(category: string): Article[] {
  return getArticles().filter(article => article.category === category);
}
