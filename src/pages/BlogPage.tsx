import { Layout } from '@/components/Layout';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, categories } from '@/data/blogPosts';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = filteredPosts.find(post => post.featured) || filteredPosts[0];
  const regularPosts = filteredPosts.filter(post => post.id !== featuredPost?.id);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-cyber-dark relative overflow-hidden">
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
            className="max-w-3xl"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-md block">
              Latest Insights
            </span>
            <h1 className="font-heading text-h1-sm md:text-h1-md lg:text-h1 text-foreground mb-lg">
              Security Blog & Resources
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Stay informed with the latest cybersecurity trends, threat intelligence, and best practices from our expert team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-4xl bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-md lg:px-xl relative z-10">
          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.4)]'
                    : 'bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Blog Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Featured Post */}
            {featuredPost && (
              <motion.article
                variants={itemVariants}
                className="lg:row-span-2 group"
              >
                <Link to={`/blog/${featuredPost.slug}`}>
                  <div className="h-full bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)]">
                    <div className="relative h-64 lg:h-80 overflow-hidden">
                      <motion.img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1.5 bg-primary/90 text-primary-foreground px-3 py-1.5 rounded-full text-xs font-semibold">
                          <Tag size={12} />
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-6 lg:p-8">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="text-primary font-medium">{featuredPost.category}</span>
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          {featuredPost.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={14} />
                          {featuredPost.readTime}
                        </span>
                      </div>
                      <h3 className="text-h4 font-heading font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                        {featuredPost.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {featuredPost.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                        Read Article
                        <ArrowRight size={18} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            )}

            {/* Regular Posts */}
            {regularPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="group"
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="h-full bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)] flex flex-col sm:flex-row">
                    <div className="relative w-full sm:w-40 h-48 sm:h-auto overflow-hidden flex-shrink-0">
                      <motion.img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                    <div className="p-5 flex flex-col justify-center">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span className="text-primary font-medium">{post.category}</span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {post.readTime}
                        </span>
                      </div>
                      <h4 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm text-primary font-medium group-hover:gap-2.5 transition-all duration-300">
                        Read More
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
