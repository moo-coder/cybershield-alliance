import { Layout } from '@/components/Layout';
import { Shield, Search, Lock, Server, Users, FileWarning, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Shield,
    title: 'Threat Detection',
    description: 'Advanced AI-powered threat detection systems that monitor your infrastructure 24/7 and identify potential security breaches before they occur.',
    features: ['Real-time monitoring', 'AI-powered analysis', 'Automated alerts', 'Threat intelligence feeds'],
  },
  {
    icon: Search,
    title: 'Penetration Testing',
    description: 'Comprehensive security assessments that simulate real-world attacks to identify vulnerabilities in your systems and applications.',
    features: ['Web application testing', 'Network penetration', 'Social engineering', 'Detailed reports'],
  },
  {
    icon: Lock,
    title: 'Security Consulting',
    description: 'Expert guidance on security strategy, compliance requirements, and best practices tailored to your industry and business needs.',
    features: ['Risk assessment', 'Policy development', 'Compliance roadmaps', 'Board-level reporting'],
  },
  {
    icon: Server,
    title: 'Cloud Security',
    description: 'Protect your cloud infrastructure with advanced security controls, monitoring, and compliance solutions for AWS, Azure, and GCP.',
    features: ['Multi-cloud support', 'Configuration management', 'Container security', 'DevSecOps integration'],
  },
  {
    icon: Users,
    title: 'Security Training',
    description: 'Empower your team with comprehensive cybersecurity awareness training and phishing simulation programs.',
    features: ['Interactive modules', 'Phishing simulations', 'Role-based training', 'Progress tracking'],
  },
  {
    icon: FileWarning,
    title: 'Incident Response',
    description: 'Rapid response team ready to contain, investigate, and remediate security incidents to minimize damage and recovery time.',
    features: ['24/7 availability', 'Forensic analysis', 'Containment strategies', 'Post-incident review'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const ServicesPage = () => {
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
              Our Services
            </span>
            <h1 className="font-heading text-h1-sm md:text-h1-md lg:text-h1 text-foreground mb-lg">
              Comprehensive Security Solutions
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              We provide end-to-end cybersecurity services to protect your organization from evolving digital threats. Our expert team combines cutting-edge technology with deep industry knowledge.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-4xl bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-md lg:px-xl relative z-10">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative p-xl rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-start gap-lg">
                  <motion.div
                    className="p-4 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0"
                    whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                  >
                    <service.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="font-heading text-h4 text-foreground mb-md group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-lg">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-4xl bg-cyber-dark">
        <div className="container mx-auto px-md lg:px-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-h2-sm md:text-h2-md lg:text-h2 text-foreground mb-lg">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-muted-foreground text-lg mb-xl">
              Contact our team today for a free consultation and discover how we can help protect your digital assets.
            </p>
            <Link to="/contact">
              <Button variant="cyber" size="xl" className="group">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
