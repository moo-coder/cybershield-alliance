import { Shield, Lock, Zap, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />

        {/* Glow Orb Bottom Left */}
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-glow-pulse animation-delay-400" />

        {/* Accent Lines */}
        <svg
          className="absolute top-20 left-10 w-40 h-40 text-primary/20"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path
            d="M10 50 L40 20 L70 50 L40 80 Z"
            stroke="currentColor"
            strokeWidth="0.5"
            className="animate-float"
          />
        </svg>

        <svg
          className="absolute bottom-20 right-10 w-32 h-32 text-primary/15"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-md lg:px-xl pt-20 md:pt-4xl relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-primary/30 mb-lg animate-fade-in-up opacity-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm text-muted-foreground">
              Trusted by 500+ enterprises worldwide
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-display-sm md:text-display-md lg:text-display text-foreground mb-lg animate-fade-in-up opacity-0 animation-delay-200">
            Your{' '}
            <span className="text-primary cyber-glow-text">Cybersecurity</span>
            <br />
            Partner
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-2xl animate-fade-in-up opacity-0 animation-delay-400">
            Protect your digital assets with enterprise-grade security solutions.
            We defend, detect, and respond to cyber threats 24/7.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-md animate-fade-in-up opacity-0 animation-delay-600">
            <Button variant="cyber" size="xl" className="group w-full sm:w-auto">
              Get Started
              <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="cyberOutline" size="xl" className="w-full sm:w-auto">
              Learn More
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-3xl grid grid-cols-3 gap-lg max-w-md mx-auto animate-fade-in-up opacity-0 animation-delay-600">
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-lg bg-card/50 border border-border">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">SOC 2 Certified</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-lg bg-card/50 border border-border">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">ISO 27001</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-lg bg-card/50 border border-border">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">24/7 Response</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
