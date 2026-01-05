import { Layout } from '@/components/Layout';
import { CheckCircle2, Award, Users, Clock, Shield, Target, Heart, Lightbulb, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const stats = [
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: Users, value: '500+', label: 'Clients Protected' },
  { icon: Clock, value: '24/7', label: 'Support Available' },
  { icon: Shield, value: '99.9%', label: 'Threat Detection' },
];

const features = [
  'Industry-leading threat intelligence',
  'Certified security professionals',
  'Custom security frameworks',
  'Regulatory compliance expertise',
  'Proactive threat hunting',
  'Rapid incident response',
];

const values = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'We never compromise on security. Every decision we make prioritizes the protection of our clients.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from threat detection to customer service.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We operate with complete transparency and honesty, building trust with every interaction.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We continuously evolve our methods to stay ahead of emerging threats and technologies.',
  },
];

const team = [
  { name: 'Sarah Chen', role: 'Chief Executive Officer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
  { name: 'Michael Torres', role: 'Chief Technology Officer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
  { name: 'Emily Johnson', role: 'Head of Security Operations', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
  { name: 'David Kim', role: 'Lead Security Researcher', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const AboutPage = () => {
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
              About Cyber FZ
            </span>
            <h1 className="font-heading text-h1-sm md:text-h1-md lg:text-h1 text-foreground mb-lg">
              Defending Digital Frontiers Since 2009
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              At Cyber FZ, we believe that robust cybersecurity is the foundation of digital trust. Our team of elite security professionals combines deep technical expertise with strategic insight.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-4xl bg-background relative">
        <div className="container mx-auto px-md lg:px-xl">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-lg"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="text-center p-xl rounded-xl bg-card/50 border border-border"
              >
                <div className="inline-flex p-4 rounded-lg bg-primary/10 border border-primary/20 mb-lg">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="font-heading text-h2-sm md:text-h2-md text-foreground mb-sm">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-4xl bg-cyber-dark relative overflow-hidden">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3xl items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider mb-md block">
                Our Story
              </span>
              <h2 className="font-heading text-h2-sm md:text-h2-md lg:text-h2 text-foreground mb-lg">
                Built by Security Experts, For Security Leaders
              </h2>
              <p className="text-muted-foreground text-lg mb-xl leading-relaxed">
                Founded in 2009 by a team of former government cybersecurity specialists, Cyber FZ was born from a simple belief: every organization deserves enterprise-grade security protection.
              </p>
              <p className="text-muted-foreground text-lg mb-xl leading-relaxed">
                Today, we've grown to protect over 500 organizations worldwide, from Fortune 500 companies to innovative startups. Our team brings together diverse expertise in threat intelligence, incident response, and security architecture.
              </p>
              
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-md"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {features.map((feature) => (
                  <motion.div
                    key={feature}
                    className="flex items-center gap-3"
                    variants={itemVariants}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 border border-primary/20 rounded-2xl" />
              <div className="absolute -inset-8 border border-primary/10 rounded-3xl" />
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                alt="Cyber FZ team at work"
                className="rounded-xl w-full h-auto relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-4xl bg-background">
        <div className="container mx-auto px-md lg:px-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-2xl mx-auto mb-3xl"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-md block">
              Our Values
            </span>
            <h2 className="font-heading text-h2-sm md:text-h2-md lg:text-h2 text-foreground mb-lg">
              What Drives Us Forward
            </h2>
            <p className="text-muted-foreground text-lg">
              Our core values guide every decision we make and every service we deliver.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group p-xl rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 text-center"
              >
                <div className="inline-flex p-4 rounded-lg bg-primary/10 border border-primary/20 mb-lg group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-h4 text-foreground mb-md group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-4xl bg-cyber-dark">
        <div className="container mx-auto px-md lg:px-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-2xl mx-auto mb-3xl"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-md block">
              Leadership Team
            </span>
            <h2 className="font-heading text-h2-sm md:text-h2-md lg:text-h2 text-foreground mb-lg">
              Meet Our Experts
            </h2>
            <p className="text-muted-foreground text-lg">
              Our leadership team brings decades of combined experience in cybersecurity, technology, and business.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group text-center"
              >
                <div className="relative mb-lg overflow-hidden rounded-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-heading text-h4 text-foreground mb-sm group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-4xl bg-background">
        <div className="container mx-auto px-md lg:px-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-h2-sm md:text-h2-md lg:text-h2 text-foreground mb-lg">
              Ready to Work With Us?
            </h2>
            <p className="text-muted-foreground text-lg mb-xl">
              Let's discuss how Cyber FZ can help protect your organization from evolving cyber threats.
            </p>
            <Link to="/contact">
              <Button variant="cyber" size="xl" className="group">
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
