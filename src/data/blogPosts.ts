export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
  image: string;
}

export const categories = ['All', 'Threat Intelligence', 'Cloud Security', 'Compliance', 'Best Practices'];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'ai-powered-cyber-attacks-2024',
    title: 'The Rise of AI-Powered Cyber Attacks in 2024',
    excerpt: 'How artificial intelligence is being weaponized by threat actors and what organizations can do to defend against these sophisticated attacks.',
    content: `
## The Evolution of AI in Cybercrime

Artificial intelligence has fundamentally transformed the cybersecurity landscape. While defenders have long used AI and machine learning to detect threats, attackers are now leveraging these same technologies to create more sophisticated, evasive, and damaging attacks.

### Key Trends We're Observing

1. **Automated Phishing Campaigns** - AI-generated emails that perfectly mimic corporate communication styles
2. **Deepfake Social Engineering** - Voice and video synthesis used to impersonate executives
3. **Adaptive Malware** - Self-modifying code that evades traditional signature-based detection
4. **Intelligent Reconnaissance** - Automated systems that map network vulnerabilities at scale

### Defensive Strategies

Organizations must evolve their security posture to address these emerging threats:

- Implement behavioral analysis systems that detect anomalies in user and network patterns
- Deploy AI-powered email security that analyzes communication context, not just content
- Establish out-of-band verification procedures for high-value transactions
- Invest in continuous security awareness training that includes AI-threat scenarios

### Looking Ahead

The arms race between AI-powered attacks and defenses will only intensify. Organizations that proactively adopt advanced detection capabilities and maintain a security-first culture will be best positioned to weather this evolving threat landscape.
    `,
    category: 'Threat Intelligence',
    date: 'Jan 2, 2026',
    readTime: '8 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
  },
  {
    id: 2,
    slug: 'zero-trust-implementation-guide',
    title: 'Zero Trust Architecture: Implementation Guide',
    excerpt: 'A comprehensive guide to implementing zero trust security models in enterprise environments.',
    content: `
## Understanding Zero Trust

Zero Trust is not a product or technology—it's a security philosophy that assumes no user, device, or network should be automatically trusted, regardless of their location or previous authentication.

### Core Principles

1. **Verify Explicitly** - Always authenticate and authorize based on all available data points
2. **Use Least Privilege Access** - Limit user access with just-in-time and just-enough-access (JIT/JEA)
3. **Assume Breach** - Minimize blast radius and segment access. Verify end-to-end encryption

### Implementation Roadmap

**Phase 1: Identity Foundation**
- Deploy strong multi-factor authentication
- Implement conditional access policies
- Establish identity governance processes

**Phase 2: Device Trust**
- Enroll all devices in management solutions
- Define and enforce compliance policies
- Implement device health attestation

**Phase 3: Network Segmentation**
- Implement micro-segmentation
- Deploy next-generation firewalls
- Enable encrypted communications

**Phase 4: Application Security**
- Adopt secure development practices
- Implement application-level access controls
- Deploy runtime application self-protection (RASP)

### Measuring Success

Track these key metrics to measure your Zero Trust maturity:
- Mean time to detect (MTTD) and respond (MTTR)
- Percentage of applications with MFA
- Network segmentation coverage
- User access review completion rates
    `,
    category: 'Best Practices',
    date: 'Dec 28, 2025',
    readTime: '12 min read',
    featured: false,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
  },
  {
    id: 3,
    slug: 'cloud-security-posture-management',
    title: 'Cloud Security Posture Management Essentials',
    excerpt: 'Understanding CSPM and why it\'s critical for organizations migrating to multi-cloud environments.',
    content: `
## What is Cloud Security Posture Management?

Cloud Security Posture Management (CSPM) is a market segment for IT security tools designed to identify misconfiguration issues and compliance risks in the cloud.

### Why CSPM Matters

As organizations accelerate their cloud adoption, the attack surface expands dramatically. CSPM tools help by:

- **Continuous Monitoring** - Real-time visibility into cloud configurations
- **Compliance Automation** - Automated checks against regulatory frameworks
- **Risk Prioritization** - Focus on the most critical vulnerabilities first
- **Remediation Guidance** - Actionable steps to fix identified issues

### Common Cloud Misconfigurations

1. Publicly exposed storage buckets
2. Overly permissive IAM policies
3. Unencrypted data at rest
4. Missing network access controls
5. Inactive logging and monitoring

### Choosing a CSPM Solution

When evaluating CSPM tools, consider:
- Multi-cloud support (AWS, Azure, GCP)
- Integration with your existing security stack
- Compliance framework coverage
- Remediation automation capabilities
- API-first architecture for DevSecOps integration
    `,
    category: 'Cloud Security',
    date: 'Dec 20, 2025',
    readTime: '6 min read',
    featured: false,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
  },
  {
    id: 4,
    slug: 'gdpr-ccpa-compliance-checklist',
    title: 'GDPR and CCPA: A Compliance Checklist',
    excerpt: 'Essential steps to ensure your organization meets data privacy regulations across jurisdictions.',
    content: `
## Navigating Data Privacy Regulations

Both GDPR and CCPA represent significant shifts in how organizations must handle personal data. While they share common goals, their requirements differ in important ways.

### GDPR Requirements Checklist

- [ ] Appoint a Data Protection Officer (if required)
- [ ] Maintain records of processing activities
- [ ] Implement privacy by design and default
- [ ] Conduct Data Protection Impact Assessments
- [ ] Establish lawful basis for processing
- [ ] Enable data subject rights (access, erasure, portability)
- [ ] Implement breach notification procedures (72-hour window)

### CCPA Requirements Checklist

- [ ] Update privacy policy with required disclosures
- [ ] Implement "Do Not Sell My Personal Information" link
- [ ] Enable consumer rights requests (know, delete, opt-out)
- [ ] Train customer-facing staff on CCPA requirements
- [ ] Verify consumer identity for rights requests
- [ ] Maintain records of requests and responses

### Common Compliance Strategies

1. **Data Mapping** - Understand what data you collect and where it flows
2. **Consent Management** - Implement robust consent collection and tracking
3. **Vendor Assessment** - Evaluate third-party data processors
4. **Technical Controls** - Encryption, access controls, and anonymization
5. **Incident Response** - Prepared procedures for data breaches
    `,
    category: 'Compliance',
    date: 'Dec 15, 2025',
    readTime: '10 min read',
    featured: false,
    image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&q=80',
  },
  {
    id: 5,
    slug: 'ransomware-defense-smbs',
    title: 'Ransomware Defense Strategies for SMBs',
    excerpt: 'Cost-effective approaches to protect small and medium businesses from ransomware threats.',
    content: `
## The Growing Ransomware Threat to SMBs

Small and medium businesses are increasingly targeted by ransomware operators. With limited security budgets and resources, SMBs must adopt smart, cost-effective defense strategies.

### Essential Protection Measures

**1. Backup Strategy (3-2-1 Rule)**
- 3 copies of your data
- 2 different storage types
- 1 offsite or cloud backup
- Regular backup testing and verification

**2. Email Security**
- Advanced spam and phishing filters
- Employee security awareness training
- Attachment sandboxing
- Link protection

**3. Endpoint Protection**
- Next-generation antivirus
- Application whitelisting
- Automated patch management
- Endpoint detection and response (EDR)

**4. Network Security**
- Network segmentation
- Firewall with intrusion prevention
- VPN for remote access
- DNS filtering

### Incident Response Planning

Even with strong defenses, prepare for the worst:
1. Document critical systems and data
2. Establish communication procedures
3. Identify key decision-makers
4. Maintain offline contact information
5. Consider cyber insurance coverage

### When Prevention Fails

If ransomware strikes:
- Isolate affected systems immediately
- Preserve evidence for investigation
- Contact law enforcement
- Engage incident response professionals
- Evaluate recovery options carefully
    `,
    category: 'Threat Intelligence',
    date: 'Dec 10, 2025',
    readTime: '7 min read',
    featured: false,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
