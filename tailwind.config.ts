import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter Tight', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['64px', { lineHeight: '1.1', fontWeight: '700' }],
        'display-md': ['56px', { lineHeight: '1.15', fontWeight: '700' }],
        'display-sm': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['48px', { lineHeight: '1.2', fontWeight: '600' }],
        'h2-md': ['40px', { lineHeight: '1.25', fontWeight: '600' }],
        'h2-sm': ['36px', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['36px', { lineHeight: '1.3', fontWeight: '600' }],
        'h3-md': ['32px', { lineHeight: '1.35', fontWeight: '600' }],
        'h3-sm': ['28px', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        cyber: {
          navy: "hsl(var(--cyber-navy))",
          "navy-light": "hsl(var(--cyber-navy-light))",
          cyan: "hsl(var(--cyber-cyan))",
          "cyan-glow": "hsl(var(--cyber-cyan-glow))",
          dark: "hsl(var(--cyber-dark))",
          card: "hsl(var(--cyber-card))",
          border: "hsl(var(--cyber-border))",
          text: "hsl(var(--cyber-text))",
          "text-muted": "hsl(var(--cyber-text-muted))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '80px',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 20px hsl(var(--cyber-cyan) / 0.4)",
          },
          "50%": { 
            boxShadow: "0 0 40px hsl(var(--cyber-cyan) / 0.6)",
          },
        },
        "border-glow": {
          "0%, 100%": { 
            borderColor: "hsl(var(--cyber-cyan) / 0.5)",
          },
          "50%": { 
            borderColor: "hsl(var(--cyber-cyan) / 1)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "border-glow": "border-glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
