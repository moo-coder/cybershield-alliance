import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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

export const Contact = () => {
  return (
    <section id="contact" className="py-4xl bg-background relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-md lg:px-xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3xl">
          {/* Left Content */}
          <div>
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
            <div className="space-y-lg">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-lg p-lg rounded-lg bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="text-foreground font-medium">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="relative">
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-xl lg:p-2xl border border-border">
              <h3 className="font-heading text-h4 text-foreground mb-lg">
                Send us a message
              </h3>

              <form className="space-y-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
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
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm text-muted-foreground">
                    Company
                  </label>
                  <Input
                    id="company"
                    placeholder="Your Company Name"
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-muted-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your security needs..."
                    rows={4}
                    className="bg-background/50 border-border focus:border-primary resize-none"
                  />
                </div>

                <Button variant="cyber" size="lg" className="w-full group">
                  Send Message
                  <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>

            {/* Decorative Glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
