/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: '1rem',
        md: '0.75rem',
        sm: '0.5rem',
        xl: '1.25rem',
      },
      boxShadow: {
        md: '0 6px 12px rgba(0, 0, 0, 0.1)',
        xl: '0 10px 25px rgba(0, 0, 0, 0.15)',
      },
      colors: {
        primary: '#6200ea',      // Deep Purple
        primaryDark: '#3700b3',
        secondary: '#03dac6',    // Teal
        secondaryDark: '#018786',

        accent: '#ff6d00',       // Orange accent
        success: '#00c853',
        warning: '#ffab00',
        error: '#b00020',

        background: '#fafafa',
        surface: '#ffffff',
        surfaceDark: '#1e1e1e',

        foreground: '#1f1f1f',
        muted: {
          DEFAULT: '#6b7280', // gray-500
          foreground: '#9ca3af', // gray-400
        },

        border: '#e0e0e0',
        input: '#d1d5db',
        ring: '#bb86fc',

        card: {
          DEFAULT: '#ffffff',
          foreground: '#1f1f1f',
        },
        popover: {
          DEFAULT: '#f9fafb',
          foreground: '#111827',
        },

        chart: {
          '1': '#6200ea',
          '2': '#03dac6',
          '3': '#ff6d00',
          '4': '#00c853',
          '5': '#ff1744'
        }
      },
      animation: {
        fade: 'fadeIn 0.5s ease-in-out',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};
