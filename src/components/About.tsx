import { CheckCircle2, Award, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
          <div>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-md mb-2xl">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="cyber" size="lg">
              Learn More About Us
            </Button>
          </div>

          {/* Right Content - Stats */}
          <div className="relative">
            {/* Decorative Frame */}
            <div className="absolute -inset-4 border border-primary/20 rounded-2xl" />
            <div className="absolute -inset-8 border border-primary/10 rounded-3xl" />

            <div className="relative bg-card/80 backdrop-blur-sm rounded-xl p-2xl border border-border">
              <div className="grid grid-cols-1 gap-xl">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`flex items-center gap-lg p-lg rounded-lg bg-background/50 border border-border ${
                      index !== stats.length - 1 ? 'mb-0' : ''
                    }`}
                  >
                    <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                      <stat.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <div className="font-heading text-h3-sm md:text-h3-md text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Glow Effect */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
