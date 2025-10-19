
module.exports = {
  theme: {
    extend: {
      colors: {
        'study-bg': 'var(--color-background-primary)',
        'study-card': 'var(--color-background-secondary)',
        'study-text': 'var(--color-text-primary)',
        'study-accent-cta': 'var(--color-accent-cta)',
        'study-accent-secondary': 'var(--color-accent-secondary)',
        'study-border': 'var(--color-border)',
      },
      keyframes: {
        'fade-slide-up': {
          '0%': { opacity: '0', transform: 'translateY(1rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-slide-up': 'fade-slide-up 0.8s ease-out forwards',
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
