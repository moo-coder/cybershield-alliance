import { Shield, Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const footerLinks = {
  services: [
    { name: 'Threat Detection', href: '#services' },
    { name: 'Penetration Testing', href: '#services' },
    { name: 'Security Consulting', href: '#services' },
    { name: 'Cloud Security', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Mail, href: 'mailto:contact@cyberfz.com', label: 'Email' },
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

export const Footer = () => {
  return (
    <footer className="bg-cyber-dark border-t border-border">
      <div className="container mx-auto px-md lg:px-xl py-3xl">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Brand Column */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <motion.a 
              href="#home" 
              className="flex items-center gap-2 mb-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Shield className="w-8 h-8 text-primary" />
              <span className="font-heading text-xl font-bold text-foreground">
                Cyber<span className="text-primary">FZ</span>
              </span>
            </motion.a>
            <p className="text-muted-foreground mb-xl max-w-sm leading-relaxed">
              Enterprise-grade cybersecurity solutions protecting businesses worldwide.
              Your security is our mission.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-md">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-card/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -4,
                    transition: { duration: 0.2 }
                  }}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-lg">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-lg">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-lg">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-3xl pt-xl border-t border-border flex flex-col md:flex-row items-center justify-between gap-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Cyber FZ. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Protecting your digital future, one byte at a time.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
