import { Layout } from '@/components/Layout';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getPostBySlug, blogPosts } from '@/data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || '');

  if (!post) {
    return (
      <Layout>
        <section className="pt-32 pb-20 min-h-screen bg-background">
          <div className="container mx-auto px-md lg:px-xl text-center">
            <h1 className="font-heading text-h2-sm md:text-h2 text-foreground mb-lg">
              Post Not Found
            </h1>
            <p className="text-muted-foreground mb-xl">
              The blog post you're looking for doesn't exist.
            </p>
            <Link to="/blog">
              <Button variant="cyber">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-cyber-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--cyber-cyan)) 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        <div className="container mx-auto px-md lg:px-xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-lg"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-lg">
              <span className="inline-flex items-center gap-1.5 bg-primary/20 text-primary px-3 py-1 rounded-full font-medium">
                <Tag size={12} />
                {post.category}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>

            <h1 className="font-heading text-h1-sm md:text-h1-md lg:text-h1 text-foreground mb-lg">
              {post.title}
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-background">
        <div className="container mx-auto px-md lg:px-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-4xl mx-auto -mt-8 relative z-10"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-4xl bg-background">
        <div className="container mx-auto px-md lg:px-xl">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-3xl mx-auto prose prose-invert prose-lg
              prose-headings:font-heading prose-headings:text-foreground
              prose-h2:text-h3-sm prose-h2:md:text-h3-md prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-h4 prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-strong:text-foreground
              prose-ul:text-muted-foreground prose-ol:text-muted-foreground
              prose-li:marker:text-primary
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
          >
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>').replace(/## /g, '<h2>').replace(/### /g, '<h3>').replace(/<h2>/g, '</p><h2>').replace(/<h3>/g, '</p><h3>').replace(/<\/h2>/g, '</h2><p>').replace(/<\/h3>/g, '</h3><p>') }} />
          </motion.article>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-4xl bg-cyber-dark">
          <div className="container mx-auto px-md lg:px-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-heading text-h3-sm md:text-h3-md text-foreground mb-xl">
                Related Articles
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <div className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300">
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                          <span className="text-primary font-medium">{relatedPost.category}</span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {relatedPost.readTime}
                          </span>
                        </div>
                        <h4 className="font-heading text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-xl">
                <Link to="/blog">
                  <Button variant="cyberOutline" size="lg" className="group">
                    View All Articles
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default BlogPost;
