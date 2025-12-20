import { CheckCircle2, Award, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const stats = [
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: Users, value: '500+', label: 'Clients Protected' },
  { icon: Clock, value: '24/7', label: 'Support Available' },
];

const features = [
  'Industry-leading threat intelligence',
  'Certified security professionals',
  'Custom security frameworks',
  'Regulatory compliance expertise',
  'Proactive threat hunting',
  'Rapid incident response',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const featureVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export const About = () => {
  return (
    <section id="about" className="py-4xl bg-cyber-dark relative overflow-hidden">
      {/* Background Pattern */}
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
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-md block">
              About Cyber FZ
            </span>
            <h2 className="font-heading text-h2-sm md:text-h2-md lg:text-h2 text-foreground mb-lg">
              Defending Digital Frontiers Since 2009
            </h2>
            <p className="text-muted-foreground text-lg mb-xl leading-relaxed">
              At Cyber FZ, we believe that robust cybersecurity is the foundation of
              digital trust. Our team of elite security professionals combines deep
              technical expertise with strategic insight to deliver protection that
              evolves with the threat landscape.
            </p>

            {/* Features List */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-md mb-2xl"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {features.map((feature) => (
                <motion.div 
                  key={feature} 
                  className="flex items-center gap-3"
                  variants={featureVariants}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button variant="cyber" size="lg">
                Learn More About Us
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            {/* Decorative Frame */}
            <motion.div 
              className="absolute -inset-4 border border-primary/20 rounded-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.div 
              className="absolute -inset-8 border border-primary/10 rounded-3xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            <div className="relative bg-card/80 backdrop-blur-sm rounded-xl p-2xl border border-border">
              <motion.div 
                className="grid grid-cols-1 gap-xl"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={statVariants}
                    whileHover={{ 
                      scale: 1.02, 
                      transition: { duration: 0.2 } 
                    }}
                    className="flex items-center gap-lg p-lg rounded-lg bg-background/50 border border-border"
                  >
                    <motion.div 
                      className="p-4 rounded-lg bg-primary/10 border border-primary/20"
                      whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                    >
                      <stat.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    <div>
                      <div className="font-heading text-h3-sm md:text-h3-md text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Glow Effect */}
              <motion.div 
                className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
