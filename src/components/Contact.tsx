import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@cyberfz.com',
    href: 'mailto:contact@cyberfz.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
    href: '#',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export const Contact = () => {
  return (
    <section id="contact" className="py-4xl bg-background relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-md lg:px-xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3xl">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-md block">
              Get In Touch
            </span>
            <h2 className="font-heading text-h2-sm md:text-h2-md lg:text-h2 text-foreground mb-lg">
              Let's Secure Your Future
            </h2>
            <p className="text-muted-foreground text-lg mb-2xl leading-relaxed">
              Ready to strengthen your security posture? Contact our team of experts
              for a free consultation and discover how we can protect your organization.
            </p>

            {/* Contact Info */}
            <motion.div 
              className="space-y-lg"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {contactInfo.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  variants={itemVariants}
                  whileHover={{ 
                    x: 8, 
                    transition: { duration: 0.2 } 
                  }}
                  className="flex items-center gap-lg p-lg rounded-lg bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <motion.div 
                    className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="text-foreground font-medium">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div 
              className="bg-card/80 backdrop-blur-sm rounded-xl p-xl lg:p-2xl border border-border"
              whileHover={{ 
                boxShadow: "0 25px 50px -12px hsl(var(--primary) / 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="font-heading text-h4 text-foreground mb-lg">
                Send us a message
              </h3>

              <motion.form 
                className="space-y-lg"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 gap-md"
                  variants={itemVariants}
                >
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-muted-foreground">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-muted-foreground">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                </motion.div>

                <motion.div className="space-y-2" variants={itemVariants}>
                  <label htmlFor="company" className="text-sm text-muted-foreground">
                    Company
                  </label>
                  <Input
                    id="company"
                    placeholder="Your Company Name"
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </motion.div>

                <motion.div className="space-y-2" variants={itemVariants}>
                  <label htmlFor="message" className="text-sm text-muted-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your security needs..."
                    rows={4}
                    className="bg-background/50 border-border focus:border-primary resize-none"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Button variant="cyber" size="lg" className="w-full group">
                    Send Message
                    <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </motion.form>
            </motion.div>

            {/* Decorative Glow */}
            <motion.div 
              className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
