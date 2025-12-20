import { Shield, Twitter, Linkedin, Github, Mail } from 'lucide-react';

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

export const Footer = () => {
  return (
    <footer className="bg-cyber-dark border-t border-border">
      <div className="container mx-auto px-md lg:px-xl py-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2xl">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-lg">
              <Shield className="w-8 h-8 text-primary" />
              <span className="font-heading text-xl font-bold text-foreground">
                Cyber<span className="text-primary">FZ</span>
              </span>
            </a>
            <p className="text-muted-foreground mb-xl max-w-sm leading-relaxed">
              Enterprise-grade cybersecurity solutions protecting businesses worldwide.
              Your security is our mission.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-md">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-card/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-lg">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-lg">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-lg">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-3xl pt-xl border-t border-border flex flex-col md:flex-row items-center justify-between gap-md">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Cyber FZ. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Protecting your digital future, one byte at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};
