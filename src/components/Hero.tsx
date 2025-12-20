import { Shield, Lock, Zap, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[600px] md:min-h-[700px] flex items-center cyber-gradient-bg overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--cyber-cyan)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--cyber-cyan)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Glow Orb Top Right */}
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />

        {/* Glow Orb Bottom Left */}
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Accent Lines */}
        <motion.svg
          className="absolute top-20 left-10 w-40 h-40 text-primary/20"
          viewBox="0 0 100 100"
          fill="none"
          animate={{ 
            rotate: 360,
            y: [0, -10, 0]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <path
            d="M10 50 L40 20 L70 50 L40 80 Z"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </motion.svg>

        <motion.svg
          className="absolute bottom-20 right-10 w-32 h-32 text-primary/15"
          viewBox="0 0 100 100"
          fill="none"
          animate={{ 
            rotate: -360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" />
        </motion.svg>
      </div>

      <div className="container mx-auto px-md lg:px-xl pt-20 md:pt-4xl relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-primary/30 mb-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm text-muted-foreground">
              Trusted by 500+ enterprises worldwide
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="font-heading text-display-sm md:text-display-md lg:text-display text-foreground mb-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            Your{' '}
            <span className="text-primary cyber-glow-text">Cybersecurity</span>
            <br />
            Partner
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            Protect your digital assets with enterprise-grade security solutions.
            We defend, detect, and respond to cyber threats 24/7.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            <Button variant="cyber" size="xl" className="group w-full sm:w-auto">
              Get Started
              <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="cyberOutline" size="xl" className="w-full sm:w-auto">
              Learn More
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="mt-3xl grid grid-cols-3 gap-lg max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          >
            {[
              { icon: Shield, label: 'SOC 2 Certified' },
              { icon: Lock, label: 'ISO 27001' },
              { icon: Zap, label: '24/7 Response' },
            ].map((item, index) => (
              <motion.div 
                key={item.label}
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <div className="p-3 rounded-lg bg-card/50 border border-border">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
