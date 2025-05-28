/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'var(--foreground)',
            a: {
              color: 'var(--primary)',
              '&:hover': {
                color: 'var(--primary-foreground)',
              },
            },
            '[class~="lead"]': {
              color: 'var(--foreground)',
            },
            strong: {
              color: 'var(--foreground)',
            },
            'ol > li::before': {
              color: 'var(--muted-foreground)',
            },
            'ul > li::before': {
              backgroundColor: 'var(--muted-foreground)',
            },
            hr: {
              borderColor: 'var(--border)',
            },
            blockquote: {
              color: 'var(--foreground)',
              borderLeftColor: 'var(--border)',
            },
            h1: {
              color: 'var(--foreground)',
            },
            h2: {
              color: 'var(--foreground)',
            },
            h3: {
              color: 'var(--foreground)',
            },
            h4: {
              color: 'var(--foreground)',
            },
            'figure figcaption': {
              color: 'var(--muted-foreground)',
            },
            code: {
              color: 'var(--foreground)',
            },
            'a code': {
              color: 'var(--foreground)',
            },
            pre: {
              color: 'var(--foreground)',
              backgroundColor: 'var(--muted)',
            },
            thead: {
              color: 'var(--foreground)',
              borderBottomColor: 'var(--border)',
            },
            'tbody tr': {
              borderBottomColor: 'var(--border)',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} 