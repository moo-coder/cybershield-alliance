import { Shield, Search, Lock, Server, Users, FileWarning } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Threat Detection',
    description:
      'Advanced AI-powered threat detection systems that monitor your infrastructure 24/7 and identify potential security breaches before they occur.',
  },
  {
    icon: Search,
    title: 'Penetration Testing',
    description:
      'Comprehensive security assessments that simulate real-world attacks to identify vulnerabilities in your systems and applications.',
  },
  {
    icon: Lock,
    title: 'Security Consulting',
    description:
      'Expert guidance on security strategy, compliance requirements, and best practices tailored to your industry and business needs.',
  },
  {
    icon: Server,
    title: 'Cloud Security',
    description:
      'Protect your cloud infrastructure with advanced security controls, monitoring, and compliance solutions for AWS, Azure, and GCP.',
  },
  {
    icon: Users,
    title: 'Security Training',
    description:
      'Empower your team with comprehensive cybersecurity awareness training and phishing simulation programs.',
  },
  {
    icon: FileWarning,
    title: 'Incident Response',
    description:
      'Rapid response team ready to contain, investigate, and remediate security incidents to minimize damage and recovery time.',
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-4xl bg-background relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-md lg:px-xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-3xl">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-md block">
            Our Services
          </span>
          <h2 className="font-heading text-h2-sm md:text-h2-md lg:text-h2 text-foreground mb-lg">
            Comprehensive Security Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide end-to-end cybersecurity services to protect your organization
            from evolving digital threats.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-lg rounded-lg bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon Container */}
              <div className="mb-lg">
                <div className="inline-flex p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-heading text-h4 text-foreground mb-md group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
