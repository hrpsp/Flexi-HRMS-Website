import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        /* Canonical brand palette — four roles */
        brand: {
          dark: "#322E53",
          mid: "#49426E",
          peach: "#EEC293",
          salmon: "#F3AB9D",
        },
        /* Neutrals for body text and page surfaces */
        neutral: {
          light: "#F7F5F2",
          text: "#1A1730",
          gray: "#6B6880",
        },
        /* System colours — status only, not decorative */
        success: "#4A9D7C",
        warning: "#E8A93A",
        error: "#C24B4B",
        /* shadcn scaffolding, mapped to brand tokens via globals.css */
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg": ["clamp(1.75rem, 3vw, 2.75rem)", { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "600" }],
        "display-md": ["1.5rem", { lineHeight: "1.25", fontWeight: "600" }],
        "eyebrow": ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.12em", fontWeight: "500" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        /* Canonical mid-purple gradient — for hero, CTA blocks, section breaks */
        "brand-gradient": "linear-gradient(180deg, #5B5382 0%, #49426E 60%, #322E53 100%)",
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")",
      },
      /* Motion tokens — every transition should use these */
      transitionTimingFunction: {
        "flexi": "cubic-bezier(0.22, 0.61, 0.36, 1)",      // default — confident ease-out
        "flexi-in": "cubic-bezier(0.64, 0, 0.78, 0)",      // elements leaving
        "flexi-bold": "cubic-bezier(0.16, 1, 0.3, 1)",     // signature moments
        "flexi-snap": "cubic-bezier(0.4, 0, 0.2, 1)",      // UI state changes
      },
      transitionDuration: {
        "instant": "120ms",
        "fast": "200ms",
        "base": "320ms",
        "slow": "600ms",
        "signature": "900ms",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "fade-up": { "0%": { opacity: "0", transform: "translateY(8px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "shimmer": { "100%": { transform: "translateX(100%)" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "shimmer": "shimmer 1.5s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
