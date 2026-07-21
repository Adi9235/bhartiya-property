import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', lg: '2rem' },
      screens: { '2xl': '1280px' },
    },
    extend: {
      colors: {
        /* Brand tokens derived from the existing Bhartiya Properties identity */
        sindoor: {
          50: '#FFF3F1',
          100: '#FFE2DE',
          200: '#FFC6BE',
          300: '#FF9A8D',
          400: '#F4614F',
          500: '#D8291B',
          600: '#B81C10',
          700: '#95160C',
          800: '#71110A',
          900: '#4E0C07',
        },
        indigo_ink: {
          50: '#F2F4FB',
          100: '#E2E7F6',
          200: '#C3CDEC',
          300: '#93A5DC',
          400: '#5D75C4',
          500: '#3B51A5',
          600: '#2A3C83',
          700: '#1C2A6B',
          800: '#141E4E',
          900: '#0D1433',
        },
        ivory: '#FAF7F2',
        sand: '#EDE5D8',
        brass: '#B08240',
        ink: '#0E1120',
        muted: '#6B6F80',

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        deva: ['var(--font-deva)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 6vw, 5.25rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.25rem, 4.5vw, 3.75rem)', { lineHeight: '1', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        eyebrow: ['0.6875rem', { lineHeight: '1', letterSpacing: '0.22em' }],
      },
      borderRadius: {
        lg: '1.25rem',
        md: '1rem',
        sm: '0.75rem',
        xl: '1.75rem',
        '2xl': '2.25rem',
        '3xl': '3rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(14,17,32,0.04), 0 8px 24px -12px rgba(14,17,32,0.12)',
        lift: '0 24px 60px -28px rgba(28,42,107,0.35)',
        glass: 'inset 0 1px 0 rgba(255,255,255,0.6), 0 20px 50px -30px rgba(14,17,32,0.45)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #1C2A6B 0%, #2A3C83 45%, #D8291B 140%)',
        'ivory-fade': 'linear-gradient(180deg, #FAF7F2 0%, #FFFFFF 100%)',
        grain:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.25s ease-out',
        'accordion-up': 'accordion-up 0.25s ease-out',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 38s linear infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
