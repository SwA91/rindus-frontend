module.exports = {
  prefix: '',
  mode: 'jit',
  important: false,
  content: ['./src/**/*.{html,ts}'],
  theme: {
    screens: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [
    'prettier-plugin-tailwindcss'
  ],
};
