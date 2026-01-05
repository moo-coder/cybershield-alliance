import { Layout } from '@/components/Layout';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
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
  {
    icon: Clock,
    label: 'Support Hours',
    value: '24/7 Available',
    href: '#',
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const ContactPage = () => {
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
              Get In Touch
            </span>
            <h1 className="font-heading text-h1-sm md:text-h1-md lg:text-h1 text-foreground mb-lg">
              Let's Secure Your Future
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Ready to strengthen your security posture? Contact our team of experts for a free consultation and discover how we can protect your organization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-4xl bg-background relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-md lg:px-xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3xl">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-heading text-h3-sm md:text-h3-md text-foreground mb-lg">
                Contact Information
              </h2>
              <p className="text-muted-foreground text-lg mb-2xl leading-relaxed">
                Our team is available around the clock to assist with your cybersecurity needs. Reach out through any of the channels below.
              </p>

              <motion.div
                className="space-y-lg"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {contactInfo.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    variants={itemVariants}
                    whileHover={{ x: 8, transition: { duration: 0.2 } }}
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

              {/* Office Hours */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-2xl p-xl rounded-xl bg-card/50 border border-border"
              >
                <h3 className="font-heading text-h4 text-foreground mb-md">
                  Global Offices
                </h3>
                <div className="space-y-md text-muted-foreground">
                  <p><strong className="text-foreground">San Francisco</strong> - HQ</p>
                  <p><strong className="text-foreground">New York</strong> - East Coast Operations</p>
                  <p><strong className="text-foreground">London</strong> - EMEA</p>
                  <p><strong className="text-foreground">Singapore</strong> - APAC</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
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
                    <label htmlFor="subject" className="text-sm text-muted-foreground">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="How can we help?"
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
                      rows={5}
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

      {/* FAQ Section */}
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
              FAQ
            </span>
            <h2 className="font-heading text-h2-sm md:text-h2-md lg:text-h2 text-foreground mb-lg">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto space-y-lg"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                q: 'How quickly can you respond to a security incident?',
                a: 'Our incident response team is available 24/7 and typically begins initial response within 15 minutes of notification.',
              },
              {
                q: 'Do you offer free security assessments?',
                a: 'Yes, we offer a complimentary initial security consultation to understand your needs and provide preliminary recommendations.',
              },
              {
                q: 'What industries do you specialize in?',
                a: 'We serve clients across all industries, with particular expertise in finance, healthcare, technology, and government sectors.',
              },
              {
                q: 'Can you help with compliance requirements?',
                a: 'Absolutely. We have extensive experience with SOC 2, ISO 27001, HIPAA, PCI-DSS, GDPR, and other regulatory frameworks.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-lg rounded-xl bg-card/50 border border-border"
              >
                <h4 className="font-heading text-lg text-foreground mb-md">
                  {faq.q}
                </h4>
                <p className="text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
