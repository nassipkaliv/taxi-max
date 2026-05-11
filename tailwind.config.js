/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sun: {
          50: '#fffdf2',
          100: '#fff8d6',
          200: '#ffeea3',
          300: '#ffdc60',
          400: '#fbc124',
          500: '#f5a300',
          600: '#d77f00',
          700: '#a85d04',
          800: '#84490c',
          900: '#6c3c0f',
        },
        ink: {
          50: '#f7f8fa',
          100: '#eef0f4',
          200: '#dde1e8',
          900: '#0f1115',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Manrope', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'sun-radial':
          'radial-gradient(60% 60% at 80% 10%, rgba(251,193,36,0.22), transparent 60%), radial-gradient(50% 50% at 10% 100%, rgba(245,163,0,0.10), transparent 60%)',
        'sun-glow':
          'radial-gradient(40% 60% at 50% 0%, rgba(251,193,36,0.20), transparent 60%)',
      },
      boxShadow: {
        sun: '0 12px 40px -10px rgba(245,163,0,0.45)',
        soft: '0 12px 40px -16px rgba(15,17,21,0.20)',
        ring: '0 0 0 4px rgba(251,193,36,0.20)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'fade-in': 'fadeIn 0.6s ease-out both',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
