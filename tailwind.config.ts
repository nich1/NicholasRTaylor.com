import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-subtle": "var(--bg-subtle)",
        fg: "var(--fg)",
        "fg-muted": "var(--fg-muted)",
        border: "var(--border)",
        accent: "var(--accent)",
        "accent-fg": "var(--accent-fg)",
        "accent-hover": "var(--accent-hover)",
      },
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-geist-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      fontSize: {
        hero: [
          "clamp(2.5rem, 8vw, 5.5rem)",
          { lineHeight: "1.02", letterSpacing: "-0.035em", fontWeight: "700" },
        ],
        display: [
          "clamp(1.875rem, 5vw, 3rem)",
          { lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "600" },
        ],
      },
      maxWidth: {
        content: "72rem",
        prose: "42rem",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
        sm: "var(--radius-sm)",
        lg: "var(--radius-lg)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        DEFAULT: "var(--shadow)",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out both",
        "fade-up": "fadeUp 0.5s ease-out both",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "var(--fg)",
            "--tw-prose-headings": "var(--fg)",
            "--tw-prose-links": "var(--accent)",
            "--tw-prose-bold": "var(--fg)",
            "--tw-prose-code": "var(--fg)",
            "--tw-prose-quotes": "var(--fg-muted)",
            "--tw-prose-hr": "var(--border)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
